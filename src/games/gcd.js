import utils from '../utils';

const { random } = utils;

const gcd = (a, b) => {
  if (a < b) {
    return gcd(b, a);
  }
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const first = random(2, 100);
  const second = random(2, 100);

  return [`${first} ${second}`, gcd(first, second).toString()];
};

export default {
  text: 'Find the greatest common divisor of given numbers.',
  game,
};
