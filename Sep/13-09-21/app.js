const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected successfully."))
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });

const libraryController = require("./controllers/libraryController");

// GET all authors
app
  .route("/")
  .get(libraryController.getAllAuthors)
  .post(libraryController.addAuthor);

// Add new author
app
  .route("/:id")
  .get(libraryController.checkAuthor, libraryController.getOneByID)
  .delete(libraryController.checkAuthor, libraryController.deleteById);

// GET all books
// GET all books from an author using author id
app.route("/book").get(libraryController.getAllBooks);

// POST new book for an author
app.route("/book/:id").post(libraryController.addNewBook);

// DEL

// PUT later

// PATCH

module.exports = app;
