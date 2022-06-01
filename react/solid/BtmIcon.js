const React = require("react");

function BtmIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.827 15.376l1.745-3.7L7.23 17.02 6 18.248l3.894 3.858-.812-3.032 1.745-3.699-1.745 3.7 5.442-5.443-1.952-1.955-1.745 3.699zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.926 9.082l5.442 5.442L13.752 6l-3.86 3.894 3.034-.812zm6.148 13.836l-5.442-5.442L18.248 26l3.858-3.894-3.032.812zM20.04 9.34l2.066.552.814 3.032-5.444 5.444 1.952 1.953L26 13.75l-1.638-6.113L18.248 6l-.772.775L20.04 9.34zM13.752 26l.772-.775-2.564-2.567-2.066-.552L6 18.248l1.64 6.112L13.752 26zM26 18.248l-.775-.772-2.565 2.564-.554 2.066L18.248 26l6.114-1.638L26 18.248zM6 13.752l.775.772 2.565-2.566.552-2.064L13.752 6 7.64 7.638 6 13.752zm14.32-1.183l-5.34-5.338L13.752 6l4.616 8.524 1.953-1.955zm-8.64 6.86L18.247 26l-4.616-8.524-1.953 1.952z"
  }));
}

const ForwardRef = React.forwardRef(BtmIcon);
module.exports = ForwardRef;