const React = require("react");

function BeamIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11.16-19.34v-2.2L20 14.63l-4.42-7.62v5l2.25 3.9-.91.54-1.34-2.36-1.44 2.56-1-.41 2.44-4.23v-5l-4.84 8.24L4 12.46v2.55l6 1.48-3.8 6.52h9.38v-2.69h-4.79l1.79-3.14 1.08.27-1.08 1.9h6l-.9-1.59 1.19-.09 1.53 2.65h-4.82v2.69H25l-3.24-5.53 5.44-.4v-2.21l-6.12 1.51 6.11-1.57v-2l-6.63 2.69 6.6-2.84zm-8.7 4.35l-1.08.27 1.06-.27h.02zm-.34-.6l-1 .4 1-.41v.01z"
  }));
}

const ForwardRef = React.forwardRef(BeamIcon);
module.exports = ForwardRef;