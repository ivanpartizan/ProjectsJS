// Object = a collection of related properties and/or methods
// properties are things that an object has
// a method is a function that belongs to an object
// can represent real world objects (people, products, places)
// object = {key: value, function()}

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log("Hi, I am Spongebob!");
//   },
//   eat: function () {
//     console.log("I am eating a Krabby Patty");
//   },
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false,
//   sayHello: () => console.log("Hey, I am Patrick..."),
//   eat: () => console.log("I am eating roast beef,chicken and pizza"),
// };

// console.log(person1.firstName);
// console.log(person2.lastName);
// person1.sayHello();
// person2.sayHello();
// person1.eat();
// person2.eat();

// THIS = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name;

// const person1 = {
//   name: "Spongebob",
//   favFood: "hamburgers",
//   sayHello: function () {
//     console.log(`Hi, I am ${this.name}`);
//   },
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favFood}`);
//   },
// };

// person1.sayHello();
// person1.eat();

// console.log(this); // Window object
// with arrow functions, this references Window object

// Constructor = special method for defining the properties and methods of objects
// it helps with code reusability, we can reuse it to create many objects

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You drive the ${this.model}`);
//   };
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

// console.log(car1);
// console.log(car2);
// console.log(car1.make);
// console.log(car2.model);
// console.log(car1.year);
// console.log(car2.color);
// car1.drive();
// car2.drive();

// Class = provides a more structured and cleaner way to work with objects compared to traditional constructor functions (ES6 feature)
// ex. static keyword, encapsulation, inheritance

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.5);

// console.log(product1);
// product1.displayProduct();
// product2.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// Static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// class MathUtil {
//   static PI = 3.14159; // we don't need to create an object in order to use this property

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online`);
//   }

//   sayHello() {
//     console.log(`Hello, my username is ${this.username}`);
//   }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// console.log(user1.username);
// console.log(user1.userCount); // undefined
// user2.sayHello();
// console.log(User.userCount); // 2
// User.getUserCount(); // There are 2 users online

// Inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit); // Rabbit {alive: true, name: 'rabbit'}
// console.log(rabbit.name); // rabbit
// console.log(rabbit.alive); // true
// rabbit.eat(); // This rabbit is eating
// rabbit.sleep(); // This rabbit is sleeping

// rabbit.alive = false;
// console.log(rabbit.alive); // false
// rabbit.run(); // This rabbit is running
// fish.swim(); // This fish is swimming
// hawk.fly(); // This hawk is flying

// Super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//     super.move(this.runSpeed);
//   }

//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// console.log(rabbit); // Rabbit {name: 'rabbit', age: 1, runSpeed: 25}
// console.log(fish); // Fish {name: 'fish', age: 2, swimSpeed: 12}
// console.log(hawk); // Hawk {name: 'hawk', age: 3, flySpeed: 50}

// rabbit.run(); // This rabbit can run   The rabbit moves at a speed of 25mph
// fish.swim(); // This fish can swim   The fish moves at a speed of 12mph
// hawk.fly(); // This hawk can fly   The hawk moves at a speed of 50mph

// Getter = special method that makes a property readable
// Setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

rectangle.width = 5;
rectangle.height = 6;
// console.log(rectangle.width);
// console.log(rectangle.height);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

const person = new Person("Ivan", "Milenkovic", 25);

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
