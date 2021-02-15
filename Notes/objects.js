console.log("=========Organized by Topic==========");
//Last update:
//included:
//not included:

//
//hint: use strg + F to find stuff by tag!
console.log("=========Objects==========");
//object example 1:
const objectName = {
  keyString: "stringValue",
  number: 42,
  arr: ["string1", "string2", 12, true],
  boolean: true,
  emptyStr: "",
  emptyArr: [],
};
// objects can hold values: String, Boolean, number, arrays, objects
//object example 2:
const userObj = {
  firstName: "Nancy",
  lastName: "Sand",
  age: 33,
  address: "Xyz Street",
  activities: ["draw", "sleep", "eat"],
  german: false,
  "hot or not": "hot",
};
//
//properties = keys and values
//no undefined keys, no values witout keys, but keys with empty values yes
//meaning: you cannot have values without keys inside an object

//properties separated by comma, no comma needed after last property
//within an object only unique key names allowed
console.log("-------------Accessing Properties--------------");
//never forget "" inside bracket notation!!!
//key names in bracket notation are in quotes, except for when they are variables or parameters
//to see keys:
console.log(Object.keys(userObj)); //prints array of only keys
//to see values:
console.log(Object.values(userObj)); //prints array of only values

//bracket or dot notation:
//type: objectName.keyname OR objectName["keyname"]
console.log(objectName.keyString); //dot notation
console.log(objectName["keyString"]); //bracket notation
console.log(objectName.arr); //prints whole array
console.log(objectName.arr[0]); //accesses values inside array according to index defined, but not as a single array
console.log(objectName["arr"][2]); //bracket notation also works for this
console.log(userObj.age);
console.log(userObj["hot or not"]); //if the key name has spaces you HAVE TO USE BRACKET NOTATION!
console.log(userObj.german); //here: prints boolean value

// If a parameter is your key name:
// Example: Here checkProp is just a parameter
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    // return obj.checkProp; //result is unefined because checkProp is just parameter name not real key name -> use bracket notation for parameters
    return obj[checkProp]; //bracket notation works, parameter not in quotes
  } else {
    return "Not Found";
  }
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); //returns "pony"

console.log("-------------Declare And Initialize A New Object--------------");

//declare a new object:
const obj2 = {};
console.log(typeof obj2);
console.log(obj2);

//add new properties to that object:
obj2.name = "Nancy";
obj2.lastName = "Drew";
obj2["keyName1"] = "keyValue1";
obj2["age"] = ""; //shown as empty string in console
console.log(obj2);

//change the value of keys:
obj2["age"] = 31;
console.log(obj2);
obj2.age = 33; //this overwrites the older property, does not add to it
console.log(obj2);

//with class:
const newObject = new Object(); //here Object is a class
console.log(newObject);
//just like arrays:
// const arr = new Array(); //classes start with a capital letter
// console.log(arr);

//looping an array to get an object:
let arrIntoObj = [
  ["key1", "value1"],
  ["key2", "value2"],
];
const objFromArr = {};
for (let [key, value] of arrIntoObj) {
  objFromArr[key] = value;
  console.log(objFromArr);
}
console.log(objFromArr); //unaffected by loop scope

//one object per key from an array:
let arrIntoThreeObj = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["lastKey", "lastValue"],
];

let singleObj = {};
for (let [key, value] of arrIntoThreeObj) {
  singleObj = { [key]: value };
  console.log(singleObj);
}
console.log(singleObj); //THIS only prints last propterty!!!

console.log("-------------Loop An Object--------------");
//two kinds of loops:
//for of loop and for in loop

//looping properties in an object:
for (let property in userObj) {
  //property is just a name for our parameter
  console.log(`userObj.${property} : ${userObj[property]}`);
}
//this logs:                 key              value

/* for (let values of obj2) {
  //obj cannot be iterated!!! Because of "of" and it's only one object???
  console.log(Object.values(obj2));
}
 */
for (let i = 0; i < arrIntoThreeObj; i++) {}

//here write an array with [[key, value], [key, value]]
let arr2 = [
  ["key1", "value1"],
  ["key2", "value2"],
];
let newObj = {};
for (let [a, b] of arr2) {
  console.log(`key: ${a}, value: ${b}`);
  console.log({ [a]: b });
}

//for of loop vs for in loop!?!?!?!? Difference!?!?!?

//in reduce the initial value is the first value from the array if not set to zero by us

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
console.log("----------profile lookup-----------");
//-------------more exercises------------
// Basic JavaScript: Profile Lookup
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return "No such contact".
// If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
//source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
// lookUpProfile("Kristian", "lastName") should return "Vos"
// lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
// lookUpProfile("Harry", "likes") should return an array
// lookUpProfile("Bob", "number") should return "No such contact"
// lookUpProfile("Bob", "potato") should return "No such contact"
// lookUpProfile("Akira", "address") should return "No such property"

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
    // else {
    //   return "No such contact"; //this else causes the iteration to stop after checking the first item in the array!!!
    // }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
