/***************************************************************************
 ************************ Encapsulation and Privacy ************************
 **************************************************************************/

// Private Fields (Modern Way)
// By adding a prefix `#` to properties and methods, we can make them private.
// This ensures they cannot be accessed or modified directly from outside the class.

class BankAccount {
  // Private Field (Property)
  #balance = 0; // Stores the current balance of the account
  #transactions = []; // Stores a log of all transactions

  // Constructor to initialize the account with an initial balance
  constructor(initialBalance) {
    // Check if the initial balance is valid (greater than 0)
    if (initialBalance > 0) {
      this.#balance = initialBalance; // Set the initial balance
      this.#logTransaction("Initial Deposit", initialBalance); // Log the initial deposit
    }
  }

  // Private Method
  // Logs a transaction with the type, amount, and current date
  #logTransaction(type, amount) {
    this.#transactions.push({
      type, // Type of transaction (e.g., "Deposit", "Withdraw")
      amount, // Amount involved in the transaction
      date: new Date().toISOString(), // Timestamp of the transaction
    });
  }

  // Public methods to interact with private fields

  // Deposit money into the account
  deposit(amount) {
    // Validate the deposit amount
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }

    this.#balance += amount; // Add the amount to the balance
    this.#logTransaction("Deposit", amount); // Log the deposit
    return this.#balance; // Return the updated balance
  }

  // Withdraw money from the account
  withdraw(amount) {
    // Validate the withdrawal amount
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }

    // Check if there are sufficient funds
    if (amount > this.#balance) {
      throw new Error("Insufficient Funds");
    }

    this.#balance -= amount; // Deduct the amount from the balance
    this.#logTransaction("Withdraw", amount); // Log the withdrawal
    return this.#balance; // Return the updated balance
  }

  // Get the current balance of the account
  getBalance() {
    return this.#balance;
  }

  // Public method to view the transaction history
  getTransactionsHistory() {
    // Return a copy of the transactions array to prevent external modifications
    return [...this.#transactions];
  }
}

/*
// Example usage of the BankAccount class
const account = new BankAccount(2000); // Create an account with an initial balance of 2000

console.log("Current Balance: ", account.getBalance()); // Output: 2000
account.deposit(500); // Deposit 500 into the account
console.log("Current Balance: ", account.getBalance()); // Output: 2500
account.withdraw(900); // Withdraw 900 from the account
console.log("Current Balance: ", account.getBalance()); // Output: 1600
console.log("Transactions Log:\n", account.getTransactionsHistory()); // Output the transaction history
*/

/***************************************************************************
 ***************************** Testing OOP Code ****************************
 **************************************************************************/

class ShoppingCart {
  // Private Field: A Map to store items and their quantities
  // Format: { itemId -> Quantity }
  #items = new Map();

  // Public Method: Add an item to the cart
  addItem(item, quantity = 1) {
    // Get the current quantity of the item (default to 0 if the item is not in the cart)
    const currentQuantity = this.#items.get(item.id) || 0;

    // Update the quantity of the item in the cart
    this.#items.set(item.id, currentQuantity + quantity);
  }

  // Public Method: Remove an item from the cart
  removeItem(itemId, quantity = 1) {
    // Get the current quantity of the item
    const currentQuantity = this.#items.get(itemId);

    // Check if the item exists in the cart
    if (!currentQuantity) {
      throw new Error("Item not in cart");
    }

    // If the quantity to be removed is less than the current quantity,
    // update the quantity of the item in the cart
    if (quantity < currentQuantity) {
      this.#items.set(itemId, currentQuantity - quantity);
    } else {
      // If the quantity to be removed is greater than or equal to the current quantity,
      // remove the item from the cart entirely
      this.#items.delete(itemId);
    }
  }

  // Public Method: Get the quantity of a specific item in the cart
  getQuantity(itemId) {
    // Return the quantity of the item (default to 0 if the item is not in the cart)
    return this.#items.get(itemId) || 0;
  }

  // Public Method: Clear all items from the cart
  clear() {
    this.#items.clear(); // Remove all items from the Map
  }
}

// Function to run tests for the ShoppingCart class
function runTests() {
  console.log("Starting tests for ShoppingCart...\n");

  // Test 1: Adding Items
  console.log("Test 1: Adding Items...");
  const cart = new ShoppingCart();
  const item = {
    id: 1,
    name: "Test Item",
  };

  // Add 2 units of the item to the cart
  cart.addItem(item, 2);
  console.assert(
    cart.getQuantity(1) === 2,
    "Test 1 FAILED: Adding item failed"
  );

  // Test 2: Adding the same item multiple times
  console.log("Test 2: Adding the same item multiple times...");
  cart.addItem(item); // Add 1 more unit (default quantity)
  console.assert(
    cart.getQuantity(1) === 3,
    "Test 2 FAILED: Adding additional quantity failed"
  );

  // Test 3: Removing Items
  console.log("Test 3: Removing Items...");
  cart.removeItem(1, 2); // Remove 2 units
  console.assert(
    cart.getQuantity(1) === 1,
    "Test 3 FAILED: Removing items failed"
  );

  // Test 4: Removing all items (more than the current quantity)
  console.log("Test 4: Removing all items...");
  cart.removeItem(1, 5); // Attempt to remove 5 units (only 1 exists)
  console.assert(
    cart.getQuantity(1) === 0,
    "Test 4 FAILED: Complete removal failed"
  );

  // Test 5: Error Handling (removing a non-existent item)
  console.log("Test 5: Error Handling...");
  try {
    cart.removeItem(50); // Attempt to remove an item that doesn't exist
    console.assert(false, "Test 5 FAILED: Expected error not thrown");
  } catch (error) {
    console.assert(
      error.message === "Item not in cart",
      "Test 5 FAILED: Wrong error message"
    );
  }

  console.log("\nAll tests completed!");
}

// Run the tests
//runTests();

/***************************************************************************
 *************************** Debugging OOP Code ***************************
 **************************************************************************/

// Base class for adding debugging capabilities to other classes
class Debuggable {
  constructor() {
    // Initialize debug mode as false by default
    this.debugMode = false;
  }

  // Method to enable debugging
  enableDebug() {
    this.debugMode = true;
  }

  // Method to log messages if debug mode is enabled
  log(...args) {
    if (this.debugMode) {
      // Log messages prefixed with the class name for better context
      console.log(`[${this.constructor.name}]`, ...args);
    }
  }
}

// UserService class that extends Debuggable to inherit debugging capabilities
class UserService extends Debuggable {
  // Private field to store users in a Map (key-value pairs)
  #users = new Map();

  constructor() {
    // Call the parent class constructor
    super();
    // Log a message when the service is initialized (won't print if debugMode is false)
    this.log("Service Initialized");
  }

  // Private method to validate user data
  #validateUser(user) {
    // Check if the user has both an `id` and a `name`
    if (!user.id || !user.name) {
      throw new Error("Invalid User Data");
    }
  }

  // Method to add a user to the Map
  addUser(user) {
    // Log the attempt to add a user
    this.log("Adding user: ", user);

    try {
      // Validate the user data
      this.#validateUser(user);
      // Add the user to the Map if validation passes
      this.#users.set(user.id, user);
      // Log success message
      this.log("User added successfully");
    } catch (error) {
      // Log the error if validation fails
      this.log("Error adding user:", error.message);
      // Re-throw the error to handle it outside this method
      throw error;
    }
  }
}

/*
// Usage Example

// Create an instance of UserService
const userService = new UserService();

// Enable debugging for the userService instance
userService.enableDebug();

// Example of adding a valid user
userService.addUser({
  id: 1,
  name: "John Doe",
});

try {
  // Attempt to add an invalid user (missing `name`)
  userService.addUser({
    id: 2, // Missing `name` field
  });
} catch (error) {
  // Catch and log the error thrown by the `addUser` method
  console.error("Error: Missing UserId or Username");
}
  */

/***************************************************************************
 ****************** Best Practices for Advanced OOP *************************
 **************************************************************************/
// 1. Use Private Fields Appropriately
/*
class BankAccount {
  // Private field for internal state (not accessible outside the class)
  #balance = 0;

  // Public field for account holder name (okay to access directly)
  accountHolder;

  // Method to deposit money into the account
  deposit(amount) {
    // Validate the amount before updating the balance
    this.#validateAmount(amount);
    // Update the private balance field
    this.#balance += amount;
  }

  // Private method to validate the deposit amount
  #validateAmount(amount) {
    // Throw an error if the amount is invalid (<= 0)
    if (amount <= 0) throw new Error("Invalid amount");
  }
}
  */

// 2. Implement Method Chaining When Appropriate
class QueryBuilder {
  // Private field to store the query string
  #query = "";

  // Method to set the SELECT clause of the query
  select(fields) {
    this.#query = `SELECT ${fields} `;
    // Return `this` to enable method chaining
    return this;
  }

  // Method to set the FROM clause of the query
  from(table) {
    this.#query += `FROM ${table} `;
    // Return `this` to enable method chaining
    return this;
  }

  // Method to set the WHERE clause of the query
  where(conditions) {
    this.#query += `WHERE ${conditions} `;
    // Return `this` to enable method chaining
    return this;
  }

  // Method to retrieve the final query string
  getQuery() {
    return this.#query;
  }
}

/*
// Example of method chaining
const query = new QueryBuilder()
  .select("*") // Set SELECT clause
  .from("users") // Set FROM clause
  .where("age > 18") // Set WHERE clause
  .getQuery(); // Get the final query string

console.log(query); // Output: "SELECT * FROM users WHERE age > 18 "
*/

// 3. Use Static Methods Judiciously
class DateUtil {
  // Static method to check if a date is a weekend
  static isWeekend(date) {
    const day = date.getDay(); // Get day of the week (0 = Sunday, 6 = Saturday)
    return day === 0 || day === 6; // Return true if it's Sunday or Saturday
  }

  // Static method to check if a date is within business hours
  static isBusinessHour(date) {
    const hour = date.getHours(); // Get the hour of the day
    return hour >= 9 && hour < 17; // Return true if between 9 AM and 5 PM
  }
}
/*
// Example usage of static methods
const today = new Date();
console.log(DateUtil.isWeekend(today)); // Check if today is a weekend
console.log(DateUtil.isBusinessHour(today)); // Check if it's business hours
*/

/***************************************************************************
 *********************** Design Patterns in Practice ***********************
 **************************************************************************/
/**
 * Singleton Pattern
 * - Ensures that a class has only one instance.
 * - Common use cases include configuration managers, connection pools, or shared resource managers.
 */
class ConfigManager {
  // Static private field to store the single instance (lazy initialization)
  static #instance = null;

  // Private field to store configuration data
  #config = {};

  /**
   * Constructor
   * - Prevents direct instantiation of the class.
   * - Throws an error if an instance already exists.
   */
  constructor() {
    // Check if an instance already exists
    if (ConfigManager.#instance) {
      throw new Error("Cannot create multiple instances of ConfigManager");
    }

    // Assign the newly created instance to the static private field
    ConfigManager.#instance = this;
  }

  /**
   * Static method to get the single instance of ConfigManager
   * - Creates a new instance if one doesn't already exist.
   * - Returns the existing instance if it does.
   * @returns {ConfigManager} The single instance of ConfigManager
   */
  static getInstance() {
    // Check if an instance already exists
    if (!ConfigManager.#instance) {
      // Create a new instance if none exists
      ConfigManager.#instance = new ConfigManager();
    }

    // Return the single instance
    return ConfigManager.#instance;
  }

  /**
   * Method to set a configuration value
   * @param {string} key - The configuration key
   * @param {any} value - The configuration value
   */
  setConfig(key, value) {
    this.#config[key] = value;
  }

  /**
   * Method to get a configuration value
   * @param {string} key - The configuration key
   * @returns {any} The configuration value associated with the key
   */
  getConfig(key) {
    return this.#config[key];
  }
}
/*
// Usage Example

// Get the single instance of ConfigManager
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

// Set a configuration value using config1
config1.setConfig("theme", "DARK");

// Retrieve the configuration value using config2
console.log(config2.getConfig("theme")); // Output: 'DARK'

// Verify that config1 and config2 are the same instance
console.log(config2 === config1); // Output: true

// Attempt to create a new instance directly (will throw an error)
try {
  const config3 = new ConfigManager();
} catch (error) {
  console.log("Error: ", error.message); // Output: 'Error: Cannot create multiple instances of ConfigManager'
}
*/

/**
 * Factory Pattern
 * - Provides a way to create objects without specifying the exact class of the object.
 * - Useful when object creation is complex or might change.
 */

// Different Types of Users in the system
class BasicUser {
  constructor(name) {
    this.name = name;
    this.permissions = ["read"]; // Basic users can only read
  }
}

class AdminUser {
  constructor(name) {
    this.name = name;
    this.permissions = ["read", "write", "delete"]; // Admin users have full permissions
  }
}

class ModeratorUser {
  constructor(name) {
    this.name = name;
    this.permissions = ["read", "write"]; // Moderators can read and write
  }
}

// Factory class to create users
class UserFactory {
  /**
   * Static method to create a user based on the type
   * @param {string} type - The type of user to create (e.g., "basic", "admin", "moderator")
   * @param {string} name - The name of the user
   * @returns {BasicUser|AdminUser|ModeratorUser} An instance of the specified user type
   * @throws {Error} If the user type is not supported
   */
  static createUser(type, name) {
    switch (type.toLowerCase()) {
      case "basic":
        return new BasicUser(name); // Create a BasicUser
      case "admin":
        return new AdminUser(name); // Create an AdminUser
      case "moderator":
        return new ModeratorUser(name); // Create a ModeratorUser
      default:
        throw new Error(`User type ${type} not supported`); // Throw an error for unsupported types
    }
  }
}

// Usage:
const user1 = UserFactory.createUser("basic", "John"); // Create a basic user
const user2 = UserFactory.createUser("admin", "Jane"); // Create an admin user

console.log("User Permissions: ", user1.permissions); // Output: [ 'read' ]
console.log("User Permissions: ", user2.permissions); // Output: [ 'read', 'write', 'delete' ]
