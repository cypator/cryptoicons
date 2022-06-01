import * as React from "react";

function MftIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.985-12.832a3.026 3.026 0 110-6.052 3.026 3.026 0 010 6.052zm0-10.005a6.957 6.957 0 00-5.003 2.115 6.954 6.954 0 011.977 4.864 6.955 6.955 0 01-1.977 4.864 6.98 6.98 0 105.003-11.844zM10.98 19.168a3.026 3.026 0 110-6.052 3.026 3.026 0 010 6.052zm5.003-7.89a6.98 6.98 0 100 9.728 6.955 6.955 0 01-1.976-4.864c0-1.892.754-3.607 1.976-4.864zm-1.977 4.865c0 1.892.754 3.607 1.977 4.864a6.954 6.954 0 001.976-4.864 6.954 6.954 0 00-1.976-4.864 6.954 6.954 0 00-1.977 4.864z"
  }));
}

const ForwardRef = React.forwardRef(MftIcon);
export default ForwardRef;