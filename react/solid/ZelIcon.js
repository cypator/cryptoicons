const React = require("react");

function ZelIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 15.615v4.847L9.495 23l4.494-2.538v-4.847l-4.494-2.538L5 15.615zm13.01 0v4.847L22.506 23 27 20.462v-4.847l-4.495-2.538-4.494 2.538zm-.472 4.21v-4.594l4.021-2.271v-1.73L15.961 8l-5.599 3.23v1.685l4.1 2.316v4.638l1.499.823 1.577-.866z"
  }));
}

const ForwardRef = React.forwardRef(ZelIcon);
module.exports = ForwardRef;