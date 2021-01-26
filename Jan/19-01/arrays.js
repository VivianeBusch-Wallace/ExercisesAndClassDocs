// arrays are considered an object in JS
//
//
let cityName = []; // this is enough to declare an array
cityName = ["Berlin", "River", "Paris", "Moskau"];
console.log(cityName);

cityName.unshift("Dubai");
console.log(cityName);
cityName.unshift("Barcelona");
console.log(cityName);

cityName.shift();
console.log(cityName);

cityName.pop();
console.log(cityName);

// .push adds an item at the end of an array
cityName.push("Hamburg");
cityName.push("München");
cityName.push("Rom", "Lissabon");
console.log(cityName);

// .splice will come back as an array
// .pop and .shift will come back as a string

// split is case sensitive
// .split(" ").length shows how many items from split

for (let i = 0; i < cityName.length; i++) {
  console.log(cityName);
}

for (let i = 0; i < cityName.length; i++) {
  console.log(cityName[i]);
}
// prints out cityNames according to i
console.log("--------------");
for (let i = 1; i < cityName.length; i++) {
  console.log(cityName[i]);
}
// prints out cityName according to i starting from i = 1

// strg + d = change all words that are the same, but watch out for what is together with methods

let copy = cityName; // this is just a reference
let shallowCopy = cityName.slice(); // creates a shallow copy if you change this it does not affect the original
// .slice(index,cut before index) for example: .slice(1,3) will give elements from index 1 and 2

// .slice(4,-2) ??? what will happen?

// let currentValue;
// currentValue = arr[i]; //this is a reference
let string = "abcdefghij";
console.log("splice");
string = ["a", "b", "c", "d", "e", "f"];
let spliceStr = string.splice(2, 4);
console.log(spliceStr);
console.log(string);
console.log("slice");
string = ["a", "b", "c", "d", "e", "f"];
let sliceStr = string.slice(2, 4);
console.log(sliceStr);
console.log(string);

// below exercise from Hadi
// Repeat it.
// Create a program with two variables: “item” and “times”.
// Create a program that repeats the “item” as many times as specified by “times”.
// The first variable (“item”) is the item that needs repeating
// while the second argument (“times”) is the number of times the item is to be repeated.
// Print the result in an array. Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]
// slice only creates a shallowcopy
// slice() creates a complete shallowcopy

let item = "repeat";
let times = 3;
let arr = [];
for (let i = 0; i < times; i++) {
  //  arr = item.join(", "); //--> this doesn't work..., but I wished it did
  //   console.log(item.join(", ")); // this also does not work...
}
//this idea still has to be realized better

const rep = (item, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};
console.log(rep("Hadi", 3));

// The Greater Numbers.
// Create a function which accepts two arguments:
// the first argument being an array of numbers, and the second argument being a number.
// The function should return the elements of the array which are greater than
// the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

let num;

const findGreatest = (arrNum, num) => {
  arrNum = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > num) {
      console.log(arrNum[i].join(", ")); // problem here?
    }
  }
  return;
};

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);
// there is a problem here

console.log("---------vowel exercise-----------");
// AEIOU:
// Vowels. Create a function that takes a string in its parameters
// and counts the number of vowels (i.e. in English, “a, e, i, o, u”)
// in the string.
// i.e. findVowels(“this is a string”) ➞ 4

// const findVowels = (str) => {
//   let numb = [];
//   for (let i = 0; i < str.length; i++) {
//     let chr = str[i];
//     if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
//       console.log(chr);
//     }
//   }
//   return;
// };
// console.log(findVowels("abcdef,ghij"));

// const findVowels = (str) => {
//   let numb = [];
//   for (let i = 0; i < str.length; i++) {
//     let chr = str[i];
//     let counter = "";
//     if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
//       counter += numb.push(chr);
//       console.log(counter); //0,4,9
//     }
//   }
//   return;
// };
// findVowels("abcdef,ghij");

// const findVowels = (str) => {
//   let arr = str.split("");
// const findVow = (str) => {
//   let split = str.split("");
//   let result;
//   for (let i = 0; i < split.length; i++) {
//     if (arr[i] == "a" || arr[i] == "e") {
//       result.push(arr[i]);
//     }
//   }
//   return result.join("").length;
// };
//   return result.join("").length;
// }
// console.log(findVow("abcdef,ghij"));
// console.log(findVow(["a", "b", "c", "d", "e", "f"]));

const findVowel = (str) => {
  let arr = str.toLowerCase().split("");
  let counter = "";
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
        break;
      default:
    }
  }
  console.log("Number of vowels in your sentence:");
  return counter;
};
console.log(findVowel("abcdefghi"));
console.log(findVowel("This is crazy."));
console.log(findVowel("But here's my number..."));

//Alternative to vowel exercise

const findMeVowel = (stringy) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
};

//Alternative Hadi Vowels

const whereVowel = (str2) => {
  let counter = 0;
  let vowelArr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowelArr; j++) {
      if (str[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(whereVowel("Hi this is nice party, will be"));

//want to try a version with .include
console.log("---------duplicates exercise-----------");
// No Duplicates!
// A set is a collection of unique items.
// A set can be formed from an array by removing all duplicate items.
// Create a program which transforms an array into a set of unique values.
// See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

// Alternative Hadi Duplicates
const cleanUp = (arr) => {
  let result = []; //check do I have it in my new array? No, then add, yes, then don't add
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(cleanUp([5, 10, 15, 20, 25]));

// const noDuplicates = (arrNum) => {
// for (let i=0; i<arrNum.length; i++) {

// if () {

// }
// }

//     return;
// }
// console.log(noDuplicates([1, 4, 4, 7, 7, 7]))

//experiment:
// let arraya = [1, 6, 6, 9, 9];
// for (let i = 0; i < arraya.length; i++) {
//   let indeces = arraya.indexOf(arraya[i]);
//   if (i == indeces) {
//     console.log("there is a duplicate");
//   }
// }
// console.log(arraya.indexOf(6));
// if value[i] == value[another i] then remove until only one
//another idea:
// if loop1 = loop2

// let arraya = [1, 6, 6, 9, 9];
// let unique;
// for (let i = 0; i < arraya.length; i++) {
//   for (let j = 0; j < arraya.length; j++) {
//     if (arraya[i] !== arraya[j]) {
//       unique = [];
//       let newArr = unique.push(arraya[i]);
//       console.log(newArr);
//     }
//   }
// }
// doesn't do what I want, scratch this idea

// Dictionary. (take your time on this pls )
// also as tip you can use .includes()
// Create a function that takes an initial string and
// an array of words, and returns a filtered array of the words
// that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original
// array of words.
// Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

const dictionary = (str, arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
