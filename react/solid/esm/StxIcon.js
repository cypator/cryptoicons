import * as React from "react";

function StxIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.5 16.978h-17v2.07h5.181L9.071 24.5h2.683l4.239-6.423 4.24 6.423h2.697l-3.611-5.467H24.5v-2.055zM11.71 7.5H9.014l3.568 5.395H7.5v2.084h17v-2.084h-5.081L22.987 7.5h-2.698l-4.296 6.509L11.71 7.5z"
  }));
}

const ForwardRef = React.forwardRef(StxIcon);
export default ForwardRef;