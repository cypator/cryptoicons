import * as React from "react";

function XbyIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 9.016c0 .01 1.467 2.51 3.26 5.557 2.312 3.929 3.265 5.539 3.276 5.537.015-.003 6.53-11.08 6.53-11.1 0-.006-1.366-.01-3.072-.01-2.634 0-3.073.002-3.073.014 0 .008.633 1.08 1.406 2.381s1.408 2.374 1.41 2.38c.002.006-.116.213-.26.46l-.264.45-.028-.046-1.688-2.84-1.66-2.794-2.919-.003C6.21 9 6 9.001 6 9.016zm14.14-.009c-.108.177-7.057 12.017-7.062 12.028-.006.024 2.904 4.969 2.923 4.965.012-.003 2.94-4.963 2.949-4.998.003-.01-.564-.974-1.33-2.265a591.98 591.98 0 01-1.339-2.256c-.004-.012.52-.903.53-.898.003.002.604 1.011 1.336 2.242 1.026 1.727 1.332 2.236 1.346 2.234.013-.002 1.1-1.841 3.259-5.508a1647.11 1647.11 0 003.244-5.529L26 9h-2.928c-1.61 0-2.93.003-2.933.007z"
  }));
}

const ForwardRef = React.forwardRef(XbyIcon);
export default ForwardRef;