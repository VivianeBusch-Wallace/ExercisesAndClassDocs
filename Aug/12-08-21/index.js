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

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);
// lowdb is a Tiny local JSON database for small projects
// make sure to use the latest stable version of it, here it is 1.0.0

// json setup old school
// const bodyParser = require("body-parser"); // for the old way
// app.use(bodyParser.urlencoded({ extended: true })); // bodyParser is deprecated
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// new json method, use this instead
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb app");
});

// db init
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write(); // going to this route will create the object inside db.json
  // << defaults will establish a new object in our db
  res.send("New db being init");
});

// add to db
app.get("/add", (req, res) => {
  const id = req.query.id; //type value in postman
  const title = req.query.title; //type value in postman then click send to see the response and see update in db.json
  db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered id:${id}, title:${title}`);
});

// find in db
app.get("/find", async (req, res) => {
  const idToFind = req.query.id; // getting the search term from the query
  const result = await db.get("articles").find({ id: idToFind }).value(); // if the searchterm matches what we find in the db then send the value of that key
  let text = "";
  if (result) {
    text = JSON.stringify(result);
    res.status(200).send(`This is what we found: ${text}`);
  } else {
    res.status(401).send("Sorry, we couldn't find what you are looking for.");
    // text = "Sorry, nothing found.";
  }
  //   res.send(text);
});

// update the number in db = almost like counting how many visitors you have on route update
app.get("/count-visitation", async (req, res) => {
  await db.update("num", (n) => n + 1).write();
  let count = db.get("num").value();
  console.log(count);
  res.send(`Thanks for stopping by the current visitation count is: ${count}`);
});

// update user name in db

// db.set will set a new value

// delete

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
