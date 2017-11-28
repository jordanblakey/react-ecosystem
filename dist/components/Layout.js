'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = exports.Layout = function Layout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header.Header, {
      title: 'ReactMail',
      subtitle: 'A Great E-Mail Client!'
    }),
    _react2.default.createElement(
      'div',
      { className: 'section outer-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        children
      )
    )
  );
};