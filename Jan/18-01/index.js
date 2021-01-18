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
