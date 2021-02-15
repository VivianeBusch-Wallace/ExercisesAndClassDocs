console.log(">>>>>>>>>>>>>>>>>CHAPTER/FILENAME<<<<<<<<<<<<<<<<<");
console.log("================BIG TITLE=================");
console.log("------------------Title------------------");
console.log("****************************DATE*****************************");

console.log("****************************26-01*****************************");
console.log(">>>>>>>>>>>>>>>>>newstuff.js<<<<<<<<<<<<<<<<<");

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
  // - Getting an array with items that align with your condition:
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
  
  console.log("****************************26-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>exercises.js<<<<<<<<<<<<<<<<<");
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
  
  console.log("****************************21-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>functions.js<<<<<<<<<<<<<<<<<");

// another way to write a function
const sum = function (x, y) {
    // sum is the function name here
    return x + y;
  };
  
  // Call Stack
  // invoke the function = another name for calling the function
  // "call stack" function with lots of other stuff inside?
  
  const login = () => {
    //some things
    halloUser;
    // more things
    return;
  };
  
  const halloUser = () => {
    return `Hey, welcome back.`;
    return;
  };
  
  login();
  
  // this is a call stack, it is asynchronous
  // before I can call my login func out of the call stack
  // my halloUser func needs to be executed,
  // then more things from the login func have to happen
  
  // the halloUser func is an extra function because maybe I
  // need to use it outside the login function, maybe inside another func
  
  // if you wanna call your function before you declare it
  // then you need to write it the old fashioned way with 'function'
  
  // for the V8 engine you can call up to 1000 entangled functions
  // don't create catch 22 functions!!! where one func calls the other and vice versa = infinity call stack
  // might break computer/nodemon --> "maximum call stack exceeded"
  
  //.map
  // method for loops, it is a loop
  const names = ["Zain", "Olga", "Nancy"];
  const newArr = names.map((name, i) =>
    console.log(`This ${name} has index ${i}.`)
  );
  // everything inside map is like a function
  // map will always come back as an array
  
  // !!!Remember: if we write funct with curly brackets, we need return
  // if it is only one line, then we don't need curly brackets!!!
  
  //.reduce()
  const numArr = [1, 2, 34, 5, 66];
  const reducer = numArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  console.log(reducer);
  
  const reduc = numArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    100 //this is an initial value
  );
  console.log(reduc);
  // the accumulator is like the basket with the apples(values from array)
  
  // break;
  // breaking out of a loop
  /*
  T
  TT
  TTT
  TTTT
  */
  let Tbox = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 3; j++) {
      if (i == j) {
        break;
      } else {
        Tbox += "T";
        console.log(Tbox);
      }
    }
  }
  
  for (let i = 0; i <= 5; i++) {
    Tbox += "*";
    console.log(Tbox);
  }
  
  // continue;
  // skipping an interation
  // is like i++
  
  var arr = [1, 2, 3];
  var max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  console.log(function(null, max));
  
  console.log("****************************20-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>arrayMethods2.js<<<<<<<<<<<<<<<<<");

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

console.log("****************************19-01*****************************");
console.log(">>>>>>>>>>>>>>>>>arrays.js<<<<<<<<<<<<<<<<<");

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

console.log("****************************18-01*****************************");
console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");

// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula:
// BMI = mass / (height * height). (mass in kg, i.e. 72.5,
// and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.

let markHeight = 1.65;
let markMass = 72.5;
let johnHeight = 1.85;
let johnMass = 103.6;

// Calculate both their BMIs and store their BMIs in variables.

const BMI = (mass, height) => {
  let BMindex = mass / (height * height);
  console.log(BMindex.toFixed(2));
  return BMindex;
};

let mark = BMI(markMass, markHeight);
let john = BMI(johnMass, johnHeight);
// Create a boolean variable containing information about whether
// ternary operator is wrong here?
// mark > john
//   ? console.log(
//       `Is Mark’s BMI higher than John’s? Why yes, it’s ${mark.toFixed(
//         2
//       )}, it is`
//     )
//   : console.log(
//       `“Is Mark’s BMI higher than John’s? Why no, it’s only ${mark.toFixed(
//         2
//       )} and John's BMI is ${john.toFixed(2)}.`
//     );

//boolean:
let bool = mark > john;

// Mark has a higher BMI than John.
markMass = 130.9;
markHeight = 1.56;
johnMass = 65.4;
johnHeight = 1.95;
BMI(markMass, markHeight);
BMI(johnMass, johnHeight);
console.log(mark);
console.log(john);
// Print a string to the console containing the variable
// from step 3 using string interpolation.
// (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
console.log(
  `Is Mark's BMI higher than John's? No, it's ${bool}. Mark's BMI is lower than John's with a BMI of ${mark}.`
);

// Create an if statement which prints the name and
// BMI of the person with the highest BMI.

if (mark > john) {
  console.log(`Mark's BMI is the highest with a BMI of ${mark.toFixed(2)}.`);
} else {
  console.log(`John's BMI is the highest with a BMI of ${john.toFixed(2)}.`);
}

// More conditions
// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”. If the age is equal to or more than 13
// and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30,
// then print “firstName is a young adult”. If none of these conditions apply,
// print “firstName is a adult”.

console.log("-------Exercise Capitalize----------");
// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
let names = ["matt", "sara", "lara"];
let names2 = ["samuel", "MARIA", "luke", "mary"];

const capitalFirstLetter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let change = arr[i][0].toUpperCase();
    let change2 = change + arr[i].substring(1).toLowerCase();
    console.log(change2);
  }
  return;
};
capitalFirstLetter(names);
capitalFirstLetter(names2);
capitalFirstLetter(["Cynthia", "Karen", "Jane", "Carrie"]);

// City Names.
// Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.

let city = ["Berlin", "Paris", "Prague", "Rome"];
let output = "";
for (i = 0; i < city.length; i++) {
  if (city.length - 1) {
    output = city[i] + ".";
  } else {
    output += city[i] + ", ";
  }
}
console.log(output);
//still have to fix the punctuation issue

// Hello
// Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend.
// Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
let ffamily = ["Papa", "Mama", "sister", "grandma", "friend1", "friend2"];
output = "";
let output2 = "";
for (i = 0; i < ffamily.length; i++) {
  output += `Hello ${ffamily[i]}! `;
  if (ffamily.length - 1 == i) {
    output2 += `${ffamily[i]} is at index ${i}.`;
  } else {
    output2 += `${ffamily[i]} is at index ${i}, `;
  }
}
console.log(output);
// Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array,
// Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.
// Odds and Evens.
console.log(output2);
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

let num = [3, 5, 2, 4];
output = "";
for (i = 0; i < num.length; i++) {
  output = "";

  if (num[i] % 2 == 0) {
    num[i] = num[i] - 1;
  } else {
    num[i] = num[i] + 1;
  }
}
console.log(num);

//practice - ignore below

let arrayName1 = ["matt", "sara", "lara"];
let str1 = "";
for (let i = 0; i < arrayName1.length; i++) {
  str1 = arrayName1[i][0].toUpperCase() + arrayName1[i].substring(1);
  console.log(str1);
}
// let join = str1.join(", ");
//why is this not working???

const fromArrToStr = (str) => {
  return str.join(", ") + ".";
};
console.log(fromArrToStr(["Berlin", "Paris", "Prague", "Rome"]));

//switch

let color = "red";
switch (color) {
  case "pink":
    isLoged = false;

    // more code
    console.log("cool this is pink");
    break;
  case "red":
    console.log("cool this is red");
    break;
  case "white":
    console.log("cool this is white");
    break;
  default:
    console.log("sorry you need to enter a color");
}
// more
let userKidsNumber = 12;

switch (userKidsNumber) {
  case 1:
    console.log("You are new parent with 1 child");
    break;
  case 1:
    console.log("You are new parent with 1 child");
    break;
  case 2:
    console.log("You have 2 kids nice ");
    break;
  case 3:
    console.log("You have 3 kids nice ");
    break;
  case 4:
  case 5:
  case 6:
    console.log("You have many kids nice ");
    break;
  default:
    console.log("Cool you are happy parent :) ");
}

//practicing switch

// exrecise: you have an online clothes store,
// you have everything but you still need to give the buyer the option to choose the clothes in
// different colors. Let them check if the color of the clothes they chose is still available.
// use switch for this
// dress colors avaibale: black, blue, beige, red
// ex if the customer wants to buy a black dress:
// let dress = "black"; --> Message "Great choice! We still have it in our store, order now!"

let dress = "black";
switch (dress) {
  case "black":
  case "blue":
  case "beige":
  case "red":
    console.log("Great choice! We still have it in our store, order now!");
    break;
  default:
    console.log(
      "Sorry, we don't have this color in stock. :( Please choose another color."
    );
}

//declare a variable assign value of Monday to it using switch return
//if the day was matched with Monday return first day of the week.

let dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("Today you have to go to work. Have a nice Monday!");
    break;

  case "Tuesday":
    console.log(
      "Today is a great day to start exercising! Have a great Tuesday!"
    );
    break;

  case "Wednesday":
    console.log("Today is a great day to be creative! Have a great Wednesday!");
    break;

  case "Thursday":
    console.log(
      "Today is a great day to learn a new skill! Have a great Thursday!"
    );
    break;

  case "Friday":
    console.log(
      "Almost there! Today is a great day to review what you have learned! Have a great Friday!"
    );
    break;
  default:
    console.log(
      "Great! You have nothing to do today! This means it's the weekend, yay!"
    );
}

//Playing with combining switch with arrays

let weekday = ["Monday", "Tuesday", "Wednesday"];
let weekday1 = weekday[0];
weekday1 = weekday[1];
// weekday = "Wednesday"; //case "Wednesday" works
// weekday = weekday[0]; //case weekday[0] also works
switch (weekday1) {
  case weekday[0]: //directly from an array, it does not work
    console.log(`It is a weekday.`);
    break;
  default:
    console.log(`It is not a day.`);
}

console.log("****************************18-01*****************************");
console.log(">>>>>>>>>>>>>>>>>appGame.js<<<<<<<<<<<<<<<<<");
//left this out because unnecessary

console.log("****************************18-01*****************************");
console.log(">>>>>>>>>>>>>>>>>loops.js<<<<<<<<<<<<<<<<<");


  // the for loop
// for loop has a scope (curly brackets)
// make sure your conditions in the round brackets is true
// otherwise it will not run at all
// the incrementing part happens at the end of the loop
// if i does not do i++ then add it at the end of the loop
// you can do anything with i as long as it is an integer and a number
// no decimals!
// several ifs (not nested) will be "incremented", each if will be printed out for the same i even if the conditions overlap
// everything inside the curly brackets will be repeated several times (i times)
let text = "";
for (let i = 0; i < 5; i++) {
  text = "";
  for (let j = 0; j < i; j++) {
    // text += j;
    // console.log(text);
  }
  console.log(text);
}

// the repeat method only belongs to console.log

//weird thing from angelos:
// he is trying to find the longest word
// test test
const longestWord = (mrstring) => {
  let thatword;
  let makeitalist = mrstring.split(" ");
  //console.log(makeitalist.length);
  for (let i = 0; i < makeitalist.length; i++) {
    if (makeitalist[i++].length < makeitalist[i].length) {
      thatword = makeitalist[i++];
      // console.log(makeitalist[i]);
      return thatword;
    } else {
      return "sorry, I hate you";
    }
  }
};
console.log(longestWord("this issssssssssss aaaaaaa web development course"));

console.log("****************************14-01*****************************");
console.log(">>>>>>>>>>>>>>>>>manual.js<<<<<<<<<<<<<<<<<");

let names = ["Hadi", "Susi", "Lotty"];

console.log(Math.floor(Math.random() * names.length));
console.log(names.length);

let b = Math.random();
let c = names.length;
let f = (funnyThing) => {
  let d = b + 10;
};

console.log(b);
console.log(c);
console.log(f);

console.log(names[names.length - 1]);
console.log(names[names.length - 2]);
console.log(names[names.length - 3]);

// test console.log inside if inside a function which is being printed out. will it print console.log?

console.log("****************************13-01*****************************");
console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");

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
  
  console.log("****************************12-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");
  
  console.log("--------Exercise isLEQZero -------");
  // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
  // Examples:
  
  // isLEQZero(3) ➞ false
  // isLEQZero(0) ➞ true
  // isLEQZero(-4) ➞ true
  // isLEQZero(10) ➞ false
  
  function isLEQZero(numb) {
    if (numb <= 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
  isLEQZero(0);
  isLEQZero(3);
  isLEQZero(-5);
  
  //Alternative:
  
  const isEQZero = (num) => {
    return num <= 0;
  };
  console.log(isEQZero(3));
  
  console.log("--------Exercise dog years -------");
  
  //  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
  //PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
  // Example:
  // dogAge(4) ➞ "Your doggy is 28 years old in dog years!"
  
  const dogAge = (humanYears) => {
    dogYears = humanYears * 7;
    console.log(`Your doggy is ${dogYears} years old in dog years!`);
  };
  dogAge(4);
  dogAge(9);
  
  console.log("--------Exercise lifetime supply-------");
  
  // A Lifetime Supply...
  // You just won a lifetime supply of your favorite snack! The snack company needs
  // to calculate what that actually means and how much they need to give you over your "lifetime".
  // Create a function to help you calculate that amount for yourself to make sure you get the right amount.
  // The function should accept two arguments: person age and the amount he will eats per day. The function
  // should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.
  
  // Examples:
  // calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"
  // calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"
  
  function calcLifetimeSupply(actualAge, perDay) {
    let yearsLeft = 100 - actualAge;
    let knoppersSupply = yearsLeft * 365 * perDay;
    console.log(
      `The snack company should provide you with ${knoppersSupply} Knoppers, until you are a ripe old age of 100. Happy snacking!`
    );
  }
  calcLifetimeSupply(30, 4);
  calcLifetimeSupply(25, 2);
  calcLifetimeSupply(40, 3);
  
  console.log("--------Exercise months -------");
  //  Number to Month Name
  // Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
  // For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
  //  here are the months array as a small help :)
  //   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
  // Examples:
  // monthName(3) ➞ "March"
  // monthName(12) ➞ "December"
  // monthName(6) ➞ "June"
  
  const monthName = (m) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    console.log(months[m - 1]);
  };
  monthName(3);
  monthName(12);
  
  //stupid idea below:
  // const monthName = (month) => {
  //   for (let i = 0; i <= months.length) {
  //     month = i + 1;
  //   }
  //   if ((month = 1)) {
  //     console.log(months[0]);
  //   } else {
  //     if ((month = 2)) {
  //       console.log(months[1]);
  //     } else {
  //       if ((month = 3)) {
  //         console.log(months[2]);
  //       } else {
  //         if ((month = 4)) {
  //           console.log(months[3]);
  //         } else {
  //           if ((month = 5)) {
  //             console.log(months[4]);
  //           } else {
  //             if ((month = 6)) {
  //               console.log(months[5]);
  //             } else {
  //               if ((month = 7)) {
  //                 console.log(months[6]);
  //               } else {
  //                 if ((month = 8)) {
  //                   console.log(months[8]);
  //                 } else {
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // };
  
  // monthName(1);
  
  console.log("--------Exercise Ocurrences -------");
  // Try to do it by yourself and don't look in yesterday solution. I trust you :)
  // Count Occurrences.
  // Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
  
  // Example:
  
  // countOccurrences("this is a string", "i") ➞ 3
  
  const countOccurrences = (string, character) => {
    let stringToArr = string.split("");
    startCount = 0;
    for (i = 0; i < stringToArr.length; i++) {
      //not <= .length because i should be smaller
      if (stringToArr[i] == character) {
        startCount++;
      }
    }
    return startCount;
  };
  
  console.log(countOccurrences("this is a string", "i"));
  console.log(countOccurrences("This is a string and this is maddening.", "i"));
  
  //If frustrates me that I cannot use string.split("i").split("") to cut the pieces from split("i") further down
  
  console.log("--------Exercise shapes -------");
  /*  draw this shapes in your console
  First shape
  T
  TT
  TTT
  TTTT*/
  
  text = "";
  for (let i = 1; i <= 5; i++) {
    text = text + "T";
    console.log(text);
  }
  
  // Second shape
  // ****
  // ***
  // **
  // *
  
  let stars = "";
  for (let i = 5; i <= 5; i--) {
    for (let j = 1; j <= i; j++) {
      stars = stars + "*";
    }
  }
  console.log(stars);
  
  // text = "";
  // for (let i = 5; i >= 1; i--) {
  //   text = text + i;
  //   console.log(text);
  // }
  
  // text = "";
  // for (let i = 5; i >= 1; i--) {
  
  //   for (let i = 1; i <= 5; i++) {
  //     text = text + "+";
  //     console.log(text);
  //   }
  //   console.log(text);
  // }
  
  // Third shape
  // 1
  // 12
  // 123
  // 1234
  // 12345
  
  // my bad first solution:
  // text = "";
  // for (i = 1; i <= 5; i++) {
  //   text += i + "";
  // }
  // console.log(text.slice(0, 1));
  // console.log(text.slice(0, 2));
  // console.log(text.slice(0, 3));
  // console.log(text.slice(0, 4));
  // console.log(text);
  
  //Alternative better solution:
  
  text = "";
  for (let i = 1; i <= 5; i++) {
    text = text + i;
    console.log(text);
  }
  
  // orientation notes
  // text = "";
  // for (let i = 1; i <= 4; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     text += i + "";
  //   }
  // }
  // console.log(text);
  
  /*Bounce: Forth shape
  Be creative and show us your Artistic side
  */
  
  console.log("--------Exercise finish function-------");
  /*  Finish the following function so it outputs looks like this:
  1
  12
  123
  1234
  12345
  
   const numbersCount = () => {
    for (let i = 0; i <= 5; i++) {
      // something
      for (let j = 1; j <= i; j++) {
          // something
      }
        // something
    }
  };
  numbersCount();*/
  
  //___________coment out answer below, but not finished yet
  
  // const numbersCount = (digit) => {
  //   for (let i = 0; i <= 5; i++) {
  //     // something
  
  //     for (let j = 1; j <= i; j++) {
  //       // something
  
  //     }
  //     // something
  //     console.log(numbersCount(digit));
  //   }
  // };
  // numbersCount(1);
  
  //____________comment out answer above
  
  /*Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
    12345
    1234
    123
    12
    1
  */
  
  console.log("--------Exercise inventory -------");
  /* create a function should that checks if a store contains a specific product in it's inventory.
  for example:
  let storeArr= ["milk", "eggs", "cheese", "butter"];
  // try includes might help :)
  // Examples
  inventoryCheck("cheese") returns true
  inventoryCheck( "ham") returns false 
  */
  let storeArr = ["milk", "eggs", "cheese", "butter"];
  const inventoryCheck = (str) => {
    return storeArr.includes(str);
  };
  inventoryCheck("ham");
  
  console.log("--------Exercise password app-------");
  // Extra work :)
  // create a repo for this app. we are coming later to it :)
  // Create a program that generate a random password with the length of 30 character,
  // every time you call the function should give you a different password
  
  // Examples you will have other passwords for sure
  
  // passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
  // passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
  // passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
  
  const passwordGen = () => {
    let letterArr = ["a", "b", "c", "d", "e"];
    let numbArr = [];
    for (let i = 0; i <= 30; i++) {}
    return;
  };
  passwordGen();
  
  //not finished yet
  //need to capitalize letters
  //add special characters
  //length <= 30 characters
  //Math.Random || math.random index number?
  
  console.log("--------Exercise End-------");
  
  //need more time, I need to practice loops
  
  // //Notes
  // const
  // let text;
  // for (let i = 5; i >= 0; i--) {
  // text = "";
  // for (let j; j <= i; j++) {
  //   text += j;
  
  // }
  // console.log(text);
  // }
  
  console.log("****************************12-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>redoAssignments.js<<<<<<<<<<<<<<<<<");

// Create a function that takes a number.
// as its only argument and returns true .
// if it's less than or equal to zero,
// otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const monthName = (m) => {
    let yearmonths;
    if (m <= 12 && m > 0) {
      yearmonths = months[m - 1];
    } else {
      yearmonths = "Please, give a number between 1 and 12.";
    }
  
    return yearmonths;
  };
  
  // monthName(3);
  console.log(monthName(3));
  console.log(monthName(10));
  console.log(monthName(13));
  
  // Examples:
  
  // monthName(3) ➞ "March"
  //
  
  /* create a function should.
     that checks if a store contains a specific product.
      in it's inventory.
    for example:
    let storeArr= ["milk", "eggs", "cheese", "butter"];
    // try includes might help :)
    // Examples
    inventoryCheck("cheese") returns true
    inventoryCheck( "ham") returns false 
    */
  
  // A Lifetime Supply...
  // You just won a lifetime supply of your favorite snack! .
  //The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".
  // Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments:
  // person age and the amount he will eats per day.
  // The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.
  
  // Examples:
  
  // calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"
  
  // calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"
  
  /*
    Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
      12345
      1234
      123
      12
      1
    */
  
  // Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
  // PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
  
  // Example:
  
  // dogAge(4) ➞ "Your doggy is 28 years old in dog years!"
  
  // Count Occurrences.
  // Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
  
  // Example:
  
  // countOccurrences("this is a string", "i") ➞ 3
  
  // console.log(countOccurrences("this is a string", "i")); // 3
  // console.log(countOccurrences("xoxoxoxoxoxox", "x")); //7
  // console.log(countOccurrences("x", "Y")); // 0
  
  console.log("--------Exercise drawing-------");
  // draw these shapes in your console
  // First shape
  // T
  // TT
  // TTT
  // TTTT
  
  // Second shape
  // ****
  // ***
  // **
  // *
  
  let loopy = "";
  for (let i = 1; i <= 4; i++) {
    // loopy = i;
    // console.log(loopy);
    for (j = 1; j <= i; j++) {
      loopy += j;
      console.log(loopy);
    }
    //   console.log(loopy);
  }
  
  let stars = "";
  for (let i = 5; i >= 0; i--) {
    // loop for lines
    i < 5 ? (stars = stars + "\n") : null;
    for (let j = 1; j <= i; j++) {
      // loop for count of
      stars = stars + "*";
    }
  }
  console.log(stars);
  
  // let loopText = "";
  // for (let i = 1; i <= 4; i++) {
  //   loopText = "++++";
  
  //   for (let k = 1; k <= 5; k++) {
  //     let redLoopText = loopText.length - 1;
  //     return redLoopText;
  //   }
  
  //   console.log(redLoopText);
  // }
  
  // let str = "abcdefghij";
  // let subStr = str.substring(0, 5);
  // console.log(subStr);
  
  // From Roman (to understand what is happening)
  // console.log("Second shape");
  
  // let picture2 = "";
  // for (let i = 4; i >= 1; i--) {
  //   i < 4 ? (picture2 += "\n") : null;
  //   for (let j = 1; j <= i; j++) {
  //     picture2 += "*";
  //   }
  // }
  // console.log(picture2);
  
  // Third shape
  // 1
  // 12
  // 123
  // 1234
  // 12345
  // Bounce: Forth shape
  // Be creative and show us your Artistic side
  
  console.log("------------Password generator--------------");
  // Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password
  // Examples:
  // passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
  // passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
  // passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
  
  // const passwordGen = () => {
  //   let characters = [
  //     0,
  //     1,
  //     2,
  //     3,
  //     4,
  //     5,
  //     6,
  //     6,
  //     7,
  //     8,
  //     9,
  //     "!",
  //     "§",
  //     "$",
  //     "%",
  //     "&",
  //     "?",
  //     "@",
  //     "€",
  //     "A",
  //     "B",
  //     "C",
  //     "D",
  //     "E",
  //     "F",
  //     "G",
  //     "H",
  //     "I",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     "O",
  //     "P",
  //     "Q",
  //     "R",
  //     "S",
  //     "T",
  //     "U",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //     "a",
  //     "b",
  //     "c",
  //     "d",
  //     "e",
  //     "f",
  //     "g",
  //     "h",
  //     "i",
  //     "k",
  //     "l",
  //     "m",
  //     "n",
  //     "o",
  //     "p",
  //     "q",
  //     "r",
  //     "s",
  //     "t",
  //     "u",
  //     "v",
  //     "w",
  //     "x",
  //     "y",
  //     "z",
  //   ];
  //   let password = "";
  //   for (let i = 0; i < 30; i++) {
  //     password += characters[Math.floor(Math.random() * characters.length)];
  //   }
  //   return password;
  // };
  
  // console.log(passwordGen());
  
  //Alternative version:
  const passwordGen = () => {
    // let numb = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
    let alphaLc = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let specialCharacters = ["!", "§", "$", "%", "&", "?", "@", "€"];
    let password = "";
  
    for (let i = 0; i < 30; i++) {
      let spChr =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      let alpha = alphaLc[Math.floor(Math.random() * alphaLc.length)];
      let alphaUpper = alpha.toUpperCase();
      let randomNumber = Math.floor(Math.random() * 10) + 1;
  
      if (randomNumber % 2 == 0) {
        password += alpha;
      }
      if (randomNumber % 3 == 0) {
        password += Math.floor(Math.random() * 10);
      }
      if (randomNumber % 5 == 0) {
        password += alphaUpper;
      } else {
        password += spChr;
      }
    }
    return password.substring(0, 30);
  };
  console.log(passwordGen());
  
  //Tests below
  
  console.log(Math.floor(Math.random() * 3) + 1);
  
  // let randomNumber = "";
  // for (let i = 0; i <= 5; i++) {
  //   randomNumber += Math.floor(Math.random() * 100);
  //   console.log(randomNumber);
  // }
  
  // console.log(randomNumber);
  
  // let alphaUc = [
  //   ,
  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  // ];
  
  // let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  // let alpha = [
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  //   "e",
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "t",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
  // ];
  // let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
  // const passGen = () => {
  //   let result = "";
  //   const randomNumGetter = (arr) => {
  //     return Math.floor(Math.random() * arr.length);
  //   };
  //   for (let i = 0; i <= 17; i++) {
  //     if ((Math.floor(Math.random()) * 100) % 2 == 0) {
  //       result += numbers[randomNumGetter(numbers)];
  //     } else if ((Math.floor(Math.random()) * 100) % 3 == 0) {
  //       result += alpha[randomNumGetter(alpha)].toUpperCase();
  //     } else if {
  //       result += alpha[randomNumGetter(alpha)];
  //     } else if ((Math.floor(Math.random()) * 100) % 5 == 0) {
  //       result += charactersSp[randomNumGetter(charactersSp)];
  //     }
  //   }
  //   return result;
  // };
  
  // console.log(passGen());
  
  // // to check how many characters the loop outputs:
  // let strPw = "!DyGHoh513i@2bvL8Arx6§B98bCtx@";
  // console.log(strPw.length);
  
  // XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
  
  // Notes:
  
  // Return a boolean value (true or false).
  // The string can contain any character.
  // When neither an x nor an o is in the string, return true.
  // Examples:
  
  // isEqualNumXandO("ooxx") ➞ true
  // isEqualNumXandO("xooxx") ➞ false
  // isEqualNumXandO("ooxXm") ➞ true (case insensitive)
  // isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
  // isEqualNumXandO("zzoo") ➞ false
  
  // Calculate the three bills including tips:
  //€22.35 + 10% tip
  //€26.67 + 15% tip
  //€35.92 + 20% tip
  // Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip
  
  console.log("****************************11-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");

//regular old style function
function print(str) {
    console.log(str);
  }
  //ES6 style = new style
  const display = (str) => {
    // => is reserved in JS for these functions
    console.log(str);
  };
  
  //short form of ES6 style, but it only works for a function with one formula:
  //const display = str => console.log(str);
  
  //there is only one specific thing where we need the old style function (later)
  print("Hi");
  display("cool");
  console.log(typeof print);
  
  const sum = (x, y) => x + y;
  
  console.log(sum(3, 4));
  
  const isBigger = (num1, num2) => num1 < num2;
  console.log(isBigger(33, 43));
  
  const printFullWord = (firstName, age, add) =>
    console.log("Hi, ${firstName} I am ${age}. I live in ${add}");
  
  //printFullWorld("Hadi", 31, "Berlin");
  //printFullWord("Zain", 22, "Paris");
  
  //instead of console.log you can also write return but
  
  let isLogged = false;
  const login = () => {
    isLogged = true; // here we need curly brackets because we are assigning a new value with =
  };
  
  login();
  
  //synchronisity = chronological, imagine that the function call is replaced by the function
  
  let name1 = "Hadi";
  let name2 = "Zain";
  let name3 = "Nancy";
  //faster way: write this as an array
  
  //array
  let namesArr = ["Hadi", "Zain", "Nancy", "Olga"];
  //index number:   0        1       2       3
  console.log(namesArr[2]);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers[5]);
  //arrays save time and code and serve to save data
  
  //arrays can be mixed
  let mixedArr = ["hi", 1234, true];
  
  let hobbies = ["drawing", "writing", "listening to music", "watching movies"];
  console.log(hobbies[0]);
  
  console.log(`These are my favorite hobbies: ${hobbies[0]}, ${hobbies[1]}.`);
  
  console.log(hobbies[0]);
  
  const funThingsToDo = ["eat", "sleep", "repeat"];
  let i = 0;
  i++;
  i++;
  // In general, DRY = don't repeat yourself in professional code
  
  //loops
  
  for (let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(`${i} * 100 = ${i * 100}`);
  }
  
  //endless loop
  //WARNING: IT WILL RUN ENDLESSLY!!!
  // for (let i = 0; i <= 10; i--) {
  //   console.log(`1 * ${i} = ${i * 1}`);
  // }
  
  const charArr = ["a", "b", "c"];
  for (let i = 0; i < charArr.length; i++) {
    console.log(charArr[i].toUpperCase());
  }
  
  const names = ["Hadi", "Nancy"];
  for (let i = 0; i < names.length; i++) {
    console.log(names[i][0].toUpperCase()); //this will take the first character from every word
  }
  
  console.log(names[0][0]);
  
  const names2 = ["hadi", "nancy"];
  for (let i = 0; i < names2.length; i++) {
    console.log(names2[i][0].toUpperCase() + names2[i][0].slice(1, names.length));
  }
  //???
  
  console.log(1 == 11 ? "cool" : "not cool");
  let isSmart = false;
  if (isSmart) {
    console.log("It's true!");
  } else {
    console.log("It's not true.");
  }
  
  let count = 0;
  if (3 == 0 - 3) {
    //count++; ???
    console.log("You are right.");
  } else {
    //count--; ???
    console.log("Not correct.");
  }
  
  let a = true;
  let b = false;
  let c = 11 == 23;
  if ((a == b && c != a) || c == a) {
    console.log("Nice.");
  } else {
    console.log("I don't know what you need from me.");
  }
  
  // //Exercise
  // The odd/even reporter.
  // Write a program that will iterate from 0 to 20.
  // For each iteration, it will check if the current number is even or odd,
  // and report that to the screen (e.g. “2 is even”).
  
  let text = "";
  for (let i = 100; i <= 1000; i += 100) {
    // console.log(i);
    text += i + " ";
  }
  
  // Write programs that produce the following outputs:
  // 100 200 300 400 500 600 700 800 900 1000
  // 0 2 4 6 8 10
  text = "";
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      //console.log(i);
      text += i + " ";
      // this is the same as: text + i + " ";
    }
  }
  console.log("________________");
  // 3 6 9 12 15
  for (let i = 0; i <= 15; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
  // 9 8 7 6 5 4 3 2 1 0
  for (let i = 9; i > 0; i--) {
    text += i + " ";
  }
  // 1 1 1 2 2 2 3 3 3 4 4 4
  text = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
      // console.log(i);
      text += i + " ";
    }
  }
  console.log(text);
  
  console.log("below this_________");
  
  //without a nested loop:
  
  // text = "";
  // let countNum = 0;
  // for (let i = 1; i <= 4; i++) {
  //   if (countNum != 0 && countNum % 3 == 0) {
  //     i = 0;
  //     countNum = 0;
  //   }
  //   countNum++;
  // }
  //how is this endless???
  
  // 1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4
  
  for (let i = 1; i <= 4; i++) {
    //console.log(i.repeat(3)); --> Why does this not work?
  }
  
  console.log("above this___________");
  
  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
  text = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
      // console.log(i);
      text += j + " ";
    }
  }
  console.log(text);
  
  //change the last one until correct
  
  // an if without the true part is wrong/unprofessional. you can have if without false, but not without true
  

  console.log("****************************07-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>indexJ07.js<<<<<<<<<<<<<<<<<");

  let x, y, z;
  console.log(x);
  x = 4;
  y = 5;
  z = x + y;
  console.log(Math.max(3, 5, 6, 9, x, y, 100));
  console.log(Math.min(x, y, z));
  let str = "20.4";
  strIntoNum = parseInt(str, 10); //always use this method please
  console.log("pareInt() ", strIntoNum);
  let strIntoNum1 = +str; //please never use because it can be misunderstood
  console.log("+ ", strIntoNum1);
  let strIntoNum2 = str * 1; //will turn it into a number but please do not use
  console.log(" * 1)", strIntoNum2);
  let strIntFloat = parseFloat(str);
  console.log("parseFloat ", strIntFloat);
  console.log(((x + y) / (z + 2.44)) * 29 + x);
  //
  //Number + String
  let d, f, r;
  d = "H";
  f = 33;
  //Number + Boolean
  r = true; // 1 = true, 0 = false
  console.log(f + r);
  r = false;
  console.log(f + r);
  //string + string
  let str1 = "Hi";
  let str2 = "I am Hadi";
  console.log(str1 + str2);
  // ++
  let a = 1;
  console.log(a++); //in order to see the result you have to use console.log again like below
  console.log(a);
  a = 3;
  console.log(++a); //here you see the result immediately
  // --
  a = 10;
  console.log(a--); //in order to see the result you have to use console.log again like below
  console.log(a);
  a = 10;
  console.log(--a); //here you see the result immediately
  
  // typeof
  console.log(typeof str1);
  console.log(typeof x);
  console.log(typeof console.log);
  //everything inside an object as a function is called a method???
  console.log(typeof Math.ceil);
  //decimals
  let decimal1 = 0.1;
  let decimal2 = 0.2;
  let result = decimal1 * decimal2;
  console.log(result);
  //toFixed()
  let num = 4;
  console.log(result.toFixed(num)); //will fix it to the value of num behind the . in the decimal
  
  //round down
  function roundDown(num) {
    let result = Math.floor(num);
    console.log(result);
  }
  roundDown(3321.23434);
  roundDown(326.76);
  
  //Math.random
  //0 - 100 => 0 - 99
  console.log(Math.random()); //chooses a random number between 0 and 1
  console.log(Math.random() * 10); //chooses a random number between 0 and 10
  console.log(Math.random() * 10 + 1); //chooses a random number between 1 and 10
  console.log(Math.random() * 11);
  console.log(Math.random());
  // clear questions about random
  
  //==
  // 1 = 1 -> true
  // 1 != 44 -> true
  //combining conditions
  //&&
  console.log(1 == 1);
  console.log(1 != 2);
  console.log(1 == 1 && 1 == 10); //true && false => false
  console.log(1 == 1, 1 == 2);
  //true && true => true
  //false && false => false
  //||
  // true || false => true
  // false || true => true
  // false || false => false
  // true || true => true
  console.log(1 == 20 || (1 == 1 && 1 != 292));
  
  let bool1, bool2, bool3;
  bool1 = true;
  bool2 = false;
  console.log(bool1 && bool2 ? "cool" : "not cool");
  console.log(bool1 || bool2 ? "cool" : "not cool");
  let numInStr = "10";
  let numb = 10;
  //console.log(numInStr == numb = ? "cool" : "not cool");
  //console.log(numInStr === numb = ? "cool" : "not cool");
  
  //Create a program that prints a random integer from 1 - 6.
  console.log(parseInt(Math.random() * 6 + 1));
  console.log(Math.floor(Math.random() * 6) + 1); //math floor is recommended rather than math ceil
  
  //
  
  console.log(Math.cos(9));
  //most likely to used in our class
  //random, max, min, ceil, floor,
  
  console.log(Math.round(1.2));
  console.log(Math.trunc(1.2));
  console.log(Math.round(1.7));
  console.log(Math.trunc(1.7));
  console.log("parseInt");
  console.log(parseInt(1.7));
  console.log(parseInt(1.2));
  console.log(parseInt(1.5));
  
  console.log(parseInt("string"));
  console.log(parseInt("1.7"));
  console.log(parseInt("3x"));
  console.log(parseInt("3x 6f"));
  console.log(parseInt("6.2x5t"));
  

  console.log("****************************05-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");

  sum(3, 5);
  sum(300, 11);
  
  function sum(x, y) {
    return x + y;
  }
  console.log(sum);
  console.log("console log");
  
  let bool = " "; //try other things here to see result
  bool ? console.log("Cool.") : console.log("Not Cool");
  
  // bracket notation
  let str = "Ideal Metaphor";
  console.log(str[str.length - 1]);
  
  // .trim()
  let LongStr =
    "    deleted empty spaces at the end or at the beginning         .";
  console.log(LongStr.trim);
  
  function display(str) {
    console.log(str);
  }
  display("Zain");
  
  let r = 5;
  let w = 24;
  console.log(r % w);
  
  isNaN(r) //try other things here, everything that is not a number will get NaN (?)
    ? console.log("Yes, it is NOT a Number.")
    : console.log("It is a number.");
  
  let int1 = "Hadi";
  let int2 = 1.5;
  console.log(int1 + " " + int2);
  let intSum = int1 + int2;
  
  isNaN(intSum) //this is not a number because two things are combined
    ? console.log("Yes, it is NOT a Number.")
    : console.log("It is a number.");
  
  let newNum = parseInt(int1, 10); //number 10 has to do with the machine language system,
  //binary, hexadecimal, etc., change the numer according to the system
  
  // parseFloat
  
  //Exercises start here
  
  // /1. Create two variables.
  let h = 5;
  let k = "string value";
  // // One variable should contain a string value and
  // //the other should contain a number. Concatenate the string and the number.
  let ssum = h + k;
  console.log(ssum);
  let wsum = h + " " + k;
  console.log(wsum);
  // //2. Check if the following numbers are even numbers. 33, 40, 2,1,22
  //Use a ternary and if the number is even print 30 is even, else print that it is odd.
  let num = 33;
  
  num: 2 ? console.log("the number is even") : console.log("The number is odd");
  
  function summer(z, t) {
    return z + t;
  }
  
  let numb = 23;
  let numX = numb % 2;
  console.log(numX);
  console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);
  function oddOrEven(numb) {
    return numb % 2 == 0 ? "even" : "odd";
  }
  console.log(oddOrEven(33));
  console.log(oddOrEven(4)); // etc.
  
  // Create a variable with the value of “123”. Convert it to a number.
  // Create a variable with the value of “130.7". Convert it to a number.
  // Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
  let v = "123";
  console.log(parseInt(v, 10)); //if you leave out 10 it will also work because JS will automatically assign 10 (?)
  
  let u = "130.7";
  console.log(parseFloat(u));
  
  let isDog = true;
  console.log(isDog ? "pat, pat" : "find me a dog to pat!");
  
  // Class notes below
  
  // Math.floor means round down
  // Math.ceil means round up
  
  //Math.max means it will grab the biggest number in a group of numbers
  //Math.min lowest number in a group of numbers
  
  //Practice slice
  let JS = "Javascript";
  console.log(JS.slice(-3));
  console.log(JS.slice(0));
  console.log(JS.slice(0, 4));
  

  console.log("****************************05-01*****************************");
  console.log(">>>>>>>>>>>>>>>>>homework.js<<<<<<<<<<<<<<<<<");

// 1. Minimum and maximum
// a. Lowest Number
console.log(Math.min(13, 22, 44, 16, 9, 0));

// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 4));

// b. Highest Number
console.log(Math.max(34, 56, 99, 10, 3));

// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 4));

// 2. Rounding

// a. Round up
console.log(Math.ceil(3.6));
console.log(Math.ceil(4.2)); //expected result: 5
console.log(Math.ceil(26.5));
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

//Alternative

function roundup(up) {
  return (up = Math.ceil(up));
}

console.log(roundup(3321.32321));
console.log(roundup(326.76));
console.log(roundup(76788.7));
console.log(roundup(-9.78));
console.log(roundup(43.342));

//Alternative 2
function roundup(up) {
  console.log(Math.ceil(up));
}

roundup(3321.32321);
roundup(326.76);
roundup(76788.7);
roundup(-9.78);
roundup(43.342);

// b. Round down
console.log(Math.floor(3.8));
console.log(Math.floor(3.5));
console.log(Math.floor(3.2));
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(9.78));
console.log(Math.floor(28.329));

// Strings and Numbers

// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let string = "'This is a string'";
let num = 5;
let nan = NaN;

let combined = string + num;
combined = `${string} and this is number: ${num}.`;
console.log(combined);

//from exercise:
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
// Expected Output:
// "Hi, my name is Nancy and I am 25"
let sentence = introSentence + " " + age + ".";
console.log(sentence);
// In this case, what is the + operator doing? Comment your answer in the js file.

//Answer: The + operator combines the variables as they are regardless of type.
//But for the output sentence to make sence we have to add spaces and punctuation.

// 2. Converting
// Create a variable with the value of “1005”. Convert it to a number.

let str = "1005";
console.log(parseInt(str));
let newvar = parseInt(str);
//console.log(str.typeof);
console.log(isNaN(newvar));
console.log("False means it is a number. True means it is NaN.");
// Create a variable with the value of “10.05". Convert it to a number.

let float = "10.05";
console.log(parseFloat(float));
console.log(isNaN(float));
console.log("False means it is a number. True means it is NaN.");
//actually false can also mean 0 and true can mean 1
//Alternative
let numb = "10.05";
console.log(+numb);
let int = +numb;
console.log(isNaN(int));
//pls do not use; this can turn it into a number regardless if it is a decimal or an integer


console.log("****************************04-01*****************************");
console.log(">>>>>>>>>>>>>>>>>index.js<<<<<<<<<<<<<<<<<");

let firstName = "hAdI";
console.log(firstName);
let finalFirstName =
  firstName.substring(0, 1).toUpperCase() +
  firstName.substring(1).toLowerCase();
console.log(finalFirstName);

let fFirstName =
  firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(fFirstName);

//  1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let text = "I can walk in the park all day!";
console.log(text.substring(18, 22));

//  2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let greeting = "Hello World";
console.log(greeting.toUpperCase());
//  3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let who = "Earthlings";
console.log(who.toLowerCase());
//  4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let lang = "JavaScript";
console.log(lang.substring(3, 6));
//  5. Check if the sentence “nice shoes” contains the letter l.
let sentence = "nice shoes";
container = sentence.includes("l");
console.log(container);
//  6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
lang2 = lang[0] + lang + lang[0];
console.log(lang2);

// increment
let w = 10;
w++;
console.log(w);
++w;
console.log(w);

// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let string = "javascript";
let lastThree = string.substring(string.length - 3);
console.log(lastThree);
console.log(lastThree + string + lastThree);
//  8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
string = "Javascript is fun.";
console.log(string.toUpperCase());
newvar = string.includes("Java");
console.log(newvar);
//  9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
string = "HanneS";
let name = string[5] + string.substring(1, 5) + string[0];
console.log(name);
//trying things out
name = string.substring(string.length - 1);
console.log(name);

let reversename = string.substring(1, string.length - 1);
console.log(reversename);

//  10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let fName = "Viviane";
let age = 30;
let city = "Hamburg";
console.log(
  `Hello, my name is ${fName}. I am ${age} years old and I live in ${city}.`
);

// 11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let lowcase = "the quick brown fox";
console.log(lowcase[0].toUpperCase() + lowcase.substring(1));

a = "Cran"; // Initialize a
b = "berry"; // Initialize b

console.log(a + b); // 'Cranberry'










