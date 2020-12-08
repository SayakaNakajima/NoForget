// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const cors = require("cors");
const Knex = require("knex");

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
    let recipes = await db.raw(`
      WITH inglists AS (
        SELECT ri.recipe_id, ri.ingridient_id, ri.amount, ing.i_name, ing.i_category
        FROM recipe_ingridient AS ri
        JOIN ingridients AS ing ON ri.ingridient_id = ing.i_id
      ), 
      allrecipes AS (
        SELECT rec.*,
        (
          SELECT json_agg(il.*)
          FROM inglists AS il
          WHERE rec.r_id = il.recipe_id
        ) AS ingridients,
        (
          SELECT json_agg(pro.*) 
          FROM procedures AS pro
          WHERE rec.r_id = pro.p_recipe_id
        ) AS procedures
        FROM recipes AS rec
      ) 
      SELECT to_json(allrecipes) AS recipes
      FROM allrecipes;`);

    recipes = recipes.rows;

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

    res.json(recipes);
  } catch (err) {
  console.error("Error loading recipes!", err);
  res.sendStatus(500);
  };
});

// Create Shopping list
app.get("/api/lists", async (req, res) => {
  try{
    const ingridients = await db.raw(`select ri.*, ing.*
      from recipe_ingridient as ri
      join (select * from ingridients) as ing
      on ri.ingridient_id = ing.i_id;`);
    let lists = ingridients.rows;

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
