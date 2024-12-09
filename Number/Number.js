// Number() Converts a value to a number

let value = "12345.3"
let num = Number(value)
console.log(num);
console.log(typeof num);

// parseInt() Parses a string and returns an integer.

const intValue = parseInt(value)
console.log(intValue);

// parseFloat() Parses a string and returns a floating-point number.

let str = "12345.4556"
console.log(parseFloat(str));

// toFixed() Formats a number using fixed-point notation.
let fixNum = 12564.9823498
console.log(fixNum.toFixed(2));

// toExponential() Returns a string representing the number in exponential notation.

let expNumber = 47129347598
console.log(expNumber.toExponential(3));

// toString()

let strNumber = "12345"
console.log(strNumber.toString());

// isNaN() Determines whether the value is NaN (Not-a-Number).

let newOneNumIs = "123s"
console.log(isNaN(newOneNumIs));
console.log(!isNaN(newOneNumIs)); // "!isNaN(newOneNumIs)" is equivalent to !(false), which is true


// isFinite() Determines whether the value is a finite number.

console.log(isFinite(123)); 

console.log(isFinite(1/0)); 



// Number.isInteger()

// let intNumberIs = 12345.23
let intNumberIs = 12345
console.log(Number.isInteger(intNumberIs));
