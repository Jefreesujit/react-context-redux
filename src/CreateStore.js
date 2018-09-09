import { createContext } from 'react';
import createProvider from './Provider';
import createConnect from './Connect';

/**
 * @module createStore
 * @description Creates an global store.
 * @param {Object} defaultState - The default state of the application need to create the store
 * @returns {Node}  - Returns a wrapper provider component
 * @returns {function}  - A "connect" function to connect a component with global state
 */
const createStore = (initialState, middlewareList = []) => {
  let _updateState, _getState, initializedMiddleware;

  const { Provider, Consumer } = createContext();

  /**
   * @function dispatch
   * @description To update values in global store.
   * @param {Object} options - A object with the details to update values in global store
   * @param {string} options.key - KeyPath to which the value has to be assigned, separated by '.'
   * @param {Object} options.payload - Value to be set against the provided Keypath
   */
  const dispatcher = data => {
    let appStore = _getState();
    triggerMiddlewareChain(data, curState);
    _updateState(data);
  };

  const initializeProvider = self => {
    _updateState = self.updateState;
    _getState = self._getState;
    initializedMiddleware = middlewareList.map((middleware) => 
      (action, curState) => 
        new Promise((resolve, reject) => 
          middleware(curState)(resolve)(action)));
  };

  const triggerMiddlewareChain = (initialAction, curState) => {
    let promise = Promise.resolve(initialAction);
    initializedMiddleware.forEach((customMiddleware) => {
      promise = promise.then((action) => customMiddleware[i](action, curState));
    });
  }

  // function setupMiddleware (initialAction, curState,  ...extraArgs) {
  //   return initializedMiddleware.reduce((prev, next) => {
  //     return prev.then((action) => next(action, curState, ...extraArgs));
  //   }, Promise.resolve(initialAction));
  // }

  const provider = createProvider(initializeProvider, Provider, initialState);

  /**
   * @function connect
   * @description Connects the passed component with the global store.
   * @param {function} select - To map global state to props, should return an JSON object
   * @param {Node} component - A React element, to which the props has to be passed
   * @returns {Node}  - A wrapper React element
   */
  const connect = createConnect(Consumer, dispatcher);

  return {
    Provider: provider,
    connect
  };
};

export default createStore;
