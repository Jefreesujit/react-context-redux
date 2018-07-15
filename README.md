# react-context-redux [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

A Redux style wrapper over React's new [Context API](https://reactjs.org/docs/context.html).

## Installation

Just like React, react-context-redux also can be used through both `NPM` and `<script>` tag

```
npm i react-context-redux --save
```

```
<script src="https://unpkg.com/react-context-redux/umd/react-context-redux.min.js" crossorigin></script>
```
Or use it with a specific version you need

```
<script src="https://unpkg.com/react-context-redux@0.2.0/umd/react-context-redux.min.js" crossorigin></script>
```

## Usage

You can use it the same way as redux provider and connect. Dispatch will be available as a prop by default when connect is used.

**store.js**
```js
import { createStore } from 'react-context-redux';

export const { Provider, connect } = createStore({ // pass your initial state
  like: {
    count: 0
  }
});
```

**App.js:**
```js
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
```

**LikeButton.js:**
```js
import React from 'react';
import { connect } from './store';

const increaseCount = value => {
  // while dispatching we expect to things two be present in the param object
  // key - path to be updated in state ( separated by . )
  // payload - value to be put on that path
  // if some keys specified in the path are not available we will create them
  return dispatch => {
    dispatch({
      key: 'like.count',
      payload: value
    });
  };
};

const LikeButton = ({ count, dispatch }) => (
  <button onClick={() => dispatch(increaseCount(count + 1))} type="button">
    {/* We have a redux-thunk like approach where you param for dispatch  is a function */}
    Liked {count} times
  </button>
);

const select = state => {
  return {
    count: state.like.count
  };
};

export default connect(select)(LikeButton);

```

`Note: While using react-context-redux through a script tag, make sure to wrap the provider`

**index.js**
```js
class ProviderWrapper extends React.Component {
  render() {
    return e(Provider, this.props);
  }
}

ReactDOM.render(
  e(ProviderWrapper, {}, e(connect(select)(LikeButton))),
  document.getElementById('counter_container')
);
```

## Examples

See `/examples` folder for more examples

## Contribution

Contributions are awesome. Go through our [Contribution Guide](CONTRIBUTING.md) to get started.


## LICENSE
MIT

[npm-image]: https://badge.fury.io/js/react-context-redux.svg
[npm-url]: https://npmjs.org/package/react-context-redux
[travis-image]: https://travis-ci.org/Jefreesujit/react-context-redux.svg?branch=master
[travis-url]: https://travis-ci.org/Jefreesujit/react-context-redux
[daviddm-image]: https://david-dm.org/Jefreesujit/react-context-redux.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Jefreesujit/react-context-redux