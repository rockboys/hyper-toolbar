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
        background: ${config.borderColor};
        transition: height 0.6s;
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
      .hyper-toolbar.open {
        height: 80%;
      }
      .hyper-toolbar .hyper-toolbar-open-button {
        display: block;
        margin: 0 auto;
        background-color: #ff7300;
        border: none;
        color: #FAFAFA;
        width: 50px;
        border-radius: 12px;
        position: relative;
        top: -10px;
        cursor: pointer;
        outline: none;
        height: 30px;
      }
      .hyper-toolbar .hyper-toolbar-open-button img.arrow-up-icon {
        width: 23px;
        position: relative;
        top: -7px;
        transform: scale(-1, 1);
        transition: transform 0.5s
      }
      .hyper-toolbar.open .hyper-toolbar-open-button img.arrow-up-icon {
        transform: scale(1, -1);
      }
    `
  });
};
