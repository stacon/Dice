import { rollADieTimes } from './rollADieTimes';

describe('rollADieTimes', () => {
  it('should return an array of 4 elements between 1 and 10', () => {
    // WHEN
    const result = rollADieTimes(10, 4);

    // THEN
    expect(result.length).toBe(4);
    expect(result.every((number) => number > 0 && number <= 20)).toBeTruthy();
  });
});
