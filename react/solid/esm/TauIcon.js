import * as React from "react";

function TauIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8.094 13.678L6 15.788h4.203zm2.11 2.55H6l2.094 2.094zm2.852-2.853l-2.11-2.11v4.204zm-2.55 2.094v-4.203l-2.093 2.109zm2.854-2.413l2.109-2.094h-4.203zm0-4.643l-2.094 2.109h4.203zm4.962-.304L16.212 6v4.203zm-2.55 2.094V6l-2.094 2.11zm-2.716 8.437l-2.11-2.109v4.203zm-4.643 0l2.094 2.094v-4.203zm10.212-5.584l2.11-2.094H16.53zm-2.094-2.534h4.203l-2.109-2.11zM15.47 21.493h-4.203l2.094 2.094zm-2.11-2.55l-2.093 2.11h4.203zm10.228-5.568l-2.109-2.11v4.204zm-4.643 0l2.094 2.094v-4.203zm-5.266 10.53L15.772 26v-4.203zm2.534-2.108V26l2.11-2.094zm2.413 1.79l2.11-2.094H16.53zm0-4.643l-2.094 2.11h4.203zm2.853-2.413v4.203l2.11-2.094zm-2.534 2.11l2.094 2.093v-4.203zm4.947-.32L26 16.229h-4.203zm0-4.643l-2.094 2.11H26z"
  }));
}

const ForwardRef = React.forwardRef(TauIcon);
export default ForwardRef;