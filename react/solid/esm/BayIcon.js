import * as React from "react";

function BayIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.784-16.026c.058-.065.123-.13.188-.196.21-.226.44-.467.657-.7a4.875 4.875 0 001.357-3.369c0-.087.014-.445.014-.496C24.899 8.341 22.481 6 19.623 6h-9v3.631H7V26h12.767C22.604 26 25 23.477 25 20.488c.007-2.137-1.314-3.646-2.216-4.514zm-3.017 8.196H8.804V11.447h1.82v10.915h8.92c.736 0 1.393-.445 1.674-1.13a1.832 1.832 0 00-.39-1.991l-3.182-3.223 3.233-3.274c.52-.525.671-1.305.39-1.99a1.808 1.808 0 00-1.675-1.13h-7.16V7.816h7.196c1.906 0 3.508 1.553 3.573 3.441 0 .08-.015.394-.015.401v.036a3.054 3.054 0 01-.858 2.122c-.224.234-.455.481-.664.7-.354.372-.657.693-.802.839l-.65.641.643.65c.087.087.195.189.325.313.75.7 2.014 1.866 2.014 3.514.007 1.969-1.595 3.697-3.429 3.697zm-7.34-12.716l7.167.007-4.503 4.565 4.453 4.52h-7.117z"
  }));
}

const ForwardRef = React.forwardRef(BayIcon);
export default ForwardRef;