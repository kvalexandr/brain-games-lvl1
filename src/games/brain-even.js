import { cons } from '@hexlet/pairs';
import engine from '..';

const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

const isEven = (num) => num % 2 === 0;

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const generateQuestionAnswer = () => {
  const num = getRandomNum(1, 100);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';

  return cons(question, answer);
};

const start = () => engine(rulesText, generateQuestionAnswer);

export default start;
