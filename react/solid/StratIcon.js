const React = require("react");

function StratIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.047 15.454l-.008-1.737 9.642 5.659c.228.134.51.135.74.001l10.211-5.944a.744.744 0 00.005-1.28l-10.212-6.05a.732.732 0 00-.749.001L5.256 12.34a.529.529 0 00-.249.542.644.644 0 00-.007.098v2.474c0 .647.343 1.245.899 1.569l9.783 5.7c.23.133.513.132.742-.003l9.473-5.604v1.901l-9.847 5.878-10.263-6.033a.521.521 0 00-.716.19.53.53 0 00.189.721l10.42 6.126c.23.136.516.135.746-.003l10.157-6.063a.743.743 0 00.36-.637v-2.627a.739.739 0 00-1.108-.64l-9.785 5.79-9.627-5.61a.759.759 0 01-.376-.655zm10.006 2.92l-9.498-5.585 9.498-5.684 9.594 5.684-9.594 5.584z"
  }));
}

const ForwardRef = React.forwardRef(StratIcon);
module.exports = ForwardRef;