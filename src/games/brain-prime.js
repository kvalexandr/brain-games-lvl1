
import { cons } from '@hexlet/pairs';
import engine from '..';

const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const isSimple = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0 && i < n) return false;
  }

  return true;
};

const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const generateQuestionAnswer = () => {
  const num = getRandomNum(1, 100);
  const question = num;
  const answer = isSimple(num) ? 'yes' : 'no';

  return cons(question, answer);
};

const start = () => engine(rulesText, generateQuestionAnswer);

export default start;
