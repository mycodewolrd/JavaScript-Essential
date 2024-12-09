// forEach()

const fruits = ["apple", "banana", "mango"];
const fruitsAre = fruits.forEach((fruit) => {
  console.log(fruit);
  //   The forEach() method in JavaScript is used to iterate over an array and execute a provided callback function for each element. However, it doesn't return a new array. Instead, it returns "undefined".
  return fruit;
});
console.log(fruitsAre);

//map ()
const numbers = [1, 2, 3, 4];
const addNumbers = numbers.map((num) => {
  return num + 2;
});
console.log(addNumbers);

// filter()

const ages = [10, 25, 30, 19];
const newAgeGroup = ages.filter((age) => age >= 18);
console.log(newAgeGroup);

// reduce()

const price = [10, 25, 30, 19];
const totalPrice = price.reduce((total, price) => total + price, 0);
console.log(totalPrice);

// every()

const newNumbers = [10, 25, 30, 19];
const positiveNumbers = newNumbers.every((n) => n > 12);
console.log(positiveNumbers);
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns "true" if all elements pass the test, otherwise "false"

// some()
const atleastOne = newNumbers.some((n) => n/2 == 5);
console.log(atleastOne); 
