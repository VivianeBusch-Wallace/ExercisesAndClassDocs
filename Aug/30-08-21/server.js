require("dotenv").config()

const http = require("http")

const app = require("./app")

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, ()=> {
    console.log(`The server is listening on PORT: ${PORT} >> http://localhost:${PORT}`)
})



/* 
To start new express project
 npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express 
 npm i dotenv
 npm i morgan
 npm i mongoose
 npm i ejs
 npm i faker
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir model views
 touch views/home.ejs
 touch model/user.js
 json script
 "start": "nodemon server.js"
 */