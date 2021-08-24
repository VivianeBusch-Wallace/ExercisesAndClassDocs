/* 
ALL THE STEPS >>
To start new express project
 npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 add .env to gitignore
 npm i express 
 npm i dotenv
 npm i morgan
 npm i mongoose
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir router model
 touch router/employees.js
 touch model/employeesModel.js
 json script
 "start": "nodemon server.js"

server.js >>
require dotenv with config
require http and the main file (app.js)
set PORT failsafe
establish connection to server in server.js/run the server (<< server.listen part)

app.js >>



 */

// use employees
// MongoDB with Express

// Your DB is able to CRUD aka Create Retrieve Update Delete

// Your server is able to REST API (REpresentational State Transfer) aka server can do (create, delete, update, read)requests
// sometimes you see RESTFul API well thats exactly the same but also able to handle ????

require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});


// config() is not the same as config file