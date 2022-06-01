const React = require("react");

function McapIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.468-24.936c-.286.078-.542.229-.796.373-2.246 1.28-4.505 2.535-6.76 3.798a1.848 1.848 0 00-.957 1.671c-.003 3.246.021 6.492-.017 9.737-.022.197.161.37.36.352.99.002 1.98.009 2.97-.003.235.004.355-.242.332-.444.023-2.67.015-5.339.02-8.008.007-.288.067-.6.292-.805.346-.316.779-.514 1.182-.746.403-.21.784-.464 1.21-.63.195-.07.455-.126.618.041.17.191.166.462.18.7.014 1.36-.003 2.72 0 4.078.012.238.005.5.146.707.156.209.444.223.684.249.566.028 1.134.007 1.702.013.314-.005.675-.009.914-.243.234-.238.224-.594.225-.9a73.454 73.454 0 01.01-3.88c.022-.26.02-.565.225-.758.185-.15.44-.065.636.013.518.23.989.546 1.489.808.305.168.646.313.862.596.213.267.276.615.277.945-.027 2.637-.062 5.275.03 7.91-.022.213.18.39.39.358.96.001 1.922.005 2.883-.001.244.022.39-.223.356-.438-.004-3.095.003-6.19.005-9.284.012-.934-.542-1.839-1.375-2.28a481.458 481.458 0 01-6.464-3.635c-.48-.29-1.072-.457-1.629-.294z"
  }));
}

const ForwardRef = React.forwardRef(McapIcon);
module.exports = ForwardRef;