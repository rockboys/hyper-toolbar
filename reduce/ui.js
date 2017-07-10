module.exports = (state, { type, config }) => {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('toolbar', config.toolbar);
    }
    default:
      break
  }

  return state
};
