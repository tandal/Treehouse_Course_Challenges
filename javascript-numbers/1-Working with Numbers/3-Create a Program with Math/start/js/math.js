const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const daysPerYear = 365;
let currentAge = prompt('How old are you?');


const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAliveInSeconds = secondsPerDay * daysPerYear *currentAge;
console.log(`I've been alive for more than ${yearsAliveInSeconds} seconds!`);