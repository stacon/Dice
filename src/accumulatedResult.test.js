import { accumulatedResult } from './accumulatedResult';

describe('accumulatedResult', () => {
  it('should return 124', () => {
    // GIVEN
    const input = [
      { 20: [10, 12, 12] },
      { 6: [5, 5] },
      { 20: [20, 20, 20, 18, 12] },
    ];

    // WHEN
    const result = accumulatedResult(input);

    // THEN
    expect(result).toBe;
  });
});
