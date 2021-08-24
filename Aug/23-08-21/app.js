/* Steps
require express
initialize express

require morgan
use morgan

use express.json()

*/


const express = require("express");
const app = express();
const morgan = require("morgan");

//  Development mode info
app.use(morgan("dev"));

// to process the json data
app.use(express.json());
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
// This method is called as a middleware in your application using the code: app.use(express.json());
// one of the most important commands, we will always need express.json()

// mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => console.log(`There was a problem ${err.message}`));

// Note that if you specify useNewUrlParser: true , you must specify a port in your connection string,
// like mongodb://localhost:27017/dbname . The new url parser does not support connection strings that do not have a port,
// The new url parser does not support connection strings that do not have a port, like mongodb://localhost/dbname.
// source: https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1

const employees = require("./router/employees");
app.use("/employees", employees);

module.exports = app;

// NOTES
/* 
don't put any spaces or empty lines into .env


Questions:
Why do we not import express into server.js
Why 
*/
