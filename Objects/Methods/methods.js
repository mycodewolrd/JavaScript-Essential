const myObject = {
  firstName: "Alice",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  hobbies: ["reading", "coding", "hiking"],
  greet: function () {
    console.log("Hello, world!");
  },
  favoriteColor: null,
};

//* Object.keys()

console.log(Object.keys(myObject));

// Object.values()

console.log(Object.values(myObject));


// Object.entries() //! Returns an array of a given object's own enumerable property [key, value] pairs.

console.log(Object.entries(myObject));
