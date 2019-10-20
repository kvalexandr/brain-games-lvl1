
import { cons } from '@hexlet/pairs';
import * as helper from '../helpers';
import engine from '..';

const getGreatestCommonDivisor = (n1, n2) => {
  const iter = (x, y) => {
    const max = x > y ? x : y;
    const min = x < y ? x : y;
    const remainderOfDivision = max % min;

    if (remainderOfDivision === 0) return min;
    return iter(min, remainderOfDivision);
  };

  return iter(n1, n2);
};

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const generateQuestionAnswer = () => {
  const number1 = helper.getRandomNum(1, 100);
  const number2 = helper.getRandomNum(1, 100);

  const question = `${number1} ${number2}`;
  const answer = String(getGreatestCommonDivisor(number1, number2));
  return cons(question, answer);
};

const start = () => engine(descriptionGame, generateQuestionAnswer);

export default start;
