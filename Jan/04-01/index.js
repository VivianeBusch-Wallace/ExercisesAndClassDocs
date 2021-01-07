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
