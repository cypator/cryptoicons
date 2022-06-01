const React = require("react");

function NioIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-18.236h4.822L16 5.5l-4.822 8.264H16zm.655 9.736H26.5l-4.919-8.44-2.41 4.131-2.516 4.309zm-3.825-4.309l-2.411-4.131L5.5 23.5h9.845l-2.515-4.309z"
  }));
}

const ForwardRef = React.forwardRef(NioIcon);
module.exports = ForwardRef;