const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};


/*
Homework
Write the function below as an arrow function.

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
*/

//Adding a more robust return message.
const getArea = (width, length, unit) => {
  const area = width * length;
  return `The area = ${area}, and the unit = ${unit}`;
}