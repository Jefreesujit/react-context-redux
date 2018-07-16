import React from 'react';
import { connect } from './store';

const increaseCount = value => {
  return dispatch => {
    dispatch({
      key: 'like.count',
      payload: value
    });
  };
};

const LikeButton = ({ count, dispatch }) => (
  <button onClick={() => dispatch(increaseCount(count + 1))} type="button">
    Liked {count} times
  </button>
);

const select = state => {
  return {
    count: state.like.count
  };
};

export default connect(select)(LikeButton);
