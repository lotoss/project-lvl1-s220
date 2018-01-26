import utils from '../utils';

const { random } = utils;

const PROGRESSION_LENGTH = 10;

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0, item = start; i < length; i += 1, item += step) {
    result.push(item);
  }
  return result;
};

const game = () => {
  const progression = getProgression(random(1, 5), random(1, 5), PROGRESSION_LENGTH);
  const missIdx = random(1, PROGRESSION_LENGTH - 2);
  return [progression.map((val, idx) => (idx === missIdx ? '..' : val)).join(' '), progression[missIdx].toString()];
};

export default {
  text: 'What number is missing in this progression?',
  game,
};
