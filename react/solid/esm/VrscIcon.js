import * as React from "react";

function VrscIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.158 6.84c-.672-.273-1.445.115-1.996.588-1.453 1.229-2.631 2.609-2.285 4.64.167.978 1.673 4.137 3.284 7.276l.334.649c1.786 3.448 3.595 6.687 3.767 6.757 0 0 11.283-14.33 11.505-15.073.176-.592-.035-2.724-2.077-4.252-.582-.436-1.345-.79-1.902-.588-1.631.589-6.174 7.048-6.174 7.048l-.02-.04-.098-.195a76.543 76.543 0 00-1.788-3.335l-.269-.463c-.857-1.457-1.759-2.8-2.28-3.011z"
  }));
}

const ForwardRef = React.forwardRef(VrscIcon);
export default ForwardRef;