import readlineSync from 'readline-sync';
import { greeting, question, defineRandomNumber } from '/home/old_town_road/frontend-project-44/src/index.js'

const gameBrainGcd = () => {

    greeting()

    const  userName = readlineSync.question('May I have your name? ');
    console.log(`${'Hello'}, ${userName}!`);

    console.log('Find the greatest common divisor of given numbers.');

    let victoryCounter = 0;

    while (victoryCounter < 3) {

const randomNum1 = defineRandomNumber(1, 100);
const randomNum2 = defineRandomNumber(1, 100);

question(randomNum1, randomNum2)

let currentNum1 = randomNum1;
let currentNum2 = randomNum2;

while (currentNum1 !== 0 && currentNum2 !== 0) {
    if (currentNum1 > currentNum2) {
        currentNum1 = currentNum1 % currentNum2;
    } else if (currentNum1 < currentNum2) {
        currentNum2 = currentNum2 % currentNum1;
    }
   
}
const correctAnswerToString = (currentNum1 + currentNum2).toString();
const userAnswer = readlineSync.question('Your answer: ');


if (userAnswer === correctAnswerToString) {
    console.log("Correct!")
    victoryCounter +=1;
} else {
console.log(`'${userAnswer}' ${"is wrong answer ;("}. ${"Correct answer was"} '${correctAnswerToString}'.\n${"Let's try again"}, ${userName}!`);
victoryCounter = 0;
}
}
console.log(`${"Congratulations"}, ${userName}!`)
}
export default gameBrainGcd;
