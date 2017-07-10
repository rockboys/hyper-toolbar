const React = require('react');
const Component = require('hyper/component');

class HyperToolbar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const plugins = this.props.plugins || [];
    // plugins.forEach(plugin => console.log('type', plugin.type.displayName));

    return React.createElement('div', Object.assign(this.props, { className: 'hyper-toolbar' }),
      React.createElement('div', { className: 'hyper-toolbar-container'}, this.props.plugins)
    );
  }
}

module.exports = HyperToolbar;
