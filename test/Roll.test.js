// Test tools
const expect = require('expect');

// Testees
const Roll = require('../Roll');

describe('Single die roll with signature, ', () => {
  it('using a single number parameter', () => {
    const rollNumber = Roll.d(20);
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  
  it('using two number parameters', () => {
    const rollNumber = Roll.d(20, 1);
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  
  it('using the object parameter with number key value', () => {
    const rollNumber = Roll.d({20: 1});
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  
  it('using the object parameter with string key value', () => {
    const rollNumber = Roll.d({'20': 1});
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
});

describe('Multiple die roll with signature, ', () => { 
  it('using two number parameters', () => {
    const rollNumber = Roll.d(20, 2);
    const validResult = rollNumber > 1 && rollNumber <= 40;
    expect(validResult).toBeTruthy();
  });
  
  it('using the object parameter with number key value', () => {
    const rollNumber = Roll.d({20: 2});
    const validResult = rollNumber > 1 && rollNumber <= 40;
    expect(validResult).toBeTruthy();
  });
  
  it('using the object parameter with string key value', () => {
    const rollNumber = Roll.d({'20': 2});
    const validResult = rollNumber > 1 && rollNumber <= 40;
    expect(validResult).toBeTruthy();
  });
});

describe('Multiple die with different sides', () => { 
  it('should return a number between 5 and 76', () => {
    const rollNumber = Roll.d({20: 2, 12: 3});
    const validResult = rollNumber > 5 && rollNumber <= 76;
    expect(validResult).toBeTruthy();
  });

  it('should return a number between 5 and 76', () => {
    const rollNumber = Roll.d({'20': 2, '12': 3});
    const validResult = rollNumber > 5 && rollNumber <= 76;
    expect(validResult).toBeTruthy();
  });
});

describe('Attempt roll with falsy values, ', () => { 
  it('should return 0', () => {
    expect(Roll.d(null)).toBe(0);
    expect(Roll.d(undefined)).toBe(0);
    expect(Roll.d({})).toBe(0);
    expect(Roll.d([])).toBe(0);
    expect(Roll.d([1,2])).toBe(0);
    expect(Roll.d()).toBe(0);
  });
});