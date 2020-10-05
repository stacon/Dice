import { sum } from './sum';

describe('sum', () => {
  it('should return the provided number', () => {
    // GIVEN
    const int = 42;

    // WHEN
    const result = sum(int);

    // THEN
    expect(result).toBe(42);
  });

  it('should return the sum of the array', () => {
    // GIVEN
    const int = [9, 8, 7, 6, 5, 4, 3];

    // WHEN
    const result = sum(int);

    // THEN
    expect(result).toBe(42);
  });
});
