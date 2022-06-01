const React = require("react");

function XpIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.526 23h1.414l.977-4.923 2.306.01c1.61 0 2.934-.412 3.973-1.236 1.04-.824 1.633-1.921 1.779-3.293.088-.941-.056-1.76-.434-2.455l-2.73 1.427c.02.11.031.223.035.335.022.872-.183 1.566-.615 2.083-.432.516-1.04.78-1.822.793l-2.031-.02.194-.975-3.515 1.837-.64 3.245-.862-2.46-2.645 1.383L12.992 23zm-1.315-10.99h1.75l-.532 2.693 3.516-1.838.3-1.51 2.295.02c.07.004.14.013.208.026l2.8-1.464c-.746-.586-1.701-.895-2.866-.927L17.556 9h-2.215l-1.88 3.01h1.75-1.75l-1.051 1.779L11.18 9H7.7l2.372 6.827-2.467 3.49 6.659-3.482 2.697-3.826zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5.786 21.952l-.02-.037L5 23h3.765l2.348-3.833z"
  }));
}

const ForwardRef = React.forwardRef(XpIcon);
module.exports = ForwardRef;