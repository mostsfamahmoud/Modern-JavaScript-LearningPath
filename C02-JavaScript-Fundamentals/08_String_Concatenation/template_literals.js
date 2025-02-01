let name = "Alice";
let age = 28;

// Basic usage
let greeting = `Hello, ${name}!`;
console.log(greeting); // Outputs: Hello, Alice!

// Expressions in template literals
let message = `${name} is ${age} years old.`;
console.log(message); // Outputs: Alice is 28 years old.

// Multi-line strings
let multiLine = `
  This is a multi-line
  string using
  template literals.
`;
console.log(multiLine);

// Expressions can be more complex
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// Outputs: Fifteen is 15 and not 20.

// Tagged templates (advanced feature) for advanced string processing.
function myTag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return "Tagged template result";
}

let result = myTag`Hello ${name}, you are ${age} years old.`;
console.log(result);
