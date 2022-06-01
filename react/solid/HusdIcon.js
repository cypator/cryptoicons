const React = require("react");

function HusdIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM9.356 19.803v5.744h3.42v-2.325l-.006-.188a3.42 3.42 0 00-3.414-3.231zm3.302-13.11h-3.42v7.6l.005.188a3.42 3.42 0 003.415 3.232h4.916l.17.008a1.71 1.71 0 011.54 1.702v5.89h3.419v-7.6l-.006-.2a3.419 3.419 0 00-3.412-3.22h-4.918l-.147-.006a1.71 1.71 0 01-1.562-1.703v-5.89zm9.928.236h-3.42v2.325l.005.187a3.42 3.42 0 003.415 3.232V6.93z"
  }));
}

const ForwardRef = React.forwardRef(HusdIcon);
module.exports = ForwardRef;