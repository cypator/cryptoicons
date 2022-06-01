const React = require("react");

function EopIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 33 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 32C8.163 32 1 24.837 1 16S8.163 0 17 0s16 7.163 16 16-7.163 16-16 16zm-1.286-4l-5.348-14.263-2.16 9.84L15.714 28zM17.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983L17.12 4.17zM18.56 28l7.474-4.423-2.125-9.84L18.56 28z"
  }));
}

const ForwardRef = React.forwardRef(EopIcon);
module.exports = ForwardRef;