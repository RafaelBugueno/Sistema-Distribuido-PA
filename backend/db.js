const { Pool } = require("pg");

//pedir los datos al maxi
const pool = new Pool({
  user: "tu_usuario",
  host: "26.168.196.165", //ip de maxi
  database: "tu_base",
  password: "tu_password",
  port: 5432,
});

module.exports = pool;