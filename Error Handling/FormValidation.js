//* Form Validation

// example - 1

const formData = { username: "Subham", email: "subham@gmail.com" };
function formValidation(formData) {
  try {
    if (!formData.username) throw new Error("Username must be provided");

    if (!formData.email.includes("@"))
      throw new Error("Email must have @ in it");

    return "Form is valid";
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
let resultIs = formValidation(formData);
console.log(` Result is : ${resultIs}`);

// example - 2

function newForm(newData) {
  try {
    if (isNaN(newData.userid)) throw new Error("User ID should be a number");
    if (newData.password.length < 7)
      throw new Error("Password must be at least 7 characters");
    if (!newData.emailAddress.includes("@"))
      throw new Error("Email must have @ ");
    return `Logged in Successfully ${newData.userid}`;
  } catch (error) {
    console.log(error);
  }
}
const newFormData = {
  userid: 123,
  password: "Subham98",
  emailAddress: "subham@gmail.com",
};

const resultOfNewForm = newForm(newFormData);
console.log(resultOfNewForm);
