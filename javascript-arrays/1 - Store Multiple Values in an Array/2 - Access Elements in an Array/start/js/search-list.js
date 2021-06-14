const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let message;
const search = prompt('Search for a product.')

if ( !search ) {
    message = `<strong>In stock:</strong> ${inStock.join(', ')}`
} else if ( inStock.includes(search.toLocaleLowerCase()) ) {
    message = `Yes, we have <strong>${search.toLocaleLowerCase()}</strong>. It's 
    #${inStock.indexOf(search.toLocaleLowerCase()) + 1} on the list!`;
} else {
    message = `Sorry, we do not have <strong>${search.toLocaleLowerCase()}</strong>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;

