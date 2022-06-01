const React = require("react");

function VthoIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.272-26.942h-5.763l-4.487 11.78h4.45l-3.94 10.104 12.18-14.3h-5.1l5.683-7.584h-3.023z"
  }));
}

const ForwardRef = React.forwardRef(VthoIcon);
module.exports = ForwardRef;