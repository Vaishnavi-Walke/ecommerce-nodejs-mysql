const mysql = require("mysql2");
const util = require("util");

// Create connection
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

// Promisify queries
const exe = util.promisify(conn.query).bind(conn);

module.exports = { conn, exe };

