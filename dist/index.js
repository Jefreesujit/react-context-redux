'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _set = require('keypather/set');

var _set2 = _interopRequireDefault(_set);

var _Provider = require('./Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStore = function createStore(initialState) {
  var setState = void 0,
      getState = void 0;

  var context = (0, _react.createContext)();

  var initializeProvider = function initializeProvider(self) {
    console.log('provider set');
    setState = function setState(state, callback) {
      return self.setState(state, callback);
    };
    getState = function getState() {
      return self.state;
    };
  };

  var dispatcher = function dispatcher(data) {
    console.log(data);
    var newState = Object.assign({}, getState());
    (0, _set2.default)(newState, data.key, data.payload, { force: true });
    setState(newState);
  };

  console.log(setState);

  var Provider = (0, _Provider2.default)(initializeProvider, context.Provider, initialState);
  var connect = (0, _connect2.default)(context.Consumer, dispatcher);

  return {
    Provider: Provider,
    connect: connect
  };
};

exports.default = createStore;