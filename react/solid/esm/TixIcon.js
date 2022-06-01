import * as React from "react";

function TixIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 11.386v1.15c0 .214.173.387.386.387H11.7c.773 0 1.16.353 1.16 1.058 0 .513-.387.833-1.16.961H6.386A.386.386 0 006 15.33v1.15c0 .213.173.386.386.386H11.7c1.095.064 1.643.45 1.643 1.154s-.548 1.058-1.643 1.058H6.386a.386.386 0 00-.386.386v1.15c0 .214.173.387.386.387H11.7c1.546 0 3.865-.48 3.865-2.885 0-1.025-.45-1.794-1.352-2.307.644-.577.966-1.218.966-1.923 0-1.69-1.45-2.885-3.768-2.885H6.387a.387.387 0 00-.387.386zm10.435 0v1.15c0 .214.173.387.386.387h2.899c.213 0 .386.173.386.387v7.304c0 .213.173.386.387.386h1.449a.386.386 0 00.387-.386v-9.228a.386.386 0 00-.387-.386h-5.12a.386.386 0 00-.387.386zM23.68 11a.386.386 0 00-.386.386v1.15c0 .214.173.387.386.387h1.933a.386.386 0 00.386-.386v-1.15a.386.386 0 00-.386-.387z"
  }));
}

const ForwardRef = React.forwardRef(TixIcon);
export default ForwardRef;