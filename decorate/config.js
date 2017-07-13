module.exports = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .terms_terms {
        margin-top: 30px;
        padding-bottom: 25px;
      }
      .hyper-toolbar {
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
      .hyper-toolbar .hyper-toolbar-container {
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: flex-start;
      }
      .hyper-toolbar .hyper-toolbar-container .plugin-container {
        position: relative;
        top: -4px;
        padding: 0px 7px 0px 7px;
        font-size: 12px;
        font-weight: bold;
        font-family: sans-serif;
        width: 50%;
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
        height: 10px;
        right: 0;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      .hyper-toolbar .hyper-toolbar-open-button img.arrow-up-icon {
        width: 23px;
        height: 19px;
        position: relative;
        top: -4px;
        transform: scale(-1, 1);
        transition: transform 0.5s;
      }
      .hyper-toolbar.open .hyper-toolbar-open-button img.arrow-up-icon {
        transform: scale(1, -1);
      }
    `
  });
};
