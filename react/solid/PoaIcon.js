const React = require("react");

function PoaIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 24h22L16 5zm6.872-9.676L16 7.194l4.128 7.13c-1.285-.858-2.663-1.291-4.128-1.291s-2.843.433-4.128 1.291zm-1.951 3.37c1.81 1.99 3.843 3 6.079 3s4.27-1.01 6.08-3l2.996 5.177H6.924zM16 19.565c-1.938 0-3.711-.89-5.338-2.7 1.627-1.813 3.4-2.702 5.338-2.702s3.711.89 5.338 2.701c-1.627 1.812-3.4 2.702-5.338 2.702zm0-.483c1.16 0 2.101-.975 2.101-2.178 0-1.202-.94-2.177-2.101-2.177s-2.101.975-2.101 2.177c0 1.203.94 2.178 2.101 2.178zm0-1.13c-.559 0-1.012-.469-1.012-1.048 0-.579.453-1.048 1.012-1.048s1.012.47 1.012 1.048c0 .58-.453 1.049-1.012 1.049z"
  }));
}

const ForwardRef = React.forwardRef(PoaIcon);
module.exports = ForwardRef;