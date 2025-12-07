import readlineSync from 'readline-sync';
import {
  greeting,
  question,
  defineRandomNumber,
} from '/home/old_town_road/frontend-project-44/src/index.js';

const calcGame = () => {
  const userName = greeting();

  console.log('What is the result of the expression?');

  let victoryCounter = 0;

  while (victoryCounter < 3) {
    const randomNum1 = defineRandomNumber(100);
    const randomNum2 = defineRandomNumber(100);

    const signsColl = ['+', '-', '*'];

    const randomIndex = defineRandomNumber(2, 0);

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
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};
export default calcGame;