"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.roll = void 0;

/**
 * @param {Function} dieFn function created from d
 * @returns {number} result of a single roll
 */
var roll = function roll(dieFn) {
  return dieFn();
};
/**
 * @param {number} times to roll the die
 * @param {Function} dieFn function created from d
 * @returns {number[]} an array of roll results
 */


exports.roll = roll;

roll.times = function (times) {
  return function (dieFn) {
    return Array.from({
      length: times
    }).map(function () {
      return dieFn();
    });
  };
};

var _default = roll;
exports["default"] = _default;