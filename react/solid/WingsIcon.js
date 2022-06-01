const React = require("react");

function WingsIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.895 17.299L8.27 23.993 22 18.118l.796-.338-.001-.003 1.285-.55.065-3.264 1.855.513-1.414-3.146-3.818 2.963-2.719-4.674L6 9l9.183 2.461.233.795-8.028-.413 7.224 1.935 1.247 4.325zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
  }), /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.7,
    d: "M16.895 17.299l-1.036.804-1.247-4.325-7.224-1.935 8.028.413z"
  }), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M16.895 17.299l.778 2.652L22 18.118 8.27 23.993zm3.873-3.006l3.818-2.963L26 14.476l-1.855-.513-.065 3.264-1.285.55z"
  }))));
}

const ForwardRef = React.forwardRef(WingsIcon);
module.exports = ForwardRef;