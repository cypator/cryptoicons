const React = require("react");

function PaxgIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.603 6.912c-2.142-1.509-4.019-1.012-5.647.515h-.002l-.285-.006c-5.57-.045-3.936 4.199-5.83 8.51-2.18 4.96.175 6.904 3.76 7.539l.194.033.208.237a6.71 6.71 0 002.004 1.51c5.343 2.61 5.68-2.237 11.333-4.696 3.175-1.38 3.186-4.08 1.72-6.572l-.018.045.017-.045-.18-.292c.063.097.123.194.18.292.962-2.738.515-4.889-1.591-5.28-2.315-.426-4.125-.563-5.863-1.79zm-5.507 4.432c2.77-1.99 6.325-1.204 7.62 1.653 1.264 2.788.914 6.007-1.644 7.667a5.493 5.493 0 01-7.62-1.655c-1.65-2.573-.834-5.886 1.644-7.665z"
  }));
}

const ForwardRef = React.forwardRef(PaxgIcon);
module.exports = ForwardRef;