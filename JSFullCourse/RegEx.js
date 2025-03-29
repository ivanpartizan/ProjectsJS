const emailValidatorRegex = new RegExp("^.+@.+\\..+$");
const userInput = "ivan@gmail.com";
const isValid = emailValidatorRegex.test(userInput);
console.log(isValid); // true

const string = "my favorite food is steak";
// [] - character group
/[A-Z]/.test(string); // false
/[a-z]/.test(string); // true
/[0-9]/.test(string); // false

// . - any character
// \d - all numbers
// \s - any whitespace
// \w - all letters and numbers
// ^ - start of the string
// $ - end of the string

// () - groups
/(code|steak)/.test(string);

// Quantifiers
/[a-z]/.exec(string); // ['m']
// * - 0 or more characters
/[a-z]*/.exec(string); // ['my']
// + - 1 or more characters
/[a-z]+/.exec(string); // ['my']

// {} - amount
/[a-z ]{5}/.exec(string); // ['my fa']
/[a-z ]{2,6}/.exec(string); // ['my fav']

// const regex = /[a-z]+/g;

const str = "hello world, 2025   @ more of a string";
const regex = /^[a-z ]+,[0-9 ]+@[a-z ]+$/;
regex.exec(str);
