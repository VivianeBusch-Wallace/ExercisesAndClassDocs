//Functions inside functions

//
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  } //      9       +       16        = 25
  //   return second(num1) + second(num2);
  return second(num1 + num2);
}

console.log(main(2, 3));

console.log("----------Nested Scopes----------");
// We know:
// let, var, const local vs global
// global
// {
// // local
// }

//Nested Scopes

let nice = true; //global variable
const outerFunction = (x, y) => {
  let big = true; //local variable
  console.log(big + " big in outer function");

  const innerFunction = (num) => {
    big = false;
    // nice = false;
    let fat = true; //local nested variable, cannot be accessed outside the functions
    console.log(big + " big in inner function");
    return num + 10;
  };
  //            13         +      14
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));

console.log("----------Closure----------");

//Closure
let number = 10;
function fun() {
  return number + number;
}
console.log(fun());
number = 33;
console.log(fun()); //not good that this function can be changed
console.log("----------Self-invoked Function----------");
// A closure is a function that has access to its outer function scope
// even after the outer function has returned. This means a closure can
// remember and access variables and arguments of its outer function even
// after the function has finished.
//
//self-invoked function
const add = (() => {
  let counter = 0; //does not reset counter to 0
  return () => {
    //returns a new function, an anonymous function
    counter++;
    return counter;
  };
})(); //immediately executed by call
console.log(add());
console.log(add());
console.log(add());
// always use () around function to make it an expression and then () after to invoke/call that function immediately
// this way what is inside is secured
// const add2 = (() => {
//   let counter = 0;
//   return counter++;
// })();
// console.log(add2()); //WRONG!
//SIF does not work without another function inside return

console.log("----------Self-Invoked Anonymous Function----------");

// SIAF = self-invoked anonymous function
var all = 3;
(() => {
  let all = "hey"; //this is a completely serparate variable from all = 3
  console.log(all); //output: hey
})();
console.log(all); // output: 3

console.log("----------Immediately Invoked Function Expression----------");

//
// IIFE = immediately invoked function expression

const sum = ((x, y) => {
  return x + y;
})(3, 4);
console.log(sum);

//SIAF and IIFE common questions on interviews
console.log("----------Exercise Example for SIAF----------");

//exercise example for SIAF:
//write a function called add that uses a closure that performs
//addition on arguments in two seperate function calls
const add3 = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add3(2)(3));
//
const add4 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(add4(2)(3)()); //NaN

// write a function multiplier that uses a closure to perform
// multiplication. However the outer function should be saved
// in a variable which is then called.
function multiplier(num) {
  return (x) => x * num;
}
const times = multiplier(2)(5);
console.log(times);

// trim()
let str = "     hi    ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());

//startsWith()
let text = "Hej, it's ME.";
console.log(text.startsWith("we"));
console.log(text.startsWith("Hej"));

// let array = ["Hadi", "olga", "Julian"];
// console.log(array.startsWith("Hadi"));

// endsWith()
console.log(text.endsWith("."));
console.log(text.endsWith("ME"));

// charAt()
let char = "hadi";
console.log(char.charAt(2)); //is the same as:
console.log(char[2]);
// arr[i][2] - Hadi prefers this method to charAt()
const arr = ["Hadi", "Olga"];
console.log(arr[0][0] + arr[0][3]);
// charCodeAt()
//  will return integer between 0 and 65535 that replaces the UTF-16 code
// common character codes UTF-16  UTF-8  ASCII   A 00001111
char = "Ü";
console.log(char.charCodeAt(0));
