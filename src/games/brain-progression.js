import { cons } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const descriptionGame = 'What number is missing in the progression?';
const lengthProgression = 9;

const generateQuestionAnswer = () => {
  const stepProgression = getRandomNum(2, 10);
  const startProgression = getRandomNum(1, 100);
  const hiddenElementPosition = getRandomNum(0, lengthProgression);
  const answer = startProgression + hiddenElementPosition * stepProgression;
  let question = '';
  let currentElementInProgression = 0;

  for (let i = 0; i <= lengthProgression; i += 1) {
    if (currentElementInProgression === 0) currentElementInProgression = startProgression;
    else currentElementInProgression += stepProgression;

    question = currentElementInProgression === answer ? `${question} ..` : `${question} ${currentElementInProgression}`;
  }

  return cons(question, String(answer));
};

export default () => engine(descriptionGame, generateQuestionAnswer);
