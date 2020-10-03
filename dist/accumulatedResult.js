"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.accumulatedResult = void 0;

/**
 * @param {Object} results from a Roll.d invocation
 * @return {number}
 */
var accumulatedResult = function accumulatedResult(results) {
  return results.reduce(function (accumulatedResult, rollEntry) {
    return accumulatedResult + Object.values(rollEntry).reduce(function (acc, currentDieRoll) {
      return acc + currentDieRoll;
    }, 0);
  }, 0);
};

exports.accumulatedResult = accumulatedResult;
var _default = accumulatedResult;
exports["default"] = _default;