/******************** Modifying Element Content ***********************/

/*
 * textContent:
    - The textContent property sets or returns the text content of an element.
    - Treats everything as plain text (HTML tags will be shown as text)
    - Safe from XSS (Cross-Site Scripting) attacks
    - Generally better performance than innerHTML
 */

let textElement = document.getElementById("text-content");

// Reading the current text
console.log(textElement.textContent);

// Changing the text
textElement.textContent = "This text has been changed!";

// Adding to existing text
textElement.textContent += " Added more text!";

/*
 * innerHTML:
    - The innerHTML property lets you work with HTML content
    - Can process HTML tags
    - More versatile but slower than textContent
    - Be careful with user input (potential security risk)
    - Replaces all content when setting
*/
let htmlElement = document.getElementById("html-content");

// Reading HTML content
console.log(htmlElement.innerHTML); // Shows the HTML including the <span> tag

// Changing HTML content
htmlElement.innerHTML =
  "This text is <strong>Bold</strong> and this is <em>italic</em>";

// Adding HTML content
htmlElement.innerHTML +=
  " <span style= 'color: blue;' >Blue Text Added!</span>";

/******************** Modifying Attributes ***********************/

let imgElement = document.getElementById("demo-img");
let linkElement = document.getElementById("demo-link");

// Getting attribute values
console.log(imgElement.getAttribute("src"));
console.log(linkElement.getAttribute("href"));

// Setting attribute values
linkElement.setAttribute("href", "https://www.facebook.com/");
imgElement.setAttribute("src", "https://placehold.co/300");

// Checking if attribute exists
console.log(imgElement.hasAttribute("alt")); // true

// Removing attributes
linkElement.removeAttribute("href"); // Link should no longer be clickable

// Direct attribute access (when available):
imgElement.src = "https://placehold.co/50";
imgElement.alt = "A PlaceHolder Img";

/******************** Modifying Styles ***********************/

/** Inline Styles (Directly through the style property) */

// Setting individual styles
let styleBox = document.getElementById("style-box");
styleBox.style.backgroundColor = "lightBlue";
styleBox.style.border = "2px solid blue";
styleBox.style.borderRadius = "10px";
// Box should now be light blue with rounded corners

// CSS properties with dashes are written in camelCase
styleBox.style.marginTop = "100px"; // Instead of margin-top

// Getting computed styles
let computedstyle = window.getComputedStyle(styleBox);
console.log(computedstyle.backgroundColor);

/** Working with Classes (By modifying classes)
 * The classList property provides methods to work with classes
 */
let classElement = document.getElementById("class-demo");

// Adding a class to the element
classElement.classList.add("highlight"); // Element should now have yellow background

// Removing a class from the element
classElement.classList.remove("highlight"); // Yellow background should disappear

// Toggling a class
// Add it to the element (if missing)
// Remove it from the element (if present)
classElement.classList.toggle("highlight");

// Checking if class exists
console.log(classElement.classList.contains("highlight"));

// Multiple classes
classElement.classList.add("highlight", "success");
// Element should now be green, bold, and highlighted

// Replacing one class with another
classElement.classList.replace("success", "error");
// Should change from green to red and italic

/*
 * Best Practices
    - Choose textContent over innerHTML when possible (better security and performance)
    - Use classList methods instead of directly manipulating the className string
    - Be careful with innerHTML and user input
    - Always check if elements exist before manipulating them
    - Prefer CSS classes over inline styles for reusable styles
 */
