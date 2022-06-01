const React = require("react");

function StoxIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm11.675 13a3.004 3.004 0 00-2.99 2.784A2.996 2.996 0 0021.705 13v.462l.166.006A2.538 2.538 0 0124.243 16a2.531 2.531 0 01-2.538 2.538V19l.174-.005a3.006 3.006 0 002.816-2.779A2.997 2.997 0 0027.685 19v-.462l-.166-.006A2.538 2.538 0 0125.148 16a2.53 2.53 0 012.527-2.538zm-16.042 3h-.443v3h.453v-.344L11.633 16zm6.01-3c-1.653 0-3 1.348-3 3s1.347 3 3 3a3 3 0 100-6zm-4.25 0H9.538l-.176.005A3.006 3.006 0 006.538 16 2.544 2.544 0 014 18.538V19l.176-.005A3.006 3.006 0 007 16a2.544 2.544 0 012.538-2.538h3.855V13zm4.25.462A2.538 2.538 0 0120.18 16a2.53 2.53 0 01-2.37 2.532l-.167.006-.167-.006A2.545 2.545 0 0115.105 16a2.538 2.538 0 012.37-2.532z"
  }));
}

const ForwardRef = React.forwardRef(StoxIcon);
module.exports = ForwardRef;