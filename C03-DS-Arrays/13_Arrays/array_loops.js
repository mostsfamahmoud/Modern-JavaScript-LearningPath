/*
 * Using the for Loop
 */

let fruits = ["apple", "banana", "orange", "grape"];

// Basic forward iteration
for (let i = 0; i < fruits.length; ++i) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Backward iteration
for (let i = fruits.length - 1; i >= 0; --i) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

/*
 * Using the for...of Loop (ES6+)
 * Note: You can't easily access the index in for...of
 *  If you need both element and index, use for loop or forEach
 */

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

/*
 * Performance Considerations
 */

let largeArray = new Array(1000000).fill(1);

// Caching the length can improve performance in very large arrays
let len = largeArray.length;
for (let i = 0; i < len; i++) {
  // Operation
}

// Versus recalculating length each time
for (let i = 0; i < largeArray.length; i++) {
  // Operation
}
