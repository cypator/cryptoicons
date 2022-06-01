const React = require("react");

function TncIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.226-18.196l-1.83 3.114 2.132 3.481-8.412-.002-1.87 3.103h15.613zm-5.75 2.256h3.659l2.001-3.555 4.12 7.16H26L18.203 6.542zm4.885 3.619l-1.83-3.115h-4.167l4.303-6.918-1.86-3.146L6 19.625z"
  }));
}

const ForwardRef = React.forwardRef(TncIcon);
module.exports = ForwardRef;