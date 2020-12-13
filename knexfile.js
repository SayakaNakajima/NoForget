// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      URL: process.env.DB_URL || "",
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_NAME || "noforget",
      user: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || ""
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      URL: process.env.DB_URL || "",
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_NAME || "noforget",
      user: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || ""
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      URL: process.env.DB_URL || "",
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_NAME || "noforget",
      user: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || ""
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
