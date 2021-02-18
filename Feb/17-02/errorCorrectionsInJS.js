//Hadi's file: https://github.com/Fbw-48/live-coding/blob/main/feb/17-02/index.js

//3 types of errors
//(compilation aka compiler fails to compile, runtime, logic)
//try catch will find the runtime errors but not the parse errors like
//typo or snytax problems

// most of the error are coming from other places like working with data base or server internal issues
// `try { ... } catch (e) { ... }

//logical error:
//when logically you get no results because your code is not working or not well fitted
//it might still execute, but won't show any results
//example:
let userAge = 25;
if (userAge == 24) {
  console.log("Cool you are the best");
} //will not execute because of logical error

//what do runtime and compiler errors look like???

//MDN about try...catch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// try --> to test a block of code
// catch --> to handel the error
// throw --> to create a custom error message
// finally --> to execute a code after try regardless of the result

//try and catch cannot find logical errors
//try and catch work just like regular funcitons
try {
  console.log("you can see this text");
  cool();
  console.log("not executed because error found");
} catch (error) {
  console.log("This is the error: " + error);
} finally {
  console.log("finally will run anyway");
}

let userName = "";
try {
  if (userName == "") throw "Sorry, you need to add a valid userName.";
  console.log("can you see me?");
  if (userAge > 55)
    throw "You won't see this because throw exits after the first error";
} catch (error) {
  console.log("This is the error: " + error);
} finally {
  console.log("finally will run anyway");
}
// inside try: will run until it has found an error and then exit and go to catch
//throw is like an exit
//throw can also output objects? and data?
//throw is for creating custom error messages
//finally will send info to user to ask him to continue...or sth like that (we will see later)

function printData() {
  console.log("I am winning");
}
//of course this function won't execute until it is called

//setTimeout()
//time is in milliseconds
const timerDisplay2 = setTimeout(printData, 3000);
const timerDisplay = setTimeout(
  () => console.log("normal there is an arrow function here"),
  1000
);
//console.log will print it out chronologically
//what does the computer do while it is waiting?
//running and waiting while running next code or seeing timer then stop run others then go execute timer?

// We will learn after HTML, CSS, SASS:
//
// callbacks
// Promise
// async/await
// RxJs
// and a lot more 😎
