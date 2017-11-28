'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./App');

var _MessageBrowserContainer = require('./components/MessageBrowser/MessageBrowserContainer');

var _MessageDetailContainer = require('./components/MessageDetail/MessageDetailContainer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App.App },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _MessageBrowserContainer.MessageBrowserContainer }),
    _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _MessageDetailContainer.MessageDetailContainer })
  )
);