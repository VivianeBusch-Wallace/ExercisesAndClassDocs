sum(3, 5);
sum(300, 11);

function sum(x, y) {
  return x + y;
}
console.log(sum);
console.log("console log");

let bool = " "; //try other things here to see result
bool ? console.log("Cool.") : console.log("Not Cool");

// bracket notation
let str = "Ideal Metaphor";
console.log(str[str.length - 1]);

// .trim()
let LongStr =
  "    deleted empty spaces at the end or at the beginning         .";
console.log(LongStr.trim);

function display(str) {
  console.log(str);
}
display("Zain");

let r = 5;
let w = 24;
console.log(r % w);

isNaN(r) //try other things here, everything that is not a number will get NaN (?)
  ? console.log("Yes, it is NOT a Number.")
  : console.log("It is a number.");

let int1 = "Hadi";
let int2 = 1.5;
console.log(int1 + " " + int2);
let intSum = int1 + int2;

isNaN(intSum) //this is not a number because two things are combined
  ? console.log("Yes, it is NOT a Number.")
  : console.log("It is a number.");

let newNum = parseInt(int1, 10); //number 10 has to do with the machine language system,
//binary, hexadecimal, etc., change the numer according to the system

// parseFloat

//Exercises start here

// /1. Create two variables.
let h = 5;
let k = "string value";
// // One variable should contain a string value and
// //the other should contain a number. Concatenate the string and the number.
let ssum = h + k;
console.log(ssum);
let wsum = h + " " + k;
console.log(wsum);
// //2. Check if the following numbers are even numbers. 33, 40, 2,1,22
//Use a ternary and if the number is even print 30 is even, else print that it is odd.
let num = 33;

num: 2 ? console.log("the number is even") : console.log("The number is odd");

function summer(z, t) {
  return z + t;
}

let numb = 23;
let numX = numb % 2;
console.log(numX);
console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);
function oddOrEven(numb) {
  return numb % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven(33));
console.log(oddOrEven(4)); // etc.

// Create a variable with the value of “123”. Convert it to a number.
// Create a variable with the value of “130.7". Convert it to a number.
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let v = "123";
console.log(parseInt(v, 10)); //if you leave out 10 it will also work because JS will automatically assign 10 (?)

let u = "130.7";
console.log(parseFloat(u));

let isDog = true;
console.log(isDog ? "pat, pat" : "find me a dog to pat!");

// Class notes below

// Math.floor means round down
// Math.ceil means round up

//Math.max means it will grab the biggest number in a group of numbers
//Math.min lowest number in a group of numbers

//Practice slice
let JS = "Javascript";
console.log(JS.slice(-3));
console.log(JS.slice(0));
console.log(JS.slice(0, 4));
