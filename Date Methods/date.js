// new Date()

let now = new Date();
console.log(now);

//*  Getting Date and Time Components

// getDate()

let date = now.getDate();
console.log(date);

// getDay()

let weekDay = now.getDay();
console.log(weekDay); // friday

// getFullYear()

let year = now.getFullYear();
console.log(year); //


// getMonth()


console.log(now.getMonth() + 1); // Nov

// getHours()

let hours = now.getHours();
console.log(hours); //

// getMinutes()

let minutes = now.getMinutes();
console.log(minutes);

// getSeconds()

let seconds = now.getSeconds();
console.log(seconds); //

// getMilliseconds()

let milliseconds = now.getMilliseconds();
console.log(milliseconds);

// * Setting Date and Time Components


// setDate()

console.log(now.setDate(15));
let dateNow = new Date(1731675344096)
console.log(dateNow);

// setFullYear()
console.log(now.setFullYear(2022));
let newYear = new Date(now.setFullYear(2022));
console.log(newYear);

// setMonth() 
console.log(now.setMonth(5));
let newMonth = new Date(now.setMonth(5));
console.log(newMonth)

// * Date Methods


let dateIs = new Date();
// toDateString()
console.log(dateIs.toDateString())

// toTimeString()

console.log(dateIs.toTimeString())

// toLocaleDateString()

console.log(dateIs.toLocaleDateString());

// toLocaleTimeString()

console.log(dateIs.toLocaleTimeString());

// toISOString()

console.log(dateIs.toISOString());

// Date.parse() Parses a date string and returns the number of milliseconds since January 1, 1970.

let time = Date.parse('2024-11-15T00:00:00')
console.log(time);
console.log(new Date(time));

