'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDetail = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var btnClasses = "button is-outlined is-pulled-right";

var MessageDetail = exports.MessageDetail = function MessageDetail(_ref) {
  var message = _ref.message,
      deleteMessage = _ref.deleteMessage,
      toggleFlagged = _ref.toggleFlagged;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/', className: 'button is-info is-outlined' },
      'Back'
    ),
    _react2.default.createElement(
      'button',
      { onClick: deleteMessage, className: btnClasses },
      _react2.default.createElement(_Icon.Icon, { name: 'trash' })
    ),
    _react2.default.createElement(
      'button',
      { onClick: toggleFlagged, className: (0, _classnames2.default)(btnClasses, { 'text-red': message.flagged }) },
      _react2.default.createElement(_Icon.Icon, { name: 'flag' })
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'columns' },
      _react2.default.createElement(
        'div',
        { className: 'column is-3' },
        _react2.default.createElement(
          'div',
          { className: 'image' },
          _react2.default.createElement('img', { src: message.fromAvatar })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'column' },
        _react2.default.createElement(
          'h1',
          { className: 'title' },
          message.from
        ),
        _react2.default.createElement(
          'h2',
          { className: 'subtitle' },
          message.subject
        ),
        _react2.default.createElement(
          'p',
          { className: 'subtitle is-5' },
          message.body
        )
      )
    )
  );
};