# hyper-toolbar

> Customizable toolbar for `Hyper` terminal

`hyper-toolbar` allows you to build a fully customizable toolbar at the bottom of your `Hyper` terminal. You can customize not only styles but also plugins.

## Install

Edit your `~/.hyper.js` file and add `hyper-toolbar` to the plugin's list:

    plugins: [
      ...,
      hyper-toolbar
    ]

## Configuration

## How to create a plugin

It's easy to build your own plugin for `hyper-toolbar`. Toolbar's extensions are like every Hyper's extensions with a few particularities.

### Decorate `HyperToolbar` component

In order to add your own plugin to `hyper-cwd` you must decorate the main `HyperToolbar` exporting a function named `decorateHyperToolbar` and adding your plugin to the plugin's list of the component's properties.

    class HyperToolbarAwesomePlugin extends React.component {
      constructor (props) {
        super(props);
      }

      render () {
        return React.createElement('p', null, `I'm a awesome hyper-toolbar plugin`);
      }
    }

    exports.decorateHyperToolbar = (HyperToolbar, { React }) => {
      return class extends React.Component {
        constructor (props) {
          super(props);
        }

        render () {
          const plugin = React.createElement(HyperToolbarAwesomePlugin);

          this.props.plugins = this.props.plugins.concat(plugin);

          return React.createElement(HyperToolbar, this.props);
        }
      };
    }
