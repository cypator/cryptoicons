const React = require("react");

function SolIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.706 19.517H10.34a.59.59 0 00-.415.17l-2.838 2.815a.291.291 0 00.207.498H21.66a.59.59 0 00.415-.17l2.838-2.816a.291.291 0 00-.207-.497zm-3.046-5.292H7.294l-.068.007a.291.291 0 00-.14.49l2.84 2.816.07.06c.1.07.22.11.344.11h14.366l.068-.007a.291.291 0 00.14-.49l-2.84-2.816-.07-.06a.59.59 0 00-.344-.11zM24.706 9H10.34a.59.59 0 00-.415.17l-2.838 2.816a.291.291 0 00.207.497H21.66a.59.59 0 00.415-.17l2.838-2.815A.291.291 0 0024.706 9z"
  }));
}

const ForwardRef = React.forwardRef(SolIcon);
module.exports = ForwardRef;