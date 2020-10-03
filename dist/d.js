"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.d = void 0;

var _xswitch = _interopRequireDefault(require("@stacon/xswitch"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * validates the Object structure
 * @param {Object} params
 * @returns {boolean} validation result
 */
var hasValidObjectParams = function hasValidObjectParams(params) {
  return params.length === 1 && !!params[0] && _typeof(params[0]) === 'object' && !Array.isArray(params[0]);
};
/**
 * There are three ways to use this function to roll from one single die, or a mixed set of them
 * @param   {number[]} args Example 1: Roll.d(20) will return the result of rolling a d20 ( a 20 dimensional dice)
 * @param   {number[]} args Example 2: Roll.d(20, 5) will return the result of rolling 5 * d20 ( 5 times 20 dimensional dice)
 * @param   {Object}   args Example 3: Roll.d({20: 5, 12: 3, 10: 2}) will return the result of rolling 5 * d20 + 3 * d12 + 2 * d10
 * @returns {Object[]} Example output: [ {'20': [2, 17, 19]}, {'100': [62, 89, 33]} ]
 */


var d = function d() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _xswitch["default"])({
    xcase: function xcase(args) {
      return hasValidObjectParams(args);
    },
    "return": function _return(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          rolls = _ref2[0];

      return rolls.map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            dimensions = _ref4[0],
            times = _ref4[1];

        return _defineProperty({}, dimensions, (0, _utils.rollADieTimes)(dimensions, times));
      });
    }
  }, {
    xcase: function xcase(args) {
      return args.length <= 2 && typeof args[0] === 'number';
    },
    "return": function _return(_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          dimensions = _ref7[0],
          timesInput = _ref7[1];

      var times = typeof timesInput === 'number' ? timesInput : 1;
      return [_defineProperty({}, dimensions, (0, _utils.rollADieTimes)(dimensions, times))];
    }
  })(args) || {};
};

exports.d = d;

var _default = (0, _utils.validateArgsOrUndefined)(d);

exports["default"] = _default;