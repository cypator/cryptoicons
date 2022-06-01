const React = require("react");

function TzcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.7-16.6h3.5v-2.8H10.8v2.8h3.5v10.456a10.065 10.065 0 004-.122v-2.91a7.144 7.144 0 01-.6.174zm1.4 10.11C23.105 24.205 26 20.44 26 16c0-5.523-4.477-10-10-10S6 10.477 6 16c0 4.44 2.895 8.205 6.9 9.51V22.5a7.2 7.2 0 116.2 0z"
  }));
}

const ForwardRef = React.forwardRef(TzcIcon);
module.exports = ForwardRef;