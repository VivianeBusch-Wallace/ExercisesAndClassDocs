// the for loop
// for loop has a scope (curly brackets)
// make sure your conditions in the round brackets is true
// otherwise it will not run at all
// the incrementing part happens at the end of the loop
// if i does not do i++ then add it at the end of the loop
// you can do anything with i as long as it is an integer and a number
// no decimals!
// several ifs (not nested) will be "incremented", each if will be printed out for the same i even if the conditions overlap
// everything inside the curly brackets will be repeated several times (i times)
let text = "";
for (let i = 0; i < 5; i++) {
  text = "";
  for (let j = 0; j < i; j++) {
    // text += j;
    // console.log(text);
  }
  console.log(text);
}

// the repeat method only belongs to console.log
