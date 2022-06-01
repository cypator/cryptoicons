const React = require("react");

function EllaIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.073-18.788l2.207-2.207L16 5l-4.25 6.062 2.163 2.164L16 11.14zm-4.883.738l-2.2-2.2L5 16l6.056 4.229 2.156-2.156L11.14 16zm5.584 4.137l2.182 2.182L27 16l-5.978-4.29-2.226 2.226L20.86 16zm-4.838.71l-2.14 2.139L16 27l4.232-6.007-2.182-2.183L16 20.86zM16 12.527L12.528 16 16 19.472 19.472 16z"
  }));
}

const ForwardRef = React.forwardRef(EllaIcon);
module.exports = ForwardRef;