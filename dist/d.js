import xswitch from '@stacon/xswitch';
import { rollADieTimes, validateArgsOrUndefined } from './utils';
/**
 * validates the Object structure
 * @param {Object} params
 * @returns {boolean} validation result
 */

const hasValidObjectParams = params => params.length === 1 && !!params[0] && typeof params[0] === 'object' && !Array.isArray(params[0]);
/**
 * There are three ways to use this function to roll from one single die, or a mixed set of them
 * @param   {number[]} args Example 1: Roll.d(20) will return the result of rolling a d20 ( a 20 dimensional dice)
 * @param   {number[]} args Example 2: Roll.d(20, 5) will return the result of rolling 5 * d20 ( 5 times 20 dimensional dice)
 * @param   {Object}   args Example 3: Roll.d({20: 5, 12: 3, 10: 2}) will return the result of rolling 5 * d20 + 3 * d12 + 2 * d10
 * @returns {Object[]} Example output: [ {'20': [2, 17, 19]}, {'100': [62, 89, 33]} ]
 */


const d = (...args) => xswitch({
  xcase: args => hasValidObjectParams(args),
  return: ([rolls]) => rolls.map(([dimensions, times]) => ({
    [dimensions]: rollADieTimes(dimensions, times)
  }))
}, {
  xcase: args => args.length <= 2 && typeof args[0] === 'number',
  return: ([dimensions, timesInput]) => {
    const times = typeof timesInput === 'number' ? timesInput : 1;
    return [{
      [dimensions]: rollADieTimes(dimensions, times)
    }];
  }
})(args) || {};

export { d };
export default validateArgsOrUndefined(d);