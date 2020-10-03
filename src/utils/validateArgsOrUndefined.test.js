import { validateArgsOrUndefined } from './validateArgsOrUndefined';

describe('validateArgsOrUndefined', () => {
  it('should invoke curried function', () => {
    // GIVEN
    const mockFn = jest.fn();
    const mockArgs = [1, 2];
    const enhancedFn = validateArgsOrUndefined(mockFn);

    // WHEN
    enhancedFn(...mockArgs);

    // THEN
    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });

  it('should return undefined', () => {
    // GIVEN
    const mockFn = jest.fn();
    const enhancedFn = validateArgsOrUndefined(mockFn);

    // WHEN
    const result = enhancedFn();

    // THEN
    expect(result).toBeUndefined();
    expect(mockFn).not.toHaveBeenCalled();
  });
});
