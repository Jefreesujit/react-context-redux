import { createStore } from '../../src';
import defaultState from './defaultState';

export const { Provider, connect } = createStore(defaultState);
