/***************** What is Async/Await? *******************/

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
    }, 5000); // 5-second delay to mimic database latency
  });
}
  */

/*
  // The Promise way of consuming the getUser function
  getUser(1).then((user) => {
    console.log(user); // Log the user object once the Promise resolves
  });
  */

/*
// The async/await way of consuming the getUser function
// Define an async function that makes use of the `await` keyword
async function displayUser() {
  // Await the resolution of the Promise returned by getUser
  const user = await getUser(1); // Pauses execution until the Promise resolves
  console.log(user); // Log the resolved user object
}

// Call the async function to display the user
displayUser();
*/

/***************** Creating Async Functions *******************/

// Any function can be made asynchronous by adding the async keyword:

/*
// Regular function
async function getData() {
  // async function code
}

// Arrow function
const getData = async () => {
  // async function code
};

// Method in a class or object
const obj = {
  async getData() {
    // async function code
  },
};
*/

// An async function always returns a Promise, even if you return a regular value:

/*
async function greet() {
  return "Hello, World!";
}

greet().then((message) => {
  console.log(message); // Output: Hello, World!
});
*/

/**
 * In environments that support top-level await,
 * The code will work correctly and output Hello, World!.
 */
// console.log(await greet()); // Hello

/**
 * If Top-Level await is Not Supported:
 */

// You would need to wrap the code inside an async function to use await. For example
/*
const main = async () => {
  console.log(await greet());
};

main();
*/

/***************** Error Handling with Try/Catch *******************/

function getUserData(id) {
  return new Promise((resolve, reject) => {
    // Simulate a database delay using setTimeout
    setTimeout(() => {
      if (id < 0) {
        reject(new Error("Invalid user ID"));
      } else {
        // Simulate a user object returned from the database
        const user = {
          id: id, // User ID
          name: "Mahmoud Ali", // User's name
          email: "mahmoud@example.com", // User's email
        };

        // Resolve the Promise with the user object
        resolve(user);
      }
    }, 2000); // 2-second delay to mimic database latency
  });
}

async function fetchUserData(id) {
  try {
    console.log("Fetching User Data...");
    const user = await getUserData(id);
    console.log("User Data: ", user);
  } catch (error) {
    console.error(`Error fetching user data: ${error.message}`);
  } finally {
    console.log("Operation Completed { Success or Failure }");
  }
}

// Call the function with a valid user ID
//fetchUserData(1); // Fetch user data for user ID 1

// Call the function with an invalid user ID
//fetchUserData(-1); // Fetch user data for user ID -1

/***************** Working with Multiple Promises *******************/

// Helper functions for the example

function operation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result 1");
    }, 2000);
  });
}

function operation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result 2");
    }, 2000);
  });
}

function operation3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result 3");
    }, 2000);
  });
}

async function getDataSequentially() {
  console.log("Starting sequential operations...");

  // These run one after another
  const result1 = await operation1();
  console.log("Result 1:", result1);

  const result2 = await operation2(result1);
  console.log("Result 2:", result2);

  const result3 = await operation3(result2);
  console.log("Result 3:", result3);

  return result3;
}

async function getDataParallel() {
  console.log("Starting parallel operations...");
  const results = await Promise.all([operation1, operation2, operation3]);

  console.log("All results: ", results);

  return results;
}

// Run these functions separately to see the difference
//getDataSequentially();
//getDataParallel();

/***************** Real-World Example: Data Processing *******************/

// Helper functions (simulated)

// Function to simulate fetching posts associated with a user from a database
function getUserPosts(userId) {
  // Return a new Promise to handle the asynchronous operation
  return new Promise((resolve, reject) => {
    console.log(`Fetching posts from the DB for user with id:${userId}`); // Log the posts fetch operation

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
    }, 2000); // 2-second delay to mimic database latency
  });
}

// Function to simulate fetching friends associated with a user from a database
function getUserFriends(userId) {
  // Return a new Promise to handle the asynchronous operation
  return new Promise((resolve, reject) => {
    console.log(`Fetching friends from the DB for user with id:${userId}`); // Log the friends fetch operation

    // Simulate a database delay using setTimeout
    setTimeout(() => {
      // Simulate an array of friends
      const friends = ["Friend1", "Friend2"]; // Example friends

      // Resolve the Promise with the friends array
      resolve(friends);
    }, 2000); // 2-second delay to mimic database latency
  });
}

// Function to simulate saving processed data into a database
function saveProcessedData(data) {
  // Return a new Promise to handle the asynchronous operation
  return new Promise((resolve, reject) => {
    console.log("Saving processed data to the database...");

    // Simulate a database delay using setTimeout
    setTimeout(() => {
      // Resolve the Promise to indicate success
      resolve("Saved"); // Simulate a success message
    }, 2000); // 2-second delay to mimic database latency
  });
}

// Function to process user data (main function)
async function processUserData(userId) {
  try {
    // Simulate fetching user data
    const user = await getUserData(userId); // Assume getUserData fetches user information
    console.log("Got user: ", user); // Log the user data

    // Fetch user's posts and friends in parallel
    const [posts, friends] = await Promise.all([
      getUserPosts(userId), // Fetch posts
      getUserFriends(userId), // Fetch friends
    ]);

    // Process the fetched data
    const processedData = {
      user, // User information
      posts, // User's posts
      friends, // User's friends
      timeStamp: new Date(), // Add a timestamp
    };

    // Save the processed data into a database
    await saveProcessedData(processedData);
    console.log("Data processed and saved successfully!");

    return processedData; // Return the processed data for further use
  } catch (error) {
    console.log("Error processing user data: ", error.message); // Log the error message
    throw error; // Re-throw the error to handle it in the calling function
  }
}

// Call the function to process user data
processUserData(1) // Pass the user ID
  .then((result) => {
    console.log("Final result: ", result); // Log the final processed data
  })
  .catch((error) => {
    console.error("Failed: ", error); // Log any error that occurs
  });
