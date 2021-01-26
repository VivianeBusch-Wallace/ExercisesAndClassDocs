//how to declare an array
const arr1 = []; //1st way
//when we think of new array we automatically think .push()
arr1.push("Hi");
console.log(arr1);
const arr2 = ["Good", "day"];
//new method for a new array
const arr3 = new Array(); //can also put values into the round brackets
arr3.push("cool");
console.log(arr3);

//with .of()
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);

// .sort()
// to sort the elements in an array
// will use the UTF-16 code (= all characters of all languages)
let alphabet = ["c", "b", "d", "a", "z", "A", "1", "C", "5"];
let newSortedAlpha = alphabet.sort();
console.log(newSortedAlpha);

// .reverse()
// to reverse an array
// aka first is last and last is first
let crazyOrder = ["d", "b", "c", "a"]; // also works on numbers
let crazyOrderRev = crazyOrder.reverse();
console.log(crazyOrderRev);

let crazyWords = ["live", "aberkanal", "recording"];
let crazyWordsRev = crazyWords.reverse();
console.log(crazyWordsRev);

// .isArray()
// true or false
let bool = Array.isArray([]); // the array to be checked goes into parentheses
console.log(bool);
console.log(Array.isArray(crazyWordsRev));

// .lastIndexOf()
// will start searching backwards and only give the position of the last element in the array
// -1 means nothing has been found
// .indexOf() only shows the very first thing it finds
const arr4 = ["go", "Home", "we", "I", "We", "we"];
console.log(arr4.lastIndexOf("we"));
console.log(arr4.lastIndexOf()); // it is looking for nothing, so -1
console.log(arr4.lastIndexOf("home")); //case sensitive!
let stringy = "let me know if this works"; //also works on strings
console.log(stringy.lastIndexOf("me")); // will only print out the position of first letter of the word

// .fill()
// (what, from, to) => (0,2,3)
// replaces values that are already there
let arr5 = [22, 34, 6];
let newArr5 = arr5.fill(101, 2, 3); //will only replace
console.log(newArr5);
console.log(arr5); //.fill creates a reference, not a copy
newArr5 = arr5.fill(55, 2, 6); // will only replace the positions that are already there
console.log(newArr5);
console.log(arr5.fill("a", 0, 1));
console.log(arr5.fill(crazyWords, 0, 4)); //can also replace with an array

const arrA = new Array(20).fill(5);
console.log(arrA);
// const arrB = new Array(20).fill().map(()); // not finished
// console.log(arrB);

// console.log(stringy.fill("HAHAHA", 5, 11)); // does not work

//LOOPS
console.log("---do loop---");
// do loop
// it will first do do and then look at the condition
let counter = 0;
do {
  console.log(counter); // Remember: the output changes according to where you put console.log!!!
  counter++;
} while (counter <= 10);

counter = 4000; // do will do it at least once, even if the condition is wrong
do {
  console.log(counter);
  counter++;
} while (counter <= 10);
//!!!practice this with nested loops!!!

// while loop
console.log("---while loop---");
let loopOne = 0;
while (loopOne < 5) {
  loopOne++;
  console.log(loopOne);
}
console.log("---for loop---");
// for loop
let counter2 = 0;
for (let i = 0; i < 5; i++) {
  counter2++;
  console.log(counter2);
}

//loop practice:
let numbs = 0;
do {
  numbs++;
  console.log("The numbers being added by 1 are:");
  console.log(numbs);
} while (numbs <= 10);
console.log("The sum of numbs is");
console.log(numbs); //just prints last output from loop
