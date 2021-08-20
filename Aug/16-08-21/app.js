// IMPORTS >>
const express = require("express"); // import express
const app = express(); // initialize express
const morgan = require("morgan"); // import morgan for handling reqs and errors (simplifier)
// morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process.
// In Node.js and Express, middleware is a function that has access to the request and response lifecycle methods,
// and the next() method to continue logic in your Express server. source: https://www.digitalocean.com/community/tutorials/nodejs-getting-started-morgan
// morgan documentation: http://expressjs.com/en/resources/middleware/morgan.html OR https://www.npmjs.com/package/morgan
/* Logging is an important element of writing software as it helps us to see the software operations, debug and catch errors.
morgan is a logging tool (middleware) that can be used in HTTP servers implemented using Express & Node.js.
It can be used to log requests, errors, and more to the console. */
const errorCreator = require("http-errors");

// Importing Routers >>
const userRouter = require("./router/users");
const bookRouter = require("./router/books");

// Uses >>
app.use(morgan("dev")); // use morgan, check morgan responses in the console

// MIDDLEWARE >>
// specific route's middlewares are in their folder
// if you want specific middleware here then make sure it is located above the use routes
app.use("/admin", (req, res, next) => {
  if (!req.query.userName)
    return next(createError(401, "Please login to see this page.")); // if the user is not logged in, then they cannot see the page and will get an error message
  next();
});
// Uses - Assigning Routes >>
app.use("/users", userRouter);
app.use("/books", bookRouter);

// any error might happen
// app.use((req, res, next) => {
//   const error = new Error("Noooooo this is not cool");
//   error.status = 404;
//   next(error);
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// ROOT ROUTE (main route)
app
  .get("/", (req, res) => {
    console.log("get req");
    res.status(200).json({ text: "This is a GET req." });
  })
  .post("/", (req, res) => {
    console.log("post req");
    res.status(200).json({ text: "This is a POST req" });
  })
  .put("/", (req, res) => {
    console.log("put req");
    res.status(200).json({ text: "This is a PUT req" });
  })
  .delete("/", (req, res) => {
    console.log("delete req");
    res.status(200).json({ text: "This is a DELETE req" });
  });

app.post("/bill", (req, res, next) => {
  // if
  next(
    errorCreator(402, `You don't have enough 💶`, {
      detail: {
        yourBalance: 400,
        itemCost: 6000,
      },
    })
  ); // PaymentRequiredError: The HTTP 402 Payment Required is a nonstandard client error status response code that is reserved for future use. Sometimes, this code indicates that the request can not be processed until the client makes a payment.
  res.send("this is bill page");
});

module.exports = app;

// Notes:
/* we will create our own apis
we don't hide our PORT for security reasons, it just is in the config file and we want to hide other things there
If we want to create a secure connection with https then do we write:
const server = https.createServer(app);  ? and what if we want both to work? or maybe if someone types http... we automatically turn it into https, how does that work?
>> No http is for our build, if you want to add security level on your app you can use the domain (the one that host your app) to secure your app
Never forget to export app or the other routers
*/
