import rollADie from './rollADie';
import validateArgsOrUndefined from './validateArgsOrUndefined';
/**
 * @param {number} dimensions of the die
 * @param {number} times to roll the die
 * @returns {number[]} array of numeric roll results
 */

const rollADieTimes = (dimensions, times = 1) => [...Array(times)].map(() => rollADie(dimensions));

export { rollADieTimes };
export default validateArgsOrUndefined(rollADieTimes);