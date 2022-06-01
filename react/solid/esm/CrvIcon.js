import * as React from "react";

function CrvIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-3.003 7.25c-3.896 0-5.247 4.61-5.247 7.737 0 3.128.677 5.36 1.205 6.676.529 1.317 1.57 3.587 3.81 3.587s2.763-2.854 3.211-3.597c.448-.744 7.637-1.82 8.556-2.635.92-.815 2.765-4.99-1.345-7.962-4.11-2.971-8.439-3.806-10.19-3.806zm-1.394 8.279l.135.004c1.266.092 2.516 1.486 2.788 4.122.29 2.824-1.167 4.13-2.15 4.13-.983 0-2.613-1.842-2.756-4.004-.143-2.162.494-4.146 1.847-4.247l.136-.005zm3.646-2.986c-.884-1.936 1.915-1.266 3.81-.529 1.894.738 4.313 1.797 3.256 2.666-.706.58-2.82.999-6.345 1.259-.183-1.612-.423-2.744-.721-3.396z"
  }));
}

const ForwardRef = React.forwardRef(CrvIcon);
export default ForwardRef;