/**
 * @param {Function} dieFn function created from d
 * @returns {number} result of a single roll
 */
const roll = dieFn => dieFn();
/**
 * @param {number} times to roll the die
 * @param {Function} dieFn function created from d
 * @returns {number[]} an array of roll results
 */


roll.times = times => dieFn => Array.from({
  length: times
}).map(() => dieFn());

export { roll };
export default roll;