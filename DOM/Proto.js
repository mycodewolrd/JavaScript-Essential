//* DOM Prototypes

// ? getElementById(): Selects an element by its ID.
const element1 = document.getElementById('myElement');

//? querySelector(): Selects the first element that matches a specified CSS selector.
const element2 = document.querySelector('.myClass');

// ? querySelectorAll(): Selects all elements that match a specified CSS selector.
const elements = document.querySelectorAll('div');

//? createElement(): Creates a new element.
const newElement1 = document.createElement('div');

//? appendChild(): Adds a new child node to an element.
const parentElement1 = document.getElementById('parent');
const newElement = document.createElement('div');
parentElement.appendChild(newElement);

//? removeChild(): Removes a child node from an element.
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');
parentElement.removeChild(childElement);


//? replaceChild():

const parentElement3 = document.getElementById('parent');
const newChild = document.createElement('div');
const oldChild = document.getElementById('oldChild');
parentElement.replaceChild(newChild, oldChild);


 // ? addEventListener(): Attaches an event handler to an element.
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});

//? innerText: Gets or sets the text content of an element.
const element = document.getElementById('myElement');
element.innerText = 'New text content';

//? innerHTML: Gets or sets the HTML content of an element.
const element = document.getElementById('myElement');
element.innerHTML = '<strong>New HTML content</strong>';

// ? setAttribute(): Sets a new attribute or changes the value of an existing attribute on an element.
const element = document.getElementById('myElement');
element.setAttribute('class', 'newClass');


//* Changing Text Content:

const title = document.getElementById('title');
title.textContent = 'Hello, World!';

//* Creating and Adding Elements:

const container = document.getElementById('container');
const newDiv = document.createElement('div');
newDiv.textContent = 'New Div';
container.appendChild(newDiv);


//* Event Handling:

const button1 = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});


//* Modifying Attributes:

const image = document.getElementById('myImage');
image.setAttribute('src', 'newImage.jpg');


//* Classlist Attributes

const element = document.getElementById('myElement');
element.classList.add('newClass');
element.classList.remove('oldClass');
