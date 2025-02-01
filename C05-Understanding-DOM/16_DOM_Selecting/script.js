/**
 * Understanding Element Selection
 */

/*
 * getElementById:
    - The most straightforward way to select a single element is using its ID
    - Returns a single element or null if not found
    - IDs should be unique in your HTML (no two elements should share the same ID)
    - Fastest selection method
    - Case sensitive
 */
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// Let's change its color so we can see we've selected it correctly
mainTitle.style.color = "blue";

let nonExistent = document.getElementById("not-here");
console.log(nonExistent); // null

/*
 * getElementsByClassName:
    - Selects all elements with a specific class
    - Returns an HTMLCollection (array-like object)
    - You need to loop through the collection to modify all elements
    - The collection is "live" (automatically updates if elements are added/removed)
 */

let boxes = document.getElementsByClassName("box");
console.log(boxes); // HTMLCollection

for (let box of boxes) {
  box.style.borderColor = "red";
}

let specialElements = document.getElementsByClassName("special");
console.log(specialElements); // HTMLCollection

for (let element of specialElements) {
  element.style.border = "2px dashed green";
}

/*
 * getElementsByTagName:
    - Selects all elements of a specific HTML tag
    - Returns a live HTMLCollection
    - Need to loop through to modify all elements
 */

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // HTMLCollection

// Change all paragraphs
for (let paragraph of paragraphs) {
  paragraph.style.fontFamily = "Arial";
  paragraph.style.fontSize = "32px";
}

/*
 * querySelector:
    - A more modern and flexible way to select elements. It uses CSS selector syntax
    - Returns the first matching element
    - Returns null if no match is found
    - Can use any valid CSS selector
    - Not live (returns a static result)
 */

// Select by ID
let container = document.querySelector("#container");
container.style.padding = "100px";

// Select by class
let firstBox = document.querySelector(".box");
firstBox.style.backgroundColor = "lightblue";

// More complex selections
let specialItem = document.querySelector(".special");
specialItem.style.color = "red";

// First listItem inside Item
let firstListItem = document.querySelector("#list li");
firstListItem.style.backgroundColor = "green";

/*
 * querySelectorAll:
    - Similar to querySelector but returns all matching elements
    - Returns a NodeList (not live)
    - Can use forEach directly (unlike HTMLCollection)
    - More flexible selection with CSS selectors
 */

// Select all boxes
let allBoxes = document.querySelectorAll(".box");
allBoxes.forEach((box) => {
  box.style.backgroundColor = "lightgreen";
});

// Select all special elements inside the list
let specialListItems = document.querySelectorAll("#list .special");
specialListItems.forEach((item) => {
  item.style.fontWeight = "bold";
  item.style.color = "red";
});

/*
 * Practical Examples
 */

// Select all elements with class 'special' inside elements with class 'box'
let specialBoxes = document.querySelectorAll(".box .special");
specialBoxes.forEach((specialBox) => {
  specialBox.style.backgroundColor = "orange";
});

// Select the first paragraph that has both 'text' and 'special' classes
let specialText = document.querySelector("p.text.special");
specialText.style.textDecoration = "underline";

// Select all list items except the special one
let regularItems = document.querySelectorAll("#list li:not(.special)");
regularItems.forEach((item) => {
  item.style.color = "darkblue";
});

/*
 * Common Pitfalls and Solutions
 */

/** Trying to use array methods on HTMLCollection */

let boxes2 = document.getElementsByClassName("box");
// This won't work:
// boxes.forEach(box => {...})

// Instead, convert to array first:
Array.from(boxes2).forEach((box) => {
  box.style.padding = "20px";
});

/** Forgetting that getElementById returns null for non-existent elements */

// Better way to handle potential null:
let element = document.getElementById("some-id");
if (element) {
  element.style.color = "red";
} else {
  console.log("Element not found!");
}
