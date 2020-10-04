const isArrayOfNumbers = (param) =>
  Array.isArray(param) &&
  param.find((item) => typeof item !== 'number') === undefined;

export { isArrayOfNumbers };
export default isArrayOfNumbers;
