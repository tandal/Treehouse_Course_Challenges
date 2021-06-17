const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const bgColorButton = document.getElementById('bgColorButton');
const myTextBgColor = document.getElementById('myTextBgColor');
const defaultColorSchemeButton = document.getElementById('defaultColorSchemeButton');


myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

bgColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = myTextBgColor.value;
});

defaultColorSchemeButton.addEventListener('click', () => {
  myHeading.style.color = 'black';
  document.body.style.backgroundColor = 'white';
});
