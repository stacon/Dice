"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.rollADie = void 0;

var _getNumberBetweenMinAndMax = _interopRequireDefault(require("./getNumberBetweenMinAndMax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param {number} dimensions of a die
 * @returns {number} result of die roll
 */
var rollADie = function rollADie() {
  var dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _getNumberBetweenMinAndMax["default"])(1, dimensions);
};

exports.rollADie = rollADie;
var _default = rollADie;
exports["default"] = _default;