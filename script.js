'use strict';
//generate random number and link it to computer choice on html
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//intial score
let score = 20;

//intial highscore to compare to
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//clicking events
document.querySelector('.check').addEventListener('click', function () {
  //code that is executed when .check is clicked
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //if there is no guess value, the message is changed to 'No number !'
  if (!guess) {
    //same thing as document.querySelector('.message').textContent = 'No number!'
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number!`;

    //displays the correct number when guessed correctly
    document.querySelector('.number').textContent = secretNumber;

    //changing the background to green and increasing the width of .number div
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //setting the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when player guess is different from secret + ternary operator to display win or lose
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? `Too high!` : `Too low!`;
      //decrease intial score when wrong guess
      score--;
      document.querySelector('.score').textContent = score;
      // if score is 0, message will display that you lost
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restoring game when click again button
document.querySelector('.again').addEventListener('click', function () {
  // recalculates the number to be guessed
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // restores the score
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  //restore the background and width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
