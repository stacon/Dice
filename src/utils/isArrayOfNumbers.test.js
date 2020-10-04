import { isArrayOfNumbers } from './isArrayOfNumbers';

describe('isArrayOfNumbers', () => {
  it('should return true', () => {
    // GIVEN
    const arrOfNumbers = [9, 8, 7, 6, 5, 4, 3];

    // WHEN
    const result = isArrayOfNumbers(arrOfNumbers);

    // THEN
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    // THEN
    expect(isArrayOfNumbers('petrakis lalos')).toBeFalsy();
    expect(isArrayOfNumbers(undefined)).toBeFalsy();
    expect(isArrayOfNumbers({})).toBeFalsy();
    expect(isArrayOfNumbers(null)).toBeFalsy();
    expect(isArrayOfNumbers([3, '3'])).toBeFalsy();
    expect(isArrayOfNumbers({ result: '42' })).toBeFalsy();
  });
});
