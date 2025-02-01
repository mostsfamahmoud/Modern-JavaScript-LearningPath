function greetWithDefault(name = "Guest") {
  // console.log("Welcome, " + name + "!");
  console.log(`Welcome, ${name} !`);
}

greetWithDefault(); // Welcome, Guest!
greetWithDefault("David"); // Welcome, David!

function gradeScore(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  return "C";
}

console.log(gradeScore(95)); // Outputs: A
console.log(gradeScore(85)); // Outputs: B
console.log(gradeScore(75)); // Outputs: C

function noReturn() {
  console.log("This function doesn't return anything");
}

let result = noReturn();
console.log(result); // Outputs: undefined
console.log(typeof result); // Outputs: undefined
