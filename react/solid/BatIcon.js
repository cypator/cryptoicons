const React = require("react");

function BatIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 23.5l20-.023L16.051 6.5 6 23.5zm10.027-10.12l4.127 6.786H11.92l4.108-6.786z"
  }));
}

const ForwardRef = React.forwardRef(BatIcon);
module.exports = ForwardRef;