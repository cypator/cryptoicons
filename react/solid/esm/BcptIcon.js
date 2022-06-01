import * as React from "react";

function BcptIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm0-1.102c-5.466 0-9.898-4.432-9.898-9.898S10.534 6.102 16 6.102s9.898 4.432 9.898 9.898-4.432 9.898-9.898 9.898zm6.043-13.778s0-3.326-5.1-3.548h-6.098V23.43h6.763s4.822-.169 4.822-4.491c0 0 .166-2.66-2.938-3.104 0 0 2.716-.776 2.55-3.714zm-7.706-.887h2.605c1.663.11 1.663 1.274 1.663 1.274v.887c-.11 1.386-1.829 1.441-1.829 1.441h-2.439zm4.6 8.15c-.11 1.386-1.828 1.44-1.828 1.44h-2.773V17.22h2.939c1.663.111 1.663 1.276 1.663 1.276z"
  }));
}

const ForwardRef = React.forwardRef(BcptIcon);
export default ForwardRef;