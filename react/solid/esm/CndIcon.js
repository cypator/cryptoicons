import * as React from "react";

function CndIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.473-20.52l2.667-.612 1.033-1.7-1.02-1.674-1.306-.902L18.164 6l-1.655.933-2.648-.472-3.636 2.52-.283 2.941-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.34.828 1.733 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.17-1.516-2.4 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z"
  }));
}

const ForwardRef = React.forwardRef(CndIcon);
export default ForwardRef;