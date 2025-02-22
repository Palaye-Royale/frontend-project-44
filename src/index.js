
export const greeting = () => {
   
}

export const question = (value1, value2 = '', value3 = '') => {
console.log(`${"Question: "}${value1} ${value2} ${value3}`);
}

export const defineRandomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * (max - 0 + 1) + 0);
    return randomNumber;
}


