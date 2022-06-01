const React = require("react");

function VtcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M27.25 4.624a13.105 13.105 0 00-.312-.29L15.783 19.787l-4.263-5.438H4.582l-1.95 2.22H6.26l8.661 11.194c.29.272.576.408.862.408.285 0 .557-.136.816-.408L30.294 8.82a15.158 15.158 0 00-.295-.574A15.928 15.928 0 0132 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0c4.386 0 8.36 1.765 11.25 4.624z"
  }));
}

const ForwardRef = React.forwardRef(VtcIcon);
module.exports = ForwardRef;