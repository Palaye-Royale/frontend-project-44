export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const question = (value1, value2 = '', value3 = '') => {
  console.log(`${'Question: '}${value1} ${value2} ${value3}`);
};

export const defineRandomNumber = (max, min = 0) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};
