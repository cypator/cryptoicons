import * as React from "react";

function MnxIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.863 26.986v-3.37A7.7 7.7 0 018.336 16a7.7 7.7 0 016.527-7.616v-3.37C9.32 5.595 5 10.292 5 16c0 5.708 4.32 10.405 9.863 10.986zM17.038 5v3.363a7.7 7.7 0 016.585 6.474h3.363C26.44 9.617 22.268 5.48 17.038 5zM27 17.017h-3.356a7.7 7.7 0 01-6.606 6.62V27c5.278-.483 9.48-4.694 9.962-9.983zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
  }));
}

const ForwardRef = React.forwardRef(MnxIcon);
export default ForwardRef;