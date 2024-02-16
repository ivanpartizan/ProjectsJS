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

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
