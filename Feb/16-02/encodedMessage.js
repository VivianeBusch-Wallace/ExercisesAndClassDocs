console.log("----C4n y0u r34d th15?----");

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
//  NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:
// * hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// * hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// * hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

const hackerSpeak = (strArg) => {
  let str = strArg.toLowerCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        result += "4";
        break;
      case "e":
        result += "3";
        break;
      case "i":
        result += "1";
        break;
      case "o":
        result += "0";
        break;
      case "s":
        result += "5";
        break;
      default:
        result += str[i];
    }
  }
  return result;
};

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
console.log(hackerSpeak("this is super cool, I want to use this secret code"));

// console.log("with replace-----------");
// const encodedLetters = [
//   ["a", 4],
//   ["e", 3],
//   ["i", 1],
//   ["o", 0],
//   ["s", 5],
// ];

// const hackerSpeak2 = (str) => {
//   let words = str.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       if (str[j] === "a") {
//         str[j] = 4;
//       } else if (str[j] === "e") {
//         str[j] = 3;
//       } else if (str[j] === "j") {
//         str[j] = 1;
//       } else if (str[j] === "o") {
//         str[j] = 0;
//       } else if (str[j] === "s") {
//         str[j] = 5;
//       }
//     }
//   }
//   return words;

//   let words = str.toLowerCase().split(" ");
//   words.forEach((character) => {
//     for (let j = 0; j < character.length; j++) {
//       if (str[j] === "a") {
//         str[j] = 4;
//       } else if (str[j] === "e") {
//         str[j] = 3;
//       } else if (str[j] === "j") {
//         str[j] = 1;
//       } else if (str[j] === "o") {
//         str[j] = 0;
//       } else if (str[j] === "s") {
//         str[j] = 5;
//       }
//     }
//   });
//   return words;
// };

// console.log(hackerSpeak2("javascript is cool"));
// console.log(hackerSpeak2("programming is fun"));
// console.log(hackerSpeak2("become a coder"));
// console.log(hackerSpeak2("this is super cool, I want to use this secret code"));
// console.log(hackerSpeak2("bcdfgh"));
// console.log(hackerSpeak2("aaaeeeiiiooosss"));

function hackerSpeak7(str) {
  return [...str]
    .map((letter) => {
      switch (letter.toLowerCase()) {
        case "a":
          return "4";
          break;
        case "e":
          return "3";
          break;
        case "i":
          return "1";
          break;
        case "o":
          return "0";
          break;
        case "s":
          return "5";
          break;
        default:
          return letter;
      }
    })
    .join("");
}

const hackerSpeak3 = (str) => {
  const swap = { a: 4, e: 3, i: 1, o: 0, s: 5 };
  const codedMessage = (letter) =>
    swap.hasOwnProperty(letter) ? swap[letter] : letter;
  return str.split("").map(codedMessage).join("");
};
console.log(hackerSpeak3("this is an encoded message"));

const hackerSpeak4 = (str) => {
  const replacements = { a: "4", e: "3", i: "1", o: "0", s: "5" };
  return Object.entries(replacements).reduce(
    (acc, el) => acc.replace(el[0], el[1]),
    str.toLowerCase()
  ); //here str is the initial value
};
console.log(
  hackerSpeak4("this is an encoded message using reduce and replace")
);
console.log(hackerSpeak4("aeiosaeiosaeios")); //result is wrong: 43105aeiosaeios

//trying to fix issue fails without regular expressions:
const hackerSpeak5 = (str) => {
  const replacements = { a: "4", e: "3", i: "1", o: "0", s: "5" };
  console.log(Object.entries(replacements));
  console.log([...str.toLowerCase()]);

  let replacementArr = Object.entries(replacements);
  // return [...str].map();
};
console.log(
  hackerSpeak5("This is an encoded message using reduce and replace")
);

//what is trans?
function hackerSpeak6(str) {
  const trans = {
    a: 4,
    e: 3,
    i: 1,
    o: "0",
    s: 5,
  };
  return [...str].map((c) => trans[c.toLowerCase()] || c).join("");
}
console.log(hackerSpeak6("this is an encoded message using trans"));

//what is get? and Map?
function hackerSpeak8(str) {
  const dict = new Map([
    ["a", 4],
    ["e", 3],
    ["i", 1],
    ["o", 0],
    ["s", 5],
  ]);
  return str
    .split("")
    .map((s) => (dict.has(s.toLowerCase()) ? dict.get(s) : s))
    .join("");
}
console.log(hackerSpeak8("this is an encoded message using get and Map"));

let numb = "2345";
console.log(numb[3] % 12);
