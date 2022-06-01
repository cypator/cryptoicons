const React = require("react");

function MedIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8-19.939l-8 4.805-8-4.805v8.915l2.536 1.48v-5.953L16 19.777l5.464-3.27v5.95L24 20.977V12.06zm-7.97 11.117l-2.338-1.399-2.31 1.399L16.03 26l4.649-2.822-2.31-1.399-2.34 1.399zm4.62-14.356L16 6l-4.65 2.822 2.311 1.399L16 8.822l2.339 1.399 2.31-1.399z"
  }));
}

const ForwardRef = React.forwardRef(MedIcon);
module.exports = ForwardRef;