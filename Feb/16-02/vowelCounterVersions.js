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

console.log("--------Trying Alternative With Filter---------");

//Alternative to vowel exercise
// const countVowels = (stringy) => {
//   let eachLetter = stringy.toLowerCase().split("");
//   let vowelArr = ["a", "e", "i", "o", "u"];
//   let filtered = eachLetter.filter((char) => vowelArr.includes(char));
//   console.log(filtered);
//   //   const vowels = ["a", "e", "i", "o", "u"];
//   //   return stringy.split("").filter((e) => vowels.includes(e)).length;
// };
// console.log(countVowels("Heinzelmännchen"));

//shorter:
const countVowels2 = (str) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((letter) => vowelArr.includes(letter)).length;
};
console.log(countVowels2("Heinzelmännchen"));

//Alternative Hadi Vowels
console.log("--------Hadi's Alternative---------");
const whereVowel = (str2) => {
  let counter = 0;
  let vowelArr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (str2[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(whereVowel("Hi this is nice party, will be"));

//want to try a version with .include
