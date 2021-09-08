const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const mongoose = require("mongoose");
const UserModel = require("./model/userModel"); // Models are always capitalized

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

// Middleware get user by ID >>
// await
// findOne({_id:req.params.id})
// findById(req.params.id)
// No user (404)
// next()
const getUserByID = async (req, res, next) => {
  //const userByID = await UserModel.findOne({_id:req.params.id})
  const userByID = await UserModel.findById({ _id: req.params.id });
  try {
    if (!userByID) {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  res.user = userByID;
  next();
};

// get all >>
app.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// add a new user >>
app.post("/", async (req, res) => {
  try {
    const newUser = new UserModel({
      name: req.body.name,
      city: req.body.city,
    });
    const user = await newUser.save();
    res.status(201).json({ message: "New user been added", user });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// get one user >>
app.get("/:id", getUserByID, async (req, res) => {
  try {
    res.status(200).json(res.user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// update user patch >>
app.patch("/:id", getUserByID, async (req, res) => {
  try {
    //                                        id, the updates , options, callback
    const userByID = await UserModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name || res.user.name,
      city: req.body.city || res.user.city,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// delete user >>
app.delete("/:id", getUserByID, async (req, res) => {
  try {
    const deletedUserById = await UserModel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "This user been deleted", deletedUserById });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

module.exports = app;
