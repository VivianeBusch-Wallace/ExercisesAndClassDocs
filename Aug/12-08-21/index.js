/* 
To start new express project
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i lowdb
 npm i nodemon --save-dev
 touch index.js
 json script
 "start": "nodemon index.js"
 manually change lowdb into the latest stable version: 1.0.0 in package json
 npm i
 */

// express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// json setup old school
const bodyParser = require("body-parser"); // for the old way
app.use(bodyParser.urlencoded({ extended: true })); // bodyParser is deprecated
app.use(bodyParser.json());
app.use(bodyParser.raw());
// new json method, use this instead
app.use(express.json());

//root route

// db init

// add

// find

// update

// delete

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
