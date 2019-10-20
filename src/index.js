import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const questionsCount = 3;

const engine = (descriptionGame, generateQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(descriptionGame);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < questionsCount; i += 1) {
    const resGenerateQuestionAnswer = generateQuestionAnswer();
    const question = car(resGenerateQuestionAnswer);
    const answer = cdr(resGenerateQuestionAnswer);

    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === answer) {
      console.log('Correct!');
      if (i === questionsCount - 1) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default engine;
