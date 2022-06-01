import * as React from "react";

function PptIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.049-23.684c1.316 0 2.382-.733 2.382-1.638 0-.905-1.066-1.638-2.382-1.638s-2.383.733-2.383 1.638c0 .905 1.067 1.638 2.383 1.638zM14.816 26.6c0 .196.173.375.37.375h1.667c.196 0 .347-.179.347-.375v-7.08h2.928c.196 0 .336-.168.336-.364V9.448c0-.197-.139-.344-.336-.344h-5.312v17.497zm-.896-7.081V9.104h-2.01c-.197 0-.374.147-.374.344v9.708c0 .196.177.364.373.364h2.011z"
  }));
}

const ForwardRef = React.forwardRef(PptIcon);
export default ForwardRef;