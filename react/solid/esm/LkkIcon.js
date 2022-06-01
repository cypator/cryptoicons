import * as React from "react";

function LkkIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.995-6L16 19.894 21.976 26v-3.656L16 16.24l-5.995 6.105V26zM5 13.633l2.531 2.606H16l-2.531-2.606H5zm22 0h-8.469V7.586L16 5v11.239h8.469L27 13.633z"
  }));
}

const ForwardRef = React.forwardRef(LkkIcon);
export default ForwardRef;