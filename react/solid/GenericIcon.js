const React = require("react");

function GenericIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.002-22.145l.81-3.241-2.596-.646-.643 2.575a8.277 8.277 0 00-1.298-.323l.644-2.575L15.323 5l-.81 3.241c-2.983.542-5.509 2.737-6.28 5.823s.426 6.206 2.804 8.08l-.81 3.242 2.596.646.643-2.575a8.277 8.277 0 001.298.323l-.644 2.575 2.596.645.81-3.241a7.974 7.974 0 005.2-3.385l-2.847-.708a5.373 5.373 0 01-5.134 1.43c-2.866-.712-4.62-3.572-3.917-6.387s3.599-4.519 6.466-3.806a5.357 5.357 0 013.86 3.667l2.846.708a7.947 7.947 0 00-2.998-5.423z"
  }));
}

const ForwardRef = React.forwardRef(GenericIcon);
module.exports = ForwardRef;