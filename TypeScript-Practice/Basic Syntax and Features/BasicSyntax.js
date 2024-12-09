// Type Annotations
var userName = "Subham";
var age = 26;
var isLoggedIn = false;
function getUserName(nameIs) {
    return "Name is ".concat(nameIs);
}
var userIs = getUserName(userName);
console.log(userIs);
var person = {
    fname: "Rajnandini",
    isLoggedIn: false,
    age: 21,
};
console.log(person.age);
// Classes
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayDetails = function () {
        return "".concat(this.brand, " made ").concat(this.model, " in ").concat(this.year);
    };
    return Car;
}());
var myCar = new Car("Royal Enfield", "Meteor", 2019);
var carDetails = myCar.displayDetails();
console.log(carDetails);
