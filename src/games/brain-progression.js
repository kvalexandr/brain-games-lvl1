
import { cons } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'What number is missing in the progression?\n';

export const generateQuestion = () => {
  const start = func.getRandomNum(1, 100);
  const step = func.getRandomNum(2, 10);
  const count = 10;
  const dot = func.getRandomNum(1, count);
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

  const question = `${res}`;
  const answer = String(dotNum);
  return cons(question, answer);
};
