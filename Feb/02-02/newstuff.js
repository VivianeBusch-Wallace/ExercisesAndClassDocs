console.log("-------------Objects--------------");

//Objects
//can hold all kinds of information
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// properties = keys : values
// properties are both the key and the value
// Object literal
const obj = {
  1: "Hadi",
  2: "Olga",
  3: "Zain",
};
const userObj = {
  name: "Nancy",
  lastName: "Sad",
  age: 33,
  add: "Xyz Street",
  activities: ["draw", "sleep", "eat"],
  german: true,
};
//you can have multiple properties, you can't have undefined keys
//keys cannot be the same name
//obj key name should be unique
console.log(userObj.name);
console.log(typeof userObj);
console.log(typeof console);
console.log(userObj.activities[1]);
// you cannot have values without keys inside an object!

console.log("-------------Accessing Properties--------------");

// Accessing properties
// 1- with bracket notation
//key names have to be in quotes
console.log(userObj["name"]); //prints values of the key "name"
console.log(userObj["activities"][2]); //prints 3rd value from value array of key "activities"
// if the key name has a space you HAVE to use bracket notation!

// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// 2- with dot notation
console.log(userObj.name); //prints value
console.log(userObj.activities); //prints value
console.log(userObj.activities[0]); //prints first value

//If instead of the key you write a variable, then dot notation does not work, have to use bracket notation???
//Example:
// Here checkProp is just a parameter
// function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp]; //obj.checkProp as dot notation does not work here!!! Because it is not the real name of the key
//   } else {
//     return "Not Found";
//   }
// }
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") //returns "pony".

Object.keys;
console.log(Object.keys(person)); //prints all keys in an array
Object.values;
console.log(Object.values(person)); //prints all values in an array

console.log("-------------Declare A New Object--------------");

//declare a new object
const obj2 = {};
console.log(typeof obj2);
//add new keys and properties to that object
// bracket notation cannot be used to add new properties
obj2.name = "Hadi";
obj2.lastName = "Nsreeny";

obj2["age"] = 31; //here age is not an array
console.log(obj2);
obj2.age = 33; //this overwrites the older property
console.log(obj2);

const save = new Object(); //here Object is a class
console.log(save);
const arr = new Array(); //classes start with a capital letter
console.log(arr);

console.log("-------------Loop An Object--------------");

// cool for - loop properties
for (let property in userObj) {
  //property is just a name
  console.log(`userObj.${property} : ${userObj[property]}`);
}
//this logs:                 key              value

for (let values of obj) {
  //obj cannot be iterated!!! WHY?
  console.log(Object.values(obj));
}

//here write an array with [[key, value], [key, value]]
let arr2 = [
  ["key1", "value1"],
  ["key2", "value2"],
];
for (let [a, b] of arr2) {
  console.log(`key: ${a}, value: ${b}`);
}

//for of loop vs for in loop!?!?!?!? Difference!?!?!?

console.log("-------------Object Method - Console Log vs Return--------------");
// a function inside an object is called an object method!
// Tell me more about you
const person = {
  name: "Vivi",
  lastName: "Busch-Wallace",
  age: 31,
  birthyear: 1990,
  gender: "female",
  add: "Xyz Street",
  activities: ["draw", "sleep", "eat"],
  german: true,
  print: function () {
    console.log(`I am ${person.name}, I am ${this.age} years old, ...`);
  },

  //   print: function () {
  //     console.log(`I am ${this.name}, I am ${this.age}...`); // we can also use <this>
  //   },
  //   print: () => { //this anonymous is ok, but don't use ES6 arrow function here!!!
  //     console.log(`I am ${person.name}, I am ${person.age}...`);
  //   },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthyear;
  },
};

person.print();
console.log(person.old()); //the execution brackets are necessary!!!

//--> below is also in Accessing Objects
// Object.keys
console.log(Object.keys(person));
// Object.values
console.log(Object.values(person));
// <-- above is also in Accessing Objects

console.log("-------------Assign New Properties--------------");

//Object.assign
const objectOne = { kids: 2, salary: 5000, cars: 3 };
const objectTwo = { colors: ["white", "grey", "black"], pets: "fish" };

const totalObjects = Object.assign({ name: "Hadi" }, objectOne, objectTwo);
console.log(totalObjects);
// assign will only change what's different
// if the objects have same keyname, it will add the value only of the last object for that key
// the order of the keys is chronological to the first object, even if the value changes come from another object where the key is in a different position
// assign creates a copy not a reference

//Object.defineProperty()
const newPerson = {};
Object.defineProperty(newPerson, "bike", {
  //inside the curly brackets come values and restrictions
  value: "Ducati",
  writable: true, //false makes it unchangable
}); //(nameOfObject, keyName/propertyName, fillerOfKey/values)
console.log(newPerson.bike);

//Object.defineProperties()
Object.defineProperties(newPerson, {
  p1: {
    value: "Ducati",
    writable: true, //false makes it unchangable
  },
  p2: {
    value: "mood",
    writable: true, //if you leave out writable then its default is true
  },
  p3: {
    value: "Ducati",
    writable: true,
  },
}); //(nameOfObject, keyName/propertyName, fillerOfKey/values)
console.log(newPerson);

console.log("-------------Practice--------------");
// console.log("---------------------------");
//-------------Practice:-------------
// Object yourPersonObj. Create an object named person2.
// Loop through the object and print both the property and value of the object.

const person2 = {
  name: "Viviane",
  age: 31,
  gender: "female",
  nationality: "German",
};

for (let keys in person2) {
  console.log(
    `This is the property: ${keys}, and this is its value: ${person2[keys]}`
  );
}
// Create a function that returns an array of the properties
// of a javascript object.
const functLog = () => {
  console.log(Object.keys(person2), Object.values(person2));
};
functLog();

// Hadi's solution:
const print = (obj) => {
  return Object.keys(obj);
};
console.log(print(person));

// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
};
// Create a method that prints the following:
// "Zain Oil a student in class 48"
console.log(
  `${student.firstName} ${student.lastName} a student in class ${student.class}`
);

// Hadi's solution:
const student2 = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student2.print();

// Get Values. Create a function that returns an array of all values of an object’s properties.
// Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
const functLog2 = () => {
  console.log(Object.values(getObjectValues));
};
functLog2();

// Hadi's solution:
const objVal = (obj) => {
  return Object.values(obj);
};
console.log(objVal(getObjectValues));
// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
let studentOne = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// Expected output:
// ["name", "class", "course"]
const functLog3 = () => {
  console.log(Object.keys(studentOne));
};
functLog3();
//-------------Practice End------------

console.log("-------------Combine Keys and Values Into An Array--------------");

// combining keys and values in an array:
const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
// const arr1 = [
//   ["cats", 1],
//   ["dogs", 2],
//   ["turtles", 4],
// ];

function getKeysAndValues(obj) {
  return Object.entries(obj);
}
console.log(getKeysAndValues(objectToArray));

console.log("-------------Delete Keys--------------");

// delete
// deletes the whole property
delete objectToArray.cats;
console.log(objectToArray);

console.log("-------------.hasOwnProperty--------------");

const pets = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
console.log(pets.hasOwnProperty("cats"));
// can I use variable of a key for this?
// cannot look for values
// only looks for property names/keys
// can also take variables we assigned the key to (Hadi)
// I meant parameters with that

console.log("-------------.seal--------------");
// Object.seal()
// protects your object from being added more
Object.seal(pets);
pets.add = "Berlin";
console.log(pets);

console.log("-------------.freeze--------------");
