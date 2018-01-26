import utils from '../utils';

const { random } = utils;

const getNumber = (size, fill) => parseInt((new Array(size)).fill(fill).join(''), 10);
const balance = (number) => {
  const digits = number.toString().split('').map(it => +it);
  const { length } = digits;
  const digitsSum = digits.reduce((acc, it) => acc + it, 0);
  const base = Math.floor(digitsSum / length);
  const mod = digitsSum % length;
  return parseInt(digits.map((val, idx) => (idx >= length - mod ? base + 1 : base)).join(''), 10);
};

const game = () => {
  const size = random(2, 5);
  const from = getNumber(size, 1);
  const to = getNumber(size, 9);
  const number = random(from, to);
  return [number, balance(number).toString()];
};

export default {
  text: 'Balance the given number.',
  game,
};
