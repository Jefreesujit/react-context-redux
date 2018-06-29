// @flow
/* eslint-disable no-undef */

import { createContext } from 'react'

import createProvider from './Components/Provider'
import createConnect from './connect';

const createStore = (initialState) => {
  const context = createContext();

  const Provider = createProvider(context.Provider, initialState)
  const connect = createConnect(context.Consumer)

  return {
    Provider,
    connect
  }
}

export default createStore
