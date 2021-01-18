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
