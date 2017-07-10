const React = require('react');
const Component = require('hyper/component');

class HyperToolbar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const plugins = (this.props.plugins || []).map(plugin => React.createElement('div', { className: 'plugin-container' }, plugin));
    // plugins.forEach(plugin => console.log('type', plugin.type.displayName));

    return React.createElement('div', Object.assign(this.props, { className: 'hyper-toolbar' }),
      React.createElement('div', { className: 'hyper-toolbar-container'}, plugins)
    );
  }
}

module.exports = HyperToolbar;
