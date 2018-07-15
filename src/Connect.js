import React from 'react';
/**
 * @module connect
 */

const connect = (
  Consumer,
  dispatcher
) => mapStateToProps => WrappedComponent => {
  /**
   * @function actionCallback
   * @description To dispatch values to global store.
   * @param {function} actionCallback - A function that receives dispatch function as a param
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
