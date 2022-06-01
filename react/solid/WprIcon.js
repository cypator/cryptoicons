const React = require("react");

function WprIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.993 5.425l4.854 17.382.035.15h4.186l1.87-6.932 1.87 6.932h4.185l.036-.15 1.96-7.078 3.435 12.41A15.937 15.937 0 0116 32C7.163 32 0 24.837 0 16A15.94 15.94 0 013.993 5.425zm2.65-2.405A15.928 15.928 0 0116 0c8.837 0 16 7.163 16 16a15.93 15.93 0 01-3.025 9.364L24.901 10.65l-.035-.15h-3.75l-2.336 8.438-1.973-8.438h-3.739l-1.973 8.438L6.642 3.02z"
  }));
}

const ForwardRef = React.forwardRef(WprIcon);
module.exports = ForwardRef;