const React = require('react');
const Component = require('hyper/component');

class HyperToolbar extends Component {
  constructor (props) {
    super(props);
    this.openToolbar = this.openToolbar.bind(this);
  }

  openToolbar(event) {
    const hyperToolbarElement = document.getElementsByClassName('hyper-toolbar')[0];
    if (hyperToolbarElement.className.indexOf('open') > -1) {
      hyperToolbarElement.setAttribute('class', 'hyper-toolbar')
    } else {
      hyperToolbarElement.setAttribute('class', 'hyper-toolbar open')
    }
  }

  render () {
    const plugins = (this.props.plugins || []).map(plugin => React.createElement('div', { className: 'plugin-container' }, plugin));
    // plugins.forEach(plugin => console.log('type', plugin.type.displayName));

    return React.createElement('div', Object.assign(this.props, { className: 'hyper-toolbar' }),
      React.createElement('button', { className: 'hyper-toolbar-open-button', onClick: this.openToolbar }, '',
        React.createElement('img', { className: 'arrow-up-icon', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAnRSTlMAEGsk3VwAAAMISURBVHgB7dfBSgNBEATQ6fz/RwteIuhl6BXSXe/dBXerMltzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjXtxOJ1w+HyF//Wx3y4lcBp3/od0D8KiB+FRC/Cth+iWtQ/Crg9PcdEL8KiF8FxK8Ctp81KH4VcPr7DohfBcSvAuJXAdvPGhS/Cjj9fQfEP60CXB/rlVsBv/7GHzF/+zWODXbErwKxp3/771kQvwqkTv8/BV0ITP/fIi8Ett+bNZgZvwrYftZgbvwqYPq7EJj+LgS2nzUofhWw/azBlPhVwPR3ITD9XQhsP2tQ/Cpg+1mD4lcB09+FwPR3IbD9rEHxq4DtZw2KXwVMfxcC018FbD9rUPwpFbD9rEHxq4Aj1Ro0/VXAW7QGxa8ClpQ16NWpgMPTGjT9VcD7sgbFrwI2kzXoJamAY9IaNP1VwJuxBsWvAtaR5/U6PLMD0UfP9FcB78DhJ34VsIO8BQ/uTfSPPkvI9FcBT2sNil8FLB5r0COqgEPOGjT9VcBzWYPiVwHbxhr0MCrgOLMGTX8V8ATWoPhVwIqxBv3bKuDgsgZNfxXwv1qD4lcBe8UaFL8KmP7WoOmfUgHbzxoUvwrYftag+FXA9LcGTX8VsP2sQfGrgO1nDYpfBUx/a9D0VwHbzxoUvwrYftag+FXA9LcGTX8VsP2sQR9/U0D8KiD+oR4KzvTPWINPFODwYaof3uz4aec3PX6aCc6Pn06GG+KnEeOO6U/9XwHOCFS/AGPjp5HlhvhphLkhfhpxroifRqAZ098avGvMGYy6+0WviJ9GpivipxFqLYyfu0W3Ln6ECgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAEJWl/DlfCyZAAAAABJRU5ErkJggg=='})
      ),
      React.createElement('div', { className: 'hyper-toolbar-container'}, plugins)
    );
  }
}

module.exports = HyperToolbar;
