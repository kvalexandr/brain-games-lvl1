import { cons, cdr, car } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const getRandomFunctionOperation = () => {
  const typeOperation = ['+', '-', '*'];
  const randomOperation = typeOperation[getRandomNum(0, typeOperation.length - 1)];
  let func;
  if (randomOperation === '+') func = (x, y) => x + y;
  if (randomOperation === '-') func = (x, y) => x - y;
  if (randomOperation === '*') func = (x, y) => x * y;

  return (x, y) => cons(func(x, y), `${x} ${randomOperation} ${y}`);
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
