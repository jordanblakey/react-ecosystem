"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderWithDomHelpers = exports.HeaderWithoutJsx = exports.Header = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return _react2.default.createElement(
    "section",
    { className: "hero is-primary is-bold" },
    _react2.default.createElement(
      "div",
      { className: "hero-content" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "h1",
          { className: "title" },
          title
        ),
        _react2.default.createElement(
          "h2",
          { className: "subtitle" },
          subtitle
        )
      )
    )
  );
};

/**
 * React.createElement({string|ReactClass} type, [{object} props], [children ...])
 * http://facebook.github.io/react/docs/top-level-api.html#react.createelement
 * Example JSX -> JS
 *  JSX: <div className="hero">Text</div>
 *  JS:  React.createElement('div', {className: 'hero'}, 'Text')
 * Import createElement and shorten to el
 */
/**
 * Embrace the JSX! It isn't magic. Just sugar.
 * See for yourself!
 *  All 3 Header components below are equivalent.
 *  1) With JSX
 *  2) Without JSX
 *  3) Without JSX (using DOM helpers)
 * React must be within the Scope for JSX
 * http://facebook.github.io/react/docs/jsx-in-depth.html
 */
var HeaderWithoutJsx = exports.HeaderWithoutJsx = function HeaderWithoutJsx(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle;
  return (0, _react.createElement)('section', { className: 'hero is-primary is-bold' }, (0, _react.createElement)('div', { className: 'hero-content' }, (0, _react.createElement)('div', { className: 'container' }, (0, _react.createElement)('h1', { className: 'title' }, title), (0, _react.createElement)('h2', { className: 'subtitle' }, subtitle + ' Without JSX'))));
};

/**
 * React.DOM provides convenience wrappers around React.createElement for DOM components.
 * http://facebook.github.io/react/docs/top-level-api.html#react.dom
 */
var section = _react.DOM.section,
    div = _react.DOM.div,
    h1 = _react.DOM.h1,
    h2 = _react.DOM.h2;
var HeaderWithDomHelpers = exports.HeaderWithDomHelpers = function HeaderWithDomHelpers(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle;
  return section({ className: 'hero is-primary is-bold' }, div({ className: 'hero-content' }, div({ className: 'container' }, h1({ className: 'title' }, title), h2({ className: 'subtitle' }, subtitle + ' Without JSX (using DOM helpers)'))));
};