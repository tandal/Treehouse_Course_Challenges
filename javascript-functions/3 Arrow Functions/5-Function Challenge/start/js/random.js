/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function randomNumber (lower = 1, upper = 100) {
    if ( isNaN(lower) || isNaN(upper) ) {
        throw Error('Both arguments must be numbers.');
    }
    return Math.floor(Math.random() * (upper - 1 + 1)) + lower;
}

// Call the function and pass it different values

console.log( randomNumber(1,6) );
console.log( randomNumber(50, 100) );
console.log( randomNumber(40, 60) );
console.log( randomNumber(1, 'three hundred') );