/* Function Expression
In a function expression, we assign an anonymous function to a variable. 
We can then use this variable to call the function.
*/

let greet = function (name) {
  console.log("Hello, " + name);
};

greet("Alice"); // Outputs: Hello, Alice
