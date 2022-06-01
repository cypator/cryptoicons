import * as React from "react";

function RddIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.886 7.093a10.436 10.436 0 00-3.525-.609C9.64 6.484 5 11.077 5 16.742 5 22.407 9.639 27 15.361 27c5.723 0 10.362-4.593 10.362-10.258a10.14 10.14 0 00-.73-3.789 4.308 4.308 0 001.999-3.632C26.992 6.935 25.037 5 22.627 5a4.372 4.372 0 00-3.74 2.093zm-.59 1.686a4.32 4.32 0 00.02 1.218 9.344 9.344 0 00-1.167-.574l.238-1.055c.315.13.618.267.909.41zm4.93 4.824c.084.174.163.35.238.53l-.931.648a14.47 14.47 0 00-.661-1.204 4.43 4.43 0 001.354.026zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.886 7.093a4.266 4.266 0 00-.59 1.686 14.6 14.6 0 00-.909-.411l-.238 1.055c.408.167.796.359 1.166.574V10c1.454.847 2.622 2.061 3.554 3.577h.003c.235.383.455.784.661 1.204l.93-.647a9.738 9.738 0 00-.237-.531 4.364 4.364 0 001.767-.65c.471 1.173.73 2.45.73 3.79C25.723 22.406 21.083 27 15.36 27S5 22.407 5 16.742C5 11.077 9.639 6.484 15.361 6.484c1.238 0 2.425.215 3.525.609z",
    opacity: 0.6
  })));
}

const ForwardRef = React.forwardRef(RddIcon);
export default ForwardRef;