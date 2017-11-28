'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageListItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeEventKiller = function makeEventKiller(fn) {
  return function (event) {
    event.preventDefault();
    event.stopPropagation();
    fn();
  };
};

/**
 * Get the difference between 2 dates in days.
 * @param {Date} before
 * @param {Date} after
 * @return {number}
 */
function humanizedDiff(before) {
  var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  var daysDiff = Math.round((after - before) / (24 * 60 * 60 * 1000));
  return daysDiff < 30 ? daysDiff + ' days' : Math.round(daysDiff / 30) + ' months';
}

var MessageListItem = exports.MessageListItem = function MessageListItem(props) {
  var message = props.message,
      deleteMessage = props.deleteMessage,
      toggleFlagged = props.toggleFlagged;


  var onClickFlag = makeEventKiller(toggleFlagged);
  var onClickDelete = makeEventKiller(deleteMessage);
  var onClickReply = makeEventKiller(function () {
    return alert('Reply to ' + message.from);
  });

  return _react2.default.createElement(
    'div',
    { className: 'media hide message-list-item' },
    _react2.default.createElement(
      'div',
      { className: 'media-left' },
      _react2.default.createElement(
        'div',
        { className: 'image is-64x64' },
        _react2.default.createElement('img', { src: message.fromAvatar })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'media-content content columns' },
      _react2.default.createElement(
        'div',
        { className: 'column is-10' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' + message.id, className: 'is-link' },
          message.subject
        ),
        _react2.default.createElement(
          'p',
          null,
          message.body.substring(0, 100) + '...'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'small',
            null,
            _react2.default.createElement(
              'a',
              { className: 'is-link', onClick: onClickReply },
              'Reply to ',
              message.from
            ),
            ' ● ',
            humanizedDiff(new Date(message.sent)),
            ' ago \u25CF',
            _react2.default.createElement(_Icon.Icon, { name: 'trash', onClick: onClickDelete })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'column flex-center-all', onClick: onClickFlag },
        _react2.default.createElement(_Icon.Icon, {
          name: 'flag',
          className: (0, _classnames2.default)('clickable', { 'text-red': message.flagged })
        })
      )
    )
  );
};