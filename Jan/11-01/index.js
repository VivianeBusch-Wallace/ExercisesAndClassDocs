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

//there is only one specific thing where we need the old style function (later)
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

let text = "";
for (let i = 100; i <= 1000; i += 100) {
  // console.log(i);
  text += i + " ";
}

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
// 0 2 4 6 8 10
text = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    //console.log(i);
    text += i + " ";
    // this is the same as: text + i + " ";
  }
}
console.log("________________");
// 3 6 9 12 15
for (let i = 0; i <= 15; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
// 9 8 7 6 5 4 3 2 1 0
for (let i = 9; i > 0; i--) {
  text += i + " ";
}
// 1 1 1 2 2 2 3 3 3 4 4 4
text = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 3; j++) {
    // console.log(i);
    text += i + " ";
  }
}
console.log(text);

console.log("below this_________");

//without a nested loop:

// text = "";
// let countNum = 0;
// for (let i = 1; i <= 4; i++) {
//   if (countNum != 0 && countNum % 3 == 0) {
//     i = 0;
//     countNum = 0;
//   }
//   countNum++;
// }
//how is this endless???

// 1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4

for (let i = 1; i <= 4; i++) {
  //console.log(i.repeat(3)); --> Why does this not work?
}

console.log("above this___________");

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
text = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 3; j++) {
    // console.log(i);
    text += j + " ";
  }
}
console.log(text);

//change the last one until correct

// an if without the true part is wrong/unprofessional. you can have if without false, but not without true
