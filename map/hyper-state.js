module.exports = ({ ui: { toolbar } }, map) => {
  return Object.assign({}, map, {
    toolbar
  });
};
