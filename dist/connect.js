'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var connect = function connect(Consumer, dispatcher) {
  return function (mapStateToProps) {
    return function (WrappedComponent) {
      var dispatchProp = function dispatchProp(actionCallback) {
        actionCallback(dispatcher);
      };

      var ConnectedComponent = function ConnectedComponent(props) {
        return React.createElement(
          Consumer,
          null,
          function (state) {
            var mappedProps = mapStateToProps(state || {});
            return React.createElement(WrappedComponent, _extends({ dispatch: dispatchProp
            }, props, mappedProps));
          }
        );
      };

      ConnectedComponent.displayName = 'Connect(' + (WrappedComponent.displayName || WrappedComponent.name) + ')';

      return ConnectedComponent;
    };
  };
};

exports.default = connect;