Local storage is a web storage API provided by modern browsers that allows you to store data on the user's browser in the form of key-value pairs. Unlike cookies, data in local storage doesn't expire and is available even after the browser is closed and reopened. It has a storage limit of around 5-10 MB per domain, depending on the browser.

Here's how you can **set**, **get**, **remove**, and **clear** data in local storage:

### 1. **Setting Data**

To store data, use the `localStorage.setItem()` method. It takes two arguments: the key and the value (both strings).

```js
localStorage.setItem('key', 'value');

```

Example:

```js

localStorage.setItem('name', 'Samad Reza');

```

### 2. **Getting Data**

To retrieve data from local storage, use the `localStorage.getItem()` method. It takes the key as an argument and returns the corresponding value (or `null` if the key doesn't exist).

```js

const value = localStorage.getItem('key');

```

Example:

```js

const username = localStorage.getItem('name');
console.log(username); // Output: Samad Reza

```

### 3. **Removing Data**

To remove a specific key-value pair from local storage, use the `localStorage.removeItem()` method. It takes the key as an argument.

```js

localStorage.removeItem('key');

```

Example:

```js

localStorage.removeItem('name');

```

### 4. **Clearing All Data**

To remove all key-value pairs from local storage, use the `localStorage.clear()` method. This will delete all data stored in local storage for that domain.

```js

localStorage.clear();

```

### Example :

```js

// Set an item
localStorage.setItem('name', 'Samad Reza');

// Get the item
console.log(localStorage.getItem('name')); // Output: Samad Reza

// Remove the item
localStorage.removeItem('name');

// Clear all items
localStorage.clear();

```

Local storage is often used for storing user preferences, session data, or small amounts of user-specific information that doesn't need to be sent to the server.





