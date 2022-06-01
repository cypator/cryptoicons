const React = require("react");

function BlcnIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.9 7a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm0 10a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9zm-10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9z"
  }));
}

const ForwardRef = React.forwardRef(BlcnIcon);
module.exports = ForwardRef;