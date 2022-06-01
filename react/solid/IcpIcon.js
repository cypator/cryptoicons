const React = require("react");

function IcpIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM9.83 10.5h-.006l-.248.006c-2.626.117-4.808 1.873-5.41 4.198A5.156 5.156 0 004 15.999C4 19.033 6.615 21.5 9.83 21.5c1.34 0 2.803-.667 4.348-1.982a19.024 19.024 0 001.84-1.82v-.001l.13.14c1.595 1.703 3.685 3.523 5.786 3.655l.242.008.248-.006c2.63-.117 4.813-1.877 5.413-4.207l.003-.01c.105-.41.16-.837.16-1.276 0-3.034-2.615-5.501-5.83-5.501-1.34 0-2.803.667-4.348 1.982a19.024 19.024 0 00-1.84 1.82l.026.03-.156-.168c-1.595-1.703-3.685-3.524-5.78-3.656l-.243-.008zm12.34 2.193c1.928 0 3.496 1.484 3.496 3.307 0 1.814-1.569 3.296-3.498 3.308-.048 0-.103-.003-.169-.012-1.215-.442-2.237-1.207-2.508-1.45-.248-.223-.577-.54-.933-.894l-.311-.31-.686-.693a17.474 17.474 0 011.827-1.842c1.374-1.169 2.272-1.414 2.783-1.414zm-12.338 0c.058 0 .128.004.21.014 1.196.45 2.2 1.207 2.467 1.448.354.317.873.829 1.403 1.363l.318.323c.07.07.139.142.209.21a17.474 17.474 0 01-1.827 1.842c-1.374 1.169-2.272 1.414-2.783 1.414-1.927 0-3.495-1.484-3.495-3.307 0-1.814 1.569-3.296 3.498-3.308z"
  }));
}

const ForwardRef = React.forwardRef(IcpIcon);
module.exports = ForwardRef;