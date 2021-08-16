/* 
To start new express project
 npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i morgan
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir router
 touch router/users.js
 json script
 "start": "nodemon server.js"
 */

// Error handling in Express.js
require("dotenv").config(); // which port we are using
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000; // making sure port does not fail

const server = http.createServer(app); // creating a server
server.listen(PORT, () => {
  // << make server listen to port
  console.log(`Server is up and listening on http://localhost:${PORT} 😎`);
});
