/*
 * Understanding the Event Object
    When an event occurs, JavaScript creates an event object that contains all the information about what just happened
 */

const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keydown", (event) => {
  // Let's look at what's inside the event object
  console.log("Event Object: ", event);

  // Most commonly used properties:
  console.log("Key Pressed: ", event.key);
  console.log("Target Element: ", event.target);
  console.log("Type of Event: ", event.type);

  // Getting input value
  // console.log("Current Input Value: ", event.target.value);
  // console.log("Current Input Value: ", nameInput.value);
});

// Getting input values
nameInput.addEventListener("input", (event) => {
  // These do the same thing:
  const value1 = event.target.value;
  const value2 = nameInput.value;

  console.log("User Typed: ", value1);
  // console.log("User Typed: ", value2);
});

/*
     * Preventing Default Behaviors
        Many HTML elements have default behaviors:
            - Forms submit and refresh the page
            - Links navigate to new URLs
            - Right-click shows the context menu
            - Certain keys perform browser actions
     */

/********************** Form Submission *********************/

const form = document.getElementById("myForm");
const emailInput = document.getElementById("emailInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", (event) => {
  let isValid = true;

  // Prevent the form from submitting immediately
  event.preventDefault();

  // Clear previous errors
  emailError.style.display = "none";
  nameError.style.display = "none";

  // Check name if it's empty or not
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  // Basic email validation
  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    console.log("Form is valid, sending data...");
    // Here you would typically send the data to a server
  }
});

/********************** Custom Right-Click Menu *********************/

// Select the custom menu element from the DOM
const customMenu = document.getElementById("customMenu");

// Add an event listener to handle right-click (context menu) events
document.addEventListener("contextmenu", (event) => {
  // Prevent the browser's default context menu from showing
  // event.preventDefault();

  // Position and display the custom context menu
  customMenu.style.display = "block"; // Make the custom menu visible
  customMenu.style.top = event.clientY + "px"; // Set the top position based on the mouse's Y coordinate
  customMenu.style.left = event.clientX + "px"; // Set the left position based on the mouse's X coordinate
});

// Add an event listener to handle left-click events
document.addEventListener("click", (event) => {
  // Hide the custom context menu when the user clicks anywhere on the page
  customMenu.style.display = "none";
});

/*
     * Event Bubbling and When to Stop It
        Event bubbling means when an event happens on an element, it then triggers the same event on its parent elements. 
        This is often useful but sometimes problematic.
     */

/********************** Understanding Bubbling *********************/

const modal = document.getElementById("simpleModal");
const container = document.getElementById("mainContainer");

modal.addEventListener("click", (event) => {
  console.log("Modal clicked");
});

container.addEventListener("click", () => {
  console.log("Container clicked");
});

document.body.addEventListener("click", () => {
  console.log("Body clicked");
});

// Clicking the modal will log:
// "Modal clicked"
// "Container clicked"
// "Body clicked"

/********************** When to Stop Bubbling *********************/

/** Use Case
    1. Modal Windows: 
    You might not want to close a modal when it is clicked on. 
    Click on anywhere on the website and then click on the modal, check your console and see the difference. 
    */

modal.addEventListener("click", (event) => {
  // Stop the click from reaching the document
  // (which might have a handler to close the modal)
  event.stopPropagation();
  console.log("Modal clicked, event stopped here");
});

// This won't run when clicking the modal
document.addEventListener("click", () => {
  console.log("Document clicked - modal should close");
});

/**
 * Use Case
 * 1. Nested Interactive Elements:
 *    - Click on `Item1` and `Item2` to see the corresponding console logs.
 *    - Click on the delete buttons within the items and observe the behavior in the console and the DOM.
 */

// Add an event listener to the container for event delegation
container.addEventListener("click", (event) => {
  // Check if the clicked element has the "delete-btn" class
  if (event.target.classList.contains("delete-btn")) {
    // Prevent the event from propagating to parent elements
    event.stopPropagation();

    //console.log(event.target);               // target: <span class="delete-btn">×</span>
    //console.log(event.target.parentElement); // target.parentElement: <div class="item"> ... </div>

    // Remove the parent element (the item) from the DOM
    event.target.parentElement.remove();
    return; // Exit the handler to prevent further execution
  }

  // Check if the clicked element has the "item" class
  if (event.target.classList.contains("item")) {
    // Log a message when an item is clicked
    // This will not trigger when the delete button is clicked, as propagation is stopped
    console.log("Item clicked");
  }
});

/*
 * Working with Input Values
    Getting and working with input values is crucial for interactive web applications.
 */

// Real-time input handling
nameInput.addEventListener("input", (event) => {
  // event.target.value holds the current input value
  console.log("Current Value: ", event.target.value);

  // You can also use the input element directly
  // console.log("Same Value: ", nameInput.value);

  // Common tasks:
  // 1. Validation
  if (event.target.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }

  // 2. Transform input
  event.target.value = event.target.value.toUpperCase();
});

// Different events for different purposes
nameInput.addEventListener("change", (event) => {
  // 'change' fires when input loses focus
  console.log("Final value:", event.target.value);
});

nameInput.addEventListener("keyup", (event) => {
  // Handle specific keys
  if (event.key === "Enter") {
    console.log("Enter pressed, value is:", event.target.value);
  }
});

form.addEventListener("submit", (event) => {
  // Preventing default behaviour of the submit event so that the page does not reload. Remove this and submit/press enter again to see the difference.
  event.preventDefault();
});
