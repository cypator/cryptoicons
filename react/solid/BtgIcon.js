const React = require("react");

function BtgIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm-.988-20.26c.436-.03.875-.05 1.312-.065.005.897.003 1.795 0 2.692l-1.31-.002c0-.875 0-1.75-.002-2.625zm3.152 2.667h.001c-.002-.825-.002-1.65.004-2.474 2.43.609 4.594 2.197 5.867 4.358 1.441 2.397 1.683 5.458.662 8.06-1.076 2.82-3.605 5-6.535 5.715.002-.82.004-1.638-.002-2.457 1.392-.132 2.917-.254 4.043-1.18 1.137-.996 1.4-2.691 1.07-4.105-.254-1.079-1.271-1.763-2.298-2.002 1.716-.91 1.896-3.55.495-4.807-.918-.777-2.155-.953-3.307-1.108zm-8.746-.035c1.118-.982 2.384-1.809 3.806-2.27.007.772.005 1.544.005 2.316-1.271.002-2.542.015-3.81-.046zm-1.482 1.99c.37-.693.952-1.242 1.318-1.936.066.085.09.188.071.308.009.527.017 1.053.093 1.574.647.004 1.304-.046 1.945.081.388.074.622.477.599.85.021 2.314-.006 4.629.013 6.943-.02.405.081.894-.271 1.19-.603.203-1.254.094-1.878.107-.242.667-.409 1.362-.423 2.07 1.272.07 2.55.023 3.825.036 0 .77.002 1.542-.003 2.312-2.497-.803-4.63-2.667-5.705-5.063-1.245-2.673-1.077-5.931.416-8.473zm7.13.101c1.108.032 2.326-.136 3.324.456.855.486.908 1.859.08 2.4-.998.662-2.263.535-3.403.556v-3.412zm0 5.248h.001c1.362.037 2.853-.196 4.08.537.903.503 1.008 1.94.132 2.522-1.225.849-2.805.612-4.212.726V16.71zm-.051 5.925h1.365c0 .896.002 1.792-.002 2.688a37.374 37.374 0 01-1.368-.061c.003-.876.005-1.752.005-2.627z"
  }));
}

const ForwardRef = React.forwardRef(BtgIcon);
module.exports = ForwardRef;