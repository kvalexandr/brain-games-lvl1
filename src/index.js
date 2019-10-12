import readlineSync from 'readline-sync';

export const getNameUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const getQuestion = () => {
  const randNum = getRandomNum(1, 100);
  console.log(`Question: ${randNum}`);
  return randNum;
};

export const getAnswerUser = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const isEven = (num) => num % 2 === 0;

export const answerCorrect = (num) => (isEven(num) ? 'yes' : 'no');

export const isCorrectAnswer = (num, answer) => answer === answerCorrect(num);
