// http:localhost:5000/employees
// express setup
// Express setup
const express = require("express");
const router = express.Router();
// Model
const EmployeesData = require("../model/employeesModel");

//postman query: http://localhost:5000/employees
// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add employees
//url  http://localhost:5000/employees
/*
Postman: go to body, raw, JSON and add employee data:
{
    "name" : "Hadi",
    "age":31,
    "add":"Berlin"
}
*/
router.post("/", async (req, res) => {
  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware
async function getEmployee(req, res, next) {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });

    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(employee);
  res.employee = employee;
  next();
}

// Get one employee >>
// postman query: http://localhost:5000/employees/Vivi with name of employee after employees/
router.get("/:name", getEmployee, (req, res) => {
  res.status(200).json(res.employee);
});

// Delete an employee >>
router.delete("/:name", getEmployee, async (req, res) => {
  try {
    await res.employee.remove();
    res.status(200).json({ message: "Employee deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Patch an employee >>
router.patch("/:name", getEmployee, async (req, res) => {
  console.log(req.body);
  console.log(res.employee.name);
  res.json(res.employee.name);
  if (req.body.name) {
    res.employee.name = req.body.name;
  } else if (req.body.age) {
    res.employee.age = req.body.age;
  } else if (req.body.add) {
    res.employee.add = req.body.add;
  }
  try {
    await res.employee.save();
    res
      .status(200)
      .json({
        message: "Employee data updated successfully.",
        data: res.employee,
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

// Notes
/* you don't need mongoDB to stay open to use the database */
