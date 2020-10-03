const validateArgsOrUndefined = (fn) => (...args) =>
  args.length < 1 ? undefined : fn(...args);

export { validateArgsOrUndefined };
export default validateArgsOrUndefined;
