import readlineSync from 'readline-sync';

import greating from '.';

const ATTEMPT_COUNT = 3;

const generateNumber = () => Math.round(Math.random() * 20);
const isEven = number => number % 2 === 0;
const isCorrect = (number, answer) => (isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no');


export default () => {
  const name = greating();

  const game = (attemptCount) => {
    if (attemptCount <= 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const number = generateNumber();
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (isCorrect(number, answer)) {
      console.log('Correct!');
      game(attemptCount - 1);
      return;
    }
    const correctAnswer = isEven(number) ? 'no' : 'yes';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    game(attemptCount);
  };

  game(ATTEMPT_COUNT);
};
