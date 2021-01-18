// Create a function that takes a number.
// as its only argument and returns true .
// if it's less than or equal to zero,
// otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthName = (m) => {
  let yearmonths;
  if (m <= 12 && m > 0) {
    yearmonths = months[m - 1];
  } else {
    yearmonths = "Please, give a number between 1 and 12.";
  }

  return yearmonths;
};

// monthName(3);
console.log(monthName(3));
console.log(monthName(10));
console.log(monthName(13));

// Examples:

// monthName(3) ➞ "March"
//

/* create a function should.
   that checks if a store contains a specific product.
    in it's inventory.
  for example:
  let storeArr= ["milk", "eggs", "cheese", "butter"];
  // try includes might help :)
  // Examples
  inventoryCheck("cheese") returns true
  inventoryCheck( "ham") returns false 
  */

// A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! .
//The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".
// Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments:
// person age and the amount he will eats per day.
// The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

/*
  Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
    12345
    1234
    123
    12
    1
  */

// Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
// PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"

// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

// console.log(countOccurrences("this is a string", "i")); // 3
// console.log(countOccurrences("xoxoxoxoxoxox", "x")); //7
// console.log(countOccurrences("x", "Y")); // 0

console.log("--------Exercise drawing-------");
// draw these shapes in your console
// First shape
// T
// TT
// TTT
// TTTT

// Second shape
// ****
// ***
// **
// *

let loopy = "";
for (let i = 1; i <= 4; i++) {
  // loopy = i;
  // console.log(loopy);
  for (j = 1; j <= i; j++) {
    loopy += j;
    console.log(loopy);
  }
  //   console.log(loopy);
}

let stars = "";
for (let i = 5; i >= 0; i--) {
  // loop for lines
  i < 5 ? (stars = stars + "\n") : null;
  for (let j = 1; j <= i; j++) {
    // loop for count of
    stars = stars + "*";
  }
}
console.log(stars);

// let loopText = "";
// for (let i = 1; i <= 4; i++) {
//   loopText = "++++";

//   for (let k = 1; k <= 5; k++) {
//     let redLoopText = loopText.length - 1;
//     return redLoopText;
//   }

//   console.log(redLoopText);
// }

// let str = "abcdefghij";
// let subStr = str.substring(0, 5);
// console.log(subStr);

// From Roman (to understand what is happening)
// console.log("Second shape");

// let picture2 = "";
// for (let i = 4; i >= 1; i--) {
//   i < 4 ? (picture2 += "\n") : null;
//   for (let j = 1; j <= i; j++) {
//     picture2 += "*";
//   }
// }
// console.log(picture2);

// Third shape
// 1
// 12
// 123
// 1234
// 12345
// Bounce: Forth shape
// Be creative and show us your Artistic side

console.log("------------Password generator--------------");
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password
// Examples:
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

// const passwordGen = () => {
//   let characters = [
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     6,
//     7,
//     8,
//     9,
//     "!",
//     "§",
//     "$",
//     "%",
//     "&",
//     "?",
//     "@",
//     "€",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let password = "";
//   for (let i = 0; i < 30; i++) {
//     password += characters[Math.floor(Math.random() * characters.length)];
//   }
//   return password;
// };

// console.log(passwordGen());

//Alternative version:
const passwordGen = () => {
  // let numb = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  let alphaLc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let specialCharacters = ["!", "§", "$", "%", "&", "?", "@", "€"];
  let password = "";

  for (let i = 0; i < 30; i++) {
    let spChr =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    let alpha = alphaLc[Math.floor(Math.random() * alphaLc.length)];
    let alphaUpper = alpha.toUpperCase();
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber % 2 == 0) {
      password += alpha;
    }
    if (randomNumber % 3 == 0) {
      password += Math.floor(Math.random() * 10);
    }
    if (randomNumber % 5 == 0) {
      password += alphaUpper;
    } else {
      password += spChr;
    }
  }
  return password.substring(0, 30);
};
console.log(passwordGen());

//Tests below

console.log(Math.floor(Math.random() * 3) + 1);

// let randomNumber = "";
// for (let i = 0; i <= 5; i++) {
//   randomNumber += Math.floor(Math.random() * 100);
//   console.log(randomNumber);
// }

// console.log(randomNumber);

// let alphaUc = [
//   ,
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

// let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// let alpha = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
// const passGen = () => {
//   let result = "";
//   const randomNumGetter = (arr) => {
//     return Math.floor(Math.random() * arr.length);
//   };
//   for (let i = 0; i <= 17; i++) {
//     if ((Math.floor(Math.random()) * 100) % 2 == 0) {
//       result += numbers[randomNumGetter(numbers)];
//     } else if ((Math.floor(Math.random()) * 100) % 3 == 0) {
//       result += alpha[randomNumGetter(alpha)].toUpperCase();
//     } else if {
//       result += alpha[randomNumGetter(alpha)];
//     } else if ((Math.floor(Math.random()) * 100) % 5 == 0) {
//       result += charactersSp[randomNumGetter(charactersSp)];
//     }
//   }
//   return result;
// };

// console.log(passGen());

// // to check how many characters the loop outputs:
// let strPw = "!DyGHoh513i@2bvL8Arx6§B98bCtx@";
// console.log(strPw.length);

// XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:

// isEqualNumXandO("ooxx") ➞ true
// isEqualNumXandO("xooxx") ➞ false
// isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// isEqualNumXandO("zzoo") ➞ false

// Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
// Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip
