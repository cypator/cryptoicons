const React = require("react");

function AdxIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.587 8.602L9 11.36l4.36 4.614L9 20.68l2.587 2.717L16 18.792l4.305 4.604L23 20.603l-4.396-4.604L23 11.36l-2.695-2.757L16 13.208l-4.413-4.606zm.355-.376l2.126 2.265 1.914-2.114 1.914 2.114 2.126-2.265L15.982 4l-4.04 4.226zm0 15.548L15.982 28l4.04-4.226-2.126-2.265-1.914 2.114-1.914-2.114-2.126 2.265z"
  }));
}

const ForwardRef = React.forwardRef(AdxIcon);
module.exports = ForwardRef;