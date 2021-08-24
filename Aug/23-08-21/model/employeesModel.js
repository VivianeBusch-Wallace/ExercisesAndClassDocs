/*
Steps for this file (also check all full steps in server.js) >>

require mongoose
create new mongoose schema
with all the specifications of each string, number, date etc.
all the "required"
don't forget to trim strings

create a new collection in the db using the model method
remember: if you want to add to an already existing collection then add it into the model method >>
module.exports = mongoose.model(<the current collection to work on>, <which schema to use>, <the old data from old collection to load>)

go back to router file (employees.js)

*/



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

// CREATING A NEW COLLECTION
// for new fresh db that has just been created >>
module.exports = mongoose.model("EmployeesData", employeesDataSchema)
// if we want to work on old collection that we already have >>
// module.exports = mongoose.model("EmployeesData", employeesDataSchema, "EmployeesData")
// module.exports = mongoose.model(<the current collection to work on>, <which schema to use>, <the old data from old collection to load>)

//Notes:
/* 
all these methods come from mongoose
type:Number will the input require to be a number

*/
