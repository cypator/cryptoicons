const React = require("react");

function IlkIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.21-28C9.279 4 4 9.279 4 15.79c0 6.511 5.279 11.79 11.79 11.79 6.511 0 11.79-5.279 11.79-11.79C27.569 9.283 22.297 4.011 15.79 4zm0 22c-5.632 0-10.198-4.565-10.2-10.197-.002-5.632 4.561-10.2 10.193-10.203 5.632-.004 10.201 4.558 10.207 10.19-.006 5.631-4.569 10.194-10.2 10.2V26zm-5.21-11.26v-3.7h2.6v3.7h1.88v-4.16a1 1 0 00-1.15-1.17H9.79c-.74 0-1.11.39-1.11 1.17v4.16h1.9zm2.6 1.22l.01-.02h-4.5v5a1 1 0 001.1 1.18h4.14a1 1 0 001.15-1.16v-5h-1.9zm7.8.07H18.4v-4.9h2.5v2.54h2v-3a1 1 0 00-1.2-1.17h-4.1a1 1 0 00-1.17 1.17v10.36a1 1 0 001.14 1.16h4.17a1 1 0 001.16-1.16v-5h-1.92z"
  }));
}

const ForwardRef = React.forwardRef(IlkIcon);
module.exports = ForwardRef;