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
  var updateState = void 0;

  var _createContext = (0, _react.createContext)(),
      Provider = _createContext.Provider,
      Consumer = _createContext.Consumer;

  var dispatcher = function dispatcher(data) {
    return updateState(data);
  };

  var initializeProvider = function initializeProvider(self) {
    updateState = self.updateState;
  };

  var provider = (0, _Provider2.default)(initializeProvider, Provider, initialState);
  var connect = (0, _connect2.default)(Consumer, dispatcher);

  return {
    Provider: provider,
    connect: connect
  };
};

exports.default = createStore;