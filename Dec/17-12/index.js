//Printing out a string
console.log("Hi, my name is Viviane.");
console.log("I love Hamburg.");

//Mathematical expressions
console.log();
console.log(12 + 12);
console.log(3 * 5);

//Boolean expressions: comparison operators (===, !==, >=, <=, <, >)
//!== means not equal to
console.log(12 == 2);

//Practice below

console.log("Write this 5 times.");
let x = 3;
console.log(x);
let y = 7;
console.log(y);
//var name = 'Viviane';
//console.log(name);
let name = "Viviane";
console.log(name);
let boo = 2 < 3;
console.log(boo);
//let name = Viviane;
//console.log(name);
let name2 = "Viviane";
console.log(name2);
let add = "Hamburg, 12345, ;)";
/*inside the string you can write special characters and real emojis.
but you need to make sure that your terminal can print them out,*/
console.log(add);
x = 5;
console.log(x);
let age;
//this variable is undefined, it will not print until it is defined
console.log(age);
//console.log(bb);
//this variable is not defined
age = 30;
console.log(age);
//now the variable is defined and can be printed

console.log(typeof x);
console.log(typeof add);
//typeof can tell you what it is (variable, string, etc.)
//you cannot combine string and numbers in one declaration (there is a way but not learned yet)
let a = 3.342;
let b = 234.34532;
console.log(a + b);
let sumNum = a + b;

//Conditions/Ternary operators/Ternary Conditions
let boyage = 12;
console.log("Your age is:") + console.log(boyage);
boyage > 16
  ? console.log("Great! Go to the party!")
  : console.log("Sorry, you are underage. You can't go party!");
boyage = 18;
console.log("Your age is:") + console.log(boyage);
boyage > 16
  ? console.log("Great! Go to the party!")
  : console.log("Sorry, you are underage. You can't go party!");

//comparison operators (===, !==; <==; >==, <, >)
let num1 = 1;
let num2 = "1";
console.log(num1 === num2);
//this will show as false because you cannot combine a string and a number
console.log(num1 == num2);
//this is true because num1 and num2 have an equal value regardless of type
console.log(typeof num1);
console.log(typeof num2);

let userName = "vivianebw";
console.log(userName.length);
/*.length will show how many characters are in userName here
epmty spaces are counted as characters*/
console.log(userName[2]);
/*this will show the 2nd character in userName here, but it starts counting from 0,
so 0 = v here and 2 = v and 9 = w*/
let email = "v.buschwallace@yahoo.com";
console.log(email[14]);
email[0] == "@"
  ? console.log("Enter a valid email address")
  : console.log("All good. Your email address is valid.");
//this is asking if the first character is @

//Disregard!!! Below I am just trying things out.
console.log("______________");
console.log();
console.log("Disregard!!! Below I am just trying things out.");
let person1 = "1Viviane";
let namePerson1 = "Viviane";
let person2 = "0Roger";
let namePerson2 = "Roger";
person1[0] == "1"
  ? console.log(namePerson1 + " is married.")
  : console.log(namePerson1 + " is not married.");
person2[0] == "0"
  ? console.log(namePerson2 + " is married.")
  : console.log(namePerson2 + " is not married.");

var statusMarried = 1;
var statusNotMarried = 0;
console.log("Is this person married?");
