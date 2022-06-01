import * as React from "react";

function ZilIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.89 6L9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.351 2.845-1.281v-8.951l-2.845 1.295v6.085l-7.548-3.67 7.548-3.897 2.845-1.281-.013-2.86z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.65,
    d: "M9 7.281l11.114 5.383 2.845-1.282L11.891 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z"
  }));
}

const ForwardRef = React.forwardRef(ZilIcon);
export default ForwardRef;