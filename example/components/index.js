import React from 'react';
import { Provider } from '../store';
import Component from './component';

const App = () => (
  <Provider>
    <Component />
  </Provider>
)

export default App;
