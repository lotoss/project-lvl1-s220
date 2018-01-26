import utils from '../utils';

const { random } = utils;

const isEven = number => number % 2 === 0;
const getAnswer = number => (isEven(number) ? 'yes' : 'no');


const game = () => {
  const question = random(0, 20);
  return [question, getAnswer(question)];
};


export default {
  text: 'Answer "yes" if number even otherwise answer "no".',
  game,
};
