/*
 * Object Destructuring
 */

let user = {
  name: "John",
  age: 30,
  city: "New York",
};

// Basic destructuring
let { name, age } = user;
console.log(name); // John
console.log(age); // 30

// Destructuring with different variable names
let { name: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge); // 30

// Destructuring with default values
let { city, country = "USA" } = user;
console.log(city); // New York
console.log(country); // USA (default value used)
