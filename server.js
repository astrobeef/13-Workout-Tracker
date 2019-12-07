const express = require("express");

const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3400;

const db = require("./models");

const app = express();

//Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);

app.set("view engine", "handlebars");

//Routes
app.use(require("./routes"));

console.log(PORT);