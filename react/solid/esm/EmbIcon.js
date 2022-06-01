import * as React from "react";

function EmbIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.343 5.108l-.084.07-10.394 10.39a.607.607 0 00-.071.775l.07.085 10.39 10.393a.607.607 0 00.776.071l.084-.07 10.39-10.39a.608.608 0 00.004-.864l-10.39-10.39a.607.607 0 00-.775-.07zm.387 2.328l.04.027 8.454 8.453a.117.117 0 01.027.131l-.027.041-7.616 7.616V16h-1.848v7.704l-7.616-7.616a.12.12 0 01-.027-.131l.027-.04 8.454-8.454a.12.12 0 01.132-.027z"
  }));
}

const ForwardRef = React.forwardRef(EmbIcon);
export default ForwardRef;