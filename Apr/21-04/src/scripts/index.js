// Any code you will write for your website (in the future!) should go here
//   Javascript in the browser
//  XMl, JSON, jQuery, Ajax, API

//  JS Engines:
//   V8 (Chrome, Node, Edge)
//    SpiderMonkey (Firefox)
//    Chakra (Internet Explorer)

//   DOM aka Document Object Module
//   DOM tree.

// Adding javascript to HTML:
// - The `<script>` tag
// - External JS with `<script src="...">`

// The Window object
// (objects functions and variables) are member of window object.
// document object is also member of the window object
// the window object contain many Properties and methods

// -Host object-
// are objects supplied by a certain environment.
// Like in browser environment you will find window
// Or in node.js environment you will find Process

// -Native object-
// are standard built-in objects provided by Javascript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// -----------------------------------------------
// Alert Popup Window
// window.alert("This is an alert message for the user.");
// ----------------
// Prompt Popup Window
// let username = window.prompt(
//   "Please enter your username",
//   "your username here"
// );
// these are old! Do not use because annoying and too old method
// -----------------------------------------------
// Execute a JS function upon click of button
function change() {
  window.document.getElementById("main-para");
  console.log(
    "This what you are selecting with the above path: ",
    window.document.getElementById("main-para")
  );
  //it's better to make this a variable
  let mainParagraph = window.document.getElementById("main-para");
  console.log("This is your variable: ", mainParagraph);
  // See? They are the same
  // making a path a variable is creating a reference to the element from the path
  window.document.getElementById("main-para").outerHTML =
    "<h1 id='main'> Hi this is now a heading 😎</h1>";
  console.log(mainParagraph);

  window.document.getElementById("main").innerHTML =
    "<h1 id='main'> Hi this is now a heading 😎</h1>";
  console.log(mainParagraph);
}

// Practice the below from Hadi:
// function change() {
//     console.log(window.document.getElementById("main"));

//     window.document.getElementById("main").outerHTML =
//       "<h1 id='main'> Hi this is new text form Js 😎</h1>";
//     let headerText = window.document.getElementById("main");
//     console.log(headerText);
//     headerText.style.backgroundColor = "orange";
//   }

//   function multiply() {
//     let userNum = document.querySelector("#num").value;
//     // console.log(userNum);
//     let resultText = "";
//     for (let i = 1; i <= 10; i++) {
//       resultText += `${i} * ${userNum} ☘️ ${i * userNum} <br>`;
//     }
//     document.querySelector(".result").innerHTML = resultText;
//   }
