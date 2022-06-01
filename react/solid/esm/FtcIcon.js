import * as React from "react";

function FtcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.603-26c-5.83 3.022-8.05 5.565-8.05 5.565l-.345 2.405c-.346.411-.627-.068-.627-.068l-.208-1.237-1.663 1.58c0 3.02-.627 4.053-.627 4.053-.276.41-.552.068-.552.068l-.138-3.158-1.042.894.07 5.018c-.973-.206-1.18-2.612-1.18-2.612-.766.685-.622 3.159-.622 3.159l-1.732-2.2 1.041 2.542L6.5 20.704l1.876 1.858c-.973.895-.139 1.58-.139 1.58a.624.624 0 01.346-.827c.834-.41.696.758.696.758L7.892 25.72c-.207.342.138.273.138.273l1.663-1.784c.973 1.237 2.152.963 2.152.963-1.456-.616-1.456-2.064-1.456-2.064 1.249 1.996 3.332 1.306 3.332 1.306-2.36-.41-2.428-1.858-2.428-1.858 5.201 1.032 6.52-.41 6.52-.41l-6.175-.275c1.456-1.51 5.202-.895 5.202-.895l3.262-4.259 4.065-4.77a5.53 5.53 0 00.914-1.505C26.25 7.463 24.603 6 24.603 6zm-11.1 13.95s5.962-8.454 8.804-10.444c.006 0-3.05 5.154-8.804 10.445z"
  }));
}

const ForwardRef = React.forwardRef(FtcIcon);
export default ForwardRef;