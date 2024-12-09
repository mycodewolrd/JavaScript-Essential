const user = {
  nameIs: "Subham",
  age: 25,
  email: "subham@example.com",
};

// Destructuring assignment
const { nameIs, age, email } = user;

console.log(nameIs);
console.log(age);
console.log(email);

//! Nested Objects:

const user2 = {
  fname: "Rajnandini",
  address: {
    city: "Kolkata",
    zip: "721629",
  },
};

// Destructuring assignment
const {
  fname,
  address: { city, zip },
} = user2;

console.log(fname);
console.log(city);
console.log(zip);

//! Default Values:

const user3 = {
  name3: "Deep",
};

// Destructuring assignment with default value
const { name3, age2 = 30 } = user3;

console.log(name3);
console.log(age);

//! Renaming Variables:

const user4 = {
  name: "Dana",
  age: 35,
};

// Destructuring assignment with variable renaming
const { name: userName, age: userAge } = user4;

console.log(userName);
console.log(userAge);

//! Function Parameters:

const user5 = {
  name: "Polo",
  age: 21,
};

function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser(user5); // Output: Name: Eve, Age: 28

//? Working with APIs:

fetch("https://api.example.com/user")
  .then((response) => response.json())
  .then(({ name, age, email }) => {
    console.log(name); // Output: API user's name
    console.log(age); // Output: API user's age
    console.log(email); // Output: API user's email
  });

//! Handling Configuration Objects:

const config = {
  host: "localhost",
  port: 8080,
  timeout: 5000,
};

function setupServer({ host, port, timeout }) {
  console.log(`Server running at ${host}:${port} with timeout ${timeout}`);
}

setupServer(config); // Output: Server running at localhost:8080 with timeout 5000
