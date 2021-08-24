// CREATING A NEW SCHEMA

const mongoose = require("mongoose"); // mongoose is just mongoDB for express

const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // you always want to trim because empty spaces are useless storage
    required: true,
  },
  age: {
      type:Number,
      required:true,
  },
  add:String,
  employeeAddedDate:{
      type:Date,
      required: true,
      default:Date.now,
  }
});

//create a new collection
module.exports = mongoose.model("EmployeesData", employeesDataSchema)
// work on old collection that we already have
// module.exports = mongoose.model("EmployeesData", employeesDataSchema, "EmployeesData")
// module.exports = mongoose.model(<the current collection to work on>, <which schema to use>, <the old data to load>)

//Notes:
/* 
all these methods come from mongoose
type:Number will the input require to be a number

*/
