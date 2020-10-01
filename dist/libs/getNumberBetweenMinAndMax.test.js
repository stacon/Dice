"use strict";

var _getNumberBetweenMinAndMax = require("../libs/getNumberBetweenMinAndMax");

describe('getNumberBetweenMinAndMax tests, ', function () {
  it('return a number within the range', function () {
    var randomNumber = (0, _getNumberBetweenMinAndMax.getNumberBetweenMinAndMax)(1, 3);
    var validResult = randomNumber >= 1 && randomNumber <= 3;
    expect(validResult).toBeTruthy();
  });
});