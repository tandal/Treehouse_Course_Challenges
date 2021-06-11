// Collect input from a user
let number = prompt('Please enter a number');

// Convert the input to a number
let highNumber = parseInt(number);

if (highNumber) {
// Use Math.random() and the user's number to generate a random number
let randomNumber = Math.floor( Math.random( ) * highNumber ) + 1 ;

// Create a message displaying the random number
document.querySelector('main').innerHTML = `<p>${randomNumber} is a random number between 1 and ${highNumber}.</p>`;
} else if (highNumber === 0){
    document.querySelector('main').innerHTML = '<p>Please pick a number other than 0.</p>';
} else {
    document.querySelector('main').innerHTML = '<p>Please enter a number.</p>';
}