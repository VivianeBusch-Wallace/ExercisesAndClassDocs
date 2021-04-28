// Traversing
//  Node vs Element Nodes
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
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
// nodeName, nodeType, id, innerText
// closest
let text = document.querySelector("span");
let closestEle = text.closest(".cool");
console.log(`This is the closest ".cool" Element of span ${closestEle}`);
console.log({ closestEle });
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
