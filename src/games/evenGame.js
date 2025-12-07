import readlineSync from 'readline-sync';

import {
  defineRandomNumber,
  greeting,
  question,
} from '/home/old_town_road/frontend-project-44/src/index.js';

const evenGame = () => {

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let victoryCounter = 0;
    
  while (victoryCounter < 3) {
    const randomNumber = defineRandomNumber(100);
    
    question(randomNumber);
    
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      victoryCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};

export default evenGame;