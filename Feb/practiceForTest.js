//LOOPS
/*
My beginner questions and problems when I first learned about loops:
* "How does the loop know what to loop?" (--> it's in the scope (= what's inside the curly brackets), silly)
* I had trouble understanding why the condition was "i  <  'number of iterations' " in the for loop and not "i <= 'number of iterations' " (--> well, it depends on what you want to achieve, but remember that the index of your array always starts with 0, ALWAYS!
Example:
let array = ["a", "b", "c"]  //--> iterations needed: 3, index: 0,1,2)
* where you put console.log matters a lot (--> remember the order in which JS code is processed!)
* also remembering what the value looks like after each iteration (--> it gets easier to recognize with practice, when in doubt write it out for each round)
* "What is an iteration?" because I am not a native English speaker this wasn't a word I used often (--> iteration = loop, verb: to iterate)
* declaring a new variable to push into, somehow this never felt natural (also gotta put it outside and above the loop)
* resetting a loop, I always forgot that and then wondered why it didn't do what I wanted
* upside down pyramid, that's a SOB I couldn't crack myself
*/
//Practice loops with shapes:
// shape wanted:
// +
// ++
// +++
// ++++
// +++++

let shape = ""; //shape has to be assigned to something, otherwise it will output an initial undefined
for (let i = 0; i < 5; i++) {
  shape += "+";
  console.log(shape);
}
console.log(shape); //only outputs last iteration's result!

// shape wanted:
// +++++
// ++++
// +++
// ++
// +

//wrong way:
shape = "";
for (let i = 5; i >= 0; i--) {
  shape += "+"; //no matter which index number "+" will always be added in every round
  console.log(shape);
}

shape = "";
for (let i = 5; i >= 0; i--) {
  shape -= "+"; //NaN because "+" cannot be deducted from anything
  console.log(shape);
}

shape = "+++++";
for (let i = 5; i >= 0; i--) {
  shape -= "+"; //NaN because "+" cannot be deducted from anything
  console.log(shape);
}

//practice loops - for loop, while loop, do loop, for ... of, for ... in

//while loop:
//while loop needs variable i assigned to sth before it runs the loop
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
//source: https://www.w3schools.com/js/tryit.asp?filename=tryjs_while

i = 0;
while (i < 10) {
  // console.log(i); //where you put the console.log matter because if it is here, then it ignores the skip from continue
  i++;
  if (i === 5) continue; //this skips value 5
  // console.log(i); //with console.log here it skips 5 BUT i === 8 will still result with 8
  // also note that the list now starts with 1 and not with 0 because console.log is printed after i++
  if (i === 8) break;
  console.log(i);
}

//for of loop:
const names = ["John", "Mary", "Bobby", "Dean", "Sam"];
for (name of names) {
  console.log(name);
}

//for in loop:
const user = { firstName: "Nancy", lastName: "Drew" };
for (key in user) {
  // console.log(user.key); //here it has to be bracket notation!!!
  console.log(user[key]);
}

//infinite loops:
//https://edabit.com/challenge/4iCsexZgmDEMMxj46
// function printArray(number) {
//   var newArray = [];

//   for (var i = 1; i <= number; ) {
//     newArray.push(i);
//   }

//   return newArray;
// }
// console.log(printArray(3));

// fixed infinite loop:
function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    //just added i++
    newArray.push(i);
  }

  return newArray;
}
console.log(printArray(3));

//using reduce:
function printArray2(number) {
  let result = "something"; //unfinished
}
console.log(printArray2(3));

const printArray3 = (n) => Array(...Array(n)).map((v, i) => i + 1);
console.log(printArray3(3));

//what is keys? why slice(1) here???
const printArray4 = (num) => [...Array(num + 1).keys()].slice(1);
console.log(printArray4(3));

const printArray5 = (n) => Array(n).fill``.map((_, i) => i + 1);
console.log(printArray5(3));

const printArray6 = (n) => new Array(n).fill("").map((el, i) => i + 1);
console.log(printArray6(3));

const printArray7 = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(printArray7(3));

//n tables + 1
function nTablesPlusOne(n) {
  return n++;
}
console.log(nTablesPlusOne(7));

//.map()
// You shouldn't be using map if:
// you're not using the array it returns; and/or
// you're not returning a value from the callback.

console.log("----------recursion----------");
//recursion:
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
  return "You can have a fall back return if you have no 'else'";
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
//At first, this seems counterintuitive since the value of n decreases,
//but the values in the final array are increasing. This happens because
//the push happens last, after the recursive call has returned. At the point
//where n is pushed into the array, countup(n - 1) has already been evaluated and
//returned [1, 2, ..., n - 1].

function countup2(n) {
  if (n < 1) {
    return [];
  } else {
    let countArray = []; //have to make it a let not a const here!
    countArray.push(n); //value 5 is excluded from result because push comes before recursion call and then is replaced with rest of recursion???
    countArray = countup(n - 1);
    return countArray;
  }
  return "You can have a fall back return if you have 'else', too";
}
console.log(countup2(5)); // [ 1, 2, 3, 4]

//counting down fail:
function countDown1(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n - (n - 1));
    return countArray;
  }
}
console.log(countDown1(5)); //why is the result [ 1, 2, 3, 4, 1 ]??????? where does the 1,2,3,4 come from?

function countDown2(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n + 1); //again only does this to the first n, WHY???
    return countArray;
  }
}
console.log(countDown2(5));

//counting down with recursion:

// Redo the following exercises: count vowel

console.log("--------return array of type--------");
//From Edabit:
//https://edabit.com/challenge/QWmvQsrSuQRmEN8ne
function arrayValuesTypes(arr) {
  return arr.map((eachElement) => typeof eachElement);
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(
  arrayValuesTypes(["214", true, false, 2, 2.15, ["value1", "value2"], null])
);
console.log(
  arrayValuesTypes([
    undefined,
    {},
    function () {
      let x = 10;
    },
    [],
    null,
  ])
);

console.log(typeof []);
console.log(typeof null);

//binary code:
//Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100
let binary = 10;
console.log(binary.toString(2));

function binaryConverter(integer) {
  return integer.toString(2);
}
console.log(binaryConverter(44));

const binaryConverter2 = (integer) => integer.toString(2);
console.log(binaryConverter2(20));
console.log(binaryConverter2(10));
console.log(binaryConverter2(44));

console.log(binaryConverter2(-10));

//striking idea for Chinese zodiac:
console.log(1900 % 12);
console.log(1901 % 12);
console.log(1912 % 12);
console.log(1911 % 12);
console.log(1908 % 12);

//Objects:

//https://edabit.com/challenge/7hrjegxToTSF4zAoM
function sayWhat(obj) {
  // return `${Object.values(obj).join(" ")} ${obj[2]}`;

  // return Object.values(obj).join(" ").concat(` ${obj[2]}`);

  let a = Object.values(obj);
  a.push(a[1]);
  return a.join(" ");
}
const sayWhat2 = (obj) => [1, 2, 3, 2].map((i) => obj[i]).join(" "); //pretty cool

const sayWhat3 = (obj) => {
  let arr = Object.values(obj);
  return [...arr, arr[1]].join(" ");
};

console.log(sayWhat3({ 1: "Mommy", 2: "please", 3: "help" }));
