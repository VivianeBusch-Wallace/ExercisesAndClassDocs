const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected successfully."))
  .catch((err) => {
    console.log(`There was an error: ${err.message}`);
  });

const authorsController = require("./controller/authorsController");

// root route >>
// get all authors and add new authors >>
app
  .route("/")
  .get(authorsController.getAll)
  .post(authorsController.addNewAuthor);

// get specific author and delete a specific author >>
app
  .route("/:id")
  .get(authorsController.getOneByID)
  .delete(authorsController.deleteOneByID);

// update authors >>
app.route("/update/:id").put().patch();

module.exports = app;
