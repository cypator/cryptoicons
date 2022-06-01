import * as React from "react";

function SysIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.147 15.434a.11.11 0 01-.003.098.12.12 0 01-.157.047c-7.537-3.92 6.841-8.485 14.764-3.14.096.055.18.11.249.163-.081-.058-.166-.107-.249-.163-2.94-1.676-17.604-3.343-14.604 2.995m8.326 5.32c4.158-1.89.776-8.362-4.725-7.113a.118.118 0 01-.139-.085.11.11 0 01.041-.11c4.28-3.216 12.314 4.292 4.823 7.307M4 18.011c12.101 7.743 18.334.467 13.955-2.71l-.006-.005a.108.108 0 01-.017-.152.116.116 0 01.114-.04C28.547 17 14.26 27.665 4 18.01m8.2-7.156c-6.619 4.54.744 6.6 2.081 6.164a.139.139 0 01.064-.002.111.111 0 01.083.138c-.903 3.463-11.31-3.392-2.228-6.3M16 0C7.164 0 0 7.163 0 16c0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.837-7.164-16-16-16"
  }));
}

const ForwardRef = React.forwardRef(SysIcon);
export default ForwardRef;