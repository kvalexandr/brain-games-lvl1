import { cons } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const descriptionGame = 'What number is missing in the progression?';
const lengthProgression = 10;

const generateQuestionAnswer = () => {
  const step = getRandomNum(2, 10);
  const start = getRandomNum(1, 100);
  const hiddenElementPosition = getRandomNum(0, lengthProgression - 1);
  const answer = start + hiddenElementPosition * step;
  let question = '';
  let currentElement = 0;

  for (let i = 0; i < lengthProgression; i += 1) {
    if (currentElement === 0) currentElement = start;
    else currentElement += step;

    question = currentElement === answer ? `${question} ..` : `${question} ${currentElement}`;
  }

  return cons(question, String(answer));
};

export default () => engine(descriptionGame, generateQuestionAnswer);
