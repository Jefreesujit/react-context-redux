import { CreateStore } from "../src";
import initialState from "./defaultState";

export const { Provider, connect } = createStore(initialState);
