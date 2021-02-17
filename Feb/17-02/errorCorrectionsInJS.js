//find Hadi's file

//3 types of errors
//(compilation aka compiler fails to compile, runtime, logic)
//try catch will find the runtime errors but not the parse errors like
//typo or snytax problems

//logical error:
//when logically you get no results because your code is not working or not well fitted
//it might still execute, but won't show any results
//example:

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

const timerDisplay2 = setTimeout(printData, 3000);
const timerDisplay = setTimeout(
  () => console.log("normal there is an arrow function here"),
  1000
);
//console.log will print it out chronologically
//what does the computer do while it is waiting?
//running and waiting while running next code or seeing timer then stop run others then go execute timer?
