/***************************************************************************
 ************************ Optional Chaining (?.) ***************************
 **************************************************************************/

// Optional chaining is a modern JavaScript feature that simplifies accessing deeply
// nested properties without having to explicitly check if each level exists.

// Example object with nested properties
const user = {
  profile: {
    address: {
      street: "Main St",
    },
  },
};

/*
  // Old way: Lots of && checks to avoid errors
  const street1 =
    user && user.profile && user.profile.address && user.profile.address.street;
  
  // Or multiple if checks
  let street;
  if (user) {
    if (user.profile) {
      if (user.profile.address) {
        street = user.profile.address.street;
      }
    }
  }
  */

// New way: Optional chaining makes this much cleaner
const street = user?.profile?.address?.street;
// console.log(street); // "Main St"

// If any part of the chain is undefined or null, it returns undefined instead of throwing an error
const nonExistent = user?.profile?.address?.whatEver;
// console.log(nonExistent); // undefined

/************************ Working with Methods *****************************/

// Optional chaining can also be used to safely call methods that may not exist

const user1 = {
  name: "John Doe",
  getAddress() {
    return "123 Main St";
  },
};
/*
// No error if the method exists
console.log(user1?.getAddress?.()); // "123 Main St"

// No error if the method doesn't exist
console.log(user1?.getNonExistent?.()); // undefined
*/

/************************ Working with Arrays *****************************/

// Optional chaining can be used to safely access array elements and their properties

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];
/*
// Safe array access
console.log(users?.[0]?.name); // "John" - Access first user's name
console.log(users?.[1]?.age); // 25 - Access second user's age
console.log(users?.[9]?.name); // undefined - No error, even though index 9 doesn't exist
*/

/*************************** Key Takeaways *********************************/

/*
  - Optional chaining (`?.`) simplifies accessing deeply nested properties.
  - It prevents errors when accessing properties or methods that may not exist.
  - It returns `undefined` if any part of the chain is `null` or `undefined`.
  - It works with:
    - Object properties: `obj?.prop`
    - Methods: `obj?.method?.()`
    - Arrays: `arr?.[index]`
  - Use it to write cleaner and safer code, especially when dealing with unpredictable data structures.
  */

/*************************** Practical Examples ***************************/

// Example 1: Safe API response handling
const apiResponse = {
  data: {
    user: {
      name: "Alice",
      age: 28,
    },
  },
};

const userName = apiResponse?.data?.user?.name; // "Alice"
const userAge = apiResponse?.data?.user?.age; // 28
const nonExistentProp = apiResponse?.data?.user?.address?.city; // undefined

// Example 2: Safe function call
const obj = {
  method() {
    return "Hello!";
  },
};
/*
console.log(obj.method?.()); // "Hello!"
console.log(obj.nonExistentMethod?.()); // undefined

// Example 3: Safe array iteration
const items = [1, 2, 3];
console.log(items?.[5]?.toString()); // undefined (no error)
*/

/***************************************************************************
 ************************ Nullish Coalescing (??) **************************
 **************************************************************************/

// The problem with ||
const count = 0 || 5; // 5 (Logical OR considers 0 as falsy, but we might want 0)
const text = "" || "default"; // "default" (Logical OR considers an empty string falsy, but we might want "")

// ?? only uses the default for null or undefined
const count1 = 0 ?? 5; // 0 (Since 0 is not null or undefined, it uses 0)
const text1 = "" ?? "default"; // "" (Since "" is not null or undefined, it uses "")
const missing = null ?? "default"; // "default" (null triggers the default value)
const missing2 = undefined ?? "default"; // "default" (undefined triggers the default value)

/*************************** Practical Examples ***************************/

// 1. User Settings
// Use ?? to provide meaningful defaults when accessing user settings
const userSettings = {
  theme: "dark",
  notification: {
    email: false, // Explicitly set to false
    sms: null, // Not set, null triggers the default
    push: undefined, // Not set, undefined triggers the default
  },
};

// Get settings with good defaults
const theme = userSettings?.theme ?? "light"; // If theme exists, use it; otherwise, use "light"
const emailNotifications = userSettings?.notification?.email ?? true; // Use false (defined value)
const smsNotifications = userSettings?.notification?.sms ?? true; // Use default true (null triggers default)
const pushNotifications = userSettings?.notification?.push ?? true; // Use default true (undefined triggers default)
/*
console.log(theme); // "dark" (uses the existing value)
console.log(emailNotifications); // false (uses the existing value)
console.log(smsNotifications); // true (null triggered default)
console.log(pushNotifications); // true (undefined triggered default)
*/

// 2. API Response Handling
// Handle potentially missing data from an API response
const api = {
  getUser(id) {
    // Simulate an API call
    if (id === 1) {
      return {
        name: "John",
        address: {
          city: "New York",
        },
      };
    }
    return null; // Simulate no user found
  },
};

function getUserInfo(id) {
  const user = api.getUser(id); // Fetch user details

  return {
    name: user?.name ?? "Anonymous", // If user.name exists, use it; otherwise, "Anonymous"
    city: user?.address?.city ?? "Unknown", // If user.address.city exists, use it; otherwise, "Unknown"
  };
}
/*
console.log(getUserInfo(1)); // { name: 'John', city: 'New York' }
console.log(getUserInfo(2)); // { name: 'Anonymous', city: 'Unknown' }
*/

// 3. Function Parameters
// Use ?? to handle missing or undefined function parameters
function createUser(name, options) {
  // Default options if none are provided
  const defaultOptions = {
    age: 20,
    country: "Unknown",
    notifications: {
      email: true,
      sms: false,
    },
  };

  return {
    name, // Use the provided name
    age: options?.age ?? defaultOptions.age, // Use provided age or default
    country: options?.country ?? defaultOptions.country, // Use provided country or default
    notifications: {
      email:
        options?.notifications?.email ?? defaultOptions.notifications.email, // Use provided email notification preference or default
      sms: options?.notifications?.sms ?? defaultOptions.notifications.sms, // Use provided SMS notification preference or default
    },
  };
}

const user2 = createUser("John", {
  age: 30, // Overwrite the default age
  notifications: {
    email: false, // Explicitly set email notifications to false
  },
});

// console.log(user2);
/*
{
  name: 'John',
  age: 30,
  country: 'Unknown', // Default value used
  notifications: { email: false, sms: false } // Combined user-provided and default values
}
*/

/***************************************************************************
 **************************** Best Practices *******************************
 **************************************************************************/

// 1. Combine Both Operators When Needed

/*
// Good: Clear handling of both optional chaining and nullish coalescing
const title = document?.meta?.title ?? 'Untitled';

// Instead of:
const title = document && document.meta && document.meta.title || 'Untitled';
*/

// 2. Use for Safe Property Access

/*
// Good: Safely access deeply nested properties with clear intent
const firstName = user?.profile?.name?.first ?? 'Anonymous';

// Avoid: Don't use ?? unnecessarily when you know the property exists
const definitelyExists = obj.property ?? 'default'; // Use normal access (obj.property) instead
*/

// 3. Remember the Differences From ||

/*
// ?? is for null/undefined only
const count = 0 ?? 5;        // 0 (0 is not null or undefined)
const count2 = 0 || 5;       // 5 (Logical OR treats 0 as falsy)

const empty = "" ?? "text";  // "" ("" is not null or undefined)
const empty2 = "" || "text"; // "text" (Logical OR treats "" as falsy)
*/
