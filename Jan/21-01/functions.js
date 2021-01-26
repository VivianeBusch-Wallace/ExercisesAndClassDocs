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
