const React = require("react");

function OmniIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.065 6.888h-3.19v3.196a10.93 10.93 0 013.19-3.196zm15.004 3.11v-3.11h-3.134a10.93 10.93 0 013.134 3.11zm-3.088 15.084h3.088v-3.08a10.933 10.933 0 01-3.088 3.08zM6.875 21.916v3.166h3.144a10.93 10.93 0 01-3.144-3.166zM26 16c0-5.514-4.486-10-10-10S6 10.486 6 16s4.486 10 10 10 10-4.486 10-10zm-10 7.292c-4.02 0-7.292-3.271-7.292-7.292 0-4.02 3.271-7.292 7.292-7.292 4.02 0 7.292 3.271 7.292 7.292 0 4.02-3.271 7.292-7.292 7.292z"
  }));
}

const ForwardRef = React.forwardRef(OmniIcon);
module.exports = ForwardRef;