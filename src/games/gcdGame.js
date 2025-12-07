import readlineSync from 'readline-sync'
import {
  greeting,
  defineRandomNumber,
} from '../index.js'

const gcdGame = () => {
  const userName = greeting()

  console.log('Find the greatest common divisor of given numbers.')

  let victoryCounter = 0

  while (victoryCounter < 3) {
    const randomNum1 = defineRandomNumber(100)
    const randomNum2 = defineRandomNumber(100)

    console.log(`${'Question: '}${randomNum1} ${randomNum2}`)

    const gcd = (a, b) => {
      if (b === 0) return Math.abs(a)
      return gcd(b, a % b)
    }

    const correctAnswer = gcd(randomNum1, randomNum2)
    const userAnswer = readlineSync.question('Your answer: ')

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!')
      victoryCounter += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`)
}
export default gcdGame
