const express = require("express");
const router = express.Router();

// this is root route for users, that means users/ is the root route here >>
// localhost:5000/users/ (GET PUT POST,...)
router.get("/", (req, res) => {
  res.send("Hey this is user page");
});
// url localhost:5000/users/about
router.get("/about", (req, res) => {
  res.send("This is about");
});
module.exports = router;
