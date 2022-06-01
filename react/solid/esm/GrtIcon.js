import * as React from "react";

function GrtIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm4.707 19.543a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414zM15 7.25a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm7-2a1 1 0 100 2 1 1 0 000-2z"
  }));
}

const ForwardRef = React.forwardRef(GrtIcon);
export default ForwardRef;