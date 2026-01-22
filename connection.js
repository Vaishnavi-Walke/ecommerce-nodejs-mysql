const mysql = require('mysql2');
const util = require("util");

const conn = mysql.createConnection({
    host: "bjn3gt2lzgeqazconyqa-mysql.services.clever-cloud.com",
    user: "uzhb3m9wd9gagnkc",
    password: "7mXs2rAIkvyoGJvtNqki",
    database: "bjn3gt2lzgeqazconyqa"
});


const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;

