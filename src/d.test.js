import { d } from './d';
import * as utils from './utils';

describe('d', () => {
  const rollADieSpy = jest.spyOn(utils, 'rollADie');
  console.log(rollADieSpy);

  afterEach(() => rollADieSpy.mockReset());
  afterAll(() => rollADieSpy.mockRestore());

  it('should return obj with one entry, when using a single number parameter', () => {
    // WHEN
    const rollResult = d(20);
    const validResult = rollResult[0][20].length === 1;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(1);
  });

  it('should return obj with one entry, when using two number parameters', () => {
    // WHEN
    const rollResult = d(20, 3);
    const validResult = rollResult[0][20].length === 3;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(3);
  });

  it('should return obj with one entry, when using the object parameter with number key value', () => {
    // WHEN
    const rollResult = d({ 20: 1 });
    const validResult = rollResult[0][20].length === 1;

    // THEN
    expect(validResult).toBeTruthy();
    expect(rollADieSpy).toHaveBeenCalledTimes(1);
  });

  it('should return obj with two entry, when using object params with two entries', () => {
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
