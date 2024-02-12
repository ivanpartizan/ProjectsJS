// Callback = a function that is passed as an argument to another function
// used to handle asynchronous operations:
// 1. reading a file
// 2. network requests
// 3. interacting with databases
// "hey, when you are done, call this next"

// function hello(callback) {
//   console.log("Hello!");
//   callback();
// }
// function goodbye() {
//   console.log("Goodbye!");
// }

// hello(goodbye);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
//   console.log(`Result is ${result}`);
// }

// function displayPage(result) {
//   document.getElementById("myH1").textContent = result;
// }

// sum(displayConsole, 1, 2);
// sum(displayPage, 1, 2);

// FOREACH() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
// array.forEach(callback);
// element, index, array are provided

// let numbers = [1, 2, 3, 4, 5];

// function display(element) {
//   console.log(element);
// }

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

// let fruits = ["apple", "banana", "orange"];

// function display(element) {
//   console.log(element);
// }

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array) {
//   // array[index] = element[0].toUpperCase() + element.slice(1);
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// fruits.forEach(capitalize);
// fruits.forEach(display);

// MAP() = accepts a callback and applies that function to each element of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];

// function square(element) {
//   return Math.pow(element, 2);
// }

// const squares = numbers.map(square);
// console.log(squares);

// const students = ["Bob", "Patrick", "Sandy"];

// function upperCase(element) {
//   return element.toUpperCase();
// }

// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper);

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

// function formatDates(element) {
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);

// FILTER() = creates a new array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// function isEven(element) {
//   return element % 2 === 0;
// }

// let evenNums = numbers.filter(isEven);
// console.log(evenNums);

// const ages = [16, 17, 18, 18, 19, 20, 20, 60];

// function isAdult(element) {
//   return element >= 18;
// }

// const adults = ages.filter(isAdult);
// console.log(adults);

// const words = ["apple", "banana", "orange", "kiwi", "coconut"];

// function getShortWords(element) {
//   return element.length <= 6;
// }

// const shortWords = words.filter(getShortWords);
// console.log(shortWords);

// REDUCE() = reduce the elements of an array to a single value

// const prices = [5, 30, 10, 25, 15, 20];

// function sum(accumulator, element) {
//   return accumulator + element;
// }

// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);

// const grades = [75, 50, 90, 80, 65, 95];

// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }

// const maximum = grades.reduce(getMax);
// console.log(maximum);

// Function declaration = define a reusable block of code that performs a specific task

// Function expressions = a way to define functions as values or variables

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

// const hello = function () {
//   console.log("Hello");
// };

// hello();

// setTimeout(hello, 3000);

// setTimeout(function () {
//   console.log("Hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// const total = numbers.reduce(function (accumulator, element) {
//   return accumulator + element;
// });

// console.log(total);

// Arrow functions = a concise way to write function expressions
// good for simple functions that you use only once
// (parameters) => some code

// Function declaration
// function hello() {
//   console.log("Hello");
// }

// hello();

// Function expression
// const hello = function () {
//   console.log("Hello");
// };

// hello();

// Arrow function
// const hello = () => console.log("Hello");

// hello();

// const hello = (name) => console.log(`Hello ${name}`);

// hello("Ivan");

// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} years old`);
// };

// hello("Ivan", 25);

// setTimeout(() => console.log("Hello again"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
