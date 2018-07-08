import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-param-reassign */
// TODO: refactor?
const findAndUpdate = (object, key, val) => {
  const a = key.split('.');

  const n = a.length - 1;
  for (let i = 0; i < n; i += 1) {
    const k = a[i];
    if (k in object) {
      object = object[k];
    } else {
      object[k] = {};
      object = object[k];
    }
  }
  object[a[n]] = val;
};
/* eslint-enable no-param-reassign */

const WrapperProvider = (initializeProvider, Provider, initialState) =>
  class EnhancedProvider extends Component {
    constructor(props) {
      super(props);
      this.state = props.initialState || initialState;
      this.updateState = data => this._updateState(data);
      initializeProvider(this);
    }

    _updateState(data) {
      const newState = JSON.parse(JSON.stringify(this.state));
      findAndUpdate(newState, data.key, data.payload);
      this.setState(newState);
    }

    render() {
      const { children } = this.props;
      return <Provider value={this.state}>{children}</Provider>;
    }
  };

WrapperProvider.displayName = 'ReactContextReduxProviderWrapper';

WrapperProvider.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.object
};

export default WrapperProvider;
