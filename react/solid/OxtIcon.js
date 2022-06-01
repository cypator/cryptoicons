const React = require("react");

function OxtIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.663 7.55a8.58 8.58 0 00-1.656.057 7.086 7.086 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.314 2.437l-.133-.19-.101-.143c-.804-1.208-.607-2.99-.608-3.013a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836 8.549 8.549 0 00-.47-17.021zm-7.99 2.64a1.425 1.425 0 10.129.068zm1.28-2.591a1.099 1.099 0 10.107.056zm-3.625-.038a.776.776 0 10.094.048z"
  }));
}

const ForwardRef = React.forwardRef(OxtIcon);
module.exports = ForwardRef;