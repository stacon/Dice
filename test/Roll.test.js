const Roll = require('../Roll');
const expect = require('expect');

describe('Single die roll with signature, ', () => {
  it('using a single number parameter', () => {
    const rollNumber = Roll.D(20);
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  
  it('using two number parameters', () => {
    const rollNumber = Roll.D(20, 1);
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  
  it('using the object parameter with number key value', () => {
    const rollNumber = Roll.D({20: 1});
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  
  it('using the object parameter with string key value', () => {
    const rollNumber = Roll.D({'20': 1});
    const validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
});
