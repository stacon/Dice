'use strict';

const Dice = (() => {
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
   * Rolls a die of the same dimentions as many times as the second argument (default: 1)
   * Eg. Dice.roll(20, 5) will return the result of rolling a 5 * d20 ( 5 times 20 dimentional dice)
   * @param {number} sides the numbers of the dice's dimentions (sides)
   * @param {number} times the number of times to roll the die
   * @returns {number} the result of the dice
   */
  const rollD = (sides, times = 1) => Array(times).fill(null).reduce(result => result + rollDieWithMin1(sides), 0);

  return {
    rollD,
  };
})();

exports.default = Dice;