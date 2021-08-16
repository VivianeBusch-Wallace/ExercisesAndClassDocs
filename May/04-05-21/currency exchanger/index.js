const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const currency = document.querySelector("#currency");

let userNumber = 0;
function registerUserValue(e) {}

function convert() {}

currency.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
