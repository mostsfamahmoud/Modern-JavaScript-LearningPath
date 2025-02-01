/****************** Creating New Elements *******************/

// Creating a new element
let newParagraph = document.createElement("p");

// Adding text to the new element
newParagraph.textContent = "This is a new paragraph";

// Adding a class to style it
newParagraph.className = "new-element";

// Find the container where we want to add it
let container1 = document.getElementById("container1");

// Adding the new paragraph to the container
container1.appendChild(newParagraph);

// Create a button
let newButton = document.createElement("button");
newButton.textContent = "Click Me!";
container1.appendChild(newButton);

// Create an image
let newImage = document.createElement("img");
newImage.src = "https://picsum.photos/300/300";
newImage.alt = "Placeholder Image";
container1.appendChild(newImage);

/****************** Adding Elements at Specific Positions *******************/

// Create a new heading
let newHeading = document.createElement("h3");
newHeading.textContent = "New Section";

// Get the first paragraph in container1
let firstParagraph = document.getElementsByTagName("p")[0];

// Insert the heading before the paragraph
container1.insertBefore(newHeading, firstParagraph);

/****************** Moving Elements *******************/

// Get containers
let container2 = document.getElementById("container2");

// Get the button we created earlier
let button = document.querySelector("button");

// Move it to container2
if (button) {
  container2.appendChild(button);
}

/**
Important note: When you move an element like this, 
it's not copied - it's actually moved from one place to another. 
The element can only exist in one place at a time.
 */

/****************** Removing Elements *******************/

/**
 * Method 1: Using remove()
 */

// Get the image we created
let image = document.querySelector("img");

if (image) {
  image.remove(); // The image should disappear
}

/**
 * Method 2: Using removeChild()
 */

// Get the container and paragraph
let paragraphInsideContainer2 = container2.querySelector("p");

if (paragraphInsideContainer2) {
  // paragraphInsideContainer2.remove();
  container2.removeChild(paragraphInsideContainer2);
}

/****************** Practical Example *******************/

/*
 * Dynamic List Creation
 */
// Create a new list
let unorderedList = document.createElement("ul");
container2.appendChild(unorderedList);

// Function to add a new item
function addListItem(item) {
  // Create a List Item with a textContent 'text'
  let listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.style.marginBottom = "20px";

  // Add a delete button for the List Item
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = " x ";
  deleteBtn.style.marginLeft = "20px";

  // When clicked, remove the list item.
  deleteBtn.onclick = () => {
    listItem.remove();
  };

  // Append the deleteBtn to the listItem
  listItem.appendChild(deleteBtn);

  // Append the listItem to the unorderedList
  unorderedList.appendChild(listItem);
}

// Add some items
addListItem("First Item");
addListItem("Second Item");
addListItem("Third Item");

/****************** Common Mistakes and Solutions *******************/
// Forgetting to check if elements exist:

// Bad
document.querySelector("#nonexistent").remove(); // Will throw error

// Good
let element = document.querySelector("#nonexistent");
if (element) {
  element.remove();
}

// Trying to append a string instead of a node:

// Bad
container.appendChild("Some text"); // Will throw error

// Good
let textNode = document.createTextNode("Some text");
container.appendChild(textNode);
// Or better:
let p = document.createElement("p");
p.textContent = "Some text";
container.appendChild(p);
