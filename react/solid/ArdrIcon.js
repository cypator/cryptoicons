const React = require("react");

function ArdrIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.117-14.81L12.5 23l5.152-3.498-1.769-2.312zM16 6L6 23h5.455l7.272-12.526L16 6zm0 9.842L21.455 23H26l-6.364-9.842L16 15.842z"
  }));
}

const ForwardRef = React.forwardRef(ArdrIcon);
module.exports = ForwardRef;