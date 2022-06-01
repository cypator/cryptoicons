import * as React from "react";

function PolisIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.636-9.32v-1c0-.198-.133-.33-.335-.33h-.665v-1.004c0-.199-.133-.334-.331-.334h-.666v-7.345h.662c.199 0 .335-.132.335-.334v-1h.665a.322.322 0 00.331-.268c.034-.166-.033-.298-.165-.368l-9.318-4.672a.46.46 0 00-.298 0l-9.652 4.672a.333.333 0 00-.166.364c0 .17.133.272.298.272h1v1c0 .198.133.33.331.33h.666v7.349h-.662c-.2 0-.335.132-.335.33v1.004h-.665c-.2 0-.332.132-.332.331v1.003c-.198 0-.334.133-.334.335s.132.334.331.334h19.305c.198 0 .334-.132.334-.33 0-.2-.132-.339-.33-.339h-.004zM7.993 11.998v-.665h15.974v.665H7.993zm13.643.67v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.331v-7.345h1.33zm-3.328 0v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.327v-7.345h1.327zm12.315 8.678H7.997v-.669H23.97v.669h-.003z"
  }));
}

const ForwardRef = React.forwardRef(PolisIcon);
export default ForwardRef;