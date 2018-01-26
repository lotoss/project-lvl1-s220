const generateNumber = () => Math.round(Math.random() * 20);
const isEven = number => number % 2 === 0;
const getAnswer = number => (isEven(number) ? 'yes' : 'no');


const game = () => {
  const question = generateNumber();
  return [question, getAnswer(question)];
};


export default {
  text: 'Answer "yes" if number even otherwise answer "no".',
  game,
};
