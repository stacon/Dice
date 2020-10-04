import { roll } from './roll';
import { d } from './d';

describe('roll', () => {
  it('should return a die result between 1 and 6', () => {
    // GIVEN
    const d6 = d(6);

    // WHEN
    const result = roll(d6);

    // THEN
    expect(typeof result).toBe('number');
    expect((result >= 1) & (result <= 6)).toBeTruthy();
  });

  it('should return an array of dice results between 1 and 6 with length 4', () => {
    // GIVEN
    const d6 = d(6);

    // WHEN
    const result = roll.times(4)(d6);

    // THEN
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(4);
    expect(result.find((elem) => typeof elem !== 'number')).toBeUndefined();
    expect(result.every((elem) => (elem >= 1) & (elem <= 6))).toBeTruthy();
  });
});
