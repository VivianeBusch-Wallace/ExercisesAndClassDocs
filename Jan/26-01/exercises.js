console.log("----exercise1----");
// Write a function that returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"

const twoFor = (person = "you") => {
  return `Two for me one for ${person}.`;
};
console.log(twoFor("Fran"));
console.log(twoFor());

console.log("----exercise2----");
// Write a function that it still calculates the power of a number even if the exp argument is not passed to it.
// The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9

const exponent = (x, y = 2) => Math.pow(x, y); //instead of Math.pow you can also use: x ** y;
console.log(exponent(3, 3));
console.log(exponent(3));

console.log("----exercise3----");
// Write a function that returns the total amount of arguments passed to it.
// e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1

const howManyArgs = (...args) => {
  return args.length;
};
console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));

console.log("----exercise4----");
// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70

// const sum = (...args) => {
//   const addition = args.reduce((acc, cval) => {
//     return acc + cval;
//   });
//   return addition;
// };

//shorter form
const sum = (...args) => {
  return args.reduce((acc, cur) => acc + cur);
};

console.log(sum(1));
console.log(sum(1, 15));
console.log(sum(25, 25, 20));

console.log("----exercise5----");
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14

const average = (...args) => {
  const addition = args.reduce((acc, cval) => {
    return acc + cval;
  });
  return addition / args.length;
};

console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));

// console.log("----exercise----");
console.log("----Camel Case exercise with .map----");
// cool_fun -> coolFun

const toCamelCase = (str) => {
  let strToArr = str.toLowerCase().split("_");
  let result = strToArr.map((item, i) =>
    1 > i ? item : item[0].toUpperCase() + item.slice(1)
  );
  return result.join("");
};
console.log(toCamelCase("cool_fun_things"));

console.log("----exercise Hacker Speak----");
// hackerSpeak
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
//  NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:
// * hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// * hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// * hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// const hackerSpeak = (str) => {
//   const strArr = str.toLowerCase().split("");
//   const hacker = strArr.map((chr) => {
//     switch (chr) {
//       case "a":
//         return "4";
//       case "e":
//         return "3";
//       case "i":
//         return "1";
//       case "o":
//         return "0";
//       case "s":
//         return "5";
//       default:
//         return chr;
//     }
//   });
//   return strArr.join("");
// };
// console.log(hackerSpeak("javascript is cool"))
// something

const hackerSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "e":
          return "3";
        case "i":
          return "1";
        case "o":
          return "0";
        case "s":
          return "5";
        default:
          return chr;
      }
    })
    .join("");
};
console.log(hackerSpeak("javascript is cool"));

console.log("----exercise Odds And Evens----");
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

const OddsAndEvens = (numberArr) => {
  const map = numberArr.map((numbs) => {
    if (numbs % 2 == 0) {
      numbs--;
    } else {
      numbs++;
    }
    return numbs;
  });
  //   console.log(map);
  return map;
};
console.log(OddsAndEvens([3, 5, 2, 4]));
console.log(OddsAndEvens([6, 9, 10, 20]));

//from Notes:
// const oddOrEven = (arr) => {
//     let currentValue;
//     for (let i = 0; i < arr.length; i++) {
//       currentValue = arr[i];
//       if (currentValue % 2) {
//         console.log(currentValue - 1);
//       } else {
//         console.log(currentValue + 1);
//       }
//     }
//   };
//   oddOrEven([3, 5, 2, 4]);

console.log("----exercise character count----");
// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1

const howManyStr = (str, char) => {
  const strArr = str.toLowerCase().split("");
  const filteredStr = strArr.filter((chr) => chr == char);
  return filteredStr.length;
};
console.log(howManyStr("I live pizza", "p"));
console.log(howManyStr("You got lots of p-p-peezzass.", "p"));
