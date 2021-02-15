console.log("=========functions========");

//---------recursion functions---------
// Basic JavaScript: Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(multiply([2, 3, 4, 5], 3));

// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply2(arr, n) {
  console.log(arr[n - 1]); //outputs values <4, 3, 2, undefined> that is from: arr[2], arr[1], arr[0], arr[-1]
  if (n <= 0) {
    return 1;
  } else {
    return multiply2(arr, n - 1) * arr[n - 1];
  }
}
console.log(multiply2([2, 3, 4, 5], 3));
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.
// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr. (source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([1], 0)); //result is 0
console.log(sum([1], 1)); //result is 1
console.log(sum([2, 3, 4], 1)); //result is 2

console.log(sum([2, 3, 4, 5], 3)); //result is 9
//for this example:
// first round: n is 3, executes the else scope, which calls the function again with n-1, which is n==2,
// second round: executes the else again, which calls function again with n-1 which is n==1,
// third round: else is executed again because n == 1,
// fourth round: with n==0 it stops and returns 0.
// in other words: arr[n-1] == arr[2] in the first round, arr[2] holds the value 4, second round: arr[1] == 3, third round: arr[0]==2, fourth round stops with n == 0
