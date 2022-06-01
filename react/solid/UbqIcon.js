const React = require("react");

function UbqIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.503 15.844l3.318-2.01V5L6.008 11.278v9.103l7.777 4.068-.282-8.605zm4.994.275l-3.318 2.012V27l10.813-6.321v-9.103l-7.777-4.068.282 8.611zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.305,
    fillRule: "nonzero",
    d: "M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"
  })));
}

const ForwardRef = React.forwardRef(UbqIcon);
module.exports = ForwardRef;