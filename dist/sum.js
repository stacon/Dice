"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sum = void 0;

var _xswitch = _interopRequireDefault(require("@stacon/xswitch"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param {number | number[]} rollResult from a Roll.d invocation
 * @return {number} accumulated rolls result or undefined for invalid input
 */
var sum = function sum(rollResult) {
  return (0, _xswitch["default"])({
    xcase: function xcase(rollResult) {
      return typeof rollResult === 'number';
    },
    "return": function _return(number) {
      return number;
    }
  }, {
    xcase: function xcase(rollResult) {
      return (0, _utils.isArrayOfNumbers)(rollResult);
    },
    "return": function _return(numberArr) {
      return numberArr.reduce(function (acc, number) {
        return acc + number;
      }, 0);
    }
  })(rollResult);
};

exports.sum = sum;
var _default = sum;
exports["default"] = _default;