// Object.create()

const userName = {
  nameIs: "Subham",
  work: "Web Developer",
  skills: function () {
    let allskillsAre = {
      language: "JavaScript",
      framework: "Tailwind",
      library: "React Js",
    };
    return allskillsAre;
  },
};

const newuser = Object.create(userName);
console.log(newuser.skills());

const userTwo = {
  work: function () {
    return "Unreal Artist";
  },
};

let student = Object.create(userTwo);
let stdtWorkIs = student.work();
console.log(stdtWorkIs);

const proto = {
  greet: function () {
    console.log("Hello!");
  },
};
const obj = Object.create(proto);
obj.greet();
// Output: Hello!


// Object.getPrototypeOf()

const prototype = Object.getPrototypeOf(student);
console.log(prototype.work());

// Checking Properties

console.log(prototype.hasOwnProperty("work"));
