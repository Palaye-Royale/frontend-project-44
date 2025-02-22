import readlineSync from 'readline-sync';
import { question, defineRandomNumber } from '/home/old_town_road/frontend-project-44/src/index.js'

const gameBrainCalc = () => {

    console.log("Welcome to the Brain Games!");
    const  userName = readlineSync.question('May I have your name? ');
    console.log(`${'Hello'}, ${userName}!`);

    console.log('What is the result of the expression?');

let i = 0;

while (i < 3) {
// const randomNumberOne = Math.ceil(Math.random() * (100 - 0 + 1) + 0);
// const randomNumberTwo = Math.floor(Math.random() * (100 - 0 + 1) + 0);

const randomNumberOne = defineRandomNumber(50);
const randomNumberTwo = defineRandomNumber(10);

const signsColl = ['+', '-', '*'];
// const randomIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);
const randomIndex = defineRandomNumber(2);

const randomSign = signsColl[randomIndex];

question(randomNumberOne, randomSign, randomNumberTwo)

let correctAnswer;
if (randomSign === '+') {
    correctAnswer = randomNumberOne + randomNumberTwo;  
} else if (randomSign === '*') {
    correctAnswer = randomNumberOne * randomNumberTwo;  
} else if (randomSign === '-') {
    correctAnswer = randomNumberOne - randomNumberTwo;  
}

const correctAnswerToString = correctAnswer.toString();
const userAnswer = readlineSync.question('Your answer: ');

if (userAnswer === correctAnswerToString) {
        console.log("Correct!")
        i +=1;
} else {
   console.log(`'${userAnswer}' ${"is wrong answer ;("}. ${"Correct answer was"} '${correctAnswerToString}'.\n${"Let's try again"}, ${userName}!`);
   i = 0;
}

}
console.log(`${"Congratulations"}, ${userName}!`)
}
export default gameBrainCalc;