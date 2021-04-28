// Traversing
// Node vs Element Nodes
// Short summary
// childElementCount will tell you how many child elements this element has
// firstChild , lastChild
// firstElementChild , lastElementChild
// nextSibling , previousSibling
// nextElementSibling , previousElementSibling
// innerHTML ,  innerText , textContent

const prevElement = document.querySelector("#second").previousElementSibling;
console.log(prevElement);
const prevSibling = document.querySelector("body").previousSibling;
console.log(prevSibling);
// firstChild
const firstEleChild = document.querySelector("#text").firstElementChild;
console.log(firstEleChild);

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
// Differences from innerText
// Don't get confused by the differences between Node.textContent and HTMLElement.innerText.
// Although the names seem similar, there are important differences:
let paragraph = document.querySelector("#text");
// textContent gets the content of all elements, including <script> and <style> elements.
// textContent returns every element in the node.
console.log(`This is textContent: ${paragraph.textContent}`);
// innerText only shows “human-readable” elements.
// innerText is aware of styling and won’t return the text of “hidden” elements.
console.log(`This is innerText: ${paragraph.innerText}`);
// Moreover, since innerText takes CSS styles into account, reading the value of innerText triggers a reflow
// to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)
// IMPORTANT! >>
// Unlike textContent, altering innerText in Internet Explorer (version 11 and below) removes child nodes from the element
// and PERMANENTLY destroys all descendant text nodes. It is impossible to insert the nodes again into any other element
// or into the same element after doing so.
// Differences from innerHTML
// Element.innerHTML returns HTML, as its name indicates.
// Sometimes people use innerHTML to retrieve or write text inside an element,
// but textContent has better performance because its value is not parsed as HTML.
// Moreover, using textContent can prevent XSS attacks.
console.log(`This is innerHTML: ${paragraph.innerHTML}`);
// >>> Just always use textContent

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
// nodeName, nodeType, id, innerText

// closest
// check: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// The closest() method traverses the Element and its parents (heading toward the document root)
// until it finds a node that matches the provided selector string.
// Will return itself or the matching ancestor.
// If no such element exists, it returns null.
let text = document.querySelector(".nested-p");
let closestEle = text.closest(".cool");
console.log(`The closest ".cool" element of ".nested-p" is ${closestEle}`);
// This will return null
let text2 = document.querySelector(".nested-p");
let closestEle2 = text2.closest("p");
console.log(`The closest "p" element of ".nested-p" is ${closestEle2}`);
// This will return .nested-p itself
console.log({ closestEle2 });
console.log(closestEle2);
// matches method
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name.nodeType); //will return the value of our nodeType, here it is 1
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});
// children method
const allChildren = document.querySelector("body").children;
console.log(allChildren);
console.log("<< these are children");
let menuList = document.getElementById("menu");
console.log(menuList.firstElementChild);
console.log(menuList.lastElementChild);

// all comments in your html page should be printed in console
// console.log(document.querySelectorAll("body").COMMENT_NODE);

// let body = document.querySelector("body").children;

// // if (body.nodeType === Node.COMMENT_NODE)
// console.log(Node.COMMENT_NODE);

let allEle = document.querySelectorAll("*");

console.log(allEle);
// allEle.forEach((el) => console.log(el.childNodes));
allEle.forEach((el) =>
  el.childNodes.forEach((node) => {
    if (node.nodeName == "#comment") {
      // << instead you can also use: node.nodeType === 8
      console.log(node);
    }
  })
);

// CSS
// * for box sizing, font family
// :root for ?
