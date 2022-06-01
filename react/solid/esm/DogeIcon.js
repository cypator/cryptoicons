import * as React from "react";

function DogeIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.518-15.104V24h6.549c1.21 0 2.257-.21 3.142-.627.885-.419 1.607-.99 2.168-1.715.56-.724.977-1.572 1.25-2.543.273-.971.409-2.01.409-3.115a11.47 11.47 0 00-.41-3.115c-.272-.97-.689-1.819-1.25-2.543-.56-.725-1.282-1.296-2.167-1.715C19.288 8.21 18.24 8 17.03 8h-6.549v6.61H9v2.286h1.482zm2.766-2.285v-4.325h2.721c1.077 0 1.958.145 2.644.437.686.291 1.224.694 1.615 1.21a4.4 4.4 0 01.796 1.815c.14.695.21 1.445.21 2.252a11.4 11.4 0 01-.21 2.252c-.14.695-.405 1.3-.796 1.815-.391.516-.93.919-1.615 1.21-.686.292-1.567.437-2.644.437h-2.721v-4.818h4.314v-2.285h-4.314z"
  }));
}

const ForwardRef = React.forwardRef(DogeIcon);
export default ForwardRef;