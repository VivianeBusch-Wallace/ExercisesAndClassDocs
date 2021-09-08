const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  //_id: false, //this will ignore ID
  name: { type: String },
  city: String,
});

module.exports = mongoose.model("userDataCollection", userDataSchema);
// new collection: userDataSchema