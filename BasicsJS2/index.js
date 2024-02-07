// Math object = built-in object that provides a collection of math related properties and methods

// console.log(Math.PI);
// console.log(Math.E); // Euler's number

// let x = 3.21;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);

// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);

// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);

// z = Math.abs(x);
// z = Math.sign(x); // 1, 0 or -1

// console.log(z);

// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(max, min);

// Random Number Generator

// between 1 and 6
// let randomNum = Math.floor(Math.random() * 6) + 1;

// between min and max
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");

// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   myLabel1.textContent = randomNum1;
//   myLabel2.textContent = randomNum2;
//   myLabel3.textContent = randomNum3;
// };

// IF STATEMENTS = if a condition is true, execute some code; if not, do something else

// let age = 25;

// if (age >= 18) {
//   console.log("You are old enough to enter this website");
// } else {
//   console.log("You must be 18+ to enter this website");
// }

// let time = 9;

// if (time < 12) {
//   console.log("Good morning!");
// } else {
//   console.log("Good afternoon!");
// }

// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student!");
// } else {
//   console.log("You are NOT a student!");
// }

// let age = 25;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("You are old enough to drive");

//   if (hasLicense) {
//     console.log("You have your license!");
//   } else {
//     console.log("You do not have your license yet!");
//   }
// } else {
//   console.log("You must be 16+ to have a license");
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function () {
//   age = myText.value;
//   age = Number(age);

//   if (age >= 18) {
//     resultElement.textContent = "You are old enough to enter this website";
//   } else if (age < 0) {
//     resultElement.textContent = "Your age can't be below 0";
//   } else if (age == 0) {
//     resultElement.textContent = "You can't enter, you were just born";
//   } else {
//     resultElement.textContent = "You must be 18+ to enter this website";
//   }
// };

// .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  } else {
    subResult.textContent = "You are NOT subscribed!";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "You are paying with MasterCard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with PayPal";
  } else {
    paymentResult.textContent = "You must select a payment type";
  }
};

// Ternary operator = a shortcut to if and else statements; helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse;

// let age = 21;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - (purchaseAmount * discount) / 100}`
);

// SWITCH = can be an efficient replacement to many else if statements

let day = 1;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
    break;
}

let testScore = 92;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
    break;
}

console.log(letterGrade);
