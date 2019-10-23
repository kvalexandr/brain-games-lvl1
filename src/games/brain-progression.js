import { cons } from '@hexlet/pairs';
import getRandomNum from '../helpers';
import engine from '..';

const descriptionGame = 'What number is missing in the progression?';
const lengthProgression = 10;

const generateQuestionAnswer = () => {
  const step = getRandomNum(2, 10);
  const start = getRandomNum(1, 100);
  const randomPositionDot = getRandomNum(1, lengthProgression);
  const numberInsteadOfDot = start + (randomPositionDot - 1) * step;
  let numberCurrentPosition = start;
  let resultProgression = '';

  for (let i = 1; i <= lengthProgression; i += 1) {
    if (i > 1) numberCurrentPosition += step;
    resultProgression = numberCurrentPosition === numberInsteadOfDot ? `${resultProgression} ..` : `${resultProgression} ${numberCurrentPosition}`;
  }

  const question = resultProgression;
  const answer = String(numberInsteadOfDot);
  return cons(question, answer);
};

export default () => engine(descriptionGame, generateQuestionAnswer);
