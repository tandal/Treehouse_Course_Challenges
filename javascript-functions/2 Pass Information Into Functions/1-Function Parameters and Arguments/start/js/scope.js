// Global scope
const person = 'Lee';

function greeting() {
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  let person = 'Robert';
  alert(`Good morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}`);
greeting2();
