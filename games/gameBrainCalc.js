import readlineSync from 'readline-sync';

const gameBrainCalc = () => {
    // cut
    console.log("Welcome to the Brain Games!");
    const  userName = readlineSync.question('May I have your name? ');
    console.log(`${'Hello'}, ${userName}!`);
//
console.log('What is the result of the expression?');
//cut

let i = 0;

while (i < 3) {
const randomNumberOne = Math.ceil(Math.random() * (100 - 0 + 1) + 0);
const randomNumberTwo = Math.ceil(Math.random() * (100 - 0 + 1) + 0);

const signsColl = ['+', '-', '*'];
const randomIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);
const randomSign = signsColl[randomIndex];

console.log(`${"Question: "}${randomNumberOne} ${randomSign} ${randomNumberTwo}`);

if (randomSign === '+') {
    let answer = randomNumberOne + randomNumberTwo;  
} else if (randomSign === '*') {
    let answer = randomNumberOne * randomNumberTwo;  
} else if (randomSign === '-') {
    let answer = randomNumberOne - randomNumberTwo;  
}


const userAnswer = readlineSync.question('Your answer: ');

if (userAnswer === correctAnswer) {
        console.log("Correct!")
        i +=1;
} else {
   console.log(`'${userAnswer}' ${"is wrong answer ;("}. ${"Correct answer was"} '${correctAnswer}'.\n${"Let's try again"}, ${userName}!`);
   i = 0;
}
console.log(`${"Congratulations"}, ${userName}!`)
}
}
export default gameBrainCalc;