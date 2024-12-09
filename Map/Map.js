// Creating

let myMap = new Map();

// Adding Key-Value Pairs: using the "set()" method:

myMap.set("name", "Subham");
myMap.set("email", "subham@gmail.com");
myMap.set("age", 26);

// Accessing Values: using the "get()" method:

let myName = myMap.get("name");
let myEmail = myMap.get("email");
console.log(myName);
console.log(myEmail);

// Checking for Key Existence:"has()" method

console.log(myMap.has("id"));
console.log(myMap.has("name"));

// Removing Key-Value Pairs: "delete()" method

myMap.delete("name");

console.log(myMap);

myMap.set("name", "Rajnandini");
myMap.set("email", "Rajnandini@gmail");
myMap.set("id", 4654684231);

console.table(myMap);

//! Iterating Over a Map:

for (const [key, value] of myMap) {
  console.log(`Key - ${key} ---- and ----- Value - ${value} `);
}
