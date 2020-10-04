import xswitch from '@stacon/xswitch';
import { isArrayOfNumbers } from './utils';
/**
 * @param {number | number[]} rollResult from a Roll.d invocation
 * @return {number} accumulated rolls result or undefined for invalid input
 */

const sum = rollResult => xswitch({
  xcase: rollResult => typeof rollResult === 'number',
  return: number => number
}, {
  xcase: rollResult => isArrayOfNumbers(rollResult),
  return: numberArr => numberArr.reduce((acc, number) => acc + number, 0)
})(rollResult);

export { sum };
export default sum;