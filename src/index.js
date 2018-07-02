import { createContext } from 'react';
import setKeypath from 'keypather/set';
import createProvider from './Provider';
import createConnect from './connect';

const createStore = (initialState) => {
  let setState, getState;

  const context = createContext();

  const initializeProvider = self => {
    console.log('provider set');
    setState = (state, callback) => self.setState(state, callback);
    getState = () => self.state;
  }

  const dispatcher = (data) => {
    console.log(data);
    let newState = Object.assign({}, getState());
    setKeypath(newState, data.key, data.payload, {force: true});
    setState(newState);
  }

  console.log(setState);

  const Provider = createProvider(initializeProvider, context.Provider, initialState);
  const connect = createConnect(context.Consumer, dispatcher);

  return {
    Provider,
    connect
  };
}

export default createStore;
