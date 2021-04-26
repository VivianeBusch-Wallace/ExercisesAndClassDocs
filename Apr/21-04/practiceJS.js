// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
findVowels = (str) => {
  const arr = str.split("");
  let vowels = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels += arr[i];
        break;
      default:
    }
  }
  let result = vowels.length;
  return console.log(result);
};
findVowels("this is a string");
findVowels("aaaeee");
findVowels("pptttxyz");
findVowels("Pity party");

// ------------------------------------
// SumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
console.log("----sum of numbers----");

sumOfNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return console.log(sum);
};
sumOfNumbers([1, 2, 3]);
sumOfNumbers([4, 2, 3, 21]);
sumOfNumbers([99, 200, 311, 8, 2]);

// ------------------------------------
console.log("----no duplicates----");
// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
findUniques = (arr) => {
  let uniques = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniques.includes(arr[i])) {
      uniques.push(arr[i]);
    }
  }
  return console.log(uniques);
};
findUniques([1, 4, 4, 7, 7, 7]);
findUniques([1, 3, 6, 7, 2, 2, 1]);
findUniques([1, 4, 0, 7, 3, 9]);

// ------------------------------------
console.log("----camel case----");
// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("java_script_is_fun") ➞ "javaScriptIsFun"

// second solution:
camelCase = (str) => {
  let arrOfStr = str.split("_");
  let total = "";
  for (let i = 0; i < arrOfStr.length; i++) {
    i === 0
      ? (total += arrOfStr[i])
      : (total += arrOfStr[i][0].toUpperCase() + arrOfStr[i].substring(1));
  }
  return console.log(total);
};
camelCase("hello_world");
camelCase("java_script_is_fun");

// first solution:
camelCase2 = (str) => {
  let arrOfStr = str.split("_");
  let newArr = [];
  for (let i = 1; i < arrOfStr.length; i++) {
    arrOfStr[i] = arrOfStr[i][0].toUpperCase() + arrOfStr[i].substring(1);
    newArr.push(arrOfStr[i]);
  }
  newArr.unshift(arrOfStr[0]);
  let cc = newArr.join("");
  return console.log(cc);
};
camelCase2("hello_world");
camelCase2("java_script_is_fun");
// ------------------------------------
console.log("----average----");
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14

// comment: The examples above are supposed to be arrays, right???
average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return console.log(sum / arr.length);
};
average([1, 2, 3]);
average([4, 2, 2, 8]);
average([99, 200, 311, 8, 2]);

// -----------------------------------
console.log("----scrabble----");
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
// Counting Letters. Create a function that counts the number of occurrences of each letter in a string.
// Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
