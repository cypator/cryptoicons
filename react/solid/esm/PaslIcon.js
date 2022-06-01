import * as React from "react";

function PaslIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.92-11.844l-2.796 1.16.153-.839 2.097-.87a.515.515 0 00.277-.671.51.51 0 00-.667-.28l-1.487.618.283-1.556h5.275c4.583 0 7.285-2.858 7.285-6.553 0-2.913-2.073-4.298-6.22-4.155h-6.773l-2.398 13.321-3.293 1.367a.515.515 0 00-.277.671.51.51 0 00.667.28l2.687-1.116-.15.839-1.99.825a.515.515 0 00-.277.671.51.51 0 00.668.28l1.382-.574L9.269 25h2.344l.452-2.48 3.406-1.414a.515.515 0 00.277-.671.51.51 0 00-.667-.28zm-.57-11.047h5.154c2.556 0 3.323 1.07 3.323 2.656 0 1.584-1.22 3.769-4.43 3.769h-5.219z"
  }));
}

const ForwardRef = React.forwardRef(PaslIcon);
export default ForwardRef;