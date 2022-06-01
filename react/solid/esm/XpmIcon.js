import * as React from "react";

function XpmIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8-16.438V8h-3.455v7.475c0 3.313-2.854 3.153-2.854 3.153V8h-3.47v10.628s-2.766.029-2.766-3.11V8H8v7.24c0 6.015 5.284 6.234 6.207 6.234v1.168h-2.123v1.562h2.127V26h3.48v-1.796h2.224v-1.562h-2.224V21.49c2.883 0 6.309-1.504 6.309-5.927z"
  }));
}

const ForwardRef = React.forwardRef(XpmIcon);
export default ForwardRef;