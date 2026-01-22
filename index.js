const express = require("express");
const bodyparser = require("body-parser");
const user_route = require('./Router/user');
const admin_route = require("./Router/admin");
const upload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();

// 1️ App declare first
const app = express();

// 2️ Middleware
app.use(express.static("public/"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(upload());
app.use(cookieParser());

// 3️ Session setup
app.use(session({
    secret: "adminSecret",   // change as you like
    resave: false,
    saveUninitialized: true
}));

// 4️ Routes
app.use("/", user_route);
app.use("/admin", admin_route);

// 5️ Server start
const PORT = process.env.PORT || 1000;
app.listen(PORT, function() {
    console.log("Server running at http://localhost:" + PORT);
});
