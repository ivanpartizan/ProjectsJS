// console.log(`Hello`);
// window.alert(`This is an alert!`);

// document.getElementById("myH1").textContent = `Ivan`;
// document.getElementById("myP").textContent = `I like pizza!`;

// Variable - a container that stores a value
// behaves as if it were the value it contains
// 1. declaration - let x;
// 2. assignment - x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is: ${gpa}`);

// let firstName = "Ivan";
// let favoriteFood = "pizza";
// let email = "ivan123@mail.com";

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favoriteFood}`);
// console.log(`Your email is ${email}`);

// let online = true;
// let forSale = false;

// console.log(typeof online);
// console.log(`Ivan is online: ${online}`);

let fullName = "Ivan Milenkovic";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// Arithmetic operators
// operands (values, variables...)
// operators (+ - * /)
// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

// console.log(students);

// operator precedence
// 1. parenthesis ()
// 2. exponents
// 3. multiplication & division & modulo
// 4. addition & subtraction

// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result); // 23

// let result = 6 / 2 ** (2 + 5);
// console.log(result); // 0.046875

// How to accept user input?
// 1. easy way = window prompt
// 2. pro way = HTML textbox

// let username;
// username = window.prompt("What's your username?");
// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
};

// Type conversion = change the datatype of a value to another datatype (strings, numbers, booleans)

// let age = window.prompt("How old are you");
// age = Number(age1);
// age += 1;
// console.log(age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x); // NaN 'number'
// console.log(y, typeof y); // pizza string
// console.log(z, typeof z); // true 'boolean'

// let x = "0";
// let y = "0";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x); // 0 'number'
// console.log(y, typeof y); // 0 string
// console.log(z, typeof z); // true 'boolean'

// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x); // 0 'number'
// console.log(y, typeof y); //  string
// console.log(z, typeof z); // false 'boolean'

// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = `${circumference} cm`;
};
