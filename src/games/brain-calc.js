import { cons, cdr, car } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'What is the result of the expression?\n';

export const generateQuestion = () => {
  const num1 = func.getRandomNum(1, 100);
  const num2 = func.getRandomNum(1, 100);
  const operationRandom = func.getRandomFunctionOperation();

  const question = cdr(operationRandom(num1, num2));
  const answer = String(car(operationRandom(num1, num2)));
  return cons(question, answer);
};
