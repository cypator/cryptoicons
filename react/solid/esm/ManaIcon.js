import * as React from "react";

function ManaIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.012 25.212H9.988A10.97 10.97 0 0016 27c2.216 0 4.285-.66 6.012-1.788zM16 5C9.922 5 5 9.922 5 16c0 1.408.264 2.75.748 3.988l7.045-8.454 5.572 6.688 1.392-1.672L24.8 22.6h-1.073l-3.965-4.763V22.6H7.2a11.511 11.511 0 001.683 1.787h14.234A10.976 10.976 0 0027 16c0-6.078-4.922-11-11-11zm-3.207 7.821v7.167H5.748c.242.627.545 1.22.891 1.787h8.767l2.425-2.91-5.037-6.044zM19.756 9.4a2.751 2.751 0 010 5.5 2.751 2.751 0 010-5.5zm-6.963-1.991a1.376 1.376 0 110 2.751 1.376 1.376 0 010-2.751z"
  }));
}

const ForwardRef = React.forwardRef(ManaIcon);
export default ForwardRef;