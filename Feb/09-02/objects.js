const person = {
  userName: "Zain",
  age: 22,
  address: "Berlin",
};

const arr = Object.entries(person);
console.log(arr);

const arrOfArr = [
  [2, 33],
  [3, 22],
  [4, 55],
  [5, 11],
];

const objects = [
  { name: "Nancy", lastName: "Drew" },
  { name: "Olga", lastName: "Mint" },
  {
    name: "Wolfgang",
    middleName: "Amadeus",
    lastName: "Mozart",
    printOut: function () {
      console.log(objects);
    },
  },
];
objects[2].printOut();
objects[2]["printOut"]();

//References vs Clones:
//Primitives vs "Objects":
//Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We call these primitive types.
//Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.

let x = 3;
let z = x; //z is copy of x
console.log(z);
z = 55;
console.log(z);
console.log(x); //x is still the same although z was changed

let strLong = "Hi, I am here";
let cloneStr = strLong;

const car = {
  name: "Ford",
  year: "2020",
  color: "Red",
};

let newCar = car; //reference

newCar.name = "BMW";
console.log(car);

//shallow copy:
let names = ["Olga", "Zain", "Jack", "Nancy"];
// first way shallow copy:
const namesClone = [...names];
namesClone[0] = "Hadi";
console.log(names);
console.log(namesClone);

// second way shallow copy:
const newCloneArr = [].concat(names, [22], 33);
//.concat an array method that combines arrays
//will come out as an array
//for objects we use .assign() and for arrays we use .concat()

//third way shallow copy:
const lastWay = names.slice(0);
console.log(lastWay);

//deep cloning
//obj inside an obj inside an obj etc.

//shallow clone of object
//Hadi's: https://github.com/Fbw-48/live-coding/blob/01dddaf3ef0901e18875cfad0ed3378f569ed362/feb/10-02/index.js#L8
//shallow cloning has a problem with deeper functions, arrays, objects
//when you have an array or an object or a function? inside an obj
//then you need to be careful about shallow copying
const car2 = {
  brandName: "Audi",
  year: "2020",
  colors: ["black", "red", "white"],
  priceWithVAT: 22000,
};
console.log("original: ", car2);

const shallowClone = { ...car2 };
console.log("clone: ", shallowClone);
shallowClone.brandName = "BMW";
console.log("clone changed: ", shallowClone);
console.log("original not changed from clone: ", car2);
shallowClone.colors[0] = "orange"; //because this is shallow copy, this is just a reference to original
console.log("clone with change inside: ", shallowClone);
console.log("original with change from reference in clone: ", car2);

//playground:
console.log("Playing Around Here>>>>>>>>>>>>");
let pushedArr = [];
pushedArr.push(arrOfArr); //the whole of arrOfArr is pushed into a new array
console.log(pushedArr);
pushedArr.pop(); //outputs empty [] because the whole of ArrOfArr was deleted
// console.log(pushedArr);
pushedArr.concat(3, 4, 5, 6, arrOfArr); //why did this not work?
console.log(arrOfArr);
console.log(pushedArr); //still empty... WHY?
console.log("<<<<<<<<<<<<<<Playing Around Here");

console.log("++++++++++Practice++++++++++");

//Exercises:
// Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]]

function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(
  objectToArray({
    A: 1,
    B: 2,
    C: 3,
  })
);
console.log(
  objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4,
  })
);

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// Expected output:
// ["name", "class", "course"]
const arrOfProperties = (obj) => {
  return Object.keys(obj);
};
console.log(arrOfProperties(student));

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
let first = { firstName: "John" };
let last = { lastName: "Smith" };
// Expected output:
// {firstName: "John", lastName: "Smith"}

const combinedObjects = (obj1, obj2) => {
  let combinedObj = {};
  return Object.assign(combinedObj, obj1, obj2);
};
console.log(combinedObjects(first, last));

//Reverse keys and values
// let student2 = {
//   Michael: "name",
//   English: "course",
// };

// const reverseKeyAndValues = (obj) => {

//   return
// }
// console.log(reverseKeyAndValues(student2))

//trying things out:
console.log("Testing things-------------");
function isDivisible(num) {
  num % 100 <= 1 && Number.isInteger(num % 100) == true
    ? console.log(true)
    : console.log(false);
}
console.log(isDivisible(100));

// sfdgsjdfgdkjh

//GREAT TIP:
//LIFE HACK: OHIO = Only Handle It Once
//you will never come back to something, so use OHIO.
