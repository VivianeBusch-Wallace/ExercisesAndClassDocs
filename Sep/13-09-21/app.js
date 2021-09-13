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
// root route: http://localhost:5000/
app
  .route("/")
  .get(libraryController.getAllAuthors)
  .post(libraryController.addAuthor);

// Add new author
// route: http://localhost:5000/:id
app
  .route("/:id")
  .get(libraryController.checkAuthor, libraryController.getOneByID)
  .delete(libraryController.checkAuthor, libraryController.deleteById);

// GET all books
// route: http://localhost:5000/book/
app.route("/book").get(libraryController.getAllBooks);
// GET all books from an author using author id

// POST new book for an author
// route: http://localhost:5000/book/:id
app.route("/book/:id").post(libraryController.addNewBook);

// DEL

// PUT later

// PATCH

module.exports = app;

// Check:
// if can add books together with author or just separate
//
