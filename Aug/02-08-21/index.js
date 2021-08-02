// Node.js

// run node
console.log(process);
// The process object provides information about, and control over, the current Node.js process.
// While it is available as a global, it is recommended to explicitly access it via require or import:
// import process from 'process';

// in the terminal with the command: node (name of file).js
// it will print out all kinnnd of innformationn
console.log(process.argv);
// run it with: node index.js (other name) (other thinnng)
// this will prinnt out the stuff in an array
// it is like an archive
console.log(`Hey ${process.argv[2]}`);
// << this for example will print out the second item in the array

// argv = argument values

// you can manipulate
/* The process. argv property is an inbuilt application programming interface of the process
module which is used to get the arguments passed to the node. js process when run in the command line. */
var result = 0;

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}
// console.log(result);

// loop starts with 2 because first two items in array are
// not real arguments: process.argv = ['node', 'yourscript.js', ...]

/* fs = file System built-in module in Node.js */
const fs = require("fs");
// << ES6 module of this: import { readFile, writeFile, readFileSync } from "fs";

// const path = require("path/posix"); // what is this and where did it come from?
// const { fileURLToPath } = require("url"); // what is this and where did it come from?

/* how to read a file >> */
fs.readFile("./lonngText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

/* Create a file >> */
fs.writeFile(
  "new.txt",
  "This was created through Node.js fs.writeFile()",
  (err) => {
    if (err) throw err;
    console.log("Done.");
  }
);
// first argument is the file name, second is the content

// if you want synchronous then use this: fs.writeFileSync, fs.readFileSync

// now execute command with node index.js
// then it will create the new file

// throw error only in dev phase, not in deployed app

// node is asynchronous, sometimes lower code will run first
// this way it will not wait for things to be done
// if you want synchronous then you need a different function name

// Node.js is a JavaScript runtime built on the V8 JavaScript engine
// --help flag to get help

// FROM HADI
// What is NodeJs?
// it's an asynchronous runtime open Source scripting language to write js outside the browser
// we used it to build backend services or APIs
// Why NodeJs?
// has the biggest open source library that allows you can add many cool features to your app
// Motivation examples:
// PayPal switch their Java application to Node and they found they needed less people to write the code, 33% less code and 40% less files and even they had double request served per sec.
// process object
//console.log(process);
//console.log(process.argv);
//console.log(`Hey ${process.argv[2]}`);
//
// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });

// this is the real deal
//const args = process.argv.slice(2);
//console.log(args);
// fs (File System) built-in module in NodeJs
// const fs = require("fs");

// read file
// first argument is file with path, encodinng system (optional), function
fs.readFileSync("./lonngText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
// write file
/* fs.writeFile("./text/new.txt", "This is file created in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done ✅ ");
}); */
// let stars = args[0];
// let header = args[1];
// const print = require("./stars");
// print(stars, header);

// CALCULATE SHIT
// we want an operation and then an array of numbers to use in the operation
// like this: [node, file, operation, number, number, number, ...]

// make sure the arguments from index 3 onwards are all numbers >>
parseNum = (arg) => {
  const number = parseFloat(arg); // The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
  if (isNaN(number)) {
    console.log(`Sorry, '${arg}' is not a number, please try again.`);
    process.exit(); // exits the process if there is an error (unngraceful solution)
  }
  return number;
};
// The process core module provides a handy method that allows you to programmatically exit from a Node.js program: process.exit().
// When Node.js runs this line, the process is immediately forced to terminate.
// This means that any callback that's pending, any network request still being sent, any filesystem access,
// or processes writing to stdout or stderr - all is going to be ungracefully terminated right away.
// source: https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program

// calculating functions >>
// calculate sum >>
sum = (numArray) => {
  return numArray.reduce((sum, n) => sum + n, 0);
};
console.log(sum([1, 2, 3, 4]));
// calculate average >>
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

// preparing the arguments >>
const args = process.argv.slice(2);
const [operation, ...rest] = args; // destruction, operationn is now the func name and rest is our numbers
const numbers = rest.map(parseNum); // making the numbers in args numbers
// sum 2 4 f
// avg 33 5 3 2 55

// switch case for our operations/functions >>
function med(numArray) {
  switch (operation) {
    case "sum":
      console.log(sum(numArray));
      break;
    case "avg":
      console.log(avg(numArray));
      break;
    default:
      console.log("No operation found or some other error.");
  }
}

med(numbers);
// now write this into terminal: node index.js sum 1 2 3
// as an example
