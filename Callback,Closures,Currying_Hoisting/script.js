//*Callbacks

// ? A callback function is a function passed as an argument to another function. It's invoked within the outer function, allowing for asynchronous operations or delayed execution.

// * Callbacks - 1
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// * Callbacks - 2
function call(name, callback) {
  return `${name} ${callback()}`;
}
function hello() {
  return `Hello`;
}
let callbaceUse = call("Subham", hello);
console.log(callbaceUse);

// *Closures **************************\/\/*******************************

// ?A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. This creates a persistent connection between the inner function and its outer environment.

function createCounter() {
  let count = 1;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// *Closures -2

function game() {
  let GameName = "Bgmi";
  return function () {
    return `Game is ${GameName}`;
  };
}
let gameIs = game();
console.log(gameIs());

// *Currying

// ?Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. It's often used to create more flexible and reusable functions.

// EX 1
function add(x) {
  return (y) => x + y;
}
const resultIs = add(3);
console.log(resultIs(6));

// ex -2

function multipli(x) {
    return function (y) {
        return function (z) {
            return function (m) {
                y++;
                return function (n) {
                    return x * y * z * m * n;
                };
            };
        };
    };
}

let resultMultiplication = multipli(3)(5)(5)(2);
console.log(resultMultiplication(3));

// * Hoisting

// ?Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. However, only declarations are hoisted, not assignments

// console.log(work);
let work = "Web Development";

//! Variable declaration is hoisted, but assignment is not
console.log(workIs());
function workIs (){
    return `Wen Development `
}
