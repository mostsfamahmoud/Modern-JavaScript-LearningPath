/**
// Synchronous operations happen in sequence
console.log("Starting...");
console.log("Doing something...");
console.log("Finishing...");

// Outputs in order:
// Starting...
// Doing something...
// Finishing...

console.log("\n\nStarting...");

// setTimeout simulates an operation that takes time
setTimeout(() => {
  console.log("Doing something...");
}, 5000); // Wait for 5 seconds

console.log("Finishing...");
 */

/**
 * This is asynchronous programming - the code doesn't stop and wait for setTimeout to finish.
 * It continues executing the next lines while setTimeout does its work in the background.
 */

/******************** Why Do We Need Asynchronous Programming? ****************/

// Imagine this is synchronous
function getDataFromServer() {
  const startTime = Date.now();

  // This would freeze your entire program!
  // Wait for 5 seconds...
  while (Date.now() - startTime < 5000) {}

  return "Data from server";
}

console.log("Starting to get data...");
const data = getDataFromServer(); // Program freezes here!
console.log("Got data:", data);
console.log("This message is delayed!");

// Here's the asynchronous version:
console.log("\n\nStarting to get data...");

setTimeout(() => {
  console.log("Got data:", data);
}, 5000);

console.log("This message appears immediately!");

/* Common Asynchronous Operations
==========================================================================
    * Timers
        setTimeout(() => {
            console.log('Timer finished!');
        }, 1000);

    * User Events (we saw these in the Events module)
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });

    * Getting data from a server (we'll cover this in detail later)
        fetch('<https://api.example.com/data>')
            .then(response => response.json())
            .then(data => console.log(data));

    * Reading files (in Node.js)
        fs.readFile('file.txt', (error, data) => {
            if (error) console.error(error);
            console.log(data);
        });
 */

/******************** The JavaScript Event Loop *****************/

console.log("1"); // Synchronous

setTimeout(() => {
  console.log("2"); // Asynchronous
}, 0);

console.log("3"); // Synchronous
