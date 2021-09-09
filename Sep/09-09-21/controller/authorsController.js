// capitalize models!
const AuthorModel = require("../model/authorModel");

const authorsController = {};

// GET all
authorsController.getAll = async (req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.status(200).json(authors);
  } catch (err) {
    // res.status(500).json({
    res.status(err.status).json({
      message: err.message,
    });
  }
};

// POST one
authorsController.addNewAuthor = async (req, res) => {
  //console.log(req.body);

  const author = new AuthorModel({
    authorName: req.body.author,
  });
  req.body.books.map((book) => {
    author.publishedBooks.push({
      title: book.title,
      publishingYear: book.publishingYear,
    });
  });
  try {
    await author.save();
    res.status(201).json({
      message: "This author has been added: ",
      author,
    });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// GET one by id
authorsController.getOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findById(req.params.id);
    //   const author = await AuthorModel.findOne({_id:req.params.id})
    res.status(200).json(author);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// DELETE one by id
authorsController.deleteOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findByIdAndDelete(req.params.id);
    //  const author = await AuthorModel.findOneAndDelete({_id:req.params.id})
    res.status(200).json({ message: "This author has been deleted", author });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
module.exports = authorsController;
