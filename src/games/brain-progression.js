
import { cons } from '@hexlet/pairs';
import * as helper from '../helpers';
import engine from '..';

const descriptionGame = 'What number is missing in the progression?';

const generateQuestionAnswer = () => {
  const step = helper.getRandomNum(2, 10);
  const lengthProgression = 10;
  const randomPositionDot = helper.getRandomNum(1, lengthProgression);
  let numberCurrentPosition = helper.getRandomNum(1, 100);
  let resultProgression = '';
  let numberInsteadOfDot = null;

  for (let i = 1; i <= lengthProgression; i += 1) {
    if (i > 1) numberCurrentPosition += step;

    if (i === randomPositionDot) {
      resultProgression += '.. ';
      numberInsteadOfDot = numberCurrentPosition;
    } else {
      resultProgression += `${numberCurrentPosition} `;
    }
  }

  const question = resultProgression;
  const answer = String(numberInsteadOfDot);
  return cons(question, answer);
};

const start = () => engine(descriptionGame, generateQuestionAnswer);

export default start;
