import React from 'react';
import { Provider } from '../store';
import Counter from './counter';

const App = () => (
  <Provider>
    <Counter text="Count" />
  </Provider>
)

export default App;
