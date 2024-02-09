// Function = a section of reusable code
// declare code once, use it whenever you want
// call the function to execute that code

// function happyBirthday() {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
// }

// happyBirthday();

// function happyBirthday(username, age) {
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${username}!`);
//   console.log("Happy birthday to you!");
//   console.log(`You are ${age} years old`);
// }

// happyBirthday("Ivan", 25);

// function add(x, y) {
//   let result = x + y;
//   return result;
// }

// let answer = add(2, 3);
// console.log(answer);

// function subtract(x, y) {
//   return x - y;
// }

// console.log(subtract(2, 3));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEven(number) {
//   return number % 2 === 0 ? true : false;
// }

// function isEven(number) {
//   return number % 2 == 0;
// }

// console.log(isEven(10));

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidEmail("ivan@mail.com"));

// Variable scope = where a variable is recognized and accessible (local vs global)

// function function1() {
//   let x = 1;
//   console.log(x);
// }
// function function2() {
//   let x = 2;
//   console.log(x);
// }

// function1();
// function2();

// any variable declared outside of a function has a global scope
// it is available through the whole program
// a global variable is recognized and accessible from anywhere
// let x = 3;
// function function3() {
//   console.log(x);
// }

// function3();

// Array = a variable like structure that can hold more than 1 value

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]); // orange
// console.log(fruits[3]); // undefined

// fruits[0] = "coconut";

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

// Spread operator = ... allows an iterable such as an array or a string to be expanded into separate elements (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum, minimum);

// let username = "Ivan Milenkovic";
// let letters = [...username];
// console.log(letters.join(""));
// console.log(letters.join("-"));

// console.log(letters);

// let fruits = ["apple", "banana", "orange"];
// let newFruits = [...fruits];
// let vegetables = ["carrots", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// console.log(foods);

// Rest parameters = (...) allow a function to work with a variable number of arguments by bundling them into an array
// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// function openFridge(...foods) {
//   console.log(foods);
//   console.log(...foods);
// }
// const food1 = "pizza";
// const food2 = "sushi";
// const food3 = "hamburger";
// const food4 = "hotdog";

// openFridge(food1, food2, food3, food4);

// function getFood(...foods) {
//   return foods;
// }

// const foods = getFood(food1, food2, food3, food4);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;

//   for (let number of numbers) {
//     result += number;
//   }

//   return result;
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(`Your total is $${total}`);

function average(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result / numbers.length;
}

const total = average(1, 2, 3, 4, 5);
console.log(`Your average is $${total}`);

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Sponge", "Bob", "Squarepants");
console.log(fullName);
