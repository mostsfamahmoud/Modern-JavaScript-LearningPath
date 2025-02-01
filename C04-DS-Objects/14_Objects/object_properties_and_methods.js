/*
 * Checking if Properties Exist
 */

let user = {
  name: "John",
  age: 30,
};

// Using hasOwnProperty() method
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("height")); // false

// Using Object.hasOwn method -> Modern Way
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "height")); // false

// Using in Operator
console.log("name" in user); // true
console.log("height" in user); // false

/*
 * Built-in Object Methods
 */

let user1 = {
  name: "John",
  age: 30,
  city: "New York",
};

// Get all keys
console.log(Object.keys(user1)); // [ 'name', 'age', 'city' ]

// Get all values
console.log(Object.values(user1)); // [ 'name', 'age', 'city' ]

// Get key-value pairs as arrays
console.log(Object.entries(user1)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

/*
 * Copying Objects
 */

let user2 = {
  name: "John",
  age: 30,
};

// Creating a copy using spread operator
let userCopy = { ...user2 };
userCopy.age = 23;
userCopy["name"] = "Jane";

console.log(userCopy); // { name: 'Jane', age: 23 }
console.log(user2); // { name: 'John', age: 30 }

/*
 * Object Methods
 */

let user3 = {
  name: "John",
  age: 30,
  // Method using function declaration
  sayHi: function () {
    console.log(`Hi! I'm ${this.name}`);
  },
  // Shorthand method syntax (ES6+)
  greet() {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old`);
  },
};

user3.sayHi();
user3.greet();

let calculator = {
  value: 0,

  add(number) {
    this.value += number;
  },

  subtract(number) {
    this.value -= number;
  },

  getCurrentValue() {
    return this.value;
  },
};

calculator.add(5);
console.log(calculator.getCurrentValue()); // 5
calculator.subtract(2);
console.log(calculator.getCurrentValue()); // 3
