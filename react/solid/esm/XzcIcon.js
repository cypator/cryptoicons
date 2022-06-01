import * as React from "react";

function XzcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.725-12.852h3.39v2.964H11.93L24.573 9.46a1.468 1.468 0 00.32-1.574A1.454 1.454 0 0023.55 7H8.45A1.44 1.44 0 007 8.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 22.54a1.468 1.468 0 00-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0025 23.548v-10.68l-6.275 6.28z"
  }));
}

const ForwardRef = React.forwardRef(XzcIcon);
export default ForwardRef;