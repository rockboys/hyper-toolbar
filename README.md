# hyper-toolbar

> Customizable toolbar for `Hyper` terminal

`hyper-toolbar` allows you to build a fully customizable toolbar at the bottom of your `Hyper` terminal. You can customize not only styles but also plugins.

## Install

> This plugin is in very early stage of development and is not ready to be used

Edit your `~/.hyper.js` file and add `hyper-toolbar` to the plugin's list:

    plugins: [
      ...,
      hyper-toolbar
    ]

## Configuration

## How to create a plugin

It's easy to build your own plugin for `hyper-toolbar`. Toolbar's extensions are like every Hyper's extensions with a few particularities.

### Set `displayName` React's component property

`hyper-toolbar` uses [`displayName`](https://facebook.github.io/react/docs/react-component.html#displayname) property to identify plugins and arrange them according to the configuration.

You must set this property in your plugin's component as follows, always using *kebab-case*:

    class HyperToolbarAwesomePlugin extends React.component {
      constructor (props) {
        super(props);
      }

      render () {
        return React.createElement('p', null, `I'm a awesome hyper-toolbar plugin`);
      }
    }

    HyperToolbarAwesomePlugin.displayName = 'hyper-toolbar-awesome-plugin';

### Decorate `HyperToolbar` component

In order to add your own plugin to `hyper-toolbar` you must decorate the main `HyperToolbar` exporting a function named `decorateHyperToolbar` and adding your plugin to the plugin's list of the component's properties.

    class HyperToolbarAwesomePlugin extends React.component {
      constructor (props) {
        super(props);
      }

      render () {
        return React.createElement('p', null, `I'm a awesome hyper-toolbar plugin`);
      }
    }

    HyperToolbarAwesomePlugin.displayName = 'hyper-toolbar-awesome-plugin';

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

### Decorate `HyperToolbar` state

`hyper-toolbar` maps the configuration into the state of `Hyper` component under `toolbar` name, also it creates a property called `state` in this object to store whatever you need to pass as property to your plugin.

This `toolbar` object is accesible when you decorate `HyperToolbar` component so you can pass properties down to your component. It's important that you pick a property inside this `state` object for your plugin with a unique name in order to avoid collisions with other plugins.

    module.exports = ({ sessions }, map) => {
      return Object.assign({}, map, {
        toolbar: {
          state: {
            cwd: {
              directory: sessions[sessions.activeUid].cwd
            }
          }
        }
      });
    };

    class HyperToolbarCwd extends React.component {
      constructor (props) {
        super(props);
      }

      render () {
        return React.createElement('p', null, `I'm in the ${props.directory} directory`);
      }
    }

    HyperToolbarCwd.displayName = 'hyper-toolbar-cwd';

    exports.decorateHyperToolbar = (HyperToolbar, { React }) => {
      return class extends React.Component {
        constructor (props) {
          super(props);
        }

        render () {
          const plugin = React.createElement(HyperToolbarCwd, this.props.state.cwd);

          this.props.plugins = this.props.plugins.concat(plugin);

          return React.createElement(HyperToolbar, this.props);
        }
      };
    }
