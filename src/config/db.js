const { Pool } = require("pg");

module.exports = new Pool({
  database: "foodfy",
  user: "postgres",
  password: "lgr140795",
  host: "localhost",
  port: 5432,
});
