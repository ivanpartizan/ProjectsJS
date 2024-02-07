// String methods = allow you to manipulate and work with text (strings)

// let userName = "IvanM";
// console.log(userName.charAt(0)); // I
// console.log(userName.charAt(1)); // v

// console.log(userName.indexOf("a")); // 2
// console.log(userName.lastIndexOf("a")); // 2
// console.log(userName.indexOf("y")); // -1

// console.log(userName.length); // 5

// userName = "     IvanM";
// console.log(userName.trim());

// userName = userName.toUpperCase(); // IVANM
// userName = userName.toLowerCase(); // ivanm
// userName = userName.repeat(3); // IvanMIvanMIvanM

// let result = userName.startsWith(" "); // false
// let result = userName.endsWith(" "); // false

// if (result) {
//   console.log("Your username can't begin with ' '");
// } else {
//   console.log(userName);
// }

// let result = userName.includes("a"); // true

// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-", ""); // 1234567890

// phoneNumber = phoneNumber.padStart(15, "0"); // 000001234567890
// phoneNumber = phoneNumber.padEnd(15, "0"); // 123456789000000

// String slicing = creating a substring from a portion of another string

// const fullName = "Ivan Milenkovic";

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5);

// let firstChar = fullName.slice(0, 1); // I
// let lastChar = fullName.slice(-1); // c
// lastChar = fullName.slice(-3); // vic

// let firstName = fullName.slice(0, fullName.indexOf(" ")); // Ivan
// let lastName = fullName.slice(fullName.indexOf(" ") + 1); // Milenkovic

// const email = "ivanm@gmail.com";

// let username = email.slice(0, email.indexOf("@")); // ivanm
// let extension = email.slice(email.indexOf("@") + 1); // gmail.com

// Method chaining = calling one method after another in one continuous line of code

// NO METHOD CHAINING
// let username = window.prompt("Enter your username: ");
// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// METHOD CHAINING
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();

// console.log(username);

// Logical operators = used to combine or manipulate boolean values (true or false)
// AND == &&, OR == ||, NOT = !

// const temp = 20;

// if (temp > 0 && temp <= 30) {
//   console.log("The weather is GOOD");
// } else {
//   console.log("The weather is BAD");
// }

// if (temp <= 0 || temp > 30) {
//   console.log("The weather is BAD");
// } else {
//   console.log("The weather is GOOD");
// }

// const isSunny = false;

// if (!isSunny) {
//   console.log("It is cloudy");
// } else {
//   console.log("It is sunny");
// }

// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and datatype are equal)
// != inequality operator
// !== strict inequality operator

// const PI = 3.14;

// if (PI == "3.14") {
//   console.log("That is Pi");
// } else {
//   console.log("That is NOT Pi");
// } // That is Pi

// if (PI === "3.14") {
//   console.log("That is Pi");
// } else {
//   console.log("That is NOT Pi");
// } // That is NOT Pi

// if (PI != "3.14") {
//   console.log("That is NOT Pi");
// } else {
//   console.log("That is Pi");
// } // That is Pi

// if (PI !== "3.14") {
//   console.log("That is NOT Pi");
// } else {
//   console.log("That is Pi");
// } // That is NOT Pi

// WHILE loop = repeat some code WHILE some condition is true
