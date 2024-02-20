// setTimeout() = function that allows you to schedule the execution of a function after an amount of time (milliseconds)
// times are approximate (varies based on the workload of the JavaScript runtime environment)
// setTimeout(callback, delay)

// function sayHello() {
//   window.alert("Hello");
// }

// setTimeout(sayHello, 3000);
// setTimeout(function () {
// window.alert("Hello");
// }, 3000);
// setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers
// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

// let timeoutId;

// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//   console.log("STARTED");
// }

// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("CLEARED");
// }

// ES6 Module = an external file that contains reusable code that can be imported into other JavaScript files
// write reusable code for many different apps
// can contain variables, classes, functions... and more
// introduced as part of ECMAScript 2015 update

import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

// console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// Asynchronous code

// synchronous code = code that executes line by line consecutively in a sequential manner
// code that waits for an operation to complete

// asynchronous code = allows multiple operations to be performed concurrently without waiting
// doesn't block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data)
// handled with: Callbacks, Promises, Async/Await

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// func1(func2);

// Error = an object that is created to represent a problem that occurs
// occur often with user input or establishing a connection
// Network errors, Promise Rejection, Security errors

// try {} = encloses code that might potentially cause an error
// catch {} = catch and handle any thrown Errors from try {}
// finally {} = (optional) always executes, used mostly for clean up

// try {
// console.log(x);
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS
// } catch (error) {
// console.error(error);
// } finally {
// CLOSE FILES
// CLOSE CONNECTIONS
// RELEASE RESOURCES
// console.log("This always executes");
// }
// console.log("You have reached the end!");

try {
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if (divisor == 0) {
    throw new Error("You can't divide by zero!");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end!");
