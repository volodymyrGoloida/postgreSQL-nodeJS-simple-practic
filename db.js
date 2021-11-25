const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: process.env.password,
  host: "localhost",
  port: process.env.port,
  database: process.env.name
});
module.exports = pool;
