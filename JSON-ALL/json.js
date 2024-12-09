//* JSON Properties and Methods:

//!JSON.parse()

//?Description: Parses a JSON string and converts it into a JavaScript object.
//?Use Case: Converting data received from a web server into a JavaScript object.

const jsonString = '{"name": "Subham", "age": 25}';
const obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.age);

//!JSON.stringify()

//?Description: Converts a JavaScript object or value to a JSON string.
//?Use Case: Sending data to a web server in JSON format.

const obj2 = { name: "Bob", age: 30 };
const jsonStr = JSON.stringify(obj2);
console.log(jsonString);

//!Example Use Cases:

//*Storing Data in Local Storage:

//? Description: Convert JavaScript objects to JSON strings to store in local storage and parse them back to objects when retrieving.

const user = { name: "Charlie", age: 28 };

localStorage.setItem("user", JSON.stringify(user));

const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // Output: Charlie
console.log(retrievedUser.age); // Output: 28

//!Fetching Data from an API:

//? Description: Parse JSON response data from an API and work with the resulting JavaScript object.

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Parsed JavaScript object
  })
  .catch((error) => console.error("Error:", error));

//! Sending Data to an API:
//? Description: Convert JavaScript objects to JSON strings to send as payloads in HTTP requests.

const data = { name: "Dana", age: 35 };

fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => console.error("Error:", error));
