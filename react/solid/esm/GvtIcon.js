import * as React from "react";

function GvtIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10-18.807c0-.399-.024-.797-.074-1.193H9.774a6.112 6.112 0 00-.117 1.193c0 3.427 2.845 6.217 6.34 6.217 2.718-.003 5.132-1.7 6.007-4.221H20.08c-.891 1.756-2.847 2.738-4.822 2.42-1.974-.319-3.506-1.863-3.777-3.807h12.721c-.317 4.163-3.873 7.455-8.199 7.455-4.533 0-8.221-3.617-8.221-8.062 0-.399.03-.798.09-1.193H6.074c-.05.396-.074.795-.074 1.193C6 18.601 10.487 23 16 23s10-4.4 10-9.807z"
  }));
}

const ForwardRef = React.forwardRef(GvtIcon);
export default ForwardRef;