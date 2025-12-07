
import readlineSync from 'readline-sync'
import {
  greeting,
  question,
  defineRandomNumber,
} from '../index.js'

const primeGame = () => {
  const userName = greeting()

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let victoryCounter = 0

  while (victoryCounter < 3) {
    const randomNumber = defineRandomNumber(100)

    question(randomNumber)

    const isPrime = (num) => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false
      }
      return num > 1
    }

    const userAnswer = readlineSync.question('Your answer: ')

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      victoryCounter += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`)
}

export default primeGame
