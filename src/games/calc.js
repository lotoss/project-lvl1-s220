import utils from '../utils';

const { random } = utils;

const PLUS_OPERATION = 0;
const MINUS_OPERATION = 1;
const MULTIP_OPERATION = 2;

const getOperation = () => {
  const type = random(0, 2);
  const operation = (a, b) => {
    switch (type) {
      case PLUS_OPERATION:
        return a + b;

      case MINUS_OPERATION:
        return a - b;

      case MULTIP_OPERATION:
        return a * b;

      default:
        throw new Error('Wrong operation type');
    }
  };

  operation.toString = () => {
    switch (type) {
      case PLUS_OPERATION:
        return '+';

      case MINUS_OPERATION:
        return '-';

      case MULTIP_OPERATION:
        return '*';

      default:
        throw new Error('Wrong operation type');
    }
  };

  return operation;
};

const game = () => {
  const first = random(0, 100);
  const second = random(0, 100);
  const operation = getOperation();

  return [`${first} ${operation} ${second}`, operation(first, second).toString()];
};

export default {
  text: 'What is the result of the expression?',
  game,
};
