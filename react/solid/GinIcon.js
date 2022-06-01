const React = require("react");

function GinIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.029-14.674a.727.727 0 100-1.453h-1.66v-1.642h3.471a.727.727 0 100-1.453h-3.485a3.536 3.536 0 00-2.934-3.168V7.861a.727.727 0 10-1.453 0v1.7h-1.642V5.74a.727.727 0 10-1.453 0v3.82H13.23v-1.7a.727.727 0 00-1.453 0v1.75a3.536 3.536 0 00-2.934 3.168H4.74a.727.727 0 100 1.453h4.09v1.642H7.17a.727.727 0 100 1.453h1.66v1.642H5.667a.727.727 0 100 1.453h3.176a3.536 3.536 0 002.934 3.168v1.13a.727.727 0 101.453 0v-1.081h1.642v3.291a.727.727 0 001.453 0v-3.291h1.642v1.7a.727.727 0 101.453 0V23.59a3.536 3.536 0 002.934-3.168h4.811a.727.727 0 100-1.453H22.37v-1.642h1.659zm-2.82 2.782a2.372 2.372 0 01-2.37 2.37h-6.48a2.372 2.372 0 01-2.37-2.37V13.09a2.372 2.372 0 012.37-2.37h6.48a2.372 2.372 0 012.37 2.37v7.017zm-7.308-7.673a8.335 8.335 0 00-.841.029c-.442.05-.767.45-.781.884-.022.984-.004 1.97-.01 2.954.014.502-.034 1.01.04 1.507.071.444.505.73.936.729 1.34.009 2.68.003 4.02.004v.555H12.95l-.555 1.665h4.294c.502-.014 1.009.034 1.507-.039.444-.071.729-.505.728-.936.01-1.753.002-3.506.005-5.26-.016-.47.041-.949-.054-1.413-.101-.473-.608-.706-1.056-.677h-3.076c-.28.005-.562-.001-.843-.003zm.033 1.667h3.33v2.775h-3.33v-2.775z"
  }));
}

const ForwardRef = React.forwardRef(GinIcon);
module.exports = ForwardRef;