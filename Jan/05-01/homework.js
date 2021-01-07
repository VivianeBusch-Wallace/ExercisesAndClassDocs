// 1. Minimum and maximum
// a. Lowest Number
console.log(Math.min(13, 22, 44, 16, 9, 0));

// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 4));

// b. Highest Number
console.log(Math.max(34, 56, 99, 10, 3));

// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 4));

// 2. Rounding

// a. Round up
console.log(Math.ceil(3.6));
console.log(Math.ceil(4.2)); //expected result: 5
console.log(Math.ceil(26.5));
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

//Alternative

function roundup(up) {
  return (up = Math.ceil(up));
}

console.log(roundup(3321.32321));
console.log(roundup(326.76));
console.log(roundup(76788.7));
console.log(roundup(-9.78));
console.log(roundup(43.342));

//Alternative 2
function roundup(up) {
  console.log(Math.ceil(up));
}

roundup(3321.32321);
roundup(326.76);
roundup(76788.7);
roundup(-9.78);
roundup(43.342);

// b. Round down
console.log(Math.floor(3.8));
console.log(Math.floor(3.5));
console.log(Math.floor(3.2));
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(9.78));
console.log(Math.floor(28.329));

// Strings and Numbers

// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let string = "'This is a string'";
let num = 5;
let nan = NaN;

let combined = string + num;
combined = `${string} and this is number: ${num}.`;
console.log(combined);

//from exercise:
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
// Expected Output:
// "Hi, my name is Nancy and I am 25"
let sentence = introSentence + " " + age + ".";
console.log(sentence);
// In this case, what is the + operator doing? Comment your answer in the js file.

//Answer: The + operator combines the variables as they are regardless of type.
//But for the output sentence to make sence we have to add spaces and punctuation.

// 2. Converting
// Create a variable with the value of “1005”. Convert it to a number.

let str = "1005";
console.log(parseInt(str));
let newvar = parseInt(str);
//console.log(str.typeof);
console.log(isNaN(newvar));
console.log("False means it is a number. True means it is NaN.");
// Create a variable with the value of “10.05". Convert it to a number.

let float = "10.05";
console.log(parseFloat(float));
console.log(isNaN(float));
console.log("False means it is a number. True means it is NaN.");
//actually false can also mean 0 and true can mean 1
//Alternative
let numb = "10.05";
console.log(+numb);
let int = +numb;
console.log(isNaN(int));
//pls do not use; this can turn it into a number regardless if it is a decimal or an integer
