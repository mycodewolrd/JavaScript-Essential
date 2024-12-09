//* push()

const colors = ["red", "blue"];
const newColors = colors.push("green"); // the new length of the colors array after adding "green".
console.log(newColors);
console.log(colors);

//* pop()

console.log(colors.pop()); // remove; The pop() method removes the last element from an array and returns that removed element.
console.log(colors);

//*splice()

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const newMonths = months.splice(2, 5, "Subham");
console.log(newMonths);
console.log(months);
// Its syntax is: array.splice(start, deleteCount, item1, item2, ...).

//* shift()

const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Monkey"];
const newAnimals = animals.shift();
console.log(newAnimals);
console.log(animals);

//* unshift()
const newAnimalsList = animals.unshift("Dog");
console.log(newAnimalsList);
console.log(animals);
