"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getNumberBetweenMinAndMax = void 0;

/**
 * Returns a number between a min value (inclusive) and a max value (inclusive)
 * @param   {number} max
 * @param   {number} min
 * @returns {number} between min and max (inclusive)
 */
var getNumberBetweenMinAndMax = function getNumberBetweenMinAndMax(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

exports.getNumberBetweenMinAndMax = getNumberBetweenMinAndMax;
var _default = getNumberBetweenMinAndMax;
exports["default"] = _default;