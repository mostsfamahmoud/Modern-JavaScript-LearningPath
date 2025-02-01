/*
 * Understanding Form Validation
    Forms are a crucial part of web development - they're how we collect information from users. 
    Whether it's a login form, registration form, or contact form, 
    we need to ensure the data we receive is valid and secure.
 */

/********************* Regular Expressions (Regex) *********************/

const patterns = {
  /*
   * Username pattern breakdown
      ^           -> Start of String
      [a-zA-Z0-9] -> any letter (uppercase or lowercase) or number
      {5,12}      -> Previous pattern must occur 5 to 12 times
      $           -> End of String
   */

  username: /^[a-zA-Z0-9]{5,12}$/,

  /*
   * Email pattern breakdown
      [a-zA-Z0-9._%+-]+ -> one or more letters, numbers, allowed special chars
      @                 -> Literal @ Symbol
      [a-zA-Z0-9.-]+    -> Domain name (one or more letters, numbers, dots, or hyphens)
      \.                -> Literal dot (escaped with \)
      [a-zA-Z]{2,}      -> Top-Level Domain (.com, .net, .org, .gov) at least 2 chars
   */

  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  /*
   * Password pattern breakdown
      (?=.*[a-zA-Z])  -> must contain at least one letter
      (?=.*\d)       -> must contain at least one number
      [a-zA-Z\d]{8,} -> must be at least 8 characters long
   */

  password: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,

  /*
   * Phone Pattern
      At least 10 digits
   */
  phone: /^\d{10,}$/,
};

/********************* Setting Up Our Form Elements *********************/

// Get all form elements we'll need to work with
const form = document.getElementById("registrationForm");

// Putting form elements in an object for easy access and clean code
const formElements = {
  username: {
    input: document.getElementById("username"),
    error: document.getElementById("usernameError"),
    success: document.getElementById("usernameSuccess"),
  },
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailError"),
  },
  password: {
    input: document.getElementById("password"),
    error: document.getElementById("passwordError"),
  },
  confirmPassword: {
    input: document.getElementById("confirmPassword"),
    error: document.getElementById("confirmPasswordError"),
  },
  phone: {
    input: document.getElementById("phone"),
    error: document.getElementById("phoneError"),
  },
};

const submitButton = document.getElementById("submitButton");

/********************* Validation Helper Functions *********************/

// Hides error message and adds valid class to input
function hideError(inputName) {
  const element = formElements[inputName];

  // Check if the element exists
  if (!element || !element.input || !element.error) {
    console.error(`Invalid input name: ${inputName}`);
    return;
  }

  // Hide the error message
  element.error.style.display = "none";

  // Update input classes: Remove 'invalid' and add 'valid'
  element.input.classList.remove("invalid");
  element.input.classList.add("valid");
}

// Shows error message and adds invalid class to input
function showError(inputName, message) {
  const element = formElements[inputName];

  // Set error message text
  element.error.textContent = message;

  // show error message (display: block)
  element.error.style.display = "block";

  // If there's a success message, hide it
  if (element.success) {
    element.success.style.display = "none";
  }

  // Remove valid class and add invalid class
  element.input.classList.remove("valid");
  element.input.classList.add("invalid");
}

/********************* Individual Validation Functions *********************/

function validateUsername(value) {
  // Ensure the value is properly trimmed (to remove leading/trailing spaces)
  value = value.trim();

  // First check if there's any value at all
  if (!value) {
    showError("username", "Username is required");
    //console.log("Username is required");
    return false;
  }

  // Test the value against our username pattern
  // .test() is a regex method that returns true if the string matches the pattern
  if (!patterns.username.test(value)) {
    showError(
      "username",
      "Username must be 5-12 characters, letters and numbers only"
    );
    //console.log("Username must be 5-12 characters, letters and numbers only");

    return false;
  }

  hideError("username");
  //console.log("Username matches our criteria");
  return true;
}

function validateEmail(value) {
  // First check if there's any value at all
  if (!value) {
    showError("email", "Email is required");
    //console.log("Email is required");
    return false;
  }

  // Test the value against our email pattern
  // .test() is a regex method that returns true if the string matches the pattern
  if (!patterns.email.test(value)) {
    showError("email", "Please enter a valid email address");
    //console.log("Please enter a valid email address");
    return false;
  }

  hideError("email");
  //console.log("Email matches our criteria");
  return true;
}

function validatePassword(value) {
  // First check if there's any value at all
  if (!value) {
    showError("password", "Password is required");
    //console.log("Password is required");
    return false;
  }

  // Test the value against our password pattern
  // .test() is a regex method that returns true if the string matches the pattern
  if (!patterns.password.test(value)) {
    showError(
      "password",
      "Password must be at least 8 characters long and contain at least one letter and one number"
    );

    //console.log("Password must be at least 8 characters long and contain at least one letter and one number");

    return false;
  }

  hideError("password");
  //console.log("Password matches our criteria");
  return true;
}

function validateConfirmPassword(value) {
  // First check if there's any value at all
  if (!value) {
    showError("confirmPassword", "Please confirm your password");
    return false;
  }

  // Check if it matches the password field
  if (value !== formElements.password.input.value) {
    showError("confirmPassword", "Passwords do not match");
    //console.log("Passwords do not match");
    return false;
  }

  hideError("confirmPassword");
  //console.log("confirmPassword");
  return true;
}

function validatePhone(value) {
  // Phone is optional, so empty value is OK
  if (!value) {
    hideError("phone");
    return true;
  }

  // Test the value against our phone pattern
  // .test() is a regex method that returns true if the string matches the pattern
  if (!patterns.phone.test(value)) {
    showError("phone", "Please enter a valid 10-digit phone number");
    //console.log("Please enter a valid 10-digit phone number");
    return false;
  }

  hideError("phone");
  //console.log("Phone matches our criteria");
  return true;
}

/********************* Checking Overall Form Validity *********************/

// Checks if all required fields are valid
function validateForm() {
  const isValid =
    validateUsername(formElements.username.input.value) &&
    validateEmail(formElements.email.input.value) &&
    validatePassword(formElements.password.input.value) &&
    validateConfirmPassword(formElements.confirmPassword.input.value) &&
    validatePhone(formElements.phone.input.value);

  // Enable/disable submit button based on form validity
  submitButton.disabled = !isValid;
}

/********************* Setting Up Event Listeners *********************/

// Input event fires whenever the input value changes (typing, pasting, etc.)
formElements.username.input.addEventListener("input", (event) => {
  validateUsername(event.target.value);
  validateForm();
});

formElements.email.input.addEventListener("input", (event) => {
  validateEmail(event.target.value);
  validateForm();
});

formElements.password.input.addEventListener("input", (event) => {
  validatePassword(event.target.value);

  // Also validate confirm password if it has a value
  // (in case user goes back to change password)
  let confirmPasswordValue = formElements.confirmPassword.input.value;

  if (confirmPasswordValue) {
    validateConfirmPassword(confirmPasswordValue);
  }

  validateForm();
});

formElements.confirmPassword.input.addEventListener("input", (event) => {
  validateConfirmPassword(event.target.value);
  validateForm();
});

formElements.phone.input.addEventListener("input", (event) => {
  validatePhone(event.target.value);
  validateForm();
});

/********************* Handling Form Submission **********************/

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // In a real application, you would send the data to a server here
  console.log("Form submitted with data:", {
    username: formElements.username.input.value,
    email: formElements.email.input.value,
    password: formElements.password.input.value,
    phone: formElements.phone.input.value || "Not provided",
  });

  // Reset the form
  form.reset();

  // Reset Validation classes
  Object.values(formElements).forEach((formElement) => {
    formElement.input.classList.remove("valid", "invalid");
  });

  // Disable the submit button for the next form submission
  submitButton.disabled = true;
});

/*
// Input event fires whenever the input value changes (typing, pasting, etc.)
formElements.username.input.addEventListener("input", (event) => {
  validateUsername(event.target.value);
  console.log(formElements.username.input.value);
});

formElements.email.input.addEventListener("input", (event) => {
  validateEmail(event.target.value);
  console.log(formElements.email.input.value);
});

formElements.password.input.addEventListener("input", (event) => {
  validatePassword(event.target.value);

  // Also validate confirm password if it has a value
  // (in case user goes back to change password)
  let confirmPasswordValue = formElements.confirmPassword.input.value;

  if (confirmPasswordValue) {
    validateConfirmPassword(confirmPasswordValue);
  }

  console.log(formElements.password.input.value);
});

formElements.confirmPassword.input.addEventListener("input", (event) => {
  validateConfirmPassword(event.target.value);
  console.log(formElements.confirmPassword.input.value);
});

formElements.phone.input.addEventListener("input", (event) => {
  validatePhone(event.target.value);
  console.log(formElements.phone.input.value);
});
*/

/*
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid =
    validateUsername(formElements.username.input.value) &&
    validateEmail(formElements.email.input.value) &&
    validatePassword(formElements.password.input.value) &&
    validateConfirmPassword(formElements.confirmPassword.input.value) &&
    validatePhone(formElements.phone.input.value);

  if (isValid) {
    // In a real application, you would send the data to a server here
    console.log("Form submitted with data:", {
      username: formElements.username.input.value,
      email: formElements.email.input.value,
      password: formElements.password.input.value,
      phone: formElements.phone.input.value || "Not provided",
    });

    // Reset the form
    form.reset();

    // Reset Validation classes
    Object.values(formElements).forEach((formElement) => {
      formElement.input.classList.remove("valid", "invalid");
    });

    return;
  }

  console.log("Form cannot be submitted");
});
*/
