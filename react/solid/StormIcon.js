const React = require("react");

function StormIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-26l-12.03 8.25 6.077 3.875L9 26l13.302-9.208-5.994-3.875z"
  }));
}

const ForwardRef = React.forwardRef(StormIcon);
module.exports = ForwardRef;