import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setValue } from 'json-keypath';

/**
 * @module provider
 */

const WrapperProvider = (initializeProvider, Provider, initialState) =>
  /**
   * @class Provider
   * @description Provider Component.
   * @prop {object} defaultState - The default state of the application need to create the store, if not passed as part of createStore
   * @prop {Node} children - React element to which the store should be available
   */
  class EnhancedProvider extends Component {
    constructor(props) {
      super(props);
      this.state = props.initialState || initialState;
      this.updateState = data => this._updateState(data);
      initializeProvider(this);
    }

    _updateState(data) {
      if (data && typeof data.key === 'string') {
        let newState = JSON.parse(JSON.stringify(this.state));
        if (data.key !== '') {
          setValue(newState, data.key, data.payload);
        } else {
          newState = data.payload || initialState;
        }
        this.setState(newState);
      } else {
        throw new Error('Invalid arguments to set the state');
      }
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
