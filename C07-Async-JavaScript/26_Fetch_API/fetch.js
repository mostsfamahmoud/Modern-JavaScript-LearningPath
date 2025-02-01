/***************************************************************************
 ********************** Making a simple GET request ************************
 **************************************************************************/

// Basic GET request
/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // Parses the JSON response body
  .then((data) => console.log(data)) // Logs the fetched data to the console
  .catch((error) => console.log("Error: ", error)); // Handles any errors that occur
*/

/*
// Same request using async/await
// Function to fetch a post by ID using async/await
async function getPost(id) {
  try {
    // Fetches data from the API
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json(); // Converts response to JSON
    console.log(data); // Logs the fetched data
  } catch (error) {
    // Catches and logs errors
    console.error("Error: ", error);
  }
}

// Function to examine the details of a response
async function examineResponse(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    // Logs various response details
    console.log("Status: ", response.status); // HTTP status code (e.g., 200 for success)
    console.log("OK? ", response.ok); // Boolean indicating success status (true if 200–299)
    console.log("Status Text: ", response.statusText); // Status message (e.g., "OK")
    console.log("Headers: ", response.headers); // Headers object containing metadata
  } catch (error) {
    // Catches and logs errors
    console.error("Error: ", error);
  }
}

// Calling the functions to demonstrate functionality
getPost(5);
examineResponse(5);
*/

/***************************************************************************
 ****************** Making Different Types of Requests *********************
 **************************************************************************/

/*
// POST Request (Creating Data)
// Function to create a new post
async function createPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/",
      {
        method: "POST", // Specifies HTTP method as POST
        headers: {
          "Content-Type": "application/json", // Specifies content type
        },
        body: JSON.stringify({
          userId: 1,
          title: "My Post",
          body: "This is my post", // Post content
        }), // Converts data to JSON string
      }
    );

    const data = await response.json(); // Parses the response as JSON
    console.log("Created post: ", data); // Logs the newly created post
  } catch (error) {
    console.error("Error creating post: ", error); // Handles errors
  }
}

createPost();
*/

/*
// PUT Request (Updating Data)
// Function to update a post by ID
async function updatePost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT", // Specifies HTTP method as PUT
        headers: {
          "Content-Type": "application/json", // Content type as JSON
        },
        body: JSON.stringify({
          id: id, // Ensures correct ID in the body
          title: "Updated Title", // Updated title
          body: "Updated content", // Updated body
          userId: 2, // Updated user ID
        }), // Converts updated data to JSON string
      }
    );

    const data = await response.json(); // Parses the updated post as JSON
    console.log("Updated post: ", data); // Logs the updated post
  } catch (error) {
    console.error("Error updating post: ", error); // Handles errors
  }
}

updatePost(6);
*/

/*
// DELETE Request
// Function to delete a post by ID
async function deletePost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE", // Specifies HTTP method as DELETE
      }
    );

    // Checks if the delete request was successful
    if (response.ok) {
      console.log("Post deleted successfully");
    } else {
      console.log("Failed to delete post");
    }
  } catch (error) {
    console.error("Error deleting post: ", error); // Handles errors
  }
}

deletePost(5);
*/

/***************************************************************************
 ************************ Proper Error Handling ****************************
 **************************************************************************/

/*
// Function to fetch data with error handling
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url); // Makes the fetch request

    // Throws an error if the response status indicates failure
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parses the JSON response
    return data; // Returns the parsed data
  } catch (error) {
    // Handles specific errors
    if (error.name === "TypeError") {
      console.log("Network Error OR CORS Issue"); // Logs network-related issues
    } else {
      console.log("Other Error: ", error.message); // Logs other errors
    }

    throw error; // Re-throws the error for further handling
  }
}

// Function to fetch data safely with error handling
async function getDataSafely() {
  try {
    const data = await fetchWithErrorHandling(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("Data: ", data); // Logs fetched data
  } catch (error) {
    console.error("Error fetching data: ", error); // Logs errors
  }
}
  */

/***************************************************************************
 ******************** Working with Query Parameters ************************
 **************************************************************************/
/*
// Function to fetch posts using query parameters
async function getPostsWithParams() {
  // Base URL for the API endpoint
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  // Creating query parameters using URLSearchParams
  const params = new URLSearchParams({
    userId: 1, // Filter posts by user ID 1
    _limit: 3, // Limit the number of posts to 3
  });

  try {
    // Fetching posts by appending query parameters to the URL
    const response = await fetch(`${baseURL}?${params}`);

    // Parsing the JSON response
    const data = await response.json();

    // Logging the fetched posts
    console.log("Posts: ", data);
  } catch (error) {
    // Handling any errors that occur during the fetch
    console.error("Error fetching posts: ", error);
  }
}

// Calling the function to demonstrate its functionality
getPostsWithParams();
*/

/***************************************************************************
 *********************** Handling Multiple Requests ************************
 **************************************************************************/

// Function to fetch a post and its associated comments
async function getPostsAndComments(postId) {
  try {
    // Fetching the post and its comments simultaneously using Promise.all
    const [postResponse, commentsResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`), // Fetch the post data
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`), // Fetch the comments for the post
    ]);

    // Parsing both responses into JSON
    const post = await postResponse.json(); // Post details
    const comments = await commentsResponse.json(); // Comments associated with the post

    // Returning the post and comments as an object
    return { post, comments };
  } catch (error) {
    // Logging errors if any occur during the fetch or parsing process
    console.error("Error fetching posts and comments: ", error);
    throw error; // Re-throwing the error for handling in the calling code
  }
}

// Using the function to fetch a specific post and its comments
getPostsAndComments(1)
  .then((data) => {
    // Logging the fetched post details
    console.log("Post: ", data.post);
    // Logging the comments for the post
    console.log("Comments: ", data.comments);
  })
  .catch((error) => {
    // Handling errors that occur while calling the function
    console.error("Error: ", error);
  });

/***************************************************************************
 **************************** Best Practices *******************************
 **************************************************************************/

/*
* Always handle errors properly:

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

* Use appropriate HTTP methods:

// GET for retrieving data
// POST for creating new data
// PUT/PATCH for updating data
// DELETE for removing data

* Set proper headers:

const headers = {
    'Content-Type': 'application/json',
    // Add any other required headers
};

* Handle loading and error states in real applications:

async function fetchWithStatus() {
    let isLoading = true;
    try {
        // Show loading state
        console.log('Loading...');

        const response = await fetch(url);
        const data = await response.json();

        // Handle success
        console.log('Data loaded:', data);
    } catch (error) {
        // Handle error
        console.error('Error loading data:', error);
    } finally {
        // Always hide loading state
        isLoading = false;
        console.log('Loading finished');
    }
}

*/
