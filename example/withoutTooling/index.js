/* global React ReactDOM ReactContextRedux */
/* eslint-disable react/no-multi-comp */

const e = React.createElement;
const CreateStore = ReactContextRedux.createStore;
const applyMiddleware = ReactContextRedux.applyMiddleware;
const defaultState = {
  like: {
    count: 0
  }
};

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  action.payload = action.payload * 2;
  next(action);
}

const increaseCount = value => {
  return dispatch => {
    dispatch({
      key: 'like.count',
      payload: value
    });
  };
};

const { Provider, connect } = CreateStore(defaultState, applyMiddleware(customMiddleWare));

class LikeButton extends React.Component {
  render() {
    const { count, dispatch } = this.props;

    return e(
      'button',
      {
        onClick: () => dispatch(increaseCount(count + 1))
      },
      `Liked ${count} times`
    );
  }
}

const select = state => {
  return {
    count: state.like.count
  };
};

// necessary as Provider can't be accessed directly
class ProviderWrapper extends React.Component {
  render() {
    return e(Provider, this.props);
  }
}

ReactDOM.render(
  e(ProviderWrapper, {}, e(connect(select)(LikeButton))),
  document.getElementById('counter_container')
);
