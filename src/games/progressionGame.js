import readlineSync from 'readline-sync'
import {
  greeting,
  question,
  defineRandomNumber,
} from '../index.js'

const progressionGame = () => {
  const userName = greeting()

  console.log('What number is missing in the progression?')

  let victoryCounter = 0

  while (victoryCounter < 3) {
    const firstMemberAP = defineRandomNumber(100)
    const differenceAP = defineRandomNumber(10)
    const lengthArr = defineRandomNumber(10, 5)

    let currentMemberAP = firstMemberAP
    const arrayAP = []

    while (arrayAP.length < lengthArr) {
      currentMemberAP += differenceAP
      arrayAP.push(currentMemberAP)
    }

    const hiddenNumberIndex = defineRandomNumber(0, arrayAP.length - 1)
    const correctAnswerToString = arrayAP[hiddenNumberIndex].toString()
    arrayAP.splice(hiddenNumberIndex, 1, '..')

    const arrayAPtoString = arrayAP.join(' ')

    question(arrayAPtoString)

    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswerToString) {
      console.log('Correct!')
      victoryCounter += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToString}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`)
}

export default progressionGame
