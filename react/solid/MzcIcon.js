const React = require("react");

function MzcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.811-20.433a5.695 5.695 0 013.184-.963c1.85 0 4.367 1.134 4.367 6.035 0 2.245-.809 3.912-2.428 5a.194.194 0 00-.051.276.207.207 0 00.205.082C23.134 21.805 26 20.16 26 15.903c0-3.2-1.486-6.55-4.23-6.55-1.792 0-3.545.588-5.259 1.764C15.615 9.706 14.325 9 12.641 9 9.89 9 6 11.605 6 16.124c0 2.058.54 3.888 1.622 5.49l1.38-1.604c-.798-1.217-1.198-2.699-1.198-4.445 0-2.62 1.956-5.255 4.428-5.255 1.29 0 2.3.397 3.033 1.19v1.93h-1.486l-1.001 1.148h2.487v1.443h-.789l-.97 1.148h1.759v4.68l1.273-1.736v-2.944h.789l.758-1.148h-1.547v-1.443h1.486l1.001-1.148h-2.214v-1.863z"
  }));
}

const ForwardRef = React.forwardRef(MzcIcon);
module.exports = ForwardRef;