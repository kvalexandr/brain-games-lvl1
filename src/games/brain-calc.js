import { cons } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'What is the result of the expression?\n';

export const generateQuestion = () => {
  const num1 = func.getRandomNum(1, 100);
  const num2 = func.getRandomNum(1, 100);
  const operation = func.getRandomOperation();

  let question = '';
  let answer = '';

  if (operation === 'dif') {
    question = `${num1} - ${num2}`;
    answer = String(num1 - num2);
  }

  if (operation === 'multi') {
    question = `${num1} * ${num2}`;
    answer = String(num1 * num2);
  }

  if (operation === 'sum') {
    question = `${num1} + ${num2}`;
    answer = String(num1 + num2);
  }
  return cons(question, answer);
};
