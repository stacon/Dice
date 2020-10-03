import getNumberBetweenMinAndMax from './getNumberBetweenMinAndMax';

/**
 * @param {number} dimensions of a die
 * @returns {number} result of die roll
 */
const rollADie = (dimensions = 0) => getNumberBetweenMinAndMax(1, dimensions);

export { rollADie };
export default rollADie;
