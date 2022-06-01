const React = require("react");

function CdtIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-15.97C26.975 9.971 22.128 5.057 16.12 5v2.802c3.944-.002 7.316 2.863 7.984 6.782h-3.89c.15.458.228.935.234 1.416-.001.482-.08.96-.234 1.416h3.89c-.659 3.925-4.036 6.794-7.984 6.782V27c2.886 0 5.653-1.155 7.694-3.212A11.014 11.014 0 0027 16.029zm-7.254 2.359a4.299 4.299 0 01-5.965 1.326c-2.011-1.295-2.6-3.988-1.316-6.015a4.299 4.299 0 015.965-1.327c.522.35.97.8 1.316 1.327h3.072c-1.136-3.305-4.472-5.3-7.893-4.72C11.505 9.56 9 12.547 9 16.044s2.505 6.484 5.925 7.064c3.421.58 6.757-1.414 7.893-4.72z"
  }));
}

const ForwardRef = React.forwardRef(CdtIcon);
module.exports = ForwardRef;