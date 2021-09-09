const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: false,
  title: {
    type: String,
    required: [true, "Please enter a book title by this author"],
  },
  publishingYear: {
    type: Number,
    min: [0, "Please enter a year bigger than 0"],
  },
});

const authorSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, "Please enter an author name"],
  },
  publishedBooks: [bookSchema],
});

module.exports = mongoose.model("authors", authorSchema, "authors");
