const React = require("react");

function CvcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.161-15.221a2.342 2.342 0 001.33-2.107c0-1.294-1.062-2.343-2.37-2.343-1.31 0-2.373 1.049-2.373 2.343a2.34 2.34 0 001.332 2.106v2.894h2.081v-2.893zm-1.04 6.721c-4.186 0-7.59-3.364-7.59-7.5s3.404-7.5 7.59-7.5c3.415 0 6.31 2.24 7.26 5.312h2.616C24.987 9.342 20.949 6 16.12 6 10.531 6 6 10.477 6 16s4.531 10 10.12 10c4.829 0 8.867-3.342 9.877-7.812H23.38c-.95 3.072-3.845 5.312-7.26 5.312z"
  }));
}

const ForwardRef = React.forwardRef(CvcIcon);
module.exports = ForwardRef;