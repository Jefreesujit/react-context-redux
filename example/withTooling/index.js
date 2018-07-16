import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './store';
import LikeButton from './LikeButton';

const App = () => (
  <Provider>
    <LikeButton />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('counter_container'));
