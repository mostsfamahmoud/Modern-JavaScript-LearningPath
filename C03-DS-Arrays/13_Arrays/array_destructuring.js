/*
 * Destructuring
    - Array destructuring allows you to extract values from arrays into distinct variables in a single statement.
 */

let colors = ["red", "green", "blue"];

// Basic array destructuring
let [first, second, third] = colors;
console.log(first); // Outputs: red
console.log(second); // Outputs: green
console.log(third); // Outputs: blue

// Skipping elements
let [primary, secondary] = colors;
console.log(primary); // Outputs: red
console.log(secondary); // Outputs: green

let [one, , three] = colors;
console.log(one); // 'red'
console.log(three); // 'blue'

// Default Value
let [a, b, c, d = "yellow"] = colors;
console.log(a); // Outputs: red
console.log(d); // Outputs: yellow

// Swapping variables
let x = 1,
  y = 2;
console.log(`Before: x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`After: x = ${x}, y = ${y}`);

/*
 * Rest Operator in Arrays
    - The rest operator (...) allows you to collect multiple elements into an array
 */

let numbers = [1, 2, 3, 4, 5];

// Using rest operator in destructuring
[first, second, ...rest] = numbers;
console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(rest); // Outputs: [3, 4, 5]

// Rest must be the last element
// let [...allButLast, last] = numbers; // This will cause an error

// Combining arrays using spread operator
let moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

// Creating a copy of an array
let numbersCopy = [...numbers];
console.log(numbersCopy); // [1, 2, 3, 4, 5]

/*
 * Key Points about Destructuring and Rest Operator
    - Destructuring makes it easy to extract values from arrays
    - You can skip elements by leaving empty spaces in the destructuring pattern
    - Default values can be assigned for undefined elements
    - The rest operator must be the last element in destructuring
    - Rest operator can be used to gather remaining elements into a new array 
*/
