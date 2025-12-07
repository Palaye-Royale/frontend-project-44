import readlineSync from 'readline-sync';
import {
  greeting,
  question,
  defineRandomNumber,
} from '../index.js';

const gcdGame = () => {

   const userName = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  let victoryCounter = 0;

  while (victoryCounter < 3) {
    const randomNum1 = defineRandomNumber(100);
    const randomNum2 = defineRandomNumber(100);

    question(randomNum1, randomNum2);

    let currentNum1 = randomNum1;
    let currentNum2 = randomNum2;

    while (currentNum1 !== 0 && currentNum2 !== 0) {
      if (currentNum1 > currentNum2) {
        currentNum1 %= currentNum2;
      } else if (currentNum1 < currentNum2) {
        currentNum2 %= currentNum1;
      }
    }
    const correctAnswerToString = (currentNum1 + currentNum2).toString();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswerToString) {
      console.log('Correct!');
      victoryCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToString}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};
export default gcdGame;
