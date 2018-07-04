import React, { Component } from 'react';
import setKeypath from 'keypather/set';
import PropTypes from 'prop-types';

const WrapperProvider = (initializeProvider, Provider, initialState) =>
  class EnhancedProvider extends Component {
    constructor(props) {
      super();
      this.state = props.initialState || initialState;
      this.updateState = data => this._updateState(data);
      initializeProvider(this);
    }

    _updateState(data) {
      const newState = Object.assign({}, this.state);
      setKeypath(newState, data.key, data.payload, { force: true });
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
