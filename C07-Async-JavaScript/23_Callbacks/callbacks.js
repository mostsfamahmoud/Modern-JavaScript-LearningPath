/***************** What is a Callback Function? *******************/
/*
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// Or with arrow function
let doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// Regular function that does something
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function that takes another function as an argument
function executeGreeting(callBackfn) {
  callBackfn("Mostafa");
}
  */

/*
In this simple example:
    - greet is our callback function
    - executeGreeting is a function that accepts a callback
    - The callback is executed inside executeGreeting
*/

// Pass greet as a callback
//executeGreeting(greet);

/***************** Moving to Asynchronous Callbacks *******************/

// Notice how the code is starting to nest deeply.
// This is a preview of what we call "callback hell"

/*
function makeBreakFast() {
  console.log("Starting breakfast preparation...");

  setTimeout(() => {
    console.log("1. Toasting Bread");

    setTimeout(() => {
      console.log("2. Bread is toasted! Adding butter...");

      setTimeout(() => {
        console.log("3. Butter added! Making eggs...");

        setTimeout(() => {
          console.log("4. Eggs are ready! Breakfast is served!");
        }, 2000); // Making eggs
      }, 1000); // Adding butter
    }, 2000); // Toasting
  }, 1000); // Initial Preparation
}

makeBreakFast();
*/

/***************** Example: Loading User Data the Ancient Way *******************/

/*
// Function to simulate fetching a user object from a database
function getUser(id, callBackfn) {
  console.log(`Fetching user ${id} from the DB`); // Log the user fetch operation

  // Simulate a database delay using setTimeout
  setTimeout(() => {
    // Simulate a user object returned from the database
    const user = {
      id: id, // User ID
      name: "Mostafa Mahmoud", // User's name
      email: "mostafa@example.com", // User's email
    };

    // Invoke the callback function, passing the simulated user object
    callBackfn(user);
  }, 2000); // 2-second delay to mimic database latency
}

// Function to simulate fetching posts associated with a user from a database
function getUserPosts(userId, callBackfn) {
  console.log(`Fetching posts for user ${userId} from the DB`); // Log the posts fetch operation

  // Simulate a database delay using setTimeout
  setTimeout(() => {
    // Simulate an array of posts associated with the user
    const posts = [
      { id: 1, title: "Post 1", content: "This is post" }, // Post 1
      { id: 2, title: "Post 2", content: "This is post" }, // Post 2
      { id: 3, title: "Post 3", content: "This is post" }, // Post 3
    ];

    // Invoke the callback function, passing the simulated posts array
    callBackfn(posts);
  }, 4000); // 4-second delay to mimic database latency
}

// Fetch a user with ID 1
getUser(1, (user) => {
  console.log("Got User: ", user); // Log the fetched user object

  // Once the user is fetched, fetch the user's posts
  getUserPosts(user.id, (posts) => {
    console.log("Got User Posts: ", posts); // Log the fetched posts array
  });
});
*/

/***************** Error Handling with Callbacks *******************/
function getUserWithErrorHandling(id, successCallBackFn, errorCallBackFn) {
  console.log(`Fetching user ${id} from the DB`); // Log the user fetch operation

  // Simulate a database delay using setTimeout
  setTimeout(() => {
    // Simulate Random Error
    if (Math.random() > 0.5) {
      // Success Case
      // Simulate a user object returned from the database
      const user = {
        id: id, // User ID
        name: "Mahmoud Ali", // User's name
        email: "mahmoud@example.com", // User's email
      };

      // Invoke the callback function, passing the simulated user object
      successCallBackFn(user);
    } else {
      // Error Case
      errorCallBackFn(new Error("Failed to fetch user"));
    }
  }, 2000); // 2-second delay to mimic database latency
}

// Using the function with error handling
getUserWithErrorHandling(
  2,
  (user) => {
    console.log("Success!\nUser: ", user); // Log the fetched user object
  },
  (error) => {
    console.log("Error: ", error.message);
  }
);
