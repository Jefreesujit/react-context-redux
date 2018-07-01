import * as React from 'react';

const connect = (Consumer, dispatcher) => mapStateToProps => WrappedComponent => {
  const dispatchProp = actionCallback => {
    actionCallback(dispatcher);
  }

  const ConnectedComponent = props => (
    <Consumer>
      {state => {
        const mappedProps = mapStateToProps(state || {})
        return (
          <WrappedComponent dispatch={dispatchProp}
                            {...props}
                            {...mappedProps} />
        )
      }}
    </Consumer>
  )

  ConnectedComponent.displayName = `Connect(${WrappedComponent.displayName || WrappedComponent.name})`

  return ConnectedComponent;
}

export default connect;
