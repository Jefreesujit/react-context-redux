import { createStore, applyMiddleware } from '../../src';
import defaultState from './defaultState';
import logger from 'redux-logger';

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  action.payload = action.payload * 2;
  next(action);
}

export const { Provider, connect } = createStore(defaultState, applyMiddleware(logger, customMiddleWare));
