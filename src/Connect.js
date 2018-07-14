import React from 'react';

const connect = (
  Consumer,
  dispatcher
) => mapStateToProps => WrappedComponent => {
  /**
   * Connects the passed component with the global store.
   * @param {function} select - To map global state to props, should return an JSON object
   * @param {Node} component - A React element, to which the props should be passed
   * @returns {Node}  - A wrapper React element
   */

  const dispatchProp = actionCallback => {
    if (typeof actionCallback === 'function') {
      actionCallback(dispatcher);
    }
  };

  const ConnectedComponent = props => (
    <Consumer>
      {state => {
        const mappedProps = mapStateToProps(state || {});
        return (
          <WrappedComponent
            dispatch={dispatchProp}
            {...props}
            {...mappedProps}
          />
        );
      }}
    </Consumer>
  );

  ConnectedComponent.displayName = `Connect(${WrappedComponent.displayName ||
    WrappedComponent.name})`;

  return ConnectedComponent;
};

export default connect;
