import readlineSync from 'readline-sync';
import {
  greeting,
  question,
  defineRandomNumber,
} from '../src/index.js';

const gameBrainEven = () => {
  greeting();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello'}, ${userName}!`);

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
      console.log(
        `${"'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again"}, ${userName}!`,
      );
      victoryCounter = 0;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};

export default gameBrainEven;
