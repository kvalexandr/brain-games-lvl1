import { cons, cdr, car } from '@hexlet/pairs';
import * as helper from '../helpers';
import engine from '..';

const getRandomFunctionOperation = () => {
  const sumNumber = (x, y) => cons(x + y, `${x} + ${y}`);
  const difNumber = (x, y) => cons(x - y, `${x} - ${y}`);
  const multiNumber = (x, y) => cons(x * y, `${x} * ${y}`);

  const operation = [sumNumber, difNumber, multiNumber];
  return operation[helper.getRandomNum(0, 2)];
};

const descriptionGame = 'What is the result of the expression?';

const generateQuestionAnswer = () => {
  const num1 = helper.getRandomNum(1, 100);
  const num2 = helper.getRandomNum(1, 100);
  const operationRandom = getRandomFunctionOperation();

  const question = cdr(operationRandom(num1, num2));
  const answer = String(car(operationRandom(num1, num2)));
  return cons(question, answer);
};

const start = () => engine(descriptionGame, generateQuestionAnswer);

export default start;
