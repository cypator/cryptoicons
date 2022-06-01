const React = require("react");

function TknIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM13.092 7.913h-.037v12.74c0 5.737 7.12 6.098 9.725 4.583l-1.064-3.176c-1.175.613-4.294.397-4.294-1.444v-6.063H23v-3.5h-5.541L17.495 6l-4.403 1.913zm-4.11 7.578c1.094 0 1.981-1.066 1.981-2.381 0-1.316-.887-2.382-1.981-2.382C7.887 10.728 7 11.794 7 13.11c0 1.315.887 2.381 1.982 2.381z"
  }));
}

const ForwardRef = React.forwardRef(TknIcon);
module.exports = ForwardRef;