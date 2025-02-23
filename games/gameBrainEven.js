import readlineSync from 'readline-sync';
import { greeting, question, defineRandomNumber } from '/home/old_town_road/frontend-project-44/src/index.js'
 
const gameBrainEven = () => {
  
    greeting()
    
    const userName = readlineSync.question('May I have your name? ');
    console.log(`${'Hello'}, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;

while (i < 3) {

const randomNumber = defineRandomNumber(100);

question(randomNumber)

const userAnswer = readlineSync.question('Your answer: ');

const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

if (userAnswer === correctAnswer) {
        console.log("Correct!")
        i +=1;
} else {
   console.log(`${"'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again"}, ${userName}!`);
   i = 0;
}
}
console.log(`${"Congratulations"}, ${userName}!`)
}

export default gameBrainEven;