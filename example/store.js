import createStore from '../src';
import initialState from './defaultState';

export const { Provider, connect } = createStore(initialState);