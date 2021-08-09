// SPA - process.argv exercise
// Write a function that should take a string as a parameter and return it with only the first letter capitalized.
// Example output:
// 'europe' => Europe
// 'BERLIN' => Berlin

const wordsToConvert = process.argv.slice(2);
// console.log(wordsToConvert);
function capitalize(wordArray) {
  let mapped = wordArray.map((word) => {
    let trimmed = word.trim();
    return trimmed.slice(0, 1).toUpperCase() + trimmed.slice(1).toLowerCase();
  });
  console.log(mapped.toString().replace(/[^a-zA-Z]/g, " "));
  console.log(mapped.join(" ").replace(/[^a-zA-Z]/g, " "));
}
// console.log(capitalize(wordsToConvert));
capitalize(wordsToConvert);

// -----------
// Amit's solution adapted(new assistant teacher for DCI) >>

// const result2 = (arr) => {
//   let newArray = arr.map((word) => {
//     let convertedWord = word.trim();
//     return (
//       convertedWord.charAt(0).toUpperCase() +
//       convertedWord.slice(1).toLowerCase()
//     );
//   });
//   console.log(newArray.join(", "));
// };
// result2(wordsToConvert);

// actual copy of his code >>

const args = process.argv.slice(2);
// console.log(args);

const result = (str) => {
  let newArray = str.map((word) => {
    let fixedWord = word.trim();
    return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
  });

  console.log(newArray.join().replace(/[^a-zA-Z]/g, ""));
};

// result(args);
