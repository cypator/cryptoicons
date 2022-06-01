import * as React from "react";

function TnbIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.402-20.143l.075-.357H8.34l-2.178 9h2.396l1.646-7.286h2.932L11.389 20.5h2.179l1.713-7.286h.03l.26-1.228.03-.129zm4.141-.357l-2.178 8.929h4.567a5.35 5.35 0 001.621-.243c.867-.275 1.922-.852 2.09-2.043h.653l.218-.857h-.8s.073-1.286-1.596-1.5c0 0 1.452-.429 1.67-1.215h.726l.29-.857h-.799s.29-2.071-2.831-2.214zM7.323 13.214L7.76 11.5H5.436L5 13.214zm9.948 6.286l.798-3.643-1.887-4.214-.8 3.428zm5.554-4.429h-1.851l.435-1.928h1.416c.26 0 .51.101.693.282s.287.426.287.682c0 .256-.103.501-.287.682s-.433.283-.693.282zm-.489 3.715H20.11l.524-2.215h1.702c.654 0 1.179.496 1.179 1.108 0 .611-.528 1.107-1.179 1.107z"
  }));
}

const ForwardRef = React.forwardRef(TnbIcon);
export default ForwardRef;