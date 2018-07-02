import React, { Component } from 'react';

const EnhancedProvider = (initializeProvider, Provider, initialState) =>
  class EnhancedProvider extends Component {
    constructor(props) {
      super();
      this.state = props.initialState || initialState;
      initializeProvider(this);
    }

    render() {
      return (
        <Provider value={this.state}>
          {this.props.children}
        </Provider>
      );
    }
  }

export default EnhancedProvider;
