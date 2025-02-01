let temperature = 35;

if (temperature > 30) {
  console.log("It's a hot day!");
}

console.log("End of program");

let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("Needs improvement");
}

/**Nested if Statements */

let num = 15;

if (num > 0) {
  console.log("Number is positive");
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
} else {
  console.log("Number is zero or negative");
}

/** Ternary Operator */

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);
