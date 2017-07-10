const React = require('react');
const Component = require('hyper/component');

class HyperToolbar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return React.createElement('div', this.props,
      React.createElement('div', { className: 'left-container'}, this.props.left),
      React.createElement('div', { className: 'center-container'}, this.props.center),
      React.createElement('div', { className: 'right-container'}, this.props.right)
    );
  }
}

module.exports = HyperToolbar;
