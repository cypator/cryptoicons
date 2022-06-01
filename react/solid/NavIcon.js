const React = require("react");

function NavIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.524 22h4.797L27 10h-4.797l-3.443 7.276L14.815 10h-4.797L5 22h4.797l2.929-7.005L16.524 22zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
  }));
}

const ForwardRef = React.forwardRef(NavIcon);
module.exports = ForwardRef;