// DOM = DOCUMENT OBJECT MODEL
// Object {} that represents the page you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

// console.dir(document);

// document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// const username = "Ivan M";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent += username === "" ? `Guest` : username;

// Element selectors = methods used to target and manipulate HTML elements
// they allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// document.getElementById() // element or null
// document.getElementsByClassName() // HTML collection
// document.getElementsByTagName() // HTML collection
// document.querySelector() // element or null
// document.querySelectorAll() // nodelist

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");
// fruits[0].style.backgroundColor = "yellow";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "orange";
// });

// console.log(fruits);

// const h4Elements = document.getElementsByTagName("h4");
// h4Elements[0].style.backgroundColor = "red";
// h4Elements[1].style.backgroundColor = "red";

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }

// const liElements = document.getElementsByTagName("li");

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "red";
// });

// console.log(h4Elements);

// const element = document.querySelector(".fruits");
// const element = document.querySelector("h4");
// element.style.backgroundColor = "yellow";

// const fruits = document.querySelectorAll(".fruits");
// const foods = document.querySelectorAll("li");
// foods[5].style.backgroundColor = "lightblue";

// foods.forEach((food) => {
//   food.style.backgroundColor = "yellow";
// });

// DOM Navigation = the process of navigating through the structure of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "orange";

// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "orange";
});

children[1].style.backgroundColor = "yellow";
