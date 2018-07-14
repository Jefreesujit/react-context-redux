import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setValue } from 'json-keypath';

const WrapperProvider = (initializeProvider, Provider, initialState) =>
  class EnhancedProvider extends Component {
    constructor(props) {
      super(props);
      this.state = props.initialState || initialState;
      this.updateState = data => this._updateState(data);
      initializeProvider(this);
    }

    _updateState(data) {
      let newState = JSON.parse(JSON.stringify(this.state));
      if (data.key !== '') {
        setValue(newState, data.key, data.payload);
      } else {
        newState = data.payload || initialState;
      }
      this.setState(newState);
    }

    render() {
      const { children } = this.props;
      return <Provider value={this.state || {}}>{children}</Provider>;
    }
  };

WrapperProvider.displayName = 'ReactContextReduxProviderWrapper';

WrapperProvider.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.object
};

export default WrapperProvider;
