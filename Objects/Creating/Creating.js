const person = {
    nameIs :"Subham",
    email :"subham@gmail.com",
    isLoggedIn :true
}
console.log(person);

// Modifying

person.location = "Kolkata";
person["gender"] = "Male";
console.log(person);

// Deleting Properties

delete person.email;
console.log(person.email);

console.log(person.isLoggedIn);

