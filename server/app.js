// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// create recipes!
app.get("/api/recipes", async (req, res) => {
  try{
    const recipes = await JSON.parse(fs.readFileSync("./data/recipes.json"));

    if (req.query.id) {
      const queryId = Number(req.query.id);
      let recipe;
      recipes.forEach(element => {
        console.log(element);
        if(element.recipes.r_id === queryId) {
          recipe = element;
        }
      });
      recipes = recipe;
    }

    res.status(200).json(recipes);
  } catch (err) {
  console.error("Error loading recipes!", err);
  res.sendStatus(500);
  };
});

// Create Shopping list
app.get("/api/lists", async (req, res) => {
  try{
    let lists = await JSON.parse(fs.readFileSync("./data/lists.json"));

    if (req.query.id) {
      const queryArray = req.query.id.split("_");
      const results = [];
      queryArray.forEach(num => {
        lists.forEach(element => {
          if(element.recipe_id === Number(num)) {
            results.push(element);
          }
        });  
      });
      lists = results;
    }

    console.log(lists);
    res.json(lists);

  } catch (err) {
  console.error("Error loading lists!", err);
  res.sendStatus(500);
  };
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
