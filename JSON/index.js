// JSON = (JavaScript Object Notation) data-interchange format
// used for exchanging data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

// const names = ["Bob", "John", "Sandy"];
// const person = {
//   name: "Ivan",
//   age: 30,
//   isEmployed: true,
//   hobbies: ["fishing", "karate"],
// };

// const jsonString = JSON.stringify(names);
// console.log(jsonString); // ["Bob","John","Sandy"]
// const jsonString = JSON.stringify(person);
// console.log(jsonString); // {"name":"Ivan","age":30,"isEmployed":true,"hobbies":["fishing","karate"]}

// const jsonNames = `["Bob", "John", "Sandy"]`;
// const jsonPerson = `{
//   "name": "Ivan",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["fishing", "karate"]
// }`;

// const parsedData = JSON.parse(jsonNames);
// console.log(parsedData); // ['Bob', 'John', 'Sandy']
// const parsedData = JSON.parse(jsonPerson);
// console.log(parsedData); // {name: 'Ivan', age: 30, isEmployed: true, hobbies: Array(2)}

fetch("names.json")
  .then((response) => response.json())
  .then((value) => console.log(value));

fetch("names.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value)))
  .catch((error) => console.error(error));
