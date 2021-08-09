const express = require("express"); // old way of importing because express requires a package to understand the normal import
const config = require("config");
const server = express(); // don't forget the () to invoke express, this line creates an instance of server with express (?)

const PORT = config.get("port") || 8000; // config port is 8000

server.listen(PORT, () => console.log("server is listening to port 8000 now"));

server.get("/", (req, res) => {
  res.send("This is a response from the server");
});

server.get("/about", (req, res) => {
  res.write("This is the About page");
});

server.get("/user/:id", (req, res) => {
  res.send(`This is user ${req.params.id}`);
  //   res.send(req.params.id); // the second res.send is not accepted because: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
});
// server.listen(8000) ? console.log(true) : console.log(false);

// let http = require("http");
// http.createServer((req, res) => {
//   res.send("This is a response from the server");
// });

// code snippet from Sven (adapted):
const data = require("./data.json");
server.get("/smiley/:id", function (req, res) {
  if (req.params.id > data.length - 1)
    return res.send(`Please take a number between 0 and ${data.length - 1}`);
  else
    res.send(
      `${data[req.params.id].name} lives in ${
        data[req.params.id].location
      } with smiley${data[req.params.id].smiley}`
    );
});

// code from Aghy:

// const express = require("express"); // importing using old js syntax
// const ourServer = express(); // creating an instance of express by invoking it

// ourServer.listen(5000, () =>
//   console.log("server up and running listening on port 5000")
// );

// ourServer.get("/", (request, response) =>
//   response.send("hello world!!!")); // route using an arrow function

// // buidling the 'user' route and through :userid
// ourServer.get("/user/:userid", function (req, res) {
//   // we can access the userid variable through the req.params.userid
//   const usersArr = ["sven", "alina", "viviane", "igal", "iulian"];

//   if (req.params.userid < usersArr.length) {
//     res.send("logged in user : " + usersArr[req.params.userid]);
//   } else {
//     res.send(`please enter a number that is smaller than ${usersArr.length}`);
//   }
// });

// goal/task: create a small server

// Notes:
// dev dependencies instead of dependencies in package.json
// npm install -D nodemon
// -D flag will install it as a dev dependency because sometimes we don't want something in the deployed version
