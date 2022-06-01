import * as React from "react";

function AudrIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.146-18.736l3.61 1.92 1.92-.96-4.589-2.486V7.36l8.823 4.58 1.92-.96-11.3-5.924A.845.845 0 0010 5.805v6.067c.003.587.332 1.124.854 1.392zm13.757-1.018a.845.845 0 00-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 001.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.835.835 0 00-.25-.596zm-1.536 6.538l-11.28 5.856v-4.378l11.28-5.856v4.378z"
  }));
}

const ForwardRef = React.forwardRef(AudrIcon);
export default ForwardRef;