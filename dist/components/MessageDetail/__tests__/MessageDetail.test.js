'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _MessageDetail = require('../MessageDetail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Component: MessageDetail', function () {
  // Minimum required props to render w/o errors/warnings
  var minProps = {
    message: {},
    deleteMessage: function deleteMessage() {},
    toggleFlagged: function toggleFlagged() {}
  };

  it('renders without exploding', function () {
    (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(_MessageDetail.MessageDetail, minProps)).length).toEqual(1);
  });

  it('links back to the message listing "search" page', function () {
    (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(_MessageDetail.MessageDetail, minProps)).find('Link').props().to).toEqual('/');
  });

  // Given props, render and pluck out the "Flag" button
  var renderToFlagButton = function renderToFlagButton(props) {
    return (0, _enzyme.shallow)(_react2.default.createElement(_MessageDetail.MessageDetail, props)).find('button').find({ onClick: props.toggleFlagged });
  };

  it('indicates whether the message is "flagged"', function () {
    /** Given a message, assert that there is an "indicator"*/
    var hasIndicator = function hasIndicator(message) {
      return renderToFlagButton(_extends({}, minProps, { message: message })).hasClass('text-red');
    };

    (0, _expect2.default)(hasIndicator({ flagged: true })).toEqual(true);
    (0, _expect2.default)(hasIndicator({ flagged: false })).toEqual(false);
  });

  it('toggles "flagged" status when flag button is clicked', function () {
    var props = _extends({}, minProps, {
      toggleFlagged: _expect2.default.createSpy()
    });
    renderToFlagButton(props).simulate('click');
    (0, _expect2.default)(props.toggleFlagged).toHaveBeenCalled();
  });

  it('deletes itself when the "delete" button is clicked', function () {
    var props = _extends({}, minProps, {
      deleteMessage: _expect2.default.createSpy()
    });
    (0, _enzyme.shallow)(_react2.default.createElement(_MessageDetail.MessageDetail, props)).find('button').find({ onClick: props.deleteMessage }).simulate('click');
    (0, _expect2.default)(props.deleteMessage).toHaveBeenCalled();
  });
});