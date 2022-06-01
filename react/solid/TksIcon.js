const React = require("react");

function TksIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.77-17.75a4 4 0 01.48 0c1.48.1 2.16 2.11 3.1 2a8.16 8.16 0 01-3 1.55 2 2 0 01-2.17-1.3v4L22 17.18V12l-4.23 2.25zm-2.89-.01a2.05 2.05 0 01-.74-1.49v-.08c0-1.16 1.87-3 1.93-3 .06.06 1.93 1.85 1.93 3v.09a2 2 0 01-.6 1.36l4.6-2.47-6-2.94-6 2.91 4.88 2.62zm.98 2.3a2 2 0 01-2.17 1.31 8.16 8.16 0 01-3-1.55c.94.07 1.61-1.95 3.1-2a4 4 0 01.48 0L10 12v5.19l5.87 3.39-.01-4.04zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm-6.7 7.19L16 7.94l6.71 3.25v6.39L16 21.45l-6.7-3.87v-6.39zm13.43 9l-6.68 3.86-6.76-3.9v-.37l6.76 3.9 6.68-3.86v.37zm0-.75l-6.68 3.86-6.76-3.9V19l6.76 3.91 6.68-3.86v.39zm0-.75l-6.68 3.86-6.76-3.9v-.37l6.76 3.91 6.68-3.86v.36z"
  }));
}

const ForwardRef = React.forwardRef(TksIcon);
module.exports = ForwardRef;