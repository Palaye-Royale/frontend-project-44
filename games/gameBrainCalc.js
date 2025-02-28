import readlineSync from 'readline-sync';
import {
  greeting,
  question,
  defineRandomNumber,
} from '../src/index.js';

const gameBrainCalc = () => {
  greeting();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello'}, ${userName}!`);

  console.log('What is the result of the expression?');

  let victoryCounter = 0;

  while (victoryCounter < 3) {
    const randomNum1 = defineRandomNumber(50);
    const randomNum2 = defineRandomNumber(10);

    const signsColl = ['+', '-', '*'];

    const randomIndex = defineRandomNumber(2);

    const randomSign = signsColl[randomIndex];

    question(randomNum1, randomSign, randomNum2);

    let correctAnswer;
    if (randomSign === '+') {
      correctAnswer = randomNum1 + randomNum2;
    } else if (randomSign === '*') {
      correctAnswer = randomNum1 * randomNum2;
    } else if (randomSign === '-') {
      correctAnswer = randomNum1 - randomNum2;
    }

    const correctAnswerToString = correctAnswer.toString();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswerToString) {
      console.log('Correct!');
      victoryCounter += 1;
    } else {
      console.log(
        `'${userAnswer}' ${'is wrong answer ;('}. ${'Correct answer was'} '${correctAnswerToString}'.\n${"Let's try again"}, ${userName}!`,
      );
      victoryCounter = 0;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};
export default gameBrainCalc;
