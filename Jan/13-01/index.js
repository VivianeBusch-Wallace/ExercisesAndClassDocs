// 11. XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false

const isEqualNumXandO = (str) => {
  let newStr = str.toLowerCase();
  let result = str.split("");
  console.log(result);
  let countX = 0;
  for (let i = 0; i < newstr.length; i++) {
    if (newStr[i] == "o" || "x") {
      countX++;
    }
  }

  //   for (let i = 0; i < str.length; i++) {
  //     if (result.includes("x" || "o")) {
  //     }

  //     return;
  //   }
};

//must make everything lowercase because

//Notes
// const countOccurrences = (str, letter) => {
//     //let result = str.split("");
//     //console.log(result);
//     // let counter = 0;
//     // for (let i = 0; i < result.length; i++) {
//     //   if (result[i] == letter) {
//     //     counter++;
//     //   }
//     // }
//     let result = str.split(letter).length - 1;

//     return result;
//   };

console.log(isEqualNumXandO);
