const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

// connect mongoDB to our app >>
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database is connected."))
  .catch((err) =>
    console.log(`There was a problem connecting the database: ${err.message}`)
  );

// Routes

// GET all users, POST new user
// app.get("/", userControllers.getAllUsers).post("/", userControllers.addNewUser);
app
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.addNewUser);

// POST login
app.route("/login").post(userControllers.login);
module.exports = app;
