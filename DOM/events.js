
//* Click 

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});

//* Change 

const input = document.getElementById('myInput');
input.addEventListener('change', function() {
    console.log('Input changed!');
});


//* Submit 

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted!');
});


//* mouseover / mouseout

const element = document.getElementById('myElement');
element.addEventListener('mouseover', function() {
    console.log('Mouse over!');
});
element.addEventListener('mouseout', function() {
    console.log('Mouse out!');
});



