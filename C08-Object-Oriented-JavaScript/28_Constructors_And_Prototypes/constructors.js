/***************************************************************************
 ********************** Why Constructor Functions **************************
 **************************************************************************/

// Without constructors, creating multiple similar objects is repetitive
/*
const user1 = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const user2 = {
  name: "Jane",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// Notice How the greet method is duplicated
console.log(user1.greet === user2.greet); // false -> Memory Inefficient
*/

/***************************************************************************
 ******************* Creating Constructor Functions ************************
 **************************************************************************/
/*
function User(name, age) {
  this.name = name;
  this.age = age;

  // Will be moved to the prototype
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

// Creating objects using the constructor
const user1 = new User("John", 30);
const user2 = new User("Jane", 25);

console.log(user1); // User { name: 'John', age: 30, greet: [Function (anonymous)] }
console.log(user2); // User { name: 'Jane', age: 25, greet: [Function (anonymous)] }
console.log(user1.greet === user2.greet); // false -> Memory Inefficient

// Constructor name is saved
console.log(user1.constructor.name); // "User"
*/

/***************************************************************************
 ********************* Understanding 'new' Keyword *************************
 **************************************************************************/
/*
// Without 'new'
const badUser = User("john", 30);
console.log(badUser); // Undefined
//console.log(window.name); // "John" - accidentally set on global object!

// Best Practice: Make constructor function
function SafeUser(name, age) {
  if (!(this instanceof SafeUser)) {
    return new SafeUser(name, age);
  }

  this.age = age;
  this.name = name;
}
*/

/***************************************************************************
 ********************* Using Prototypes Effectively ************************
 **************************************************************************/
/*
function User(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to the prototype, not in the constructor
User.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

User.prototype.isAdult = function () {
  return this.age >= 18;
};

// Creating objects using the constructor
const user1 = new User("John", 30);
const user2 = new User("Jane", 25);

console.log(user1); // User { name: 'John', age: 30 }
console.log(user2); // User { name: 'Jane', age: 25 }

// Now the methods are shared!
console.log(user1.greet === user2.greet); // true -> Memory Efficient

// We can still add unique properties to individual objects
user1.hobby = "Reading";

console.log(user1.hobby); // Reading
console.log(user2.hobby); // undefined
*/
/***************************************************************************
 ******************* Instance vs Prototype Properties **********************
 **************************************************************************/

function Car(make, model) {
  // Instance properties (unique to each car object)
  this.make = make;
  this.model = model;
  this.isRunning = false;
}

// Prototype methods (shared by all car objects)
Car.prototype.start = function () {
  this.isRunning = true;
  console.log("Vroom!");
};

Car.prototype.stop = function () {
  this.isRunning = false;
  console.log("Stopping...");
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");
/*
car1.start();
console.log(car1.isRunning); // true
console.log(car2.isRunning); // false
*/

/***************************************************************************
 ****************** Checking Properties and Prototypes *********************
 **************************************************************************/
/*
// Check if property exists on object itself
console.log(car1.hasOwnProperty("make")); // true
console.log(car2.hasOwnProperty("model")); // true
console.log(car1.hasOwnProperty("start")); // false
console.log(car2.hasOwnProperty("stop")); // false

// Check if property exists anywhere in prototype chain
console.log("start" in car1); // true
console.log("stop" in car2); // true
*/

// Get the prototype
console.log(Object.getPrototypeOf(car1) === Car.prototype); // true

// Check if object is instance of constructor
console.log(car1 instanceof Car); // true
console.log(car1 instanceof Object); // true
