// *Try-Catch-Finally

//? The try block contains code that may throw an error, and the catch block contains code that executes if an error is thrown. The finally block executes after the try and catch blocks, regardless of whether an error was thrown.

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that runs regardless of the error
}

// example -1

function trtThis() {
  return `Good Evening`;
}

try {
  let greeting = trtThis;
  console.log(greeting());
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
} finally {
  console.log("Cleanup action can be performed here...");
}

//* Common Error Handling Techniques

//! Throwing Errors

function divide(a, b) {
  if (b === 0 && !isNaN(a)) {
    throw new Error("Division by zero is not allowed and 'a' must be a number");
  }
  return a / b;
}
try {
  let resultIs = divide(500, 100);
  console.log(resultIs);
} catch (error) {
  console.log(`Invalid Input Error : ${error.message}`);
}
