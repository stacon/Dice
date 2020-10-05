"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isArrayOfNumbers = void 0;

var isArrayOfNumbers = function isArrayOfNumbers(param) {
  return Array.isArray(param) && param.find(function (item) {
    return typeof item !== 'number';
  }) === undefined;
};

exports.isArrayOfNumbers = isArrayOfNumbers;
var _default = isArrayOfNumbers;
exports["default"] = _default;