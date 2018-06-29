import React, { Component } from 'react';

const EnhancedProvider = (Provider, initialState) =>
  class EnhancedProvider extends Component {
    constructor(props) {
      super()
      this.state = props.initialState || initialState
    }

    render() {
      return <Provider value={this.state}>{this.props.children}</Provider>
    }
  }

export default EnhancedProvider;
