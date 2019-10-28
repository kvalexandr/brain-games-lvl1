import { cons } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const getResultOperation = (x, y, randomOperation) => {
  switch (randomOperation) {
    case '+':
    default:
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
  }
};

const descriptionGame = 'What is the result of the expression?';

const generateQuestionAnswer = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomNum(0, operations.length - 1)];

  const question = `${num1} ${randomOperation} ${num2}`;
  const answer = String(getResultOperation(num1, num2, randomOperation));
  return cons(question, answer);
};

export default () => engine(descriptionGame, generateQuestionAnswer);
