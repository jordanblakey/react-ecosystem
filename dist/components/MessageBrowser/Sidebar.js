"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = exports.Sidebar = function Sidebar(props) {
  var filterFlagged = props.filterFlagged,
      updateFilterFlagged = props.updateFilterFlagged,
      sentOrder = props.sentOrder,
      updateSentOrder = props.updateSentOrder;


  return _react2.default.createElement(
    "div",
    { className: "content" },
    _react2.default.createElement(
      "h3",
      null,
      "Sidebar Tools"
    ),
    _react2.default.createElement(
      "label",
      { className: "label" },
      "Sort By"
    ),
    _react2.default.createElement(
      "p",
      { className: "control" },
      _react2.default.createElement(
        "span",
        { className: "select" },
        _react2.default.createElement(
          "select",
          {
            value: sentOrder,
            onChange: function onChange(_ref) {
              var value = _ref.target.value;
              return updateSentOrder(value);
            }
          },
          _react2.default.createElement(
            "option",
            { value: "DESC" },
            "Most Recent"
          ),
          _react2.default.createElement(
            "option",
            { value: "ASC" },
            "Least Recent"
          )
        )
      )
    ),
    _react2.default.createElement(
      "label",
      { className: "label" },
      "Filter By"
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "label",
        { className: "checkbox" },
        _react2.default.createElement("input", {
          type: "checkbox",
          checked: filterFlagged,
          onChange: function onChange(_ref2) {
            var checked = _ref2.target.checked;
            return updateFilterFlagged(checked);
          }
        }),
        "Flagged"
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "label",
        { className: "checkbox is-disabled" },
        _react2.default.createElement("input", { type: "checkbox", disabled: true }),
        "Unread"
      )
    )
  );
};