//regular old style function
function print(str) {
  console.log(str);
}
//ES6 style = new style
const display = (str) => {
  // => is reserved in JS for these functions
  console.log(str);
};

//short form of ES6 style, but it only works for a function with one formula:
//const display = str => console.log(str);

//there is only one specific thing where we need the old style function
print("Hi");
display("cool");
console.log(typeof print);

const sum = (x, y) => x + y;

console.log(sum(3, 4));

const isBigger = (num1, num2) => num1 < num2;
console.log(isBigger(33, 43));

const printFullWord = (firstName, age, add) =>
  console.log("Hi, ${firstName} I am ${age}. I live in ${add}");

//printFullWorld("Hadi", 31, "Berlin");
//printFullWord("Zain", 22, "Paris");

//instead of console.log you can also write return but

let isLogged = false;
const login = () => {
  isLogged = true; // here we need curly brackets because we are assigning a new value with =
};

login();

//synchronisity = chronological, imagine that the function call is replaced by the function

let name1 = "Hadi";
let name2 = "Zain";
let name3 = "Nancy";
//faster way: write this as an array

//array
let namesArr = ["Hadi", "Zain", "Nancy", "Olga"];
//index number:   0        1       2       3
console.log(namesArr[2]);
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers[5]);
//arrays save time and code and serve to save data

//arrays can be mixed
let mixedArr = ["hi", 1234, true];

let hobbies = ["drawing", "writing", "listening to music", "watching movies"];
console.log(hobbies[0]);

console.log(`These are my favorite hobbies: ${hobbies[0]}, ${hobbies[1]}.`);

console.log(hobbies[0]);

const funThingsToDo = ["eat", "sleep", "repeat"];
let i = 0;
i++;
i++;
// In general, DRY = don't repeat yourself in professional code

//loops

for (let i = 0; i <= 10; i++) {
  console.log(i);
  console.log(`${i} * 100 = ${i * 100}`);
}

//endless loop
//WARNING: IT WILL RUN ENDLESSLY!!!
// for (let i = 0; i <= 10; i--) {
//   console.log(`1 * ${i} = ${i * 1}`);
// }

const charArr = ["a", "b", "c"];
for (let i = 0; i < charArr.length; i++) {
  console.log(charArr[i].toUpperCase());
}

const names = ["Hadi", "Nancy"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i][0].toUpperCase()); //this will take the first character from every word
}

console.log(names[0][0]);

const names2 = ["hadi", "nancy"];
for (let i = 0; i < names2.length; i++) {
  console.log(names2[i][0].toUpperCase() + names2[i][0].slice(1, names.length));
}
//???

console.log(1 == 11 ? "cool" : "not cool");
let isSmart = false;
if (isSmart) {
  console.log("It's true!");
} else {
  console.log("It's not true.");
}

let count = 0;
if (3 == 0 - 3) {
  //count++; ???
  console.log("You are right.");
} else {
  //count--; ???
  console.log("Not correct.");
}

let a = true;
let b = false;
let c = 11 == 23;
if ((a == b && c != a) || c == a) {
  console.log("Nice.");
} else {
  console.log("I don't know what you need from me.");
}

// //Exercise
// The odd/even reporter.
// Write a program that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd,
// and report that to the screen (e.g. “2 is even”).

for (let numb = 0; numb <= 20; numb++) {
  console.log(numb);
  return numb;
}

// function oddOrEven(numbers) {
//     numbers % 2 = 0;
// }
let oddOrEven = numb % 2;

if (oddOrEven == 0) {
  console.log("The number is even");
} else {
  console.log("The number is not even.");
}

for (let numero = 0; numero <= 10; numero++) {
  console.log(numero * 100);
}

//more arrays
let fruit = ["apples", "oranges", "bananas", "strawberries"];
console.log(fruit);
console.log(fruit.shift());
console.log(fruit.pop());
console.log("nodemon works.");
