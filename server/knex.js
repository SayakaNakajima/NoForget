const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    URL: process.env.DB_URL || "",
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "noforget"
  },
  searchPath: "public",
});

module.exports = db;
