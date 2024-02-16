// Destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// SWAP THE VALUE OF TWO VARIABLES
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1

// SWAP TWO ELEMENTS IN AN ARRAY
// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors); // ['white', 'green', 'blue', 'black', 'red']

// ASSIGN ARRAY ELEMENTS TO VARIABLES
// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor); // red
// console.log(secondColor); // green
// console.log(thirdColor); // blue
// console.log(extraColors); // ['black', 'white']

// EXTRACT VALUES FROM OBJECTS
// const person1 = {
//   firstName: "Bob",
//   lastName: "Square",
//   age: 30,
//   job: "Cook",
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// };

// const { firstName, lastName, age, job } = person1;
// console.log(firstName); // Bob
// console.log(lastName); // Square
// console.log(age); // 30
// console.log(job); // Cook

// const { firstName, lastName, age, job = "Unemployed" } = person2;
// console.log(firstName); // Patrick
// console.log(lastName); // Star
// console.log(age); // 34
// console.log(job); // Unemployed

// DESTRUCTURE IN FUNCTION PARAMETERS
// pass an object to a function and destructure it when it is passed in
// function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
//   console.log(`name: ${firstName} ${lastName}`);
//   console.log(`age: ${age}`);
//   console.log(`job: ${job}`);
// }

// displayPerson(person1);
// name: Bob Square
// age: 30
// job: Cook

// Nested Objects = Objects inside of other Objects
// allows you to represent more complex data structures
// Child Object is enclosed by a Parent Object
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//   fullName: "Bob Square",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "fishing", "cooking"],
//   address: {
//     street: "123 Fake Street",
//     city: "London",
//     country: "England",
//   },
// };

// console.log(person.fullName); // Bob Square
// console.log(person.hobbies); // ['karate', 'fishing', 'cooking']
// console.log(person.hobbies[0]); // karate
// console.log(person.address); // {street: '123 Fake Street', city: 'London', country: 'England'}
// console.log(person.address.city); // London
// console.log(person.address.country); // England

// for (const property in person.address) {
//   console.log(person.address[property]);
// }
// 123 Fake Street
// London
// England

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Bob", 30, "123 Fake Street", "London", "England");
// console.log(person1);
// console.log(person1.address); // Address {street: '123 Fake Street', city: 'London', country: 'England'}
// console.log(person1.address.street); // 123 Fake Street

// Arrays of objects

const fruits = [
  {
    name: "apple",
    color: "red",
    calories: 95,
  },
  {
    name: "orange",
    color: "orange",
    calories: 45,
  },
  {
    name: "banana",
    color: "yellow",
    calories: 105,
  },
  {
    name: "coconut",
    color: "white",
    calories: 159,
  },
  {
    name: "pineapple",
    color: "yellow",
    calories: 37,
  },
];

// console.log(fruits[0].name); // apple
// console.log(fruits[1].color); // orange
// console.log(fruits[2].calories); // 105

// fruits.push({ name: "grapes", color: "purple", calories: 62 });
// fruits.pop();
// fruits.splice(1, 2);

// fruits.forEach((fruit) => console.log(fruit.name));

// const fruitNames = fruits.map((fruit) => fruit.name);
// console.log(fruitNames); // ['apple', 'orange', 'banana', 'coconut', 'pineapple']

// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// console.log(yellowFruits);
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// console.log(lowCalFruits);

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
// console.log(maxFruit); // {name: 'coconut', color: 'white', calories: 159}

// SORT() = method used to sort elements of an array in place
// sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

// let numbers = [1, 10, 9, 8, 7, 3, 2, 4, 5, 6];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.sort((a, b) => b - a);
// console.log(numbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// const people = [
//   {
//     name: "Bob",
//     age: 30,
//     gpa: 3.0,
//   },
//   {
//     name: "Patrick",
//     age: 37,
//     gpa: 1.5,
//   },
//   {
//     name: "Sandy",
//     age: 27,
//     gpa: 4.0,
//   },
//   {
//     name: "John",
//     age: 51,
//     gpa: 2.5,
//   },
// ];

// people.sort((a, b) => a.age - b.age);
// console.log(people); // Sandy, Bob, Patrick, John

// people.sort((a, b) => a.gpa - b.gpa);
// console.log(people); // Patrick, John, Bob, Sandy

// people.sort((a, b) => b.gpa - a.gpa);
// console.log(people); // Sandy, Bob, John, Patrick

// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people); // Bob, John, Patrick, Sandy

// people.sort((a, b) => b.name.localeCompare(a.name));
// console.log(people); // Sandy, Patrick, John, Bob

// Shuffle an array
// Fisher-Yates algorithm

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);
// console.log(cards); // [3, 'J', 'A', 2, 9, 'K', 'Q', 10, 6, 5, 4, 8, 7]

// Date objects = objects that contain values that represent dates and times
// these date objects can be changed and formatted

// const date = new Date();
// console.log(date); // current date and time

// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// console.log(date); // Mon Jan 01 2024 02:03:04 GMT+0100 (Central European Standard Time)

// const date = new Date("2024-01-02T12:00:00Z");
// console.log(date); // Tue Jan 02 2024 13:00:00 GMT+0100 (Central European Standard Time)

// const date = new Date(1000000000); // ms since Jan 01 1970
// console.log(date); // Mon Jan 12 1970 14:46:40 GMT+0100 (Central European Standard Time)

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();
// console.log(date); // Wed Feb 14 2024 20:44:54 GMT+0100 (Central European Standard Time)
// console.log(year, month, day, hour, minutes, seconds, dayOfWeek); // 2024 1 14 20 44 54 3

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);
// console.log(date); // Mon Jan 01 2024 02:03:04 GMT+0100 (Central European Standard Time)

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if (date2 > date1) {
//   console.log("Happy New Year!");
// }

// Closures = a function defined inside of another function, the inner function has access to the variables and scope of the outer function
// closures allow for private variables and state maintenance
// used frequently in JS frameworks: React, Vue, Angular

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer(); // Hello

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  // return { increment: increment };
  return { increment, getCount }; // shorthand version
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);
