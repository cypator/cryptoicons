import * as React from "react";

function PlrIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8.41 20.902c.496.507 1.246.738 2.257.735 2.16 0 3.954-1.866 3.954-4.997v-.39c0-3.01-1.55-5.262-3.914-5.262-.564 0-1.57.021-2.358.777H8.26v-.64H6V25h2.312v-4.098zm4.064-4.076c0 2.019-.865 2.933-2.038 2.936-1.49 0-2.249-1.274-2.249-2.939v-.68c0-1.747.771-3.271 2.209-3.271 1.331 0 2.078 1.31 2.078 3.271zM15.74 7v14.576h2.315V7zm8.929 6.409h.29l-.013-2.333c-.1 0-.015-.003-.119-.003-1.042-.015-2.31.241-2.827.787h-.088v-.637h-2.133v10.362h2.303v-5.844c0-1.302 1.289-2.332 2.587-2.332zm-.972 5.686v2.481H26v-2.481z"
  }));
}

const ForwardRef = React.forwardRef(PlrIcon);
export default ForwardRef;