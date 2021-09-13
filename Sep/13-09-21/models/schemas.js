const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const authorSchema = mongoose.Schema({
  // we do not add "new" in front of Schema here because we will add it later in the controller
  _id: mongoose.Schema.Types.ObjectId,
  authorName: String,
  books: [{ type: Schema.Types.ObjectId, ref: "BookCollection" }], // this is for population, referring to my collection
});

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookTitle: String,
  books: [{ type: Schema.Types.ObjectId, ref: "AuthorCollection" }],
});

// const AuthorModel = mongoose.model(
//   "AuthorCollection",
//   authorSchema,
//   "AuthorCollection"
// );
// const BookModel = mongoose.model(
//   "BookCollection",
//   bookSchema,
//   "BookCollection"
// );

const AuthorModel = mongoose.model("AuthorCollection", authorSchema);
const BookModel = mongoose.model("BookCollection", bookSchema);

module.exports = { AuthorModel, BookModel };

// Check:
// If type ObjectId is necessary
// change name of model, see if ref is same as modelname
// try something else than type ObjectId
// what is the model argument called before it becomes a model? or is that how we name it?
