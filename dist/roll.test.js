"use strict";

var _roll = _interopRequireDefault(require("./roll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Single die roll with signature ', function () {
  it('using a single number parameter', function () {
    var rollNumber = _roll["default"].d(20);

    var validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  it('using two number parameters', function () {
    var rollNumber = _roll["default"].d(20, 1);

    var validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  it('using the object parameter with number key value', function () {
    var rollNumber = _roll["default"].d({
      20: 1
    });

    var validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
  it('using the object parameter with string key value', function () {
    var rollNumber = _roll["default"].d({
      '20': 1
    });

    var validResult = rollNumber > 0 && rollNumber <= 20;
    expect(validResult).toBeTruthy();
  });
});
describe('Multiple die roll with signature ', function () {
  it('using two number parameters', function () {
    var rollNumber = _roll["default"].d(20, 2);

    var validResult = rollNumber > 1 && rollNumber <= 40;
    expect(validResult).toBeTruthy();
  });
  it('using the object parameter with number key value', function () {
    var rollNumber = _roll["default"].d({
      20: 2
    });

    var validResult = rollNumber > 1 && rollNumber <= 40;
    expect(validResult).toBeTruthy();
  });
  it('using the object parameter with string key value', function () {
    var rollNumber = _roll["default"].d({
      '20': 2
    });

    var validResult = rollNumber > 1 && rollNumber <= 40;
    expect(validResult).toBeTruthy();
  });
});
describe('Multiple die with different sides', function () {
  it('should return a number between 5 and 76', function () {
    var rollNumber = _roll["default"].d({
      20: 2,
      12: 3
    });

    var validResult = rollNumber > 5 && rollNumber <= 76;
    expect(validResult).toBeTruthy();
  });
  it('should return a number between 5 and 76', function () {
    var rollNumber = _roll["default"].d({
      '20': 2,
      '12': 3
    });

    var validResult = rollNumber > 5 && rollNumber <= 76;
    expect(validResult).toBeTruthy();
  });
});
describe('Attempt roll with falsy values, ', function () {
  it('should return 0', function () {
    expect(_roll["default"].d(null)).toBe(0);
    expect(_roll["default"].d(undefined)).toBe(0);
    expect(_roll["default"].d({})).toBe(0);
    expect(_roll["default"].d([])).toBe(0);
    expect(_roll["default"].d([1, 2])).toBe(0);
    expect(_roll["default"].d()).toBe(0);
  });
});