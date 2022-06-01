const React = require("react");

function MkrIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM6 11.81v9.346h1.558v-8.045l6.101 4.592v3.453h1.558V17.38a.909.909 0 00-.363-.726l-7.399-5.569A.909.909 0 006 11.81zm19.99 0a.909.909 0 00-1.455-.726l-7.4 5.569a.909.909 0 00-.362.726v3.777h1.558v-3.453l6.1-4.592v8.045h1.559z"
  }));
}

const ForwardRef = React.forwardRef(MkrIcon);
module.exports = ForwardRef;