import readlineSync from 'readline-sync';
import {
  greeting,
  question,
  defineRandomNumber,
} from '../src/index.js';

const gameBrainPrime = () => {
  greeting();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello'}, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let victoryCounter = 0;

  while (victoryCounter < 3) {
    const randomNumber = defineRandomNumber(100);

    question(randomNumber);

    const primeNumbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];

    const userAnswer = readlineSync.question('Your answer: ');

    // const userArr = [Number(userAnswer)];
    let correctAnswer;

    // for (const num of primeNumbers) {
    if (primeNumbers.includes(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    // }

    // console.log(11, correctAnswer)

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      victoryCounter += 1;
    } else {
      console.log(
        `'${userAnswer}' ${'is wrong answer ;('}. ${'Correct answer was'} '${'no'}'.\n${"Let's try again"}, ${userName}!`,
      );
      victoryCounter = 0;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};

export default gameBrainPrime;
