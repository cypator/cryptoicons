const React = require("react");

function FluxIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-2.255 23.42l-.048.03-1.915 1.108L16 27l1.963-1.138-4.145-2.399-.073-.042zm6.477-11.08l-5.277 3.057v6.111l5.27 3.052.007.004 5.278-3.056v-6.11l-5.278-3.058zM9.536 16.221L6.5 17.98v3.514l3.036 1.758 3.035-1.758V17.98l-3.035-1.76zM16 5l-9.5 5.5v4.87l1.91-1.105 1.125-.652 1.126.652 2.031 1.176v-1.348l1.126-.652 5.278-3.055 1.126-.652 1.126.652 4.152 2.403v-2.29L16 5z"
  }));
}

const ForwardRef = React.forwardRef(FluxIcon);
module.exports = ForwardRef;