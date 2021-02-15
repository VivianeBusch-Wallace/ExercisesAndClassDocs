//declare an array:
let myArrayOfNums = [0, 1, 2, 3];
let myArrayOfStrs = ["a", "b", "c"];

let nestedArray = [
  ["a", "b"],
  [4, 5, 6],
  ["c", "d"],
  [7, 8, 9],
];

let variable1 = 5;
let variable2 = "variableValue";
let arrayValues = [true, false, variable1, variable2, "string", "7", 7];
console.log(myArrayOfNums);
console.log(myArrayOfStrs);
console.log(nestedArray);
//arrays are zero based/indexed

console.log(myArrayOfStrs[0]);
console.log(nestedArray[0]);
console.log(nestedArray[0][1]);

// array methods:

//.length to get the array length:
console.log(myArrayOfNums.length);
console.log(nestedArray.length);
console.log(nestedArray[1].length);
//(.length can also be used on strings)

//truncate or extend array length:
//truncate:
myArrayOfStrs.length = 2;
console.log(myArrayOfStrs);
nestedArray.length = 2;
console.log(nestedArray);
//truncate to zero:
let someArray = ["stringy1", "stringy2", 0, 4];
someArray.length = 0; //outputs empty array
console.log(someArray);
//extend:
myArrayOfNums.length = 7; //will ouput undefined where there is no value
console.log(myArrayOfNums);
myArrayOfStrs.length = 5;
console.log(myArrayOfStrs);
nestedArray.length = 7;
console.log(nestedArray);
//extending an array after truncating it sets the truncated values to undefined

//access last value of array:
console.log(myArrayOfNums.length - 1);
let lengthOfMyArrayOfStrs = myArrayOfStrs.length;
console.log(lengthOfMyArrayOfStrs - 1); //OR???
console.log(myArrayOfStrs[lengthOfMyArrayOfStrs - 1]);
//can also access values counting backwards:
console.log(myArrayOfNums.length - 2);

//.push to add values to end of an array
myArrayOfNums.push(4);
console.log(myArrayOfNums);
//can also push several:
myArrayOfNums.push(5, 6, 7);
console.log(myArrayOfNums);

//.pop cuts off last item in array and it can be used?
//can pop remove several items?

//looping through an array

//for...of loop
for (let item of myArrayOfNums) {
  item + 1; //does this add 1 to each value?
  console.log(item); //does this log tree?
}
console.log(item);
console.log(myArrayOfNums);

//.splice
let spliceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//only the first argument in splice is mandatory
//arguments: start(by index), delete(hoy many items to remove from start position, can be 0), items to add(separated by commas)
//if the delete argument is omitted, then splice will remove all items from start index til end of array
//if delete is 0 or a negative number it won't delete anything
//we can use splice to add and remove items anywhere in the array
//start, the item of the start index is also deleted
spliceArray.splice(0, 1); //removes the first value from the array
console.log(spliceArray);
//you can also add several values to add
//array.splice(start, deleteCount, item1, item2, item3, ...)
spliceArray.splice(2, 3, "a", "b", "c", [3, "*", "hotel"]);
console.log(spliceArray);
//arrays can be used as stack

//questions:
let someOtherArray = ["alpha", "beta"];
someOtherArray = []; //is this reassigning someOtherArray to a new empty array???
console.log(someOtherArray);
someOtherArray = 0;
console.log(someOtherArray);

//What about refernces?
