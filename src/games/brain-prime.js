import { cons } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => engine(descriptionGame, generateQuestionAnswer);
