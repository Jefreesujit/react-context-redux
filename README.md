# react-context-state

A simple wrapper over React's new [Context API](https://reactjs.org/docs/context.html), to provide the redux feel for developers.

## Installation

```
npm i react-context-state --save
```

## Usage

You can use it the same way as redux provider and connect. Dispatch will be available as a prop by default when connect is used.

**store.js**
```js
import createStore from 'react-context-state';
let initialState = { count: 0 };

export const { Provider, connect } = createStore(initialState)
```

**App.js:**
```js
import { Provider } from './store';
import Counter from './counter';

const App = (props) => (
  <Provider>
    <Counter />
  </Provider>
)
```

**myComponent.js:**
```js
import { connect } from './store';

const increaseCount = value => dispatch => {
    dispatch({  key: 'example.value',  payload: ++value });
}}

const Counter = (props) => {
    const counter = () => props.dispatch(increaseCount());
    return (
      <div>
        <span>{props.value}</span>
        <button onClick={counter}>Count</button>
      </div>
   );
}

const select = (state) => ({ value: state.example.value });

export default connect(select)(Counter);
```

## Examples

See `/examples` folder for more examples

## Contribution

1) Fork this repo, clone it locally
2) `npm i`
3) `npm run build`
4) `npm run build:example`
5) Submit a pull request once you are done with your changes


## LICENSE
MIT
