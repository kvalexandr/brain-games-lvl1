
import { cons } from '@hexlet/pairs';
import * as func from '../fuctions';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export const generateQuestion = () => {
  const num = func.getRandomNum(1, 100);
  const question = `${num}`;
  const answer = func.isSimple(num) ? 'yes' : 'no';

  return cons(question, answer);
};
