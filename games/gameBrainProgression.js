import readlineSync from 'readline-sync';
import { greeting, question, defineRandomNumber } from '/home/old_town_road/frontend-project-44/src/index.js'


const gameBrainProgression = () => {

    greeting()

    const userName = readlineSync.question('May I have your name? ');
    console.log(`${'Hello'}, ${userName}!`);

    console.log('What number is missing in the progression?');

    let victoryCounter = 0;        // счётчик побед
                  // массив для АП

    while (victoryCounter < 3) {    //цикл "до 3-ёх побед"

        const firstMemberAP = defineRandomNumber(1, 100);
        const differenceAP = defineRandomNumber(2, 10);
        const lengthArr = defineRandomNumber(5, 10);

        let currentMemberAP = firstMemberAP;
        let arrayAP = [];

        while (arrayAP.length < lengthArr) {

            currentMemberAP = currentMemberAP + differenceAP;
            arrayAP.push(currentMemberAP);

        } // while - добавление в массив АП чисел

        const hiddenNumberIndex = defineRandomNumber(0, arrayAP.length - 1); //индекс спрят. числа
        const correctAnswerToString = arrayAP[hiddenNumberIndex].toString(); // спрят. число
        arrayAP.splice(hiddenNumberIndex, 1, '..'); // замена числа точками

        const arrayAPtoString = arrayAP.join(' '); // arrayAP - в строку для вывода пользователю
         
        question(arrayAPtoString)

        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswerToString) {
            console.log("Correct!")
            victoryCounter += 1
            
        } else {
        console.log(`'${userAnswer}' ${"is wrong answer ;("}. ${"Correct answer was"} '${correctAnswerToString}'.\n${"Let's try again"}, ${userName}!`);
        victoryCounter = 0;
        }
        } // while - счётчик побед
        console.log(`${"Congratulations"}, ${userName}!`)

    } // конец функции


export default gameBrainProgression;