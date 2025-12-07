import readlineSync from 'readline-sync'

export const greeting = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`${'Hello'}, ${userName}!`)
  return userName
}

export const defineRandomNumber = (max, min = 1) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}
