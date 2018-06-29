import { PureComponent } from 'react';

export default class Prevent extends PureComponent {
  render() {
    const { renderComponent, ...rest } = this.props
    return renderComponent(rest)
  }
}
