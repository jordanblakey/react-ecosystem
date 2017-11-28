'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _routes = require('./routes');

require('./styles/general.css');

require('./styles/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Some basic axios setup.
_axios2.default.defaults.baseURL = 'http://localhost:3001';
var responseToBody = function responseToBody(_ref) {
  var data = _ref.data;
  return data;
};
// Convert all response directly to data/JSON
_axios2.default.interceptors.response.use(responseToBody);

(0, _reactDom.render)(_routes.routes, document.querySelector('#root'));