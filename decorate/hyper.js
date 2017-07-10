const decorate = require('hyper/decorate');
const Component = require('hyper/component');
const HyperToolbar = require('../components/toolbar');

module.exports = (Hyper, { React }) => {
  return class extends Component {
    constructor (props) {
      super(props);
    }

    render() {
      const toolbar = React.createElement(decorate(HyperToolbar, 'HyperToolbar'), this.props.toolbar);
      const children = Array.from(this.props.customChildren).concat(toolbar);

      return React.createElement(Hyper, Object.assign({}, this.props, {
        customChildren: children
      }));
    }
  }
};
