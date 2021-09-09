const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: false,
  title: String,
  publishingYear: Date,
});

const authorSchema = new mongoose.Schema({
  authorName: String,
  publishedBooks: [bookSchema],
});

module.exports = mongoose.model("authors", authorSchema, "authors");
