const decorate = require('hyper/decorate');
const Component = require('hyper/component');
const React = require('react');

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

exports.mapHyperState = ({ ui: { toolbar } }, map) => {
  return Object.assign({}, map, {
    toolbar
  });
};

exports.reduceUI = (state, { type, config }) => {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('toolbar', config.toolbar)
    }
    default:
      break
  }

  return state
};

exports.decorateHyper = (Hyper, { React }) => {
   return class extends Component {
    constructor (props) {
      super(props);
    }

    render() {
      return React.createElement(Hyper, Object.assign({}, this.props, {
        customChildren: React.createElement(decorate(HyperToolbar, 'HyperToolbar'), this.props.toolbar)
      }));
    }
  }
};
