require("dotenv").config(); //config() will allow to run dotenv as a configuration
// console.log(process.env.PORT);
const http = require("http");

const PORT = process.env.PORT || 5000; //just in case PORT did not work from env

const firstRes = function (req, res) {
  res.writeHead(200); // 200 is a code
  res.end("Hey, I am the server."); // we always need to end the connection to the server
};

const server = http.createServer(firstRes); //creates the server (this method is for when we don't use express)
// The http.createServer() method turns your computer into an HTTP server.
// The http.createServer() method creates an HTTP Server object.
// The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.
// http.createServer(requestListener);
// requestListener: Optional. Specifies a function to be executed every time the server gets a request.
// This function is called a requestListener, and handles request from the user, as well as response back to the user.
// source: https://www.w3schools.com/nodejs/met_http_createserver.asp
server.listen(PORT, () => console.log(`Server is listening on port = ${PORT}`));
// dotenv will sleep if it is not active?
// dotenv env = environment
// port 3000 for frontend
// port 5000 for backend
// that are the normal ports

console.log("hello");
