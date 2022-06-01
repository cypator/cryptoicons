const React = require("react");

function IcnIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.833-25v18H23.5V7h-2.667zm-4.444 9v9h2.667v-9h-2.667zm-4.445-4.5V25h2.667V11.5h-2.667zm-4.444 9V25h2.667v-4.5H7.5z"
  }));
}

const ForwardRef = React.forwardRef(IcnIcon);
module.exports = ForwardRef;