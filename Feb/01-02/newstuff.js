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

//Closure
let number = 10;
function fun() {
  return number + number;
}
console.log(fun());
number = 33;
console.log(fun());
