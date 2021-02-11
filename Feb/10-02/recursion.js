//recursion
//factorial example
const factorial = (num) => {
  if (num == 1) {
    return 1; //does not return 1 in the end, this is just a way of writing
  }
  return num * factorial(num - 1);
};
console.log(factorial(7));
//recursion is faster than a loop

//deep copy using recursion
//needs 2 years to do this one by yourself
function deepCopy(obj) {
  if (typeof obj == "object") {
  } else if (typeof obj == "array") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  }
  return obj;
}
const deepClonedCopy = deepCopy([{ name: "Hadi" }, { name: "Zain" }]);
console.log(deepClonedCopy);

//practice:
// Scrabble. Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.
// Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

let scrabbleTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const scrabbleScore = (arr) => {
  const maxScore = arr
    .map((item) => item.score)
    .reduce((acc, cur) => acc + cur, 0);
  return maxScore;
};
console.log(scrabbleScore(scrabbleTiles));

//only with reduce:
const scrabbleScore2 = (arr) => {
  const maxScore = arr.reduce((acc, cur) => acc + cur.score, 0);
  //   .reduce((acc, cur) => acc + cur);
  return maxScore;
};
console.log(scrabbleScore2(scrabbleTiles));

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {“John”: name, “teacher”: job}
// const switchKeysAndValues = (obj) => {
//   let values = Object.keys(obj);
//   let keys = Object.values(obj);
//   let switched = keys.map((item)=>);
//   return result;
// };
// console.log(switchKeysAndValues(person));

// Hadi's solution:
const switchKeysAndValues2 = (obj) => {
  let newObj = {};
  for (let prop in obj) {
    newObj[obj[prop]] = prop;
  }
  return newObj;
};
console.log(switchKeysAndValues2(person));

// 5. Return Keys and Values. Write a program that takes an object and
// returns an array which contains two arrays: one for the keys of the object and
// the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
console.log("keys and values in one array:");
const arrayProperties = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let result = [].concat(keys, values);
  return result;
};

console.log(arrayProperties({ a: 1, b: 2, c: 3 }));
console.log(arrayProperties({ key: true }));
//not quite achieved, the array is not nested

const arrayProperties2 = (obj) => {
  let keys = Object.keys(obj);
  //   console.log(keys);
  let values = Object.values(obj);
  let result = [keys, values];
  return result;
};

console.log(arrayProperties2({ a: 1, b: 2, c: 3 }));
console.log(arrayProperties2({ key: true }));

//side info:
//interview question:
//"how can I create a new card"
//we call this an issue, but they call it a card.

//for my profile on github:
//age function:
const myAge = () => {
  let age = new Date().getFullYear() - 1990;
  return age;
};
console.log(myAge());
