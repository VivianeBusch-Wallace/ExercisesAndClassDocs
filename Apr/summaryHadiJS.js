// HOW TO USE THIS FILE >>>
// This is a summary of all of Hadi's JavaScript code from our class (unedited)
// You can find the date and the reference web address of each summarized file at the beginning of each part
// Use Ctrl + F to search by keyword
// for example if you want to remember how to write a switch case type "switch" or "case" and
// use the arrows of the search popup to navigate through each find to get to the example you were looking for.
// If you want to search by date use this format "day-month-year" in numbers; like "29-04-21".
// Disclaimer: These files are unedited which means that it is most likely not possible to find good results if you search something like "how to write a switch case" (this is not google).
// It's also no use to console.log the whole file because there might be a lot of conflicts between the files of each day.
// This file might not be updated if there has been changes after the end of this summary's month! If you know that there had been changes then you are better off checking the github files.

// =======================================================================
// Bigger topics from April 2021:
// Bootstrap, SASS, DOM, DOM manipulation, DOM Traversing
// Small simple game
// =======================================================================

// =======================================================================
// 21-04-21
// https://github.com/Fbw-48/live-coding/blob/main/apr/21-04/src/scripts/index.js
// -----------------------------------------------------------------------
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

// window.alert("Hi");
// let username = window.prompt("Please enter your name");
// console.log(username);

function change() {
  console.log(window.document.getElementById("main"));

  window.document.getElementById("main").outerHTML =
    "<h1 id='main'> Hi this is new text form Js 😎</h1>";
  let headerText = window.document.getElementById("main");
  console.log(headerText);
  headerText.style.backgroundColor = "orange";
}

function calc() {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  let math = document.querySelector("#math").value;
  // console.log(userNum);
  // let resultText = "";
  // for (let i = 1; i <= 10; i++) {
  //   resultText += `${i} * ${userNum} ☘️ ${i * userNum} <br>`;
  // }
  let mathResult = 0;
  console.log(num1);
  switch (math) {
    case "+":
      mathResult = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      mathResult = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      mathResult = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      mathResult = parseInt(num1) / parseInt(num2);
      break;
  }
  document.querySelector(".result").innerHTML = mathResult;
}

// =======================================================================
// 22-04-21
// https://github.com/Fbw-48/live-coding/blob/main/apr/22-04/index.js
// -----------------------------------------------------------------------
// where I can link my js file

// window.alert === alert()

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node

const container = document.querySelector(".container");

const spanList = document.querySelectorAll(".container span");
console.log(spanList);
spanList.forEach((span) => {
  span.innerHTML = "Nice 🤓 <br>";
  span.style.backgroundColor = "orange";
});

console.log(spanList.length);
spanList[2].style.backgroundColor = "red";

const menu = document.querySelector("#menuList");

// const highlight = document.querySelector(".highlight");
// highlight.style.backgroundColor = "yellow";

// + > ~
const highlight = document.querySelectorAll("li[class='highlight']");
console.log(highlight);
highlight[0].style.backgroundColor = "blue";

const moreClass = document.querySelector(".main");
moreClass.classList.add("text");
moreClass.classList.add("small");
moreClass.classList.add("cool", "flex-size");
console.log(moreClass.classList);
moreClass.classList.remove("flex-size");
console.log(moreClass.classList);
let classArr = ["classOne", "classTwo"];
// adding more classes to the div using ...
moreClass.classList.add(...classArr);
console.log(moreClass.classList);

// keep on mind font-size in js fontSize

moreClass.style.color = "red";
moreClass.style.cssText = "font-size: 2.0rem; color: blue;";

const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector("body").style;
  console.log(mood);
  if (mood) {
    body.backgroundColor = "black";
  } else {
    body.backgroundColor = "white";
  }
};

// =======================================================================
// 26-04-21
// index.js
// https://github.com/Fbw-48/live-coding/blob/main/apr/26-04/index.js
// -----------------------------------------------------------------------
// document.write("Hi I am text");
//document.write("<h1> Hi <h1>");
const arr = [];
const create = () => {
  // 1. step
  const newElement = document.createElement("div");

  const newText = document.createTextNode("I am a new element 😉");

  // 2. step
  // div                  // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  // Checking my input if it has a text
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // Adding random colour to my list item
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    // Other way to add random colours for all of the list items that are in my page
    // const listItems = document.querySelectorAll("li");
    // listItems.forEach((item) => {
    //   item.style.color = colorGen();
    // });
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // const checkBox = document.createElement("input");
    // checkBox.type = "checkbox";
    // newContainer.appendChild(checkBox);
    // Adding some text
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";

    // Injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);

    // Adding class
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const check = () => newLi.classList.toggle("completed");

    // const del = () => newLi.remove() ;
    // Adding event listener to my buttons
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
// Functional check which key the user is pressing
const keyCheck = (event) => {
  console.log(event);
  if (e.key == "Enter") addToList();
};
// Adding event listener to the input
// const userInput = document.querySelector("#userData");
// userInput.addEventListener("keypress", keyCheck);

// Adding event listener to the form
document.querySelector("form").addEventListener("submit", addToList);

// -----------------------------------------------------------------------
// 26-04-21
// withLaterFunction.js
// https://github.com/Fbw-48/live-coding/blob/main/apr/26-04/withLaterFunction.js
// -----------------------------------------------------------------------
const arr = [];
const addToList = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  arr.unshift(userData);
  // Checking my input if it has a text
  if (userData != "") {
    drawList();
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

// Adding event listener to the form
document.querySelector("form").addEventListener("submit", addToList);
const drawList = () => {
  document.querySelector(".result").innerHTML = "";
  arr
    .map((item) => {
      const newLi = document.createElement("li");
      const newContainer = document.createElement("div");
      const doneButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const laterButton = document.createElement("button");
      const text = document.createTextNode(item);
      newLi.appendChild(text);
      newLi.style.color = colorGen();
      document.querySelector(".result").appendChild(newLi);
      doneButton.innerHTML = "✓";
      deleteButton.innerHTML = "✗";
      laterButton.innerHTML = "⎈";
      newContainer.appendChild(doneButton);
      newContainer.appendChild(deleteButton);
      newContainer.appendChild(laterButton);
      doneButton.classList.add("done");
      newLi.appendChild(newContainer);
      deleteButton.addEventListener("click", () => del(item));
      doneButton.addEventListener("click", () =>
        newLi.classList.toggle("completed")
      );
      laterButton.addEventListener("click", () => later(item));
    })
    .join("");
};

const del = (item) => {
  arr.splice(arr.indexOf(item), 1);
  drawList();
};

const later = (item) => {
  arr.splice(arr.indexOf(item), 1);
  arr.push(item);
  drawList();
};

// =======================================================================
// 27-04-21
// https://github.com/Fbw-48/live-coding/blob/main/apr/27-04/scripts/index.js
// -----------------------------------------------------------------------
// Change the font of the body element.
const body = document.querySelector("body");
body.style.fontFamily = "Arial";
// other way
// document.querySelector("body").style.fontFamily = "Arial";

// Center the text of h1 on the page.
const title = document.querySelector(".title");
title.style.textAlign = "center";

// main
const mainSec = document.querySelector(".main");
mainSec.style.display = "flex";
mainSec.style.flexFlow = "row wrap";
mainSec.style.justifyContent = "space-around";
mainSec.style.boxSizing = "border-box";

//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
const category = document.querySelectorAll(".category");
console.log(category);
// Some JavaScript time 😎

// the full object item
// category.forEach((item) =>{
// item.style.fontFamily="";
// }
// Unpacking fields from an object
category.forEach(({ style }) => {
  style.fontSize = "1.5rem";
  style.fontStyle = "bold";
  style.borderBottom = "1px black solid";
});
// category.forEach(({ style : cat }) => {
//     cat.fontSize = "1.5rem";
//     cat.fontStyle = "bold";
//     cat.borderBottom = "1px black solid";
//   });

// Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const colorGen = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  // one more thing
  result += "50";
  // console.log(result);
  return result;
};

// color generator in other way 😉
const colorGenOtherWay = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random();
  // rgba(23,222,34,0.43455)
  return `rgba(${r},${g},${b},${a})`;
};
// food-category
const food = document.querySelectorAll(".food-category");
food.forEach(({ style: item }) => {
  item.backgroundColor = colorGen();
  // item.backgroundColor = colorGenOtherWay();
  item.width = "30%";
  item.height = "10rem";
  item.textAlign = "center";
  item.padding = "1rem";
  item.borderRadius = "5px";
});

// Select all even allergy-info items. Give the even items a different background color.
//const allergy = document.querySelectorAll(".allergies li");
// const allergy = document.querySelectorAll(".allergy-info");
// allergy.forEach(({ style }, i) => {
//   if (i % 2 == 0) {
//     style.backgroundColor = colorGenOtherWay();
//   }
// });
const allergy = document.querySelectorAll(".allergy-info:nth-child(even)");
allergy.forEach(({ style }) => {
  style.backgroundColor = colorGenOtherWay();
});

// Make the allergy-warning appear as a column in the center of the page.

const allergySecStyle = document.querySelector(".allergy-warning").style;
allergySecStyle.display = "flex";
allergySecStyle.flexFlow = "column";
allergySecStyle.justifyContent = "center";
allergySecStyle.alignItems = "center";

//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";
const foodItems = document.querySelectorAll(".food-desc");
const media = window.matchMedia("(max-width: 400px)");
console.log(media);
foodItems.forEach(({ style }) => {
  console.log(style);
  style.border = "5px solid orange";
  style.borderRadius = "100%";
  style.height = "7rem";
  style.width = "7rem";
  style.display = "flex";
  style.justifyContent = "center";
  style.alignItems = "center";
  style.margin = "1rem";
  if (media.matches) {
    // mobile
    style.flexFlow = "column";
    style.backgroundColor = "red";
  } else {
    // desktop
    style.flexFlow = "row";
    style.backgroundColor = "orange";
  }
});

// =======================================================================
// 28-04-21
// https://github.com/Fbw-48/live-coding/blob/main/apr/28-04/index.js
// -----------------------------------------------------------------------
// Traversing
//  Node vs Element Nodes

const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
const ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText.textContent);

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
// nodeName, nodeType, id, innerText
// closest
let text = document.querySelector("span");
let closetEle = text.closest(".cool");
console.log(closetEle);
// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name.nodeType);
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});
// querySelector
const allChildren = document.querySelector("body").children;
console.log(allChildren);
let menuList = document.getElementById("menu");
console.log(menuList.firstElementChild);
console.log(menuList.lastElementChild);

// all comments in your html page should be printed in console
// but first let's understand apply method
const lettersArr = ["a", "b"];
const numbers = [0, 1, 2];
lettersArr.push.apply(lettersArr, numbers);
console.info(lettersArr); // ["a", "b", 0, 1, 2]
/*  to put it in words 
apply it’s a method will take a value and array(or array-like object )
will execute the function that it’s being applied to (push in our example but it can be any other function/method )
so in our case we passed the whole array to compare it with the result of the function call so I don’t have repeat or I don’t push until my function came back with a result */
// get me now all the comments please 😅
let allComments = (element) => {
  let arr = [];
  element.childNodes.forEach((node) => {
    node.nodeType == 8
      ? arr.push(node)
      : arr.push.apply(arr, allComments(node));
  });
  return arr;
};
console.log(allComments(document));
// childElementCount will tell you how many child elements this element has
// firstChild , lastChild
// firstElementChild , lastElementChild
// nextSibling , previousSibling
// nextElementSibling , previousElementSibling
// innerHTML ,  innerText , textContent

// nice work from two people in our class 🦾
// const allChildren2 = Array.from(document.querySelector("body").childNodes);
// console.log(allChildren2);
// allChildren2.forEach((child) => {
//   if (child.nodeType == 8) console.log(child);
// });

const copy = () => {
  let text = document.querySelector(".userInput");
  text.select();
  document.execCommand("copy");
};
document.querySelector(".copyButton").addEventListener("click", copy);
// other way
// const allEll = document.querySelectorAll("*");
// console.log(allEll);
// allEll.forEach((elem) =>
//   elem.childNodes.forEach((node) => {
//     if (node.nodeName === "#comment") console.log(node);
//   })
// );

// =======================================================================
// 29-04-21
// index.js
// https://github.com/Fbw-48/live-coding/blob/main/apr/29-04/index.js
// -----------------------------------------------------------------------
// Events:
// User Events (interaction) and Browser Events (loading, etc...)
document.addEventListener("load", console.log("Hi"));
// Listening:
// Higher order functions aka functions that accept function (callbacks)
const divText = document.querySelector(".text");
const print = () => {
  divText.innerHTML += "Hi I am onclick from HTML <br>";
};
const btn = document.getElementById("more");
console.dir(btn);
btn.onclick = () => {
  divText.innerHTML += "Hi I am onclick from JavaScript <br>";
};
const reset = () => {
  header.style.backgroundColor = "white";
};

const changeBg = () => {
  header.style.backgroundColor = "orange";
};
// - Listening to user actions
//   `EventTarget.addEventListener(<namespace>, <callback>)`
// - Mouse Events:
// `click`, `mouseenter`, `mouseleave`
const header = document.querySelector("h1");
header.addEventListener("mouseenter", changeBg);
header.addEventListener("mouseleave", reset);
// - Keyboard Events:
// `keydown`, `keyup`
function keyUp(e) {
  console.log(e);
  this.style.backgroundColor = "orange";
  if (e.code == "KeyS") alert("You are cool");
}
function keyDown(e) {
  this.style.backgroundColor = "blue";
}
function keyPress(e) {
  this.style.backgroundColor = "yellow";
}

const userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUp); // always the last
userInput.addEventListener("keydown", keyDown); // always the first
userInput.addEventListener("keypress", keyPress); // the middle event between down and up

// -----------------------------------------------------------------------
// 29-04-21
// Simple Game index.js
// https://github.com/Fbw-48/live-coding/blob/main/apr/29-04/simple-game/index.js
// -----------------------------------------------------------------------
// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;
function goUp() {
  vStandPoint -= 10;
  mini.style.top = vStandPoint + "px";
}
function goDown() {
  vStandPoint += 10;
  mini.style.top = vStandPoint + "px";
}
function goRight() {
  hStandPoint += 10;
  mini.style.left = hStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  mini.style.left = hStandPoint + "px";
}

function move(e) {
  console.log(e);
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyD") goRight();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyY") goDown();
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  if (
    window.innerHeight / 4 <= vStandPoint &&
    window.innerWidth - 70 <= hStandPoint
  )
    alert("cool you are winner");
}
const mini = document.querySelector(".mini");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
