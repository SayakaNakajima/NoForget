const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const recipes = JSON.parse(fs.readFileSync("./data/recipes.json"));

    let [recipeCount] = await db("recipes").count("*");
    let [ingridientCount] = await db("ingridients").count("*");
    let [procedureCount] = await db("procedures").count("*");
    let [recipe_ingridientCount] = await db("recipe_ingridient").count("*");

    await db("recipes").del;
    recipes.forEach(async (item) => {
      let oneRecipe ={
        r_id : item.Id,
        r_title : item.Title,
        r_img : item.Img,
        r_time : item.Time,
        r_introduction : item.Introduction
      }
      await db("recipes").insert(oneRecipe);
    });
    
    //// Insert Procedures Data
    await db("procedures").del();

    //// Make Procedures Data
    const procedures = [];
    for (const recipe of recipes) {
      const p_recipe_id = recipe.Id;
      recipe.Procedures.forEach((item) => {
        let procedure ={
          p_recipe_id,
          p_order_num : item.OrderNum,
          p_text : item.Text,
        };
        procedures.push(procedure);
      });
    }

    //// Create Data in Database 
    procedures.forEach(async (item) => {
      await db("procedures").insert({
        p_recipe_id: item.p_recipe_id,
        p_order_num: item.p_order_num,
        p_text: item.p_text,
      });
    });

    
    //// Insert Ingridients Data
    //// Delete Datas
    await db("ingridients").del();

    //// Make Ingridients Data
    const ingridients = [];
    for (const recipe of recipes) {
      recipe.Ingridients.forEach((item) => {
        let ingridient = {
          i_id: item.Id,
          i_name: item.Name,
          i_category: item.Category,
        };
        const found = ingridients.some((obj) => obj.i_id === ingridient.i_id);
        if (!found) {
          ingridients.push(ingridient);
        }
      });
    }

    //// Create Data in Database 
    ingridients.forEach(async (item) => {
      await db("ingridients").insert({
        i_id: item.i_id,
        i_name: item.i_name,
        i_category: item.i_category,
      });
    });

    ////Insert recipe_ingridient join table info
    await db("recipe_ingridient").del();      

    const ingridientInfos = [];
    for (const recipe of recipes) {
      const recipe_id = recipe.Id;
      recipe.Ingridients.forEach((ingridient) => {
        let ingridientInfo = {
          recipe_id,
          ingridient_id : ingridient.Id,
          amount : ingridient.Amount,
        }
        ingridientInfos.push(ingridientInfo);
      });
    }

    ingridientInfos.forEach(async (item) => {
      await db("recipe_ingridient").insert({
        recipe_id: item.recipe_id,
        ingridient_id: item.ingridient_id,
        amount: item.amount,
      });
    });

    console.log("Finished!");

  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
