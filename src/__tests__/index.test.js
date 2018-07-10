/* global describe it expect */
import React from 'react';
import { shallow } from 'enzyme';
import createStore from '../CreateStore';

const defaultState = { count: 0 };

const { Provider, connect } = createStore(defaultState);

const select = state => ({ count: state.count });

const Counter = ({ count }) => (
  <button
    type="button"
    onClick={() => dispatch => dispatch({ key: 'count', value: count + 1 })}
  >
    {count}
  </button>
);

Counter.displayName = 'Counter';

describe('Checking Store creation', () => {
  it('Provider and connect are properly defined', () => {
    expect(Provider).toBeDefined();
    expect(connect).toBeDefined();
  });
});

describe('Checking Rendering', () => {
  let Component;
  let ConnectedComp;

  describe('Actual Component Rendering', () => {
    ConnectedComp = connect(select)(Counter);
    Component = shallow(
      <Provider>
        <ConnectedComp test="test" />
      </Provider>
    );
    const CounterWrapper = Component.find('Connect(Counter)');

    it('Provider is rendered', () => {
      expect(Component.length).toEqual(1);
    });

    it('Checking if Provider has default state set', () => {
      expect(Component.prop('value')).toEqual(defaultState);
    });

    it('Counter component is rendered', () => {
      expect(CounterWrapper.length).toEqual(1);
    });
  });
});
