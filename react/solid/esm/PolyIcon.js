import * as React from "react";

function PolyIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-20.737l-.044-.707-.218.593-1.226 1.03-1.404.21-.42-.39 1.23-1.633L26.18 10l-1.364.028-1.983 1.382-1.859-.128L18.363 10l-1.542.3-4.81 3.845-2.32.717-.953.93-1.706.024-.845 1.51L5 17.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-2 .084-.944.712.707 2.071 1.249 1.177-.537-.07-2.64-.34-1.02 1.537-.375z"
  }));
}

const ForwardRef = React.forwardRef(PolyIcon);
export default ForwardRef;