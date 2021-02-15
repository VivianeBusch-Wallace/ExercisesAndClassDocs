//those fucking loops, love 'em and hate them

// looping through a nested array:
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//This outputs each sub-element in arr one at a time.

console.log("multiply exercise:");
// multiply all subelements with each other
// multiply practice with nested loop:
function multiplyAll(arr) {
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]; //same as: product = product * arr[i][j];
    }
  }
  return console.log(product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

multiplyAll([
  [2, 2],
  [3, 3],
  [5, 5, 4],
]);

//do ... while loop:
//It is called a do...while loop because it will first do one pass
//of the code inside the loop no matter what,
//and then continue to run the loop
//while the specified condition evaluates to true.
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

//Essentially, a do...while loop ensures that the code
//inside the loop will run at least once.
//do loops execute at least once example:
var ourArray3 = [];
var i3 = 5;
do {
  ourArray3.push(i);
  i3++;
} while (i3 < 5);

//while loop:
var ourArray2 = [];
var i2 = 5;
while (i2 < 5) {
  ourArray2.push(i2);
  i2++;
}

//iteration stop problem:
let stupidArray = [["a", "b"], 2, 3, ["this", "sucks"], 5];
//check if have "this", and if have "sucks", nested ifs, 3 different messages
for (let i = 0; i < stupidArray.length; i++) {}
