const person1 = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const person2 = {
  name: "Bob",
  occupation: "Engineer",
  hobby: "Coding",
};

const returnVal = Object.assign(person1, person2);
console.log(returnVal);

// If there's a property with the same name in both objects, the value from person2 will overwrite the value from person1.

console.log(person1);

// Object.freeze()

const obj = {
  user: "Subham",
  age: 30,
  skill: "Computer",
};

Object.freeze(obj);
obj.age = 26;
delete obj.skill;
console.log(obj);

// Object.seal()

const newObject = {
    class : "12",
    age: 29,
    location: "Moyna"
}
Object.seal(newObject);
delete newObject.location;
newObject.location = "Kolkata"
console.log(newObject);


