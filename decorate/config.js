module.exports = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .terms_terms {
        margin-top: 30px;
      }
      .hyper-toolbar {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        height: 30px;
        padding: 0 14px 1px;
        cursor: default;
        -webkit-user-select: none;
        transition: opacity 250ms ease;
      }
      .hyper-toolbar:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        opacity: 0.07;
    }
    `
  });
};
