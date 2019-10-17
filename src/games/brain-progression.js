
import { cons } from '@hexlet/pairs';
import engine from '..';

const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

const rulesText = 'What number is missing in the progression?\n';

const generateQuestionAnswer = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(2, 10);
  const count = 10;
  const dot = getRandomNum(1, count);
  let res = '';
  let num = '';
  let dotNum = null;

  for (let i = 1; i <= count; i += 1) {
    num = (i === 1) ? start : num + step;

    if (i === dot) {
      res += '.. ';
      dotNum = num;
    } else {
      res += `${num} `;
    }
  }

  const question = res;
  const answer = String(dotNum);
  return cons(question, answer);
};

const start = () => engine(rulesText, generateQuestionAnswer);

export default start;
