import * as React from "react";

function ModIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.985-10.993V8.08l-6.312 6.45zM9 7v17.985l8.77-8.998-8.466-8.675z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.985 21.007V8.08l-6.312 6.449z",
    opacity: 0.5
  }));
}

const ForwardRef = React.forwardRef(ModIcon);
export default ForwardRef;