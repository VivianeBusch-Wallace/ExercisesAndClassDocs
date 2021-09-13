const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  // we do not add "new" in front of Schema here because we will add it later in the controller
  _id: Schema.Types.ObjectId,
  authorName: String,
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }], // this is for population
});

const bookSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  bookTitle: String,
  books: [{ type: Schema.Types.ObjectId, ref: "Author" }],
});

const AuthorModel = mongoose.model("Author", authorSchema);
const BookModel = mongoose.model("Book", bookSchema);

module.exports = { AuthorModel, BookModel };

// Check:
// If type ObjectId is necessary
// change name of model, see if ref is same as modelname
// try something else than type ObjectId
// what is the model argument called before it becomes a model? or is that how we name it?
