const React = require("react");

function CobIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-7h4.536l-2.272-3.957h-4.528L11.464 25H16zm-2.263-14.044h4.527L20.536 7h-9.072l2.272 3.957zm9.999 9.539L26 16.538h-4.536l-2.265 3.957h.001l2.263 3.958 2.273-3.957h-.002.002zM8.264 11.496L6 15.453h4.536l2.264-3.957-2.264-3.957-2.272 3.957zm4.535 9h.001l-2.264-3.958H6l2.264 3.957 2.272 3.958 2.264-3.957zm10.937-9l-2.273-3.957-2.264 3.957 2.264 3.957H26l-2.264-3.957z"
  }));
}

const ForwardRef = React.forwardRef(CobIcon);
module.exports = ForwardRef;