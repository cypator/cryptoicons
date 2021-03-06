const React = require("react");

function EthIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"
  }), /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.298,
    d: "M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.801,
    d: "M16.498 20.573l7.497-4.353-7.497-3.348z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.298,
    d: "M9 16.22l7.498 4.353v-7.701z"
  }))));
}

const ForwardRef = React.forwardRef(EthIcon);
module.exports = ForwardRef;