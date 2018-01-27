import utils from '../utils';

const { random } = utils;

const isPrime = (number) => {
  const terminator = Math.sqrt(number);
  const iter = (val) => {
    if (val > terminator || number === 1) {
      return true;
    }
    return number % val === 0 ? false : iter(val + 1);
  };
  return iter(2);
};

const game = () => {
  const number = random(2, 100);
  return [number, isPrime(number) ? 'yes' : 'no'];
};

export default {
  text: 'Is this number prime?',
  game,
};
