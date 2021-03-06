const React = require("react");

function EtcIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.732-16L16 12.19 9.268 16 16 19.781l6.732-3.783zM16 21.047a3944.37 3944.37 0 00-7-3.952c2.079 3.248 4.66 7.26 7 10.904 2.34-3.643 4.921-7.656 7-10.904a3944.185 3944.185 0 00-7 3.952zm0-10.089l7 3.907L16 4 9 14.866l7-3.907z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.296,
    fillRule: "nonzero",
    d: "M22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882v-6.938zm0-10.069V4l6.988 10.845-6.988-3.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.803,
    d: "M15.989 16.553l6.72-.577-6.72 3.775z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.988 16.553l-6.721-.577 6.721 3.775z",
    opacity: 0.311
  })));
}

const ForwardRef = React.forwardRef(EtcIcon);
module.exports = ForwardRef;