import { rollADie } from './rollADie';

describe('rollADie', () => {
  it('should return a number between 1 and 20', () => {
    // WHEN
    const result = rollADie(20);

    // THEN
    expect(result > 0 && result <= 20).toBeTruthy();
  });

  it('should return 1', () => {
    // WHEN
    const result = rollADie(undefined);

    // THEN
    expect(result).toBe(1);
  });
});
