let numbers = [1, 2, 3, 4, 5];

/*
 * forEach Method:
- Executes a function for each element in an array. It cannot be stopped (no breaking)
- Its return value is always undefined, so you cannot start a method chain with forEach
- Cannot break out of the loop
- Original array is not modified unless you explicitly modify elements
- Callback function can take up to three arguments: element, index, and array
 */

numbers.forEach(function (number, index) {
  console.log(`Number @ Index ${index} is ${number}`);
});

// Using arrow function (shorter syntax)
numbers.forEach((number, index) => {
  console.log(`Number @ Index ${index} is ${number}`);
});

/*
 * map Method:
- Creates a new array with the results of calling a function for every array element.
- New array is always the same length as original
- Original array is not modified
- Very useful for data transformation
 */

// Double each number
let doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(numbers);
console.log(doubled);

// Square each number (Using Arrow Function)
let squared = numbers.map((number) => {
  return number * number;
});

// Also Works
// let squared = numbers.map((number) => number * number);

console.log(squared);

/*
 * filter Method:
- Creates a new array with all elements that pass a condition(provided as a function).
- New array may be shorter than original
- Original array is not modified
- Elements are included only if callback function returns true
 */

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

let oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(oddNumbers);

/*
 * reduce Method:
- Reduces an array to a single value (going left-to-right)
- Returns a single value
- Takes an optional initial value after the callback function
- Can be used to create objects, arrays, or any other type of value
- Original array is not modified
 */

// Sum all numbers
let sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0); // 0 is the initial value

console.log(sum);

// Product of all numbers
let product = numbers.reduce(
  (accumulator, current) => accumulator * current,
  1
);

console.log(product);

/*
 * find Method:
- returns the first element that satisfies a testing function or undefined if not found
- Stops processing once it finds a match
- Useful for finding unique items in an array
 */

let firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven); // 2

// More practical example
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

let user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: "Jane" }

/*
 * findIndex Method:
- Similar to find, but returns the index of the first matching element
- Returns the index of first match or -1 if not found
- Stops processing once it finds a match
- Useful when you need the position of an element
 */

let index = numbers.findIndex((number) => number >= 3);
console.log(index); // 3

/*
 * some Method:
- tests whether at least one element passes a test
- Returns true if any element passes the test
- Stops processing as soon as it finds a match
- Useful for checking if at least one item meets a condition
 */

let hasNegative = numbers.some((number) => number < 0);
console.log(hasNegative); // false

/*
 * every Method:
- tests whether all elements pass a test
- Returns true only if all elements pass the test
- Stops processing as soon as it finds a non-match
- Useful for validation
 */

let allPositive = numbers.every((number) => number > 0);
console.log(allPositive); // true

/*
 * Method Chaining:
 */

let products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 599, inStock: true },
  { id: 3, name: "Tablet", price: 399, inStock: false },
  { id: 4, name: "Watch", price: 199, inStock: true },
];

// Find first inStock product under $500
let affordableProduct = products
  .filter((product) => product.inStock)
  .find((product) => product.price < 500);

console.log(affordableProduct); // { id: 4, name: 'Watch', price: 199, inStock: true }

// Check if all in-stock products are under $1000
let allAffordable = products
  .filter((product) => product.inStock)
  .every((product) => product.price < 1000);

console.log(allAffordable); // true

/*
 * Best Practices
    * Choose the right method for your needs:
        - Use find/findIndex when looking for a specific item
        - Use some/every for validation
        - Use filter when you need all matching items
        - Use map for transformations
        - Use reduce for computations
        - Use forEach if you do not need a return value like side effects (which we will learn about soon!)
    * Consider performance:
        - Methods like find, findIndex, some, and every stop early
        - Methods like map, filter, and forEach always process all elements
 */
