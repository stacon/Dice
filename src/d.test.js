import { d } from './d';

describe('d', () => {
  it('should return a d6 function die', () => {
    // GIVEN
    const d6 = d(6);

    // WHEN
    const result = d6();

    // THEN
    expect(typeof result).toBe('number');
    expect((result >= 1) & (result <= 6)).toBeTruthy();
  });
});
