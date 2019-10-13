import { cons } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export const generateQuestion = () => {
  const num = func.getRandomNum(1, 100);
  const question = `${num}`;
  const answer = num % 2 === 0 ? 'yes' : 'no';

  return cons(question, answer);
};
