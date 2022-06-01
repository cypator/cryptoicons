import * as React from "react";

function TntIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.11-10.497L14.048 25s1.875-.318 3.828 0l.156-3.497zM11.626 18.8s5.469-.477 8.672 0l.312-3.815a59.109 59.109 0 00-9.14 0zM26 8.944S15.531 6.718 6 9.103l.703 4.371.86-1.669s8.984-1.351 17.03 0l.782 1.67z"
  }));
}

const ForwardRef = React.forwardRef(TntIcon);
export default ForwardRef;