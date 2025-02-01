/*
 * Creating Objects
 */

// Object literal notation (most common way)
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

// Empty object
let empty = {};

let person = {
  name: "John",
  age: 23,
  hobbies: ["GYM", "Football"],
  address: {
    city: "New York",
    country: "USA",
  },
};

/*
 * Accessing Object Properties
 */

// Dot notation
console.log(person.age); // 23

// Bracket notation
console.log(person["name"]); // John

// Dynamic Property access
let key = "hobbies";
console.log(person[key]); // [ 'GYM', 'Football' ]

// Property that doesn't exist
console.log(person.height); // undefined

/*
 * Modifying Objects
 */

user1 = {
  name: "Jane",
};

// Adding new properties
user1.age = 30;
user1["isAdmin"] = true;

console.log(user1);

// Modifying existing properties
user1.name = "John";

// Deleting properties
delete user1.isAdmin;

console.log(user1);
