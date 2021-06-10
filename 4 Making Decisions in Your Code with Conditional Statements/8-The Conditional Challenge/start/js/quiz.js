/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank;

// 3. Select the <main> HTML element
const main = document.querySelector('main')

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answer1 = prompt("How many ounces are in a cup?");
if ( answer1 === '8' ) {
  correctAnswers += 1;
}
const answer2 = prompt("Which company popularized the term 'Tablet PC' in 2001?");
if ( answer2.toUpperCase() === 'MICROSOFT' ) {
  correctAnswers += 1;
}
const answer3 = prompt("Which company has employed the largest number of language translators?");
if ( answer3.toUpperCase() === 'GOOGLE' ) {
  correctAnswers += 1;
}
const answer4 = prompt("In 2009, Zappos.com was acquired by which company?");
if ( answer4.toUpperCase() === 'AMAZON' ) {
  correctAnswers += 1;
}
const answer5 = prompt("What was the name of the first social networking site launched on the internet in 1994?");
if ( answer5.toUpperCase() === 'GEOCITIES' ) {
  correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctAnswers === 5 ) {
  playerRank = "Gold";
} else if ( correctAnswers >= 3 ) {
  playerRank = "Silver";
} else if ( correctAnswers >= 1 ) {
  playerRank = "Bronze";
} else {
  playerRank = "None :(";
}

// 6. Output results to the <main> element
main.innerHTML = `
  <h2>You got ${correctAnswers} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${playerRank}</strong></p>
`;
