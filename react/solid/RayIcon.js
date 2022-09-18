const React = require("react");

function RayIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 5l-9.5 5.5v11L16 27l9.5-5.5v-8.814l-.995.57v7.673l-8.508 4.927-8.512-4.927v-9.854L16 6.14l6.539 3.79.988-.57L16 5zm.943 6.284h-4.748v1.457h4.745a1.6 1.6 0 01.647.127c.204.086.39.213.544.371a1.657 1.657 0 01.5 1.196c-.004.45-.18.883-.496 1.203a1.693 1.693 0 01-1.195.508h-4.745v4.79h1.422v-3.337h2.848a5.485 5.485 0 001.697-.257 3.115 3.115 0 001.367-1.124 3.08 3.08 0 00.555-1.783 3.182 3.182 0 00-.927-2.223 3.152 3.152 0 00-2.214-.928zm1.65 6.985a5.359 5.359 0 01-1.484.306l1.28 2.24h1.66zm5.902-8.335l-.982.57v1.158l.982.546.98-.546v-1.158l-.98-.57z"
  }));
}

const ForwardRef = React.forwardRef(RayIcon);
module.exports = ForwardRef;