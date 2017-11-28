'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBrowser = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Sidebar = require('./Sidebar');

var _SearchInput = require('./SearchInput');

var _MessageList = require('./MessageList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageBrowser = exports.MessageBrowser = function MessageBrowser(props) {
  return _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
      'div',
      { className: 'column is-third' },
      _react2.default.createElement(_Sidebar.Sidebar, {
        filterFlagged: props.filterFlagged,
        updateFilterFlagged: props.updateFilterFlagged,
        sentOrder: props.sentOrder,
        updateSentOrder: props.updateSentOrder
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'column' },
      _react2.default.createElement(_SearchInput.SearchInput, {
        value: props.searchText,
        onChange: props.updateSearchText,
        loading: props.loading
      }),
      _react2.default.createElement(_MessageList.MessageList, {
        messages: props.messages,
        loading: props.loading,
        loadMore: props.loadMore,
        deleteMessage: props.deleteMessage,
        toggleMessageFlagged: props.toggleMessageFlagged
      })
    )
  );
};