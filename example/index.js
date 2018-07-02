import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './store';
import Counter from './counter';

const App = (props) => (
  <Provider>
    <Counter {...props} />
  </Provider>
)

ReactDOM.render(<App text="Count" />, document.getElementById('container'))
