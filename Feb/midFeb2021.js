// console.log(">>>>>>>>>>>>>>>>>CHAPTER/FILENAME<<<<<<<<<<<<<<<<<");
// console.log("================BIG TITLE=================");
// console.log("------------------Title------------------");
// console.log("****************************DATE*****************************");

// console.log("****************************26-01*****************************");
// console.log(">>>>>>>>>>>>>>>>>newstuff.js<<<<<<<<<<<<<<<<<");
// console.log("-----------");

console.log("****************************01-02*****************************");
console.log(">>>>>>>>>>>>>>>>>newstuff.js<<<<<<<<<<<<<<<<<");
//Functions inside functions

//
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  } //      9       +       16        = 25
  //   return second(num1) + second(num2);
  return second(num1 + num2);
}

console.log(main(2, 3));

console.log("----------Nested Scopes----------");
// We know:
// let, var, const local vs global
// global
// {
// // local
// }

//Nested Scopes

let nice = true; //global variable
const outerFunction = (x, y) => {
  let big = true; //local variable
  console.log(big + " big in outer function");

  const innerFunction = (num) => {
    big = false;
    // nice = false;
    let fat = true; //local nested variable, cannot be accessed outside the functions
    console.log(big + " big in inner function");
    return num + 10;
  };
  //            13         +      14
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));

console.log("----------Closure----------");

//Closure
let number = 10;
function fun() {
  return number + number;
}
console.log(fun());
number = 33;
console.log(fun()); //not good that this function can be changed
console.log("----------Self-invoked Function----------");
// A closure is a function that has access to its outer function scope
// even after the outer function has returned. This means a closure can
// remember and access variables and arguments of its outer function even
// after the function has finished.
//
//self-invoked function
const add = (() => {
  let counter = 0; //does not reset counter to 0
  return () => {
    //returns a new function, an anonymous function
    counter++;
    return counter;
  };
})(); //immediately executed by call
console.log(add());
console.log(add());
console.log(add());
// always use () around the function to make it an expression and
// then () after to invoke/call that function immediately
// this way what is inside is secured
// const add2 = (() => {
//   let counter = 0;
//   return counter++;
// })();
// console.log(add2()); //WRONG!
//SIF does not work without another function inside return
// Using self-invoking functions we will perform the initialization work only once
// because after the execution we’ll loose the reference to the function.

console.log("----------Self-Invoked Anonymous Function----------");

// SIAF = self-invoked anonymous function
var all = 3;
(() => {
  let all = "hey"; //this is a completely serparate variable from all = 3
  console.log(all); //output: hey
})();
console.log(all); // output: 3

console.log("----------Immediately Invoked Function Expression----------");

//
// IIFE = immediately invoked function expression

const sum = ((x, y) => {
  return x + y;
})(3, 4);
console.log(sum);

//SIAF and IIFE common questions on interviews
console.log("----------Exercise Example for SIAF----------");

//exercise example for SIAF:
//write a function called add that uses a closure that performs
//addition on arguments in two seperate function calls
const add3 = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add3(2)(3));
//
const add4 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(add4(2)(3)()); //NaN

// write a function multiplier that uses a closure to perform
// multiplication. However the outer function should be saved
// in a variable which is then called.
function multiplier(num) {
  return (x) => x * num;
}
const times = multiplier(2)(5);
console.log(times);

// trim()
let str = "     hi    ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());

//startsWith()
let text = "Hej, it's ME.";
console.log(text.startsWith("we"));
console.log(text.startsWith("Hej"));

// let array = ["Hadi", "olga", "Julian"];
// console.log(array.startsWith("Hadi"));

// endsWith()
console.log(text.endsWith("."));
console.log(text.endsWith("ME"));

// charAt()
let char = "hadi";
console.log(char.charAt(2)); //is the same as:
console.log(char[2]);
// arr[i][2] - Hadi prefers this method to charAt()
const arr = ["Hadi", "Olga"];
console.log(arr[0][0] + arr[0][3]);
// charCodeAt()
//  will return integer between 0 and 65535 that replaces the UTF-16 code
// common character codes UTF-16  UTF-8  ASCII   A 00001111
char = "Ü";
console.log(char.charCodeAt(0));

console.log(">>>>>>>>>>>>>>>>>exercises.js<<<<<<<<<<<<<<<<<");

// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires. The function should be
// self invoked and should have the following parameters:

// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%

// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000

((age, retirementAge, wage, percent) => {
  let wagePerYear = wage * 12;
  let yearsLeft = retirementAge - age;
  let money = yearsLeft * wagePerYear;
  let savings = money * (percent / 100);
  if (age >= retirementAge) {
    console.log("You are already retired! Great!");
  } else {
    console.log(
      `You have ${yearsLeft} years left until you retire, with a rate of ${percent}% you can save ${savings}.`
    );
  }
})(40, 65, 2000, 5);

// (  (currentAge, retirementA, monthlyWage, percentage) => {
//     if (currentAge >= retirementA) {
//       console.log("You are already retired! Great!");
//     } else {
//       let yearsToSave = retirementA - currentAge;
//       console.log("Years to go" + yearsToSave);
//       let monthsToSave = yearsToSave * 12;
//       console.log("Months to go", monthsToSave);
//       let amountSavedByMonth = (monthlyWage * percentage) / 100;
//       let totalSave = amountSavedByMonth * monthsToSave;
//       console.log(
//         `You will be very old in ${yearsToSave} years and you will have ${totalSave} in your bank.`
//       );
//     }
//   }
// )(40, 65, 2000, 5);

console.log("____________________Seasons");
//Do this exercise in ONE LINE!
// Seasons
// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
// I will be nice again to you and offer the arrays 😉
// const months = [ "december", "january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november" ];
// const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// monthCheck("I love June"); -> June is in Summer
// monthCheck("We need Kartoffel"); -> We couldn’t find any month in your text, sorry try again

const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];

  let seasons = ["Winter", "Spring", "Summer", "Autumn"];

  const currentSe = (monthName) => {
    // switch (months.indexOf(monthName)) {
    //   case 0:
    //   case 1:
    //   case 2:
    //     return seasons[0];
    //   case 3:
    //   case 4:
    //   case 5:
    //     return seasons[1];
    //   case 6:
    //   case 7:
    //   case 8:
    //     return seasons[2];
    //   case 9:
    //   case 10:
    //   case 11:
    //     return seasons[3];
    //   default:
    //     return `something went wrong`;
    // }
    return seasons[Math.floor(months.indexOf(monthName) / 3)];
  };
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck("I love April"));
console.log(monthCheck("We need Kartoffel"));

let months = [
  ["december", "january", "february"],
  ["march", "april", "may"],
  ["june", "july", "august"],
  ["september", "october", "november"],
];

console.log(months[0][0]);

console.log("****************************02-02*****************************");
console.log(">>>>>>>>>>>>>>>>>newstuff.js<<<<<<<<<<<<<<<<<");

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
// protects your object from being added to or changed
Object.seal(pets);
pets.add = "Berlin";
console.log(pets);

console.log("-------------.freeze--------------");
// The Object.freeze() method freezes an object. A frozen object can no longer be changed;
// freezing an object prevents new properties from being added to it, existing properties from being removed,
// prevents changing the enumerability, configurability, or writability of existing properties, and
// prevents the values of existing properties from being changed. In addition, freezing an object also
// prevents its prototype from being changed. freeze() returns the same object that was passed in.

console.log("****************************08-02*****************************");
console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");

//callback function
function firstfunction(cb) {
  return cb;
}
function cb() {
  //argument from call comes into cb function
  return "fun";
}
console.log(firstfunction(cb())); //callback function is being called with the argument
//nested function would not require being called
//nested functions are not callback anymore

//ARRAY METHODS:
// always need an array
//.map
//will never affect the original array
const names = ["Zain", "Olga", "Nancy", "Leonard", "Xena"];
// inside map is a callback
//map will take the array, do modifications and come back with exactly the same .length
const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`); //you can pass more parameters, but this is enough for now
//the order of map parameters is always: item, index - name can be changed
//often the item parameter is singular of array:
const heyNames2 = names.map((name) => `Hi ${name}`); //you can pass more parameters, but this is enough for now
console.log(heyNames);
//if you just need a loop, then don't use .map

//reduce
//also a callback function
//will never affect the original array
const numArr = [2, 4, 6, 7, 1, 3, 5];
const totalArr = numArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(totalArr);
//other shorter way of writing
const reducer = (acc, cur) => acc + cur;
//remember if you have curly brackets, then you need return, but if it is just one command you can leave curly brackets out
const totalArr2 = numArr.reduce(reducer, 0);
console.log(totalArr2);

//you can also put in index as parameter but super rare in reduce
//start value is professional to put
//start value can also be an array or an object, for that put [] or {}

//multiply:
const multipliedFromArr = numArr.reduce((acc, cur) => acc * cur, 1);
//starting value needs to be 1 here because if you put it to 0, then
//you multiply by 0, which only makes 0, no matter what
console.log(multipliedFromArr);

//counting letters example as an object:
const countLettersAdvanced = (str) => {
  let arr = str.toLowerCase().split("");
  let result = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  return result;
};
console.log(countLettersAdvanced("tree")); //output: { t: 1, r: 1, e: 2 }

//counting letters example as an array:
//finish this on your own!!!

// const countLettersArray = (str) => {
//     let strArr = str.toLowerCase().split("");
//     let result = strArr.reduce((acc,cur)=>{return},[])
// }

//filter
//will always come back as an array
//will never affect the original array

const filterArr = names.filter((name) => name.length > 4);
console.log(filterArr);
//you will never use other parameters in filter

//get every second name from the array:
const filterArr2 = names.filter((name, index) => {
  if (index % 2 === 0) {
    return name[index];
  }
});
console.log(filterArr2);
//find
//will always come back with the first truthy value
//will never affect the original array
const findVal = names.find((item) => item.length > 0); //all names.length are bigger than 0 but
console.log(findVal); //only the first value will come back
const findVal2 = names.find((item) => item.length > 4); //several names.length are bigger than 4 but
console.log(findVal2); //only the first value will come back

//fill
//modifies the original array
//cannot add more values than there are indeces?
const numbers = [22, 49, 66, 79, 10, 3, 5, 101];
numbers.fill(11, 2, 5);
console.log(numbers);
numbers.fill(7, 3);
console.log(numbers);
numbers.fill(0);
console.log(numbers);

//.some()
//is always true or false
//checks whole array
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));
console.log(numbers.some((item) => item % 3 == 0));
console.log(numbers.some((item) => item > 100)); //false because only one item is true
// for .some there need to be at least 2 values true so that the result is true

//.sort()
//based on UTF-16 languages
//affects
const alpha = ["a", "c", "b", 2, 1, "!", "ß", "ü", "?"];
console.log(alpha.sort());
console.log(alpha); //original array is affected
const words = ["hi", "z", "a", "web"];
const sortedWords = words.sort((a, b) => a.length - b.length); //here - is not math minus but more like "from small to big"
console.log(sortedWords);
const sortedWords2 = words.sort((a, b) => b.length - a.length); //"from big to small"
console.log(sortedWords2);
console.log([11, 2, 22, 1].sort((a, b) => a - b));

//reverse
//affects original array
const flipArr = ["a", "b", "c"];
const flippedArr = flipArr.reverse();
console.log(flippedArr);
console.log(flipArr);

//for ... in

const person = {
  userName: "Zain",
  age: 22,
  add: "H",
};
for (prop in person) {
  console.log(`${prop} : ${person[prop]}`); //cannot use this[prop], would be undefined because "this" has no object reference
}
const [userName] = person;

//for ... of

for (let [key, value] of person) {
  console.log("key: " + key + " value: " + value);
}

console.log("****************************09-02*****************************");
console.log(">>>>>>>>>>>>>>>>>objects.js<<<<<<<<<<<<<<<<<");

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

console.log("****************************10-02*****************************");
console.log(">>>>>>>>>>>>>>>>>recursion.js<<<<<<<<<<<<<<<<<");

//recursion
//factorial example
const factorial = (num) => {
  if (num == 1) {
    return 1; //does not return 1 in the end, this is just a way of writing
  }
  return num * factorial(num - 1);
};
console.log(factorial(7));
//recursion is faster than a loop

//deep copy using recursion
//needs 2 years to do this one by yourself
function deepCopy(obj) {
  if (typeof obj == "object") {
  } else if (typeof obj == "array") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  }
  return obj;
}
const deepClonedCopy = deepCopy([{ name: "Hadi" }, { name: "Zain" }]);
console.log(deepClonedCopy);

//practice:
// Scrabble. Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.
// Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

let scrabbleTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const scrabbleScore = (arr) => {
  const maxScore = arr
    .map((item) => item.score)
    .reduce((acc, cur) => acc + cur, 0);
  return maxScore;
};
console.log(scrabbleScore(scrabbleTiles));

//only with reduce:
const scrabbleScore2 = (arr) => {
  const maxScore = arr.reduce((acc, cur) => acc + cur.score, 0);
  //   .reduce((acc, cur) => acc + cur);
  return maxScore;
};
console.log(scrabbleScore2(scrabbleTiles));

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {“John”: name, “teacher”: job}
// const switchKeysAndValues = (obj) => {
//   let values = Object.keys(obj);
//   let keys = Object.values(obj);
//   let switched = keys.map((item)=>);
//   return result;
// };
// console.log(switchKeysAndValues(person));

// Hadi's solution:
const switchKeysAndValues2 = (obj) => {
  let newObj = {};
  for (let prop in obj) {
    newObj[obj[prop]] = prop;
  }
  return newObj;
};
console.log(switchKeysAndValues2(person));

// 5. Return Keys and Values. Write a program that takes an object and
// returns an array which contains two arrays: one for the keys of the object and
// the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
console.log("keys and values in one array:");
const arrayProperties = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let result = [].concat(keys, values);
  return result;
};

console.log(arrayProperties({ a: 1, b: 2, c: 3 }));
console.log(arrayProperties({ key: true }));
//not quite achieved, the array is not nested

const arrayProperties2 = (obj) => {
  let keys = Object.keys(obj);
  //   console.log(keys);
  let values = Object.values(obj);
  let result = [keys, values];
  return result;
};

console.log(arrayProperties2({ a: 1, b: 2, c: 3 }));
console.log(arrayProperties2({ key: true }));

//side info:
//interview question:
//"how can I create a new card"
//we call this an issue, but they call it a card.

//for my profile on github:
//age function:
const myAge = () => {
  let age = new Date().getFullYear() - 1990;
  return age;
};
console.log(myAge());

console.log("****************************11-02*****************************");
console.log(">>>>>>>>>>>>>>>>>moreobjects.js<<<<<<<<<<<<<<<<<");

// Hadi's: https://github.com/Fbw-48/live-coding/blob/main/feb/11-09/index.js

console.log("------------Destructuring-------------");
//destructuring objects as function parameters
//destructing my object inside my parameters
function fun(num, { name = "defaultName" }) {
  //heed: here the default value is written with = !!! not with colon!
  console.log(num);
  let firstName = { name }; //because no name specified default goes in place
  console.log(firstName);
}
fun(2, { age: 22 });

//destructuring is easier now than before
//destructuring = take values from arrays or properties from objects and
//set them as local variables
//destructuring objects:
//old way:
const deconstructObj = {
  monday: "rainy",
  tuesday: "snowing",
  wednesday: "sunny",
};
console.log(deconstructObj.wednesday);
const weatherMon = deconstructObj.monday;
const weatherTue = deconstructObj.tuesday;
let weatherWed = deconstructObj.wednesday;
console.log(weatherWed);
weatherWed = "superDay";
console.log("variable: " + weatherWed);
console.log("originial: " + deconstructObj.wednesday);

//new way:
const { monWeather, tueWeather, wedWeather } = deconstructObj;
const { monday = "weather unavailable" } = deconstructObj; //default value with equal sign!
//rename property:
//in case of name collisions
const { monday: firstDayOfWeek } = deconstructObj;
//access nested properties:
const family = { parent: { child: "object child" } };
const {
  parent: { child },
} = family;

//destructuring arrays:
//old way:
const array = [1, 2, 3];
const one = array[0];
const two = array[1];
const three = array[2];
//new way:
const [first, second, third] = [1, 2, 3]; //this is also used in react
console.log(first, second, third);
//so the variable gets assigned according to the order of the index

const foods = [
  "pizza",
  "french fries",
  "hamburgers",
  "pie",
  "brownies",
  "pudding",
];
//if you wanna skip a value: emit the variable by just adding a comma:
//and use ... to assign several values to one variable:
const [, , meal, ...dessert] = foods;
console.log(foods);
console.log(meal); //hamburgers
console.log(dessert); //["pie", "brownies", "pudding"]

console.log("------------Get And Set-------------");
//getter method and setter method:
//getter and setter should use the same function name

// The get syntax binds an object property to a function that will be called
// when that property is looked up.
const objMDN = {
  log: ["a", "b", "c"],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
};

console.log(objMDN.latest);
// expected output: "c"

// The set syntax binds an object property to a function to be called
// when there is an attempt to set that property.
// Setters are most often used in conjunction with getters to create a type of
// pseudo-property. It is not possible to simultaneously have a setter on a property
// that holds an actual value.
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// expected output: Array ["EN", "FA"]

//to delete a setter:
// delete language.current;

const userData = {
  firstName: "Steel",
  lastName: "Man",
  age: 21,
  single: true,
  get fullName() {
    //no parameter because not working with arguments
    console.log(
      `${this.firstName} ${this.lastName}, is ${this.age}, and is ${this.single}`
    );
  },
  set fullName(str) {
    let arr = str.split(" ");
    console.log(arr);
    this.firstName = arr[0];
    this.lastName = arr[1];
    this.age = arr[2];
    this.single = arr[3];
  },
};

//getter
userData.fullName; // getting object data
//can only work with data from objects?

//can the () also be in the call?

//setter
userData.fullName = "Hadi Nsreeny 31 true"; // filling the object
userData.fullName; // getting new data

console.log("------------Constructor-------------");
//constructor
//this must be an old fashioned function!!! Cannot be ES6!
//recruiter question: "can you build me a constructor function?"
//constructor is a reserved word in JS, cannot be renamed
//when we build a template, then we capitalize the first letter of the function name
//here: constructor = template
function Person(name, age, act) {
  this.name = name; //you are turning whatever input you get into objects
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hey ${this.name}, you are ${this.age} years old and activities: ${this.act}`
    );
  };
}
let zain = new Person("Zain", 21, ["sleep", "eat"]);
console.log(zain);
zain.printOut();
const olga = new Person("Olga", 40, "no activities");
olga.printOut();

//isDivisble function explained
//divisible works with integers (remainder), dividable means you can get decimals

console.log("------------for ... in, for ... of, forEach()-------------");

//for in object
//if you want to loop the entire object
//does this work for arrays???
for (let prop in zain) {
  console.log(`zain.${prop}:${zain[prop]}`);
}

let people = [
  ["Zain", 22, "teacher"],
  ["Olga", 40, "chef"],
];
for (let i = 0; i < people.length; i++) {
  for (let j = 0; j < people[i].length; j++) {
    console.log(people[i][j]);
  }
}
//what does a nested .map look like?
//for of needs an array
//if you use for of with obj you get "obj is not iterable" error!

//forEach with arrays
//outputs the elements from each index
//nested forEach:
people.forEach((arr) => arr.forEach((element) => console.log(element)));

//for of arr
for (let [key, val] of Object.entries(zain)) {
  console.log(`${key}:${val}`);
}
//because Object.entries(zain) gives you an array [key, value] [key, value] [key, value]
//[key,val] from the loop are just references/parameters

console.log("------------Class-------------");
//class
//always start with capital letter
//there can be classes without a constructor
class Animals {
  // latinName: "animus", //does not work because the class Animals is a function
  constructor(_kind, _hometown) {
    //constructor parameters have underscores
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(`this very cute ${this.kind} lives in ${this.hometown}`);
  }
}

const cat = new Animals("tabby", "LA");
cat.display();
console.log(cat);
const newPet = new Animals("golden retriever", "NY");
newPet.display();
console.log(Animals); //outputs:[Function: Animals]

newPet.displayAge = () => {
  console.log("Hi, displayAge is a new property/method for newPet");
};
newPet.displayAge();
console.log(newPet);

class Color {
  constructor() {
    this.name = "";
    this.temperature = 0;
  }
}
const red = new Color();
console.log(red);
red.name = "RED";
red.temperature = 322;
console.log(red);

console.log("------TV APP------");
// TV app
class TV {
  constructor(_brand, _channels = 1, _volume = 5) {
    this.brand = _brand;
    this.channel = _channels;
    this.volume = _volume;
  }
  increaseVolume() {
    if (this.volume < 20) {
      this.volume++;
    }
    console.log(this.volume);
  }
  decreaseVolume() {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("This is already the lowest volume setting");
    }
    console.log(this.volume);
  }
  resetVolumeAndChannel() {
    this.channel = 1;
    this.volume = 5;
  }
  randomChannel() {
    this.channel = Math.floor(Math.random() * 100) + 1;
    console.log(`You are watching channel ${this.channel}`);
  }
  display() {
    console.log(this.brand, this.channel, this.volume);
  }
}
const niceTV = new TV("Panasonic", 50, 20);
console.log(niceTV);
niceTV.increaseVolume(); //does not increase because it is at maximum
niceTV.decreaseVolume();
niceTV.decreaseVolume();
niceTV.decreaseVolume();

niceTV.display();
const samsung = new TV("Samsung");
console.log(samsung);
//
//
//=========================
console.log("===============Practice==============");
//Practice:
// Create a constructor function that receives product details
// (productName,prise,inventory)
// then build a method to display this data in clear outputted form
// build two products using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling price 2.33€. we have 2232 in our store
function CheckInventory(product, price, amountInInventory) {
  this.productName = product;
  this.price = price;
  this.inInventory = amountInInventory;
  this.printMethod = function () {
    console.log(
      `Item: ${this.productName}, price: ${this.price}, we only have ${this.inInventory} of these left in stock. Buy now!`
    );
  };
}
let pepsi = new CheckInventory("Pepsi", 2.33, 2232);
pepsi.printMethod();
let coke = new CheckInventory("Coca - Cola", 1.99, 1120);
coke.printMethod();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,engineCapacity)
// first get the data
// then set the data
const car = {
  modelName: "Audi",
  modelNumber: "A6",
  engineCapacity: 300,
  get fullCarInfo() {
    return `Your ${this.modelName} of the model ${this.modelNumber} has ${this.engineCapacity} horsepower!`;
  },
  set fullCarInfo(arr) {
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.engineCapacity = arr[2];
    return `Your new car  ${this.modelName} of the model ${this.modelNumber} has ${this.engineCapacity} horsepower!`;
  },
};
console.log(car.fullCarInfo);
car.fullCarInfo = ["Opel", "someNumber", 256];
console.log(car.fullCarInfo);

//====================================================

//!!! I need to practice writing old fash funct, swtich cases, object funct by heart

//small tidbit for the future:
// if (!user.id) {
//   console.log("User ID missing");
// }
// //can be shorter:
// console.assert(user.id, "User ID is missing");

console.log("****************************15-02*****************************");
console.log(">>>>>>>>>>>>>>>>>lastbitOnObjects.js<<<<<<<<<<<<<<<<<");

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hey ${this.name}, you are too old ${this.age}`;
  }
}
const newBuddy = new Person("Steel", 21);
console.log(newBuddy.printData());

//extends && super
//extends and super()
//extends --> inheriting the methods from the Original class which is being called
//super --> gets access to the parent's properties and methods
class Kid extends Person {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `${this.name} is a kid class from Person`;
  }
}
const zain = new Kid("Zain", 21, 179);
console.log(zain);
//everything inherited can be used as normal
//extends cannot be used as a copy
//extends only belongs to classes

//Date

//UTC coordinated Universal Time
//CET Central European Time
//GMT Greenwich Mean Time
//More about that: www.24timezones.com/#/map
let time = new Date();
console.log(time); //gives me weird output, 1 hour late time
time = new Date().getFullYear();
console.log(time);
time = new Date().getMonth() + 1; //add 1 because otherwise shows month according to index
console.log(time);
time = new Date().getDay(); //day of the week
console.log(time);
time = new Date().getHours(); //Returns the hour (0–23) in the specified date according to local time.
console.log(time);
time = new Date().getMilliseconds();
console.log(time);

//extends (example with date): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

//Hadi's answer to weird time issue: "I just checked about the time issue, your Machine has no problem it’s only
//the UTC time issue so when you cancel log the object date it will give you the UTC time but when you
//console.log Date().getHour() will tell you the right hour"

console.log(new Date().getHours());
console.log(new Date().getUTCDate());
console.log(new Date().getHours());
console.log(new Date().getUTCHours()); //1 hour behind local time!
