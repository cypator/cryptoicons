import * as React from "react";

function SklIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.514 7.5H7.5l.058 8.415.086 8.443 7.45.085 7.42.057v-1.983H9.81V9.483h12.704V7.5zm-4.042 6.148c0 1.87.982 2.692 3.667 3.06 1.645.199 2.194.624 2.05 1.587-.174 1.247-2.599 1.417-3.638.255-.491-.595-2.368-.793-2.368-.283 0 .793 1.01 2.068 1.877 2.436 1.27.51 3.35.51 4.62 0 1.876-.765 2.454-3.57 1.01-4.845-.317-.283-1.501-.708-2.627-.963-2.252-.51-2.945-1.077-2.31-1.842.577-.68 2.54-.595 2.974.114.26.396.693.566 1.472.566 1.01 0 1.097-.056.924-.651-.317-.992-1.3-1.87-2.425-2.182-2.8-.765-5.226.538-5.226 2.748z"
  }));
}

const ForwardRef = React.forwardRef(SklIcon);
export default ForwardRef;