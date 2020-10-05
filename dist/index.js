"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Roll", {
  enumerable: true,
  get: function get() {
    return _roll["default"];
  }
});
Object.defineProperty(exports, "d", {
  enumerable: true,
  get: function get() {
    return _d["default"];
  }
});
Object.defineProperty(exports, "sum", {
  enumerable: true,
  get: function get() {
    return _sum["default"];
  }
});
exports["default"] = void 0;

var _roll = _interopRequireDefault(require("./roll"));

var _d = _interopRequireDefault(require("./d"));

var _sum = _interopRequireDefault(require("./sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create a dice set
var D20 = (0, _d["default"])(20); // Sigle die roll

console.log((0, _roll["default"])(D20)); // should log a number between 1 - 20 like a d20 roll would.
// Multiple dice roll of the same dimensions

var resultsArr = _roll["default"].times(5)(D20); // returns an array of numbers between 1 - 20


console.log(resultsArr); // should log e.g [ 19, 20, 1, 5, 11 ]

console.log((0, _sum["default"])(resultsArr)); // should return the sum of results are e.g. 56

var _default = _roll["default"];
exports["default"] = _default;