import { cons, cdr, car } from '@hexlet/pairs';
import engine from '..';

const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

const getRandomFunctionOperation = () => {
  const sumNumber = (x, y) => cons(x + y, `${x} + ${y}`);
  const difNumber = (x, y) => cons(x - y, `${x} - ${y}`);
  const multiNumber = (x, y) => cons(x * y, `${x} * ${y}`);

  const operation = [sumNumber, difNumber, multiNumber];
  return operation[getRandomNum(0, 2)];
};

const rulesText = 'What is the result of the expression?\n';

const generateQuestionAnswer = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const operationRandom = getRandomFunctionOperation();

  const question = cdr(operationRandom(num1, num2));
  const answer = String(car(operationRandom(num1, num2)));
  return cons(question, answer);
};

const start = () => engine(rulesText, generateQuestionAnswer);

export default start;
