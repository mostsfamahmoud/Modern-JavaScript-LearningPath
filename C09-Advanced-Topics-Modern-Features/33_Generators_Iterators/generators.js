/***************************************************************************
 ************************* Understanding Iterators *************************
 **************************************************************************/

// Built-in iterable objects in JavaScript:
// Arrays, Strings, Sets, and Maps all implement the iterable protocol
// This means they have a [Symbol.iterator] method that returns an iterator

const array = [1, 2, 3]; // Array is iterable (yields elements)
const string = "hello"; // String is iterable (yields characters)
const set = new Set([1, 2, 3]); // Set is iterable (yields unique values)
const map = new Map([
  // Map is iterable (yields [key, value] pairs)
  ["a", 1],
  ["b", 2],
]);

// All iterables can be used with for...of loops
// The loop automatically handles the iterator creation and consumption
/*
for (const item of array) { ... }
for (const char of string) { ... }
for (const item of set) { ... }
for (const [key, value] of map) { ... }
*/

/***************************************************************************
 *************************** What are Generators? *************************
 **************************************************************************/

// Generator functions (defined with function*) create iterators
// They yield values using the yield keyword and maintain their state between yields

function* numberGenerator() {
  yield 1; // Pauses execution and returns 1
  yield 2; // Next call resumes here and returns 2
  yield 3; // Next call resumes here and returns 3
}

/*
// Using the generator manually with next()
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined (generator exhausted)

// Generators are also iterable and work with for...of
// The loop automatically handles completion
for (const num of numberGenerator()) {
  console.log(num); // 1, 2, 3
}
*/

/***************************************************************************
 *************************** Practical Use Cases ***************************
 **************************************************************************/

// 1. ID Generator - Infinite sequence
// Generators are perfect for creating infinite sequences
// because they maintain state between calls
function* createID() {
  let id = 1;
  // Infinite loop is safe here because yield pauses execution
  while (true) {
    yield `user_${id}`;
    ++id;
  }
}

/*
const userIds = createID();
console.log(userIds.next().value); // user_1
console.log(userIds.next().value); // user_2
console.log(userIds.next().value); // user_3
*/

// 2. Pagination Helper - Process data in chunks
// Generator that splits an array into pages of given size
function* paginate(array, pageSize) {
  for (let i = 0; i < array.length; i += pageSize) {
    // Yield slices of the array until exhausted
    yield array.slice(i, i + pageSize);
  }
}
/*
const items = ["a", "b", "c", "d", "e", "f", "g"];
const pages = paginate(items, 3);

console.log(pages.next().value); // ['a', 'b', 'c']
console.log(pages.next().value); // ['d', 'e', 'f']
console.log(pages.next().value); // ['g']

// Another way (Iterating through the generator)
for (const page of paginate(items, 2)) {
  console.log(page);
}
*/

// 3. Range Generator - Python-style range implementation
// Creates a sequence of numbers between start and end (inclusive)
// with optional step size
function* range(start, end, step = 1) {
  let current = start;
  while (current <= end) {
    yield current;
    current += step;
  }
}
/*
// Usage example - generates even numbers from 0 to 10
for (const num of range(0, 10, 2)) {
  console.log(num); // 0, 2, 4, 6, 8, 10
}
  */

/**
 * Key Concept of Yield:
 * - When a generator yields, it pauses execution and returns a value
 * - The generator's state (variables, position) is preserved
 * - Execution resumes from the yield point when next() is called again
 * - Return statement in a generator ends the iteration (sets done: true)
 * - Generators are both iterators and iterables - they can iterate themselves
 */

/***************************************************************************
 ********************* Working with Generator Objects **********************
 **************************************************************************/

// Generator functions can pause and resume execution using `yield`
// They also allow two-way communication: yielding values out and accepting values in

function* demo() {
  console.log("Start"); // Executes on first `next()` call
  const a = yield 1; // Pauses here, yields 1, and waits for input on next `next()`
  console.log("Got:", a); // Logs the value passed to the second `next()`
  const b = yield 2; // Pauses here, yields 2, and waits for input on next `next()`
  console.log("Got:", b); // Logs the value passed to the third `next()`
}

/*
  const gen = demo();
  console.log(gen.next().value); // Prints 'Start', returns 1
  console.log(gen.next("Hello").value); // Prints 'Got: Hello', returns 2
  console.log(gen.next("World").value); // Prints 'Got: World', returns undefined
  */

/***************************************************************************
 ***************************** Best Practices *****************************
 **************************************************************************/

// 1. Use Generators for Sequences
// Generators are ideal for creating sequences because they maintain state
// and produce values on demand.

// Good: Clear sequence generation
function* fibonacci() {
  let prev = 0,
    current = 1;

  while (true) {
    yield current; // Yield the current Fibonacci number
    [prev, current] = [current, current + prev]; // Update values for the next iteration
  }
}

/*
  const fib = fibonacci();
  
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 2
  console.log(fib.next().value); // 3
  console.log(fib.next().value); // 5
  */

/*
  // Avoid: Complex state management
  let prev = 0, curr = 1;
  function getNextFib() {
      const temp = curr;
      curr = prev + curr;
      prev = temp;
      return curr;
  }
  // This approach requires manual state management and is less reusable.
  */

// 2. Consider Memory Usage
// Generators are memory-efficient because they produce values on demand
// instead of storing them all in memory at once.

// Good: Generate values on demand
function* largeRange(max) {
  for (let i = 0; i < max; i++) {
    yield i; // Yield each value one at a time
  }
}

for (const element of largeRange(10)) {
  console.log(element); // Prints 0 to 9, one at a time
}

/*
  // Bad: Store all values in memory
  function getLargeRange(max) {
    const numbers = [];
    for (let i = 0; i < max; i++) {
      numbers.push(i); // Store all values in an array
    }
    return numbers; // Return the entire array
  }
  // This approach consumes more memory, especially for large ranges.
  */

/***************************************************************************
 ***************************** Key Takeaways ******************************
 **************************************************************************/

/*
  - Generators are great for sequences and lazy evaluation.
  - They allow two-way communication: yielding values out and accepting values in.
  - Use generators to avoid storing large datasets in memory.
  - Avoid using generators for simple tasks where a regular function would suffice.
  - Always consider readability and maintainability when using generators.
  */
