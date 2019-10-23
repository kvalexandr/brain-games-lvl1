import { cons, cdr, car } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const getRandomFunctionOperation = () => {
  const sumNumber = (x, y) => cons(x + y, `${x} + ${y}`);
  const difNumber = (x, y) => cons(x - y, `${x} - ${y}`);
  const multiNumber = (x, y) => cons(x * y, `${x} * ${y}`);

  const operation = [sumNumber, difNumber, multiNumber];
  return operation[getRandomNum(0, operation.length - 1)];
};

const descriptionGame = 'What is the result of the expression?';

const generateQuestionAnswer = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const operationRandom = getRandomFunctionOperation();

  const question = cdr(operationRandom(num1, num2));
  const answer = String(car(operationRandom(num1, num2)));
  return cons(question, answer);
};

export default () => engine(descriptionGame, generateQuestionAnswer);
