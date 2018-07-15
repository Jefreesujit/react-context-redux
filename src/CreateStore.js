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
const createStore = initialState => {
  let _updateState;

  const { Provider, Consumer } = createContext();

  /**
   * @function dispatch
   * @description To update values in global store.
   * @param {Object} options - A object with the details to update values in global store
   * @param {string} options.key - KeyPath to which the value has to be assigned, separated by '.'
   * @param {Object} options.payload - Value to be set against the provided Keypath
   */
  const dispatcher = data => _updateState(data);

  const initializeProvider = self => {
    _updateState = self.updateState;
  };

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
