const React = require("react");

function ThetaIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.96 6l-.96.993v18.014l.96.993h10.08l.96-.993V6.993L21.04 6zm.96 18.013V7.987h8.16v16.026zm7.134-5.17v-1.948h-6.058v1.949h2.087v2.262h1.884v-2.262zm0-5.582h-2.087v-2.263h-1.884v2.263h-2.087v1.948h6.058z"
  }));
}

const ForwardRef = React.forwardRef(ThetaIcon);
module.exports = ForwardRef;