const React = require("react");

function DtaIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M24.963 14.512l-.02-1.949L13.791 6l-2.713 1.674-.006-.003L8 9.484v13.022l2.811 1.801h.001l.019.013v-.002L13.823 26 25 19.479l-.017-4.968zm-3.275 3.112l-7.854 4.618-2.292-1.363 7.807-4.594zm-2.866-1.64l-4.837 2.923.021-5.681zm-4.814-3.366l.01-2.689 7.732 4.515v2.705zM10.82 23.57l-2.334-1.395V9.896l2.346 1.401v9.572l.018-.01zm.416-3.001v-9.273l2.345-1.401v9.256zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.884-9.399l10.42-6.12-.03 2.82-10.437 6.136zm7.793-8.584l-10.432-6.1 2.406-1.39 10.455 6.104z"
  }));
}

const ForwardRef = React.forwardRef(DtaIcon);
module.exports = ForwardRef;