'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBrowserContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _MessageBrowser = require('./MessageBrowser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var MessageBrowserContainer = exports.MessageBrowserContainer = _react2.default.createClass({
  displayName: 'MessageBrowserContainer',
  getInitialState: function getInitialState() {
    return {
      loading: false
    };
  },
  componentDidMount: function componentDidMount() {
    // Debounce requestMessages so we aren't submitting crazy requests on typing/etc...!
    this.requestMessages = _lodash2.default.debounce(this.requestMessages, 750, { leading: true });
    var messages = this.props.messages,
        requestMessages = this.requestMessages;

    if (messages.length <= 1) {
      requestMessages();
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (paramsChanged(this.props, prevProps)) {
      // If anything other than the pagination info changed, reset back to 1st page.
      if (this.props.page > 1 && this.props.page === prevProps.page) {
        this.props.updatePage(1);
      } else {
        this.requestMessages();
      }
    }
  },


  /**
   * GET /messages - Query string based on props.
   */
  requestMessages: function requestMessages() {
    var _this = this;

    this.setState({ loading: true });

    _axios2.default.get('messages', { params: propsToParams(this.props) }).then(function (messages) {
      _this.setState({ loading: false });
      var newMessages = _this.props.page > 1 ? [].concat(_toConsumableArray(_this.props.messages), _toConsumableArray(messages)) : messages;
      _this.props.updateMessages(newMessages);
    }).catch(function (err) {
      return _this.setState({ loading: false });
    });
  },
  loadMore: function loadMore() {
    this.props.updatePage(this.props.page + 1);
  },
  render: function render() {
    var props = _extends({}, this.props, {
      loadMore: this.loadMore,
      loading: this.state.loading
    });

    return _react2.default.createElement(_MessageBrowser.MessageBrowser, props);
  }
});

/**
 * Build up query params from props.
 * @param props
 * @return string
 */
function propsToParams(props) {
  var filterFlagged = props.filterFlagged,
      sentOrder = props.sentOrder,
      searchText = props.searchText,
      page = props.page;

  var pageSize = 5;
  var queryParams = {
    _start: (page - 1) * pageSize,
    _end: (page - 1) * pageSize + pageSize,
    _sort: 'sent',
    _order: sentOrder
  };
  if (filterFlagged) queryParams.flagged = true;
  if (searchText) queryParams.q = searchText.trim();

  return queryParams;
}

/**
 * Check if queryParams have changed.
 * @param propsA
 * @param propsB
 * @return {boolean}
 */
function paramsChanged(propsA, propsB) {
  return !_lodash2.default.isEqual(propsToParams(propsB), propsToParams(propsA));
}