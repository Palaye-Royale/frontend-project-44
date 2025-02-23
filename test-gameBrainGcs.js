

import readlineSync from 'readline-sync';
import { greeting, askQuestion, defineRandomNumber, compareOfAnswers, getUserAnswer } from '/home/old_town_road/frontend-project-44/test-index.js'

const gameBrainGcd = () => {

greeting()

const  userName = readlineSync.question('May I have your name? ');
console.log(`${'Hello'}, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

let i = 0;

while (i < 3) {

const randomNum1 = defineRandomNumber(100);
const randomNum2 = defineRandomNumber(100);

askQuestion(randomNum1, randomNum2)

let currentNum1 = randomNum1;
let currentNum2 = randomNum2;

while (currentNum1 !== 0 && currentNum2 !== 0) {
    if (currentNum1 > currentNum2) {
        currentNum1 = currentNum1 % currentNum2;
    } else if (currentNum1 < currentNum2) {
        currentNum2 = currentNum2 % currentNum1;
    }
}

const correctAnswer = currentNum1 + currentNum2;

getUserAnswer()

compareOfAnswers(userAnswer, correctAnswer)
}

console.log(`${"Congratulations"}, ${userName}!`)
}
export default gameBrainGcd;
