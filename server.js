// Dependencies
require('dotenv').config();
var express = require('express');
var mysql = require('mysql');
var exphbs = require("express-handlebars");

// PORT setup for the application
var PORT = process.env.PORT || 3306;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up MySQL
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "movie_planner_db"
      })
};