const React = require("react");

function CompIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM8.466 16.207a.706.706 0 00-.716.698v3.253c0 .583.311 1.124.82 1.43l7.165 4.289c.134.08.29.123.449.123a.845.845 0 00.854-.84v-3.37c0-.498-.27-.957-.71-1.207l-7.502-4.281a.731.731 0 00-.36-.095zm3.43-5.172a.706.706 0 00-.717.698v4.287l6.59 3.857c.432.253.695.71.695 1.2v3.799a.29.29 0 00.067-.027l1.642-.904a.554.554 0 00.29-.486v-6.84a1.396 1.396 0 00-.709-1.208l-7.5-4.281a.731.731 0 00-.358-.095zm3.64-4.94a.725.725 0 00-.977.252.708.708 0 00-.096.352v4.066l6.736 3.953c.429.253.693.708.693 1.2v6.955l1.557-.823a.564.564 0 00.301-.491v-9.991c0-.498-.27-.96-.711-1.21z"
  }));
}

const ForwardRef = React.forwardRef(CompIcon);
module.exports = ForwardRef;