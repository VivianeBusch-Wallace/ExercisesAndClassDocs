// Cool discoveries I found on the web or somewhere else:

//to check if an array has no unique values or only has same values:
const array1 = [1, 1, 1, 1];
const firstNum = array1[0];
console.log(array1.every((currentValue) => currentValue == firstNum));
// expected output: true
const array1 = [1, 2, 1, 1];
const firstNum = array1[0];
console.log(array1.every((currentValue) => currentValue == firstNum));
