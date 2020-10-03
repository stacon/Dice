import { d } from './d';
import * as utils from './utils';

describe('d', () => {
  const rollADieSpy = jest.spyOn(utils, 'rollADie').mockReturnValue(10);

  afterEach(() => rollADieSpy.mockReset());
  afterAll(() => rollADieSpy.mockRestore());

  it('using a single number parameter', () => {
    // WHEN
    const rollResult = d(20);
    const validResult = rollResult[0][20].length === 1;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(1);
  });

  it('using two number parameters', () => {
    // WHEN
    const rollResult = d(20, 3);
    const validResult = rollResult[0][20].length === 3;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(3);
  });

  it('using the object parameter with number key value', () => {
    // WHEN
    const rollResult = d({ 20: 1 });
    const validResult = rollResult[0][20].length === 1;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(1);
  });

  it('should return a number between 5 and 76', () => {
    // WHEN
    const rollResult = d({ 20: 2, 20: 3 });
    const validResult =
      rollResult[0][20].length === 2 && rollResult[1][20].length === 3;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(5);
  });
});

describe('Attempt roll with falsy values, ', () => {
  it('should return 0', () => {
    expect(d(null)).toEqual({});
    expect(d(undefined)).toEqual({});
    expect(d({})).toEqual({});
    expect(d([])).toEqual({});
    expect(d([1, 2])).toEqual({});
    expect(d()).toEqual({});
  });
});
