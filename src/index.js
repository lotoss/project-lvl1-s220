import readlineSync from 'readline-sync';

const ATTEMPT_COUNT = 3;

const greeting = (text = '') => {
  console.log('Welcome to the Brain Games!');
  if (text) {
    console.log(text);
  }
  console.log('\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export default ({ text, game }) => {
  const name = greeting(text);

  const gameIter = (attemptCount, question, answer) => {
    if (attemptCount <= 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
      gameIter(attemptCount - 1, ...game());
      return;
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${name}!`);
    gameIter(attemptCount - 1, ...game());
  };

  gameIter(ATTEMPT_COUNT, ...game());
};
