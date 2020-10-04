import { getNumberBetweenMinAndMax, validateArgsOrUndefined } from './utils';

/**
 * Create a die eg. const d6 = d(6)
 * @param   {number} dimensions Example 1: Roll.d(20) will return the result between 1-20
 * @returns {Function}
 */
const d = (dimensions) => () => getNumberBetweenMinAndMax(1, dimensions);

export { d };
export default d;
