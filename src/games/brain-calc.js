import { cons } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'What is the result of the expression?\n';

export const generateQuestion = () => {
  const num1 = func.getRandomNum(1, 100);
  const num2 = func.getRandomNum(1, 100);
  const operation = func.getRandomOperation();

  if (operation === 'dif') {
    const question = `${num1} - ${num2}`;
    const answer = String(num1 - num2);
    return cons(question, answer);
  }

  if (operation === 'multi') {
    const question = `${num1} * ${num2}`;
    const answer = String(num1 * num2);
    return cons(question, answer);
  }

  const question = `${num1} + ${num2}`;
  const answer = String(num1 + num2);
  return cons(question, answer);
};
