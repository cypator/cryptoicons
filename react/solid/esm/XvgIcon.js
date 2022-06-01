import * as React from "react";

function XvgIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.61 10.335H8L15.951 27 24 10.335h-1.59l-6.36 13.33-6.438-13.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.61 10.335h12.798L24 7H8l1.61 3.335z"
  }));
}

const ForwardRef = React.forwardRef(XvgIcon);
export default ForwardRef;