const React = require("react");

function NulsIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.597-12.64l-.018 4.492-2.825-1.447.065-9.454 4.744 6.223 4.274 2.387L22 20.443V8.779L16.028 6l.064 6.8 1.413 1.873.129-6.196 2.668 1.331v9.88l-3.019-1.846-5.465-7.164a.636.636 0 00-.923-.098l-.683.586a.591.591 0 00-.212.453v11.718L16 26v-4.536z"
  }));
}

const ForwardRef = React.forwardRef(NulsIcon);
module.exports = ForwardRef;