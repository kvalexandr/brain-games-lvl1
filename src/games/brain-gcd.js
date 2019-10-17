
import { cons } from '@hexlet/pairs';
import engine from '..';

const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const getCommonDivisor = (n1, n2) => {
  const iter = (x, y) => {
    const max = x > y ? x : y;
    const min = x < y ? x : y;
    const remainderOfDivision = max % min;

    if (remainderOfDivision === 0) return min;
    return iter(min, remainderOfDivision);
  };

  return iter(n1, n2);
};

const rulesText = 'Find the greatest common divisor of given numbers.\n';

const generateQuestionAnswer = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(getCommonDivisor(num1, num2));
  return cons(question, answer);
};

const start = () => engine(rulesText, generateQuestionAnswer);

export default start;
