import * as React from "react";

function ElecIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.74 14.284L19.51 4 8 18.27h6.262l-3.502 9.317 12.666-13.303H16.74zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
  }));
}

const ForwardRef = React.forwardRef(ElecIcon);
export default ForwardRef;