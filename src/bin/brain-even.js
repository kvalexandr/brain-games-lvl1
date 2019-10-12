#!/usr/bin/env node

import * as brain from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const user = brain.getNameUser();
console.log(`Hello, ${user}!\n`);

const step = 3;

for (let i = 0; i < step; i += 1) {
  const num = brain.getQuestion();
  const answer = brain.getAnswerUser();

  if (brain.isCorrectAnswer(num, answer)) {
    console.log('Correct!');
    if (i === step - 1) console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${brain.answerCorrect(num)}.`);
    console.log(`Let's try again, ${user}!`);
    break;
  }
}
