const React = require("react");

function RubIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.5-16.762v1.808h1.764v2.608H10.5v1.705h1.764V25h1.988v-3.641h4v-1.705h-4v-2.608h2.509a7.91 7.91 0 002.26-.31c.696-.207 1.3-.52 1.814-.943.514-.421.92-.95 1.218-1.588.298-.637.447-1.386.447-2.247 0-.86-.14-1.6-.422-2.22-.282-.62-.671-1.133-1.168-1.537s-1.093-.706-1.789-.904A8.426 8.426 0 0016.811 7h-4.547v8.238zm6.31 0h-2.558v-6.43h2.559c1.142 0 2.041.25 2.695.749.654.499.982 1.3.982 2.401 0 1.102-.328 1.924-.982 2.467-.654.542-1.553.813-2.695.813z"
  }));
}

const ForwardRef = React.forwardRef(RubIcon);
module.exports = ForwardRef;