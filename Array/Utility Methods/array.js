// concat()

const array1 = ["a", "b"];
const array2 = ["c", "d"];
const array3 = array1.concat(array2);
console.log(array3);

// slice()

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emily",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
];
const newNameList = names.slice(2, 5);
console.log(newNameList);
console.log(names);
// The slice() method creates a new array without modifying the original array.
// Its syntax is: array.slice(start, end)

//* sort()

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

const numbers = [10, 29, 35, 56, 4, 7, 19, 100, 60];
console.log(numbers.sort());

//* includes()

const languages = [
  "English",
  "Spanish",
  "French",
  "Mandarin Chinese",
  "Hindi",
  "Arabic",
  "Portuguese",
  "Bengali",
  "Russian",
  "Japanese",
];

const isTheLung = languages.includes("Bengali");
console.log(isTheLung);

//* join()

const array_1 = ["a", "b", "c", "d"];

const NewArray = array_1.join("\n");
console.log(NewArray);

const data = [["Alice", 25], ["Bob", 30], ["Charlie", 35]];
const csvString = data.map(row => row.join(",")).join("\n");
console.log(csvString);
