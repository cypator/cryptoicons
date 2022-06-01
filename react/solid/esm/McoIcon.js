import * as React from "react";

function McoIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.02-26.982h-.066L6.5 10.501v11l9.414 5.48.077.019 9.509-5.5V10.501l-9.52-5.483zm-.031 1.138l1.031.572 7.52 4.35v9.845l-7.52 4.325-1.032.597-8.448-4.92v-9.849l8.449-4.92zm-7.14 10.61l3.41 5.96h1.362l1.612-1.51v-.756l-1.672-1.612v-2.54l-2.21-1.413-2.502 1.872zm7.903 4.452l1.61 1.491h1.344l3.393-5.942-2.496-1.889-2.187 1.43v2.54l-1.667 1.61.003.76zm-2.37-4.91l-.25 2.39 1.845-.004 1.867-.004-.236-2.382.798-2.131h-4.838l.813 2.131zm1.595-2.715l4.622.003-.901-3.825h-7.464l-.855 3.82 4.598.002z"
  }));
}

const ForwardRef = React.forwardRef(McoIcon);
export default ForwardRef;