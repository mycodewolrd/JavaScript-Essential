// Type Annotations

let userName: string = "Subham";
let age: number = 26;
let isLoggedIn: boolean = false;

function getUserName(nameIs: string): string {
  return `Name is ${nameIs}`;
}

const userIs: string = getUserName(userName);
console.log(userIs);

// Interfaces

interface Person {
  fname: string;
  age: number;
  isLoggedIn: boolean;
}

const person: Person = {
  fname: "Rajnandini",
  isLoggedIn: false,
  age: 21,
};
console.log(person.age);

// Classes

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayDetails(): string { 
    return `${this.brand} made ${this.model} in ${this.year}`;
  }
}

const myCar = new Car("Royal Enfield", "Meteor", 2019);
const carDetails = myCar.displayDetails();
console.log(carDetails);
