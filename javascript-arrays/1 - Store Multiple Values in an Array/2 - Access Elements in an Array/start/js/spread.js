const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];

const brass = [ 'trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
const woodwind = [ 'flute', 'oboe', 'clarinet', 'saxaphone', 'basoon'];
const instruments = [...brass, ...woodwind];

const numbers = [ 10, 20, 30, 30];

console.log(burger);
console.log(instruments);
console.log( `${Math.min(...numbers)} is the min of array ${numbers}` );
console.log( `${Math.max(...numbers)} is the max of array ${numbers}` );
