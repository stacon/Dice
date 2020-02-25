'use strict';

const Roll = (() => {
  /**
   * Returns a number between a min value (inclusive) and a max value (inclusive)
   * @param {number} max
   * @param {number} min
   * @returns {number}
   */
  const getANumberBetweenMinAndMax = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

  /**
   * Rolls a die with a min = 1 and max limit and returns the result
   * @param {number} max the maximum allowd roll number
   * @returns {number} the result of the die
   */
  const rollDieWithMin1 = (max) => getANumberBetweenMinAndMax(1, max);

  /**
   * Rolls a die of the same dimentions as many times as the second argument (times) (default: 1)
   * Eg. rollDTimes(20, 5) will return the result of rolling 5 * d20 ( 5 times 20 dimentional dice)
   * @param {number} sides the numbers of the dice's dimentions (sides)
   * @param {number} times the number of times to roll the die
   * @returns {number} the result of the dice
   */
  const rollDTimes = (sides, times = 1) => Array(times).fill(null).reduce(result => result + rollDieWithMin1(sides), 0);

  /**
   * There are three ways to use this function to roll from one single die, or a mixed set of them
   * @param  {number[]} args Example 1: Roll.D(20) will return the result of rolling a d20 ( a 20 dimentional dice)
   * @param  {number[]} args Example 2: Roll.D(20, 5) will return the result of rolling 5 * d20 ( 5 times 20 dimentional dice)
   * @param  {Object}   args Example 3: Roll.D({20: 5, 12: 3, 10: 2}) will return the result of rolling 5 * d20 + 3 * d12 + 2 * d10
   * @returns {number} the accumulated result of the dice roll or returns 0 in case of incorrect input
   */
  const D = (...args) => {
    if (!args || !args.length) return 0;
    if (args.length === 1 && typeof args[0] === 'object') {
      const [rolls] = args;
      return Object.keys(rolls)
                .reduce(
                    (accumulatedRolls, currentRollKey) => accumulatedRolls + rollDTimes(currentRollKey, rolls[currentRollKey]), 0);
    }

    if (args.length <= 2 && typeof args[0] === 'number') {
      let [sides, times] = args;
      times = typeof times === 'number' ? times : 1;
      return rollDTimes(sides, times);
    }

    return 0;
  }

  return {
    D,
  };
})();

exports.default = Roll;