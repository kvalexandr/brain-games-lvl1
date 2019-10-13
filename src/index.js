import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const startMessage = (rules = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
};

export const getNameUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getAnswerUser = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const step = 3;

export const startGame = (rules, generateQuestion) => {
  startMessage(rules);
  const user = getNameUser();

  for (let i = 0; i < step; i += 1) {
    const resGenerateQuestion = generateQuestion();
    const question = car(resGenerateQuestion);
    const answerCorrect = cdr(resGenerateQuestion);

    console.log(`Question: ${question}`);
    const answer = getAnswerUser();

    if (answer === answerCorrect) {
      console.log('Correct!');
      if (i === step - 1) console.log(`Congratulations, ${user}!`);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerCorrect}.`);
      console.log(`Let's try again, ${user}!`);
      break;
    }
  }
};
