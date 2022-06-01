import * as React from "react";

function XasIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.992-17.529L26 14.47l-3.826-6.462.002-.007H9.922l.002.008-.002-.002L6 14.563l.039.006-.032.013L16.097 26l.426-.52zm-13.136.459l6.423-.011 2.122 3.635-5.363 6.162-5.353-6.112zm-2.778 2.98l-2.602-2.972 4.361-.007zm9.723-3.846l-3.038-5.205 4.883-.01 3.11 5.207zm4.771.846l-2.56 2.942-1.713-2.935zm-5.791-.844l-5.42.009 2.729-4.62zm-8.399-5.194l5.04-.01-3.08 5.214-5.06.009z"
  }));
}

const ForwardRef = React.forwardRef(XasIcon);
export default ForwardRef;