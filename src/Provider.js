import React, { Component } from 'react';
import setKeypath from 'keypather/set';

const WrapperProvider = (initializeProvider, Provider, initialState) =>
  class EnhancedProvider extends Component {
    constructor(props) {
      super();
      this.state = props.initialState || initialState;
      this.updateState = data => this._updateState(data);
      initializeProvider(this);
    }

    _updateState (data) {
      let newState = Object.assign({}, this.state);
      setKeypath(newState, data.key, data.payload, {force: true});
      this.setState(newState);
    }

    render() {
      return (
        <Provider value={this.state}>
          {this.props.children}
        </Provider>
      );
    }
  }

export default WrapperProvider;
