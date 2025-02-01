/*
 * The Document Object
 */

// console.log(document);

// Let's try something more specific:
/*
console.log(document.body);
console.log(document.head);
console.log(document.title);
*/

/*
 * DOM Tree Structure
 */

// Get the main div
let mainDiv = document.getElementById("main");

// Explore its structure
console.log("Parent Element: ", mainDiv.parentElement);
console.log("First Child: ", mainDiv.firstElementChild);
console.log("Children Nodes: ", mainDiv.childNodes); // includes everything (elements, text, comments)
console.log("Children Elements: ", mainDiv.children); // only includes actual elements
console.log("Children Length: ", mainDiv.children.length);

/*
 * Live Preview of DOM Changes
 */

// Change the text color of the h1
document.querySelector("h1").style.color = "blue";

// Change the background of paragraphs with the 'highlight' class
let highLightedParagraph = document.querySelector(".highlight");
highLightedParagraph.style.backgroundColor = "yellow";

// Add some text to the first list item
document.querySelector("li").textContent += " (modified)";
