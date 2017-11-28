'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MessageListItem = require('./MessageListItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageList = exports.MessageList = function MessageList(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        transitionName: 'animated-list-item',
        transitionEnterTimeout: 250,
        transitionLeaveTimeout: 250
      },
      props.messages.map(function (message) {
        return _react2.default.createElement(
          'div',
          { key: message.id },
          _react2.default.createElement(_MessageListItem.MessageListItem, {
            deleteMessage: function deleteMessage() {
              return props.deleteMessage(message.id);
            },
            toggleFlagged: function toggleFlagged() {
              return props.toggleMessageFlagged(message.id);
            },
            message: message
          })
        );
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'is-text-centered' },
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'button',
        {
          className: (0, _classnames2.default)('button is-primary', { 'is-loading': props.loading }),
          onClick: props.loadMore
        },
        'Load More'
      )
    )
  );
};