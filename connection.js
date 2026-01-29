// const mysql = require('mysql2');
// const util = require("util");

// const conn = mysql.createConnection({
//     host:"bjn3gt2lzgeqazconyqa-mysql.services.clever-cloud.com",
//     user:"uzhb3m9wd9gagnkc",
//     password:"7mXs2rAIkvyoGJvtNqki",
//     database:"bjn3gt2lzgeqazconyqa",
//     port:3306
// })

// const exe = util.promisify(conn.query).bind(conn);

// module.exports = exe;



const mysql = require('mysql2');
const util = require("util");

const conn = mysql.createConnection({
    host: "bjn3gt2lzgeqazconyqa-mysql.services.clever-cloud.com",
    user: "uzhb3m9wd9gagnkc",
    password: "7mXs2rAIkvyoGJvtNqki",
    database: "bjn3gt2lzgeqazconyqa",
    port: 3306,
    ssl: { rejectUnauthorized: false } // ⭐ required for Clever Cloud
});

// try connecting when app starts
conn.connect((err) => {
    if (err) {
        console.error("❌ DB Connection Failed:", err.message);
    } else {
        console.log("✅ MySQL Connected");
    }
});

// prevent app crash on runtime DB errors
conn.on("error", (err) => {
    console.error("💥 MySQL Error:", err.message);
});

const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
