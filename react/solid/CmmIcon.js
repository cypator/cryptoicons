const React = require("react");

function CmmIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.57-27.993A11.788 11.788 0 009.058 6.38a1.765 1.765 0 00-.11 2.732c.622.588 1.58.634 2.256.109a8.386 8.386 0 0111.294.91c.59.61.608 1.571.042 2.203a1.588 1.588 0 01-2.245.078l-.077-.078a5.238 5.238 0 100 7.059 1.556 1.556 0 011.86-.353 1.578 1.578 0 01.462 2.47 8.414 8.414 0 01-11.34.996 1.765 1.765 0 00-2.27.11 1.786 1.786 0 00.149 2.756 11.852 11.852 0 107.49-21.364zm-.22 14.788a2.933 2.933 0 11.022-5.866 2.933 2.933 0 01-.021 5.866z"
  }));
}

const ForwardRef = React.forwardRef(CmmIcon);
module.exports = ForwardRef;