const React = require("react");

function NgcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.5-15.158l-2.608.134 2.326-5.925-7.084.976-.634 6.532h1.55L13.805 26zm-5.498 6.498c0 .13-.11.236-.246.236s-.247-.106-.247-.236v-1.75c0-.13.11-.236.247-.236s.246.105.246.235zm-1.832-5.286l.544-5.73a.223.223 0 01.226-.196h.04c.064 0 .124.025.167.07s.064.105.059.165l-.473 5.22h1.41l-.065 3.176a.27.27 0 01-.275.258h-.012c-.074 0-.145-.029-.197-.08s-.08-.119-.079-.19l.064-2.693zm0-6.6l6.907-.808-3.383-1.414S17.046 6.673 14.72 6l-.211.808s1.41.337 1.269 2.492z"
  }));
}

const ForwardRef = React.forwardRef(NgcIcon);
module.exports = ForwardRef;