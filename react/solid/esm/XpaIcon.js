import * as React from "react";

function XpaIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.575-19.154l-8.11-2.324-2.774 4.725-3.222-3.737 1.46-.188 1.505 1.768 1.67-2.959-7.35-2.107a.586.586 0 00-.736.7L11.274 21.8l3.497-5.888 3.222 3.737-1.46.188-1.504-1.768-3.31 5.517.49 1.97a.59.59 0 00.98.28l12.63-12.01a.58.58 0 00-.244-.98z"
  }));
}

const ForwardRef = React.forwardRef(XpaIcon);
export default ForwardRef;