const React = require("react");

function CnyIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.171 8v1.925h13.816V8zm-1.54 5.641v1.945h4.895v.385c-.079 1.886-.473 3.407-1.223 4.6-.75 1.08-2.171 2.003-4.303 2.735L8.105 25c2.21-.75 3.79-1.81 4.777-3.157 1.006-1.464 1.559-3.427 1.657-5.872v-.385h2.922v6.93c0 1.406.69 2.118 2.092 2.118h3.138c.69 0 1.204-.212 1.559-.597.355-.404.612-1.694.75-3.87l-1.855-.577c-.04 1.56-.138 2.503-.277 2.81-.118.29-.315.444-.552.444h-2.171c-.454 0-.671-.25-.671-.751v-6.507h5.23V13.64z"
  }));
}

const ForwardRef = React.forwardRef(CnyIcon);
module.exports = ForwardRef;