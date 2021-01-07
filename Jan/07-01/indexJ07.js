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
