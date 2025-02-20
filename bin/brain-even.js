import readlineSync from 'readline-sync';

export const isEven = () => {

const randomNumber = Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log(`${"Question: "}${randomNumber}`);

const userAnswer = readlineSync.question('Your answer: ');

if (randomNumber % 2 !== 0 || )
};