
exports.up = function(knex) {
    return knex.schema
        .createTable("recipes",  (t) => {
            t.increments("r_id").index();
            t.string("r_title").notNullable();
            t.string("r_img");
            t.string("r_time");
        })
        .createTable("ingridients", (t) => {
            t.increments("i_id").index();
            t.string("i_name").notNullable();
            t.string("i_category");
        })
        .createTable("recipe_ingridient", (t) =>{
            t
                .integer("recipe_id")
                .references("r_id")
                .inTable("recipes")
                .notNull()
                .onDelete("cascade");
            t
                .integer("ingridient_id")
                .references("i_id")
                .inTable("ingridients")
                .notNull()
                .onDelete("cascade");
            t.string("amount").notNullable();
        })
        .createTable("procedures", (t) => {
            t.increments("p_id").index();
            t
                .integer("p_recipe_id")
                .references("r_id")
                .inTable("recipes")
                .notNull()
                .onDelete("cascade");
            t.string("p_order_num");
            t.text("p_text");
        })
        
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("procedures")
        .dropTable("recipe_ingridient")
        .dropTable("ingridients")
        .dropTable("recipes");
};
