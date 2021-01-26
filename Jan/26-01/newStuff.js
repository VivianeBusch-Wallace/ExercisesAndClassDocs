const userPrint = (name, add, age) => {
  console.log(`Hi ${name}, your address ${add}, your age ${age}`);
};
userPrint("Hadi", "Berlin", 31);

// parameters: Naming and order
// when you call the function you have to put in the values in the same order as parameter

// default value
const helloUser = (userName = "Zain") => {
  //this is a default value, for ex. in case the user did not put in anything
  console.log(`Hi ${userName}.`);
};
helloUser("HadiUsername");

// Spread syntax ...
const arr = ["Hi", "I", "you"]; //this is const for arr itself, not for values
// ...array
const cloneArr = [101, ...arr, "super nice"]; // that is why the values can be changed
cloneArr[0] = "cool";
console.log(cloneArr);
console.log(arr);
// ...args
const sum = (x, y) => x + y;
console.log(sum(2, 4));
const printFunThingsToDo = (userName, age, ...arr) => {
  //it will automatically make the arguments from arr an array when you print them out because of spread syntax
  console.log(arr);
  console.log(`Hi ${userName} I am ${age}, you like ${arr}`);
  console.log(`Hi ${userName}, you are ${age}, you like ${arr[0]}.`);

  console.log(userName, age, ...arr);
};
printFunThingsToDo(
  "Hadi",
  31,
  "Coding",
  "Cooking",
  "Do fun things",
  "Cool draws"
);

// const numbers = (...nums) => {
//   console.log(nums[nums.length - 1]);
// };
// numbers(2, 4, 5, 67, 7, 8, 3);

// cool functions
//only works with old school funct
//this is called self-invoked function
//immediately executed
(function printMyName(x, y) {
  console.log(`Hi I am cool function ${x + y}`);
})(2, 3);

// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`
// map is a call back function, it needs another variable
// map
const books = ["One Day", "Book Name 1", "Book Name 2"];

const printBook = books.map((item, index) => `${index}.title ${item}`); //the inside function of map is called anonymous function
console.log(printBook);

const bookTitles = books.map((title, index) => `${title} has index ${index}`);

const numbers = ["1", "2", "3"].map((item) => parseInt(item));
console.log(numbers);

const printMany = [1, 2, 3, 4].map((item) => console.log("hi")); //just prints out hi according to array.length
const printMany2 = [1, 2, 3, 4].map((item) => console.log(item));
//is there a way to loop it negatively like i--?
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

console.log("----reduce----");
//reduce
// Getting a in single output value
// reduce loops and adds each value to the accumulator
const reducer = (acc, curV) => acc + curV; //you can change the name but you cannot switch the order of accumulator and currentValue
// const resultArr = [2, 3, 1, 3].reduce(reducer);
const resultArr = [2, 3, 1, 3].reduce(reducer, 10); //10 is my initial value of the accumulator
console.log(resultArr);
// it is called reduce because it reduces the array into one single value
// you can use any math between the accumulator and currentValue

// .filter
// - Getting an array with items that aline with your condition:
// `Array.prototype.filter(<function>)`
const names = ["Zain", "Nancy", "Olga", "Leonard"];
const filteredArr = names.filter((name) => name.length > 4);
// const filteredArr = names.filter((name) => name[4]);// is this the same as name.length > 4???
console.log(filteredArr);
// filter will always come back as an array

const numbies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbies = numbies.filter((numbs) => numbs > 5);
console.log(filteredNumbies);

// .find
// - Getting a the first item that aligns with your condition :
// `Array.prototype.filter(<function>)`

const coolNumbers = [1, 2, 43, 5, 6, 7];
const biggerThanFive = coolNumbers.find((num) => num > 5);
console.log(biggerThanFive);

const foundNumbies = numbies.find((numbs) => numbs > 5);
console.log(foundNumbies); // this is 6 because the first value bigger than 5 is 6
// find only grabs the first value that applies to the condition

//These methods are called advanced array methods

//  Maybe more 😏
