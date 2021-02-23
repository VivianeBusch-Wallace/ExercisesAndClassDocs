// Cool discoveries I found on the web or somewhere else:

//to check if an array only has same values:
let array1 = [1, 1, "1", 1];
let firstNum = array1[0];
console.log(array1.every((currentValue) => currentValue == firstNum));
// output: true
array1 = [1, 2, 1, 1];
firstNum = array1[0];
console.log(array1.every((currentValue) => currentValue == firstNum));
// output: false

//sorting an array of objects by a property in the objects
//sort this list of T-Shirts alphabetically by their color
const tshirts = [
  { color: "black", size: "L" },
  { color: "red", size: "XL" },
  { color: "white", size: "XXL" },
  { color: "yellow", size: "S" },
  { color: "blue", size: "M" },
];
tshirts.sort((a, b) => {
  if (a.color > b.color) {
    return 1;
  } else {
    return -1;
  }
});
console.log(tshirts);

//trying to sort by size
//idea: add property of numbers with switch case for size, then sort, then delete num property, return result

//.reduceRight()
//starts from the end and goes to the beginning
//source:fireship youtube: reduce in 100 seconds
const orders = [
  { item: "pen", price: 1.2 },
  { item: "pencil", price: 0.5 },
  { item: "scissors", price: 2.3 },
];
let total = orders.reduceRight((acc, currentOrder) => {
  return acc + currentOrder.price;
}, 0);
console.log(total);

//short circuit evaluation with ||
// The logical OR expression is evaluated left to right, it is tested for possible "short-circuit" evaluation using the following rule:
// (some truthy expression) || expr is short-circuit evaluated to the truthy expression.
// Short circuit means that the expr part above is not evaluated
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)
// A() is completely ignored

// Switching words in a string
// The following script switches the words in the string. For the replacement text, the script uses capturing groups and the $1 and $2 replacement patterns.
let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr); // This logs 'Smith, John'.

const passGeneration = () => {
  let password = "";
  let possibleletters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*".split(
    ""
  );
  for (let i = 0; i <= possibleletters.length; i++) {
    password +=
      possibleletters[Math.floor(Math.random() * possibleletters.length)];
  }
  return password.substring(0, 30);
};
console.log(passGeneration());

console.log("ak#P1PWPGXt5A0fO#ZtPY@O36IWwtO".length);
