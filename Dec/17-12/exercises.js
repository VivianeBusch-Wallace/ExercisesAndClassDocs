console.log("Practice");
/*Programming Basics: Strings, Numbers and Booleans
Exercises to become familiar with the string, number and boolean data types
Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.
Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.
Declare a variable called name and assign a string as its value.
Declare a variable called age and assign a number as its value.
Declare a variable called year and assign a number as its value.
Using your declared variables, print a string to the console. For example, “Basem is 37 in 2020”.
Declare a variable called isMarried and assign it a boolean value.
Declare a variable called programmingLanguage and assign “JavaScript” as its value. Declare a variable called isFun and give it a value of true. Print “JavaScript is fun: true” to the console, using your declared variables.
Print the J and S of “JavaScript” from the variable programmingLanguage to the console.
Print the length of the string “JavaScript” to the console.*/

/*Declare a variable and assign a string as its value.
Make sure the string is at least 6 characters long.
Print the variable to the console.*/
var x = "This is a string.";
console.log(x);
/*Access the 2nd and 6th elements of the string using index
notation. Print the elements to the console.*/
console.log(x[2]);
console.log(x[6]);
/*Declare a variable called name and
assign a string as its value.*/
var name = "Viviane Busch-Wallace";
/*Declare a variable called age and
assign a number as its value.*/
var age = 30;
/*Declare a variable called year and
assign a number as its value.*/
var year = 2020;
/*Using your declared variables,
print a string to the console. For example,
“Basem is 37 in 2020”.*/
console.log(name + " is " + age + " in the year " + year + ".");
/*Declare a variable called isMarried and
assign it a boolean value.*/
let isMarried = 1 > 0;
console.log("'Viviane is married.' is: ");
console.log(isMarried);
console.log("'Roger is married.' is: ");
isMarried = 1 < 0;
console.log(isMarried);
/*Declare a variable called programmingLanguage and assign “JavaScript”
as its value. Declare a variable called isFun and give it a value of true.
Print “JavaScript is fun: true” to the console, using your declared variables.*/
var programmingLanguage = "JavaScript";
var isFun = "true";
console.log(programmingLanguage + " is fun: " + isFun);
/*Print the J and S of “JavaScript” from the variable programmingLanguage
to the console.*/
console.log(programmingLanguage[0]) + console.log(programmingLanguage[4]);
//Print the length of the string “JavaScript” to the console.
console.log(programmingLanguage.length);

console.log("_________new exercise__________");
/*Ternary:
Declare a variable named isStudent. If true,
print “Ticket costs €5,00”.
If false, print “Ticket costs €12,00".
Declare a variable named speedCheck.*/

var isStudent = false;
isStudent == true
  ? console.log("Ticket costs €5.00")
  : console.log("Ticket costs €12.00");

/*If speedlimit is 50km/h, and your speed is above that,
print ‘you’re going too fast!’.
If speed is lower than 50km/h,
print ‘You’re driving below the speed limit, Oma’.*/
//I changed "speedLimit" into "speed" for this exercise
const speedLimit = 50;
var speed = 40;
console.log(
  "You are driving " +
    speed +
    "km/h. The speed limit is " +
    speedLimit +
    "km/h."
);
speed < 50
  ? console.log("You're driving below the speed limit, Oma.")
  : console.log();
speed > 50 ? console.log("You're driving too fast!") : console.log();

speed = 50;
console.log(
  "You are driving " +
    speed +
    "km/h. The speed limit is " +
    speedLimit +
    "km/h."
);
speed < 50
  ? console.log("You're driving below the speed limit, Oma.")
  : console.log();
speed > 50 ? console.log("You're driving too fast!") : console.log();

speed = 60;
console.log(
  "You are driving " +
    speed +
    "km/h. The speed limit is " +
    speedLimit +
    "km/h."
);
speedLimit < 50
  ? console.log("You're driving below the speed limit, Oma.")
  : console.log();
speed > 50 ? console.log("You're driving too fast!") : console.log();
