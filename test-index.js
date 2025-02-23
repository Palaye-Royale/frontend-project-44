import readlineSync from 'readline-sync';


//export const getUserName = () => {
//   const  userName = readlineSync.question('May I have your name? ');
//   console.log(`${'Hello'}, ${userName}!`);
//}

export const greeting = () => {
    console.log("Welcome to the Brain Games!");
}

export const askQuestion = (value1, value2 = '', value3 = '') => {
console.log(`${"Question: "}${value1} ${value2} ${value3}`);
}

export const defineRandomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * (max - 0 + 1) + 0);
    return randomNumber;
}
export const getUserAnswer = () => {
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
}
const compareOfAnswers = (answer1, answer2) => {
if (answer1 === answer2) {
    console.log("Correct!")
    i +=1;
} else {
console.log(`'${answer1}' ${"is wrong answer ;("}. ${"Correct answer was"} '${answer2}'.\n${"Let's try again"}, ${userName}!`);
i = 0;
}
}



//export const congratulateUser = () => {
//    console.log(`${"Congratulations"}, ${userName}!`)
//}




