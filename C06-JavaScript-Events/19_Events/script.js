/*
 * Types of Events
 * This script demonstrates various types of event listeners in JavaScript, including mouse, keyboard, form, and document events.
 */

// Select DOM elements
const button = document.getElementById("clickButton"); // Button for click event
const box = document.getElementById("hoverBox"); // Box for mouse events
const displayArea = document.getElementById("displayArea"); // Area to display messages

// Function to display messages in the display area
function showMessage(text) {
  displayArea.textContent = text; // Update the text content of the display area
}

/********************** Mouse Events **********************/

// Click Event: Triggered when the button is clicked
button.addEventListener("click", () => {
  showMessage("Button Clicked!"); // Display a message when the button is clicked
});

// Mouse Over: Triggered when the mouse hovers over the box
box.addEventListener("mouseover", () => {
  showMessage("Mouse is Over the box!"); // Display a message when the mouse is over the box
  box.classList.add("highlight"); // Add a CSS class to visually highlight the box
});

// Mouse Out: Triggered when the mouse leaves the box
box.addEventListener("mouseout", () => {
  showMessage("Mouse left the box!"); // Display a message when the mouse leaves the box
  box.classList.remove("highlight"); // Remove the CSS class to stop highlighting the box
});

/********************** Keyboard Events **********************/

const inputField = document.getElementById("inputField"); // Input field for keyboard events

// Keyboard Event: Triggered when a key is pressed in the input field
inputField.addEventListener("keydown", (event) => {
  showMessage(`Key Pressed: ${event.key}`); // Display the key pressed by the user
});

// Keyboard Event: Triggered when a key is released in the input field
inputField.addEventListener("keyup", () => {
  showMessage("Key Released"); // Display a message when the key is released
});

/********************** Form Events **********************/

// Focus Event: Triggered when the input field gains focus
inputField.addEventListener("focus", () => {
  showMessage("Input Field is in Focus"); // Display a message when the input field is focused
});

// Blur Event: Triggered when the input field loses focus
inputField.addEventListener("blur", () => {
  showMessage("Input Field lost Focus"); // Display a message when the input field is no longer focused
});

/********************** Document Events **********************/

// DOMContentLoaded Event: Triggered when the DOM is fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  showMessage("Document is Ready"); // Display a message when the document is ready
  console.log("Document is Ready"); // Log to the console
});

// Load Event: Triggered when the entire page, including stylesheets and images, is fully loaded
window.addEventListener("load", () => {
  showMessage("Page is fully Loaded"); // Display a message when the page is fully loaded
  console.log("Page is fully Loaded"); // Log to the console
});

/*
 * Event Handlers vs Event Listeners
 */

/********************** Event Handler (older method) **********************/

const removeButton = document.getElementById("removeButton");

// Event handler method
removeButton.onclick = () => {
  showMessage("Clicked using event handler");
  console.log("Clicked using event handler");
};

// If you assign another handler, it replaces the previous one
removeButton.onclick = () => {
  showMessage("New handler replaced the old one");
  console.log("New handler replaced the old one");
};

/********************** Event Listener (modern method) **********************/

// Event listeners can have multiple functions
removeButton.addEventListener("click", () => {
  showMessage("First Listener");
  console.log("First Listener");
});

removeButton.addEventListener("click", () => {
  showMessage("Second Listener - Both Will Run!");
  console.log("Second Listener - Both Will Run!");
});

/*
 * Event listeners are preferred because they:
    - Allow multiple listeners for the same event
    - Provide more control over event handling
    - Support event bubbling and capturing (which we'll learn about later)
    - Can be removed when needed
 */
