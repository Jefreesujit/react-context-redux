import { createContext } from "react";
import createProvider from "./Provider";
import createConnect from "./Connect";

const createStore = initialState => {
  let updateState;

  const { Provider, Consumer } = createContext();
  const dispatcher = data => updateState(data);

  const initializeProvider = self => {
    updateState = self.updateState;
  };

  const provider = createProvider(initializeProvider, Provider, initialState);
  const connect = createConnect(Consumer, dispatcher);

  return {
    Provider: provider,
    connect
  };
};

export default createStore;
