
import { cons } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'Find the greatest common divisor of given numbers.\n';

export const generateQuestion = () => {
  const num1 = func.getRandomNum(1, 100);
  const num2 = func.getRandomNum(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(func.getNod(num1, num2));
  return cons(question, answer);
};
