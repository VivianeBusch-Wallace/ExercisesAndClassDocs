// server
// https://digitalthinkerhelp.com/what-is-client-server-architecture-diagram-types-examples-components/
// http 2
// https://cascadingmedia.com/insites/2015/03/http-2.html
// The Hypertext Transfer Protocol (HTTP)
// HTTP status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
require("dotenv").config();
const express = require("express"); // importing express
const app = express(); // this just means that everything will run through express
const PORT = 5000;

// root route, the root route is the slash (not always visible in web address)
// http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hey, I am the home page.");
});
// about route: http://localhost:5000/about
app.get("/about", (req, res) => {
  res.send("Hey, I am the about page.");
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port: ${PORT}`);
});
