// npm init -y
// echo "PORT=5000" > .env
// echo "node_modules/" > .gitignore
// npm i express dontenv
// npm i nodemon --save-dev
// json script
// "start": "nodemon index.js"

// also start your Postman app or extension

// import: dotenv, express >>
require("dotenv").config(); // config() injects the data from our .env into the process.env object
// express
const express = require("express");
const app = express(); // express has to be initialized

app.use(express.json()); // all uses have to be in the top, without this, console.log(req.body) would be undefined

// middleware for all requests >>
app.use(logger); // with this every request no matter which route will be followed by the middleware function logger

// root route: // http://localhost:5000/ >>
app.get("/", (req, res) => {
  // console.log(req); //to see this in the console we have to send a get request with http://localhost:5000/ first
  res.send(
    "<h2>Welcome to our Root Route</h2><br><p>Don't forget to terminate the client-server connection with a send().</p>"
  );
});

// http://localhost:5000/about
app.get("/about", (req, res) => {
  console.log(req); //to see this in the console we have to send a get request with http://localhost:5000/about first
  res.send("<h2>Welcome to our the About page</h2>");
});

// http://localhost:5000/user
app.get("/user", userLogged, (req, res) => {
  //   console.log(req.query); // commented out because of middleware
  // const username = req.query.name; // this is part of our params, it's an object, commented out because of middleware
  const username = req.name;
  console.log(`User: ${username}`);

  res.send(`<h2>Welcome ${username}</h2>`);
});

// middleware
function userLogged(req, res, next) {
  if (req.query.name == "Shakira") {
    console.log("Log 2");
    // req.name = "Shakira"; // later on this data will come from params or our database
    // << if you want to keep the data from the middleware for the next step, then you need to pass the data on like this
    // because otherwise you are going to lose this data (according to Hadi)
    next();
  } else {
    res.send(`Middleware response because userName does not match.`);
  }
}

// POST method  http://localhost:5000/login
app.post("/login", (req, res) => {
  console.log(req.body); // the body contains json data in Postman >>
  /* body: {
	"userName":"Judith",
	"password":"MillerKiller"
} */
  const userName = req.body.username;
  const pass = req.body.password;
  // checking if username and password are the ones we want >>
  if (userName === "Judith" && pass === "password") {
    res.status(200).send(`Welcome ${userName}, you successfully logged in.`); // status 200 = Ok, everything is good
  } else {
    res.status(401).send(`Login not successful. Username or password invalid.`); // status 401 = unauthorized
  }
  // res.send("This is a POST request response.");
});

// sending a whole json file as a response >>
app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Berlin", country: "DE" }); // this is how we send our response to the frontend, a json file
});

// middleware
// middleware happens after your request and before your response
// middlesware can be used to do great stuff, normally to check security, if the user is logged in
// another type of middleware can be run through the request
// middleware uses next(), which is a must
function logger(req, res, next) {
  console.log("Log 1");
  next();
}
// middleware will run after every route but only for the matching route
// middleware can for example check if the user is the right user
// the next() method will allow the next thing to run, most of the time that is a response
// if there is no next() in the end of the middleware function then it will leave the connection between client and server open, don't do that
// next() is always at the end of the function (just like return, but it is not return)
// middleware can be used on several routes
// you can run a specific middleware for a route, it will be executed after the middleware for all routes
// normally we try to only have one or max two middleware functions because we don't want to delay the response from the server too much.
// you can also terminate the connection between server and client by using res.status or res.end

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is listening on PORT: ${PORT}. URL:http://localhost:${PORT}`
  );
});
// << PORT is always at the end of the file because we want to run of build the server after it is finished.

// dotenv is a library
// config() puts dotenv into process.env
// express() is necessary because this library needs expressed execution, it initializes express
// when you send a response then it terminates the connetion to the server
// you want to do that with any type of request
// you can use async await in the middleware function but it's mostly not necessary

// What Hadi promised to talk about later >>
// what is postman token?
// putting front and backend together
// nested routes next week
// how to handle a post request with the same route as another request, several different methods at the same time

// Notes >>
// if you have no app.get() and only app.post() and then check postman only GET then it will say that is has nothing
// app.use(express.json()) will give you an empty object instead of undefined
// in postman adapt body to the requirements you have: raw, JSON
/* localhost: “The localhost is the default name describing the local computer address also known as the loopback address.
For example, typing: ping localhost would ping the local IP address of 127.0.0.1 (the loopback address).
When setting up a web server or software on a web server, 127.0.0.1 is used to point the software to the local machine.” 
In computer networking talk, localhost refers to “this computer” or even more accurately “the computer I’m working on.”
IT types, network administrators and programmers, will even use the term “home” (home computer).

source: https://whatismyipaddress.com/localhost */

// Other Notes:
// source: https://www.w3schools.com/tags/ref_httpmethods.asp
// The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

// HTTP works as a request-response protocol between a client and server.

// Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

// HTTP Methods
// GET
// POST
// PUT
// HEAD
// DELETE
// PATCH
// OPTIONS
// The two most common HTTP methods are: GET and POST.
// The GET Method
// GET is used to request data from a specified resource.

// GET is one of the most common HTTP methods.

// Note that the query string (name/value pairs) is sent in the URL of a GET request:

// /test/demo_form.php?name1=value1&name2=value2
// Some other notes on GET requests:

// GET requests can be cached
// GET requests remain in the browser history
// GET requests can be bookmarked
// GET requests should never be used when dealing with sensitive data
// GET requests have length restrictions
// GET requests are only used to request data (not modify)
// The POST Method
// POST is used to send data to a server to create/update a resource.

// The data sent to the server with POST is stored in the request body of the HTTP request:

// POST /test/demo_form.php HTTP/1.1
// Host: w3schools.com
// name1=value1&name2=value2
// POST is one of the most common HTTP methods.

// Some other notes on POST requests:

// POST requests are never cached
// POST requests do not remain in the browser history
// POST requests cannot be bookmarked
// POST requests have no restrictions on data length

// More important diferrences between POST and GET
// POST is more secure and you can send more data than with GET

// Configuration Definition

// The definition of configuration is the way parts are arranged to work together.

// Node Config
// Source: https://www.npmjs.com/package/config

// Node-config organizes hierarchical configurations for your app deployments.
// It lets you define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.).
// Configurations are stored in configuration files within your application, and can be overridden and extended by environment variables, command line parameters, or external sources.
// This gives your application a consistent configuration interface shared among a growing list of npm modules also using node-config.
// dotenv
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

// Config
// config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
// const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }
// console.log(result.parsed);
// You can additionally, pass options to config.

// Source: https://www.npmjs.com/package/dotenv
