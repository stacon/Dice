"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.d = void 0;

var _utils = require("./utils");

/**
 * Create a die eg. const d6 = d(6)
 * @param   {number} dimensions Example 1: Roll.d(20) will return the result between 1-20
 * @returns {Function}
 */
var d = function d(dimensions) {
  return function () {
    return (0, _utils.getNumberBetweenMinAndMax)(1, dimensions);
  };
};

exports.d = d;
var _default = d;
exports["default"] = _default;