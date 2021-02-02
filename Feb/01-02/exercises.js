// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires. The function should be
// self invoked and should have the following parameters:

// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%

// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000

((age, retirementAge, wage, percent) => {
  let wagePerYear = wage * 12;
  let yearsLeft = retirementAge - age;
  let money = yearsLeft * wagePerYear;
  let savings = money * (percent / 100);
  if (age >= retirementAge) {
    console.log("You are already retired! Great!");
  } else {
    console.log(
      `You have ${yearsLeft} years left until you retire, with a rate of ${percent}% you can save ${savings}.`
    );
  }
})(40, 65, 2000, 5);

// (  (currentAge, retirementA, monthlyWage, percentage) => {
//     if (currentAge >= retirementA) {
//       console.log("You are already retired! Great!");
//     } else {
//       let yearsToSave = retirementA - currentAge;
//       console.log("Years to go" + yearsToSave);
//       let monthsToSave = yearsToSave * 12;
//       console.log("Months to go", monthsToSave);
//       let amountSavedByMonth = (monthlyWage * percentage) / 100;
//       let totalSave = amountSavedByMonth * monthsToSave;
//       console.log(
//         `You will be very old in ${yearsToSave} years and you will have ${totalSave} in your bank.`
//       );
//     }
//   }
// )(40, 65, 2000, 5);

console.log("____________________Seasons");
//Do this exercise in ONE LINE!
// Seasons
// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
// I will be nice again to you and offer the arrays 😉
// const months = [ "december", "january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november" ];
// const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// monthCheck("I love June"); -> June is in Summer
// monthCheck("We need Kartoffel"); -> We couldn’t find any month in your text, sorry try again

const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];

  let seasons = ["Winter", "Spring", "Summer", "Autumn"];

  const currentSe = (monthName) => {
    // switch (months.indexOf(monthName)) {
    //   case 0:
    //   case 1:
    //   case 2:
    //     return seasons[0];
    //   case 3:
    //   case 4:
    //   case 5:
    //     return seasons[1];
    //   case 6:
    //   case 7:
    //   case 8:
    //     return seasons[2];
    //   case 9:
    //   case 10:
    //   case 11:
    //     return seasons[3];
    //   default:
    //     return `something went wrong`;
    // }
    return seasons[Math.floor(months.indexOf(monthName) / 3)];
  };
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck("I love April"));
console.log(monthCheck("We need Kartoffel"));

let months = [
  ["december", "january", "february"],
  ["march", "april", "may"],
  ["june", "july", "august"],
  ["september", "october", "november"],
];

console.log(months[0][0]);
