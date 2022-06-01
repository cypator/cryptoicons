import * as React from "react";

function ChainIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.51 11.744l6.376-3.668 6.36 3.676-6.36 3.677-6.375-3.685zm12.976-.13l3.257-1.9L15.886 4 6 9.714v11.429l9.886 5.714 9.857-5.714-3.495-2.038-6.362 3.676-6.39-3.676v-3.296l6.4 3.696 6.418-3.715v3.315l3.457 2.038V9.714l-3.285 1.9z"
  }));
}

const ForwardRef = React.forwardRef(ChainIcon);
export default ForwardRef;