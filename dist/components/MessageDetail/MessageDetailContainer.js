'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDetailContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _MessageDetail = require('./MessageDetail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageDetailContainer = exports.MessageDetailContainer = _react2.default.createClass({
  displayName: 'MessageDetailContainer',


  contextTypes: {
    router: _react2.default.PropTypes.object
  },

  getInitialState: function getInitialState() {
    return {
      loading: false
    };
  },
  componentDidMount: function componentDidMount() {
    var params = this.props.params,
        requestMessage = this.requestMessage;

    if (!routeMessage(this.props)) {
      requestMessage(params.id);
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    // We got our route message! Is this the ideal solution/pattern?
    if (this.props.messages.length === 0 && nextProps.messages.length > 0) {
      this.setState({ loading: false });
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // Based on "before" and "now", should we redirect?
    var shouldRedirect =
    // If we don't have it now...
    !routeMessage(this.props) && (
    // ...and we had it before (deleted)
    routeMessage(prevProps) ||
    // ...or we couldn't retrieve it
    prevState.loading && !this.state.loading);

    if (shouldRedirect) {
      this.context.router.push('/');
    }
  },
  deleteMessage: function deleteMessage() {
    var _props = this.props,
        id = _props.params.id,
        deleteMessage = _props.deleteMessage;

    deleteMessage(Number(id));
  },
  toggleFlagged: function toggleFlagged() {
    var _props2 = this.props,
        id = _props2.params.id,
        toggleMessageFlagged = _props2.toggleMessageFlagged;

    toggleMessageFlagged(Number(id));
  },


  /**
   * GET /messages/:id
   */
  requestMessage: function requestMessage(id) {
    var _this = this;

    this.setState({ loading: true });

    _axios2.default.get('messages/' + id).then(function (message) {
      return _this.props.updateMessages([message]);
    }).catch(function (err) {
      return _this.setState({ loading: false });
    });
  },
  render: function render() {
    var message = routeMessage(this.props);

    if (this.props.loading || !message) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading...'
      );
    }

    var props = {
      message: message,
      deleteMessage: this.deleteMessage,
      toggleFlagged: this.toggleFlagged
    };

    return _react2.default.createElement(_MessageDetail.MessageDetail, props);
  }
});

/**
 * Pluck "active" message for route out of props
 * @param props
 * @return {{}|bool}
 */
function routeMessage(props) {
  return _lodash2.default.find(props.messages, {
    id: Number(props.params.id)
  });
}