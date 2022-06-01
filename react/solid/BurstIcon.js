const React = require("react");

function BurstIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.294-12.704l.525-2.29h1.529L12.497 24h4.875c3.017 0 4.876-1.347 5.332-3.873l.228-1.265c.295-1.636-.1-2.77-1.272-3.371 1.184-.579 1.873-1.582 2.146-3.09l.1-.556C24.373 9.255 23.109 8 19.99 8h-4.606l-1.142 6.329-4.578-.003-.51 2.443H4zm5.066-2.747h1.49c1.513 0 2.047.614 1.769 2.157l-.245 1.354c-.218 1.207-.86 1.719-2.013 1.719h-1.945zm1.143-6.329h1.595c1.18 0 1.647.62 1.422 1.868l-.157.867c-.23 1.278-.984 1.83-2.272 1.83H17.09z"
  }));
}

const ForwardRef = React.forwardRef(BurstIcon);
module.exports = ForwardRef;