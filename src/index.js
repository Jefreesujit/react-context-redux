import { createContext } from 'react';
import createProvider from './Provider';
import createConnect from './connect';

const createStore = (initialState) => {
  const context = createContext();

  let dispatcher = (data) => {
    console.log('dispatcher', data);
  }

  const Provider = createProvider(context.Provider, initialState);
  const connect = createConnect(context.Consumer, dispatcher);

  console.log(Provider);

  return {
    Provider,
    connect
  }
}

export default createStore;
