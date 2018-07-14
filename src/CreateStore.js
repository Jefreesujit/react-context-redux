import { createContext } from 'react';
import createProvider from './Provider';
import createConnect from './Connect';

/** CreateStore function
 * @exports CreateStore
 */

const createStore = initialState => {
  /**
   * Creates an global store.
   * @param {Object} defaultState - The default state of the application need to create the sote
   * @returns {Node, function}  - Returns provider component and connect function
   */

  let _updateState;

  const { Provider, Consumer } = createContext();
  const dispatcher = data => _updateState(data);

  const initializeProvider = self => {
    _updateState = self.updateState;
  };

  const provider = createProvider(initializeProvider, Provider, initialState);
  const connect = createConnect(Consumer, dispatcher);

  return {
    Provider: provider,
    connect
  };
};

export default createStore;
