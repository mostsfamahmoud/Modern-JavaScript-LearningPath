/***************** What are Promises? *******************/
// A promise is a result object that is returned by a function that performs an asynchronous operation.
// It represents a value that may not be available yet, but will be resolved at some point in the future.
// A promise can be created using the Promise constructor, or using the async/await syntax.
// A promise can be used to handle asynchronous operations in a more elegant way than callbacks.

/*
function toastBread() {
  return new Promise((resolve, reject) => {
    console.log("Starting to toast bread...");

    setTimeout(() => {
      // Simulate Success Case
      resolve("Toasted Bread");

      // Could simulate failure with:
      reject("Toaster is broken");
    }, 10000);
  });
}

// A promise can be chained with then() and catch() methods to handle the result of the operation
// and any errors that may occur.
toastBread()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

console.log("Doing other things while bread is toasting");
*/

/***************** Promise States *******************/
// A promise can be in one of three states: pending, fulfilled, or rejected.
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: Operation completed successfully, promise has a value.
// - Rejected: Failed operation, promise has a reason (error).

/*
const pendingPromise = new Promise((resolve, reject) => {
  // This promise stays pending because we never called resolve() or reject()
  //console.log("Promise is pending");
});

const fulfilledPromise = new Promise((resolve, reject) => {
  resolve("Success!");
});

const rejectedPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

console.log("Pending Promise:", pendingPromise);
console.log("Fulfilled Promise:", fulfilledPromise);
console.log("Rejected Promise:", rejectedPromise);
*/

/***************** Creating and Using Promises *******************/

/*
function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${id} from the DB`); // Log the user fetch operation

    // Simulate a database delay using setTimeout
    setTimeout(() => {
      // Simulate Random Success/Failure
      // 90% Success Rate
      if (Math.random() > 0.9) {
        // Success Case
        // Simulate a user object returned from the database
        const user = {
          id: id, // User ID
          name: "Mahmoud Ali", // User's name
          email: "mahmoud@example.com", // User's email
        };

        resolve(user);
      } else {
        // Error Case
        reject(new Error("Failed to fetch user"));
      }
    }, 10000); // 10-second delay to mimic database latency
  });
}

// Using the promise
getUser(1)
  .then((user) => {
    console.log("Got User: ", user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Operation completed {Success or Failure}");
  });

console.log("Doing other operations while fetching user");
*/

/***************** Promise Chaining *******************/

/*
// Function to simulate fetching a user object from a database
function getUser(id) {
  // Return a new Promise to handle the asynchronous operation
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${id} from the DB`); // Log the user fetch operation

    // Simulate a database delay using setTimeout
    setTimeout(() => {
      // Simulate a user object returned from the database
      const user = {
        id: id, // User ID
        name: "Mahmoud Ali", // User's name
        email: "mahmoud@example.com", // User's email
      };

      // Resolve the Promise with the user object
      resolve(user);
    }, 10000); // 10-second delay to mimic database latency
  });
}

// Function to simulate fetching posts associated with a user from a database
function getUserPosts(user) {
  // Return a new Promise to handle the asynchronous operation
  return new Promise((resolve, reject) => {
    console.log(`Fetching posts from the DB for user -> ${user.name}`); // Log the posts fetch operation

    // Simulate a database delay using setTimeout
    setTimeout(() => {
      // Simulate an array of posts associated with the user
      const posts = [
        { id: 1, title: "Post 1", content: "This is post" }, // Post 1
        { id: 2, title: "Post 2", content: "This is post" }, // Post 2
        { id: 3, title: "Post 3", content: "This is post" }, // Post 3
      ];

      // Resolve the Promise with the posts array
      resolve(posts);
    }, 4000); // 4-second delay to mimic database latency
  });
}

// Use Promise chaining to handle asynchronous operations sequentially
getUser(1) // Fetch the user with ID 1
  .then((user) => {
    // When the Promise resolves, log the user object
    console.log("Got User: ", user);
    // Return a Promise to fetch the user's posts
    return getUserPosts(user);
  })
  .then((posts) => {
    // When the second Promise resolves, log the user's posts
    console.log("Got Posts: ", posts);
    // Can return another Promise here for further chaining if needed
  })
  .catch((error) => {
    // Catch any errors that occur in the Promise chain and log them
    console.error("Error fetching user or posts:", error);
  })
  .finally(() => {
    console.log("Operation completed ( Success or Failure )");
  });

// Log a message indicating that other operations can proceed while the fetch occurs
console.log("Doing other operations while fetching user");

/********************* Promise Chaining ************************/
// 1) Promise.all() -> Waits for all Promises to resolve

// Create a Promise that resolves immediately with the value 3
let promise1 = Promise.resolve(3);

// Create a Promise that resolves after 1 second with the value 42
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42); // Resolve with the value 42
  }, 1000); // 1-second delay
});

// Create a Promise that resolves immediately with the value "foo"
let promise3 = Promise.resolve("foo");

// Use Promise.all to wait for all the Promises in the array to resolve
Promise.all([promise1, promise2, promise3]).then((values) => {
  // This block is executed after all Promises have resolved
  console.log("All Promises Completed", values); // Log the resolved values
  // Output: All Promises Completed [ 3, 42, 'foo' ]
  // Here output depends on the order of promises in the array
});

// -----------------------------------------------------------
// 2) Promise.race() -> Resolves or rejects as soon as one Promise resolves or rejects:

// Create a Promise that resolves after 1 second with the value "Quick"
promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Quick"); // Resolve with the value "Quick"
  }, 1000); // 1-second delay
});

// Create a Promise that resolves after 2 seconds with the value "Slow"
promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow"); // Resolve with the value "Slow"
  }, 2000); // 2-second delay
});

// Use Promise.race to return the result of the fastest Promise
Promise.race([promise1, promise2]).then((result) => {
  console.log("\n\n");
  // This block is executed as soon as the first Promise resolves
  console.log("Fastest Promise was: ", result); // Output: "Quick"
});

// -----------------------------------------------------------
// 3) Promise.allSettled() -> Waits for all Promises to complete, regardless of success or failure

const promises = [
  Promise.resolve(1),
  Promise.reject("Error"),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3); // Resolve with the value 3
    }, 1000); // 1-second delay
  }),
];

Promise.allSettled(promises).then((results) => {
  console.log("\n\n");
  // This block is executed after all Promises have settled
  console.log("All promises settled: ", results);
});
