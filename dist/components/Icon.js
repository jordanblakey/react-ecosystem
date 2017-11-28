"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
  var name = _ref.name,
      otherProps = _objectWithoutProperties(_ref, ["name"]);

  return _react2.default.createElement(
    "span",
    _extends({ className: "icon" }, otherProps),
    _react2.default.createElement("i", { className: "fa fa-" + name })
  );
};
exports.Icon = Icon;