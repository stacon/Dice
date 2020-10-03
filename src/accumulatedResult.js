/**
 * @param {Object} results from a Roll.d invocation
 * @return {number}
 */
const accumulatedResult = (results) =>
  results.reduce(
    (accumulatedResult, rollEntry) =>
      accumulatedResult +
      Object.values(rollEntry).reduce(
        (acc, currentDieRoll) => acc + currentDieRoll,
        0
      ),
    0
  );

export { accumulatedResult };
export default accumulatedResult;
