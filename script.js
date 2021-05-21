'use strict';
function main() {
  let score = 20;
  let highscore = 0;
  let highscoreText = document.querySelector('.highscore');
  let scoreText = document.querySelector('.score');
  let randNum = Math.floor(Math.random() * 21);
  const secretNumber = document.querySelector('.number');
  // Play again button
  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    randNum = Math.floor(Math.random() * 21);
    scoreText.textContent = score;
    secretNumber.textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('h1').textContent = 'Guess My Number!';
  });
  // Check!
  document.querySelector('.check').addEventListener('click', () => {
    let message = document.querySelector('.message');
    const guess = Number(document.querySelector('.guess').value);
    if (score > 0) {
      if (!guess) {
        // No input
        message.textContent = 'No number!';
        score = score - 1;
        scoreText.textContent = score;
      } else if (guess == randNum) {
        // Player wins
        highscoreText.textContent = highscore + 1;
        secretNumber.textContent = randNum;
        message.textContent = 'Correct';
        document.querySelector('h1').textContent = 'YOU WON';
        document.querySelector('body').style.backgroundColor = '#60b347';
      } else if (guess > randNum && guess < 21) {
        // Guess too high
        message.textContent = 'Too high!!!';
        score = score - 1;
        scoreText.textContent = score;
      } else if (guess < randNum) {
        // Guess too low
        message.textContent = 'Too low!!!';
        score = score - 1;
        scoreText.textContent = score;
      } else if (guess > 20) {
        message.textContent = 'Number above 20. Keep it under 20';
      }
    } else if (score == 0) {
      // Player loses
      document.querySelector('h1').textContent = 'You lose';
      secretNumber.textContent = randNum;
      document.querySelector('body').style.backgroundColor = '#CF3232';
      highscore = 0;
      highscoreText.textContent = highscore;
    }
  });
}

main();
