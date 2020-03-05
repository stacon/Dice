'use strict';

const getANumberBetweenMinAndMax = require('./libs/getNumberBetweenMinAndMax');

module.exports = (() => {
  /**
   * Emulates the roll of a single die with customer number of dimensions
   * @param   {number} dimensions the maximum allowed roll number (die dimensions)
   * @returns {number} the result of rolling the die
   */
  const rollADie = (dimensions) => getANumberBetweenMinAndMax(1, dimensions);

  /**
   * Rolls a die of the same dimensions as many times as the second argument (times) (default: 1)
   * Eg. rollADieTimes(20, 5) will return the result of rolling 5 * d20 ( 5 times 20 dimensional dice)
   * @param   {number} dimensions the numbers of the dice's dimensions
   * @param   {number} times the number of times to roll the die
   * @returns {number} the result of the dice
   */
  const rollADieTimes = (dimensions, times = 1) => Array(times).fill(null).reduce(result => result + rollADie(dimensions), 0);

  /**
   * There are three ways to use this function to roll from one single die, or a mixed set of them
   * @param   {number[]} args Example 1: Roll.d(20) will return the result of rolling a d20 ( a 20 dimensional dice)
   * @param   {number[]} args Example 2: Roll.d(20, 5) will return the result of rolling 5 * d20 ( 5 times 20 dimensional dice)
   * @param   {Object}   args Example 3: Roll.d({20: 5, 12: 3, 10: 2}) will return the result of rolling 5 * d20 + 3 * d12 + 2 * d10
   * @returns {number}   the accumulated result of the dice roll or 0 in case of incorrect input
   */
  const d = (...args) => {
    if (args.length < 1) return 0;
    if (
      args.length === 1 &&
      !!args[0] &&
      typeof args[0] === 'object' &&
      !Array.isArray(args[0])
    ) {
      const [rolls] = args;
      return Object.entries(rolls)
                .reduce(
                    (accumulatedRolls, [dimensions, times]) => accumulatedRolls + rollADieTimes(dimensions, times), 0);
    }

    if (args.length <= 2 && typeof args[0] === 'number') {
      let [dimensions, times] = args;
      times = typeof times === 'number' ? times : 1;
      return rollADieTimes(dimensions, times);
    }

    return 0;
  }

  return {
    d,
  };
})();