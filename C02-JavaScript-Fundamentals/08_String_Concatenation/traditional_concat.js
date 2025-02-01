let firstName = "John";
let lastName = "Doe";

// Using the + operator
let fullName = firstName + " " + lastName;
console.log(fullName);  // Outputs: John Doe

// Concatenation with non-string values
let age = 30;
let introduction = "My name is " + fullName + " and I am " + age + " years old.";
console.log(introduction);  // Outputs: My name is John Doe and I am 30 years old.

// Concatenation with the += operator
let message = "Hello";
message += " World";
console.log(message);  // Outputs: Hello World

let str1 = "Hello";
let str2 = "World";
let str3 = "!";

let result = str1.concat(" ", str2, str3); // same as str1 + " " + str2 + str3
console.log(result);  // Outputs: Hello World!

// concat() can take multiple arguments
let greeting = "".concat("Hi", " ", "there", "!");
console.log(greeting);  // Outputs: Hi there!