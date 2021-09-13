const { AuthorModel, BookModel } = require("../models/schemas");

const mongoose = require("mongoose");

const controllersAndMiddlewares = {};

// Check author
// GET http://localhost:5000/:id
controllersAndMiddlewares.checkAuthor = async (req, res, next) => {
  //  const author = await Author.findOne({_id:req.params.id})
  const author = await AuthorModel.findById(req.params.id);
  try {
    if (!author) {
      return res.status(404).json({ message: "Author NOT Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  req.author = author;
  next();
};

// GET all authors
// GET http://localhost:5000/
controllersAndMiddlewares.getAllAuthors = async (req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// GET all books
// GET http://localhost:5000/book
controllersAndMiddlewares.getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// POST new author
// POST http://localhost:5000/
/* body > raw > json
  {
      "name":"Hadi"
  }
  */
controllersAndMiddlewares.addAuthor = async (req, res) => {
  console.log(req.body);
  const author = new AuthorModel({
    _id: new mongoose.Types.ObjectId(),
    authorName: req.body.name,
  });
  try {
    await author.save();
    res.status(201).json({ message: "New author being added ✅", author });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// POST new book
// POST http://localhost:5000/book/:id
/* body > raw > json
  {
      "title":"Day"
  }
  */
controllersAndMiddlewares.addNewBook = async (req, res) => {
  AuthorModel.findById(req.params.id)
    .then((author) => {
      if (author) {
        const book = new BookModel({
          _id: new mongoose.Types.ObjectId(),
          author: req.params.id, // get the _id from that author which is in my params
          title: req.body.title,
        });
        book.save();
        author.books.push(book);
        author.save();
        res.status(201).json({ message: "New book being added ✅" }, book);
      } else {
        return res.status(404).json({ message: "Author NOT Found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// GET one author by id
// GET http://localhost:5000/:id
// Middlewares: checkAuthor
controllersAndMiddlewares.getOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findById(req.params.id).populate("books");
    // res.status(200).json(author);
    res.status(200).json({
      message: `${author.authorName} has ${author.books.length} books`,
      books: author.books.map((book) => book.title).join(", "),
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// DELETE one author by id
// DELETE http://localhost:5000/:id
// deletes whole author, but at the moment without deleting books also
controllersAndMiddlewares.deleteById = async (req, res) => {
  try {
    const author = await AuthorModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "This author has been removed", author });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = controllersAndMiddlewares;
