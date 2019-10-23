import { cons } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const isEven = (num) => num % 2 === 0;

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => engine(descriptionGame, generateQuestionAnswer);
