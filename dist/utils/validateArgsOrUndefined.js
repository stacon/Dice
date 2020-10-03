"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validateArgsOrUndefined = void 0;

var validateArgsOrUndefined = function validateArgsOrUndefined(fn) {
  return function () {
    return arguments.length < 1 ? undefined : fn.apply(void 0, arguments);
  };
};

exports.validateArgsOrUndefined = validateArgsOrUndefined;
var _default = validateArgsOrUndefined;
exports["default"] = _default;