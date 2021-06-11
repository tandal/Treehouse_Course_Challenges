function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log( getRandomNumber(12) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(20) );
console.log( getRandomNumber(50) );