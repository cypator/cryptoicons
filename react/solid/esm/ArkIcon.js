import * as React from "react";

function ArkIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.053-18.653L27 25 15.996 7 5 24.891l10.947-11.544zm1.588 4.585v.017l-1.662-1.953-1.76 1.936h3.422zm-6.6 3.177h9.859l-1.998-2.045-5.92.025v.009l-1.94 1.987v.024z"
  }));
}

const ForwardRef = React.forwardRef(ArkIcon);
export default ForwardRef;