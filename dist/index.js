'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _Provider = require('./Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStore = function createStore(initialState) {
  var context = (0, _react.createContext)();

  var dispatcher = function dispatcher(data) {
    console.log('dispatcher', data);
  };

  var Provider = (0, _Provider2.default)(context.Provider, initialState);
  var connect = (0, _connect2.default)(context.Consumer, dispatcher);

  console.log(Provider);

  return {
    Provider: Provider,
    connect: connect
  };
};

exports.default = createStore;