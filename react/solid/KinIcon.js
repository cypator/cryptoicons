const React = require("react");

function KinIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.636-18.97c.35 0 .633-.278.633-.62v-.367a.626.626 0 00-.633-.62h-.376a.626.626 0 00-.633.62v.986zm-5.935 0v-.987a.626.626 0 00-.633-.62h-.375a.626.626 0 00-.633.62v.367c0 .342.283.62.633.62zm-1.008 6.583h.375c.35 0 .633-.277.633-.619v-.987h-1.008a.626.626 0 00-.633.62v.367c0 .342.283.62.633.62zm6.567 0h.376c.35 0 .633-.277.633-.619v-.367a.626.626 0 00-.633-.62h-1.01v.987c0 .342.284.62.634.62zm-3.284-8.03h.376c.35 0 .633-.276.633-.618v-.368a.626.626 0 00-.633-.619h-.376a.626.626 0 00-.633.62v.367c0 .342.284.619.633.619zm0 9.797h.376c.35 0 .633-.278.633-.62v-.367a.626.626 0 00-.633-.62h-.376a.626.626 0 00-.633.62v.368c0 .341.284.619.633.619zm4.926-4.979h.375c.35 0 .633-.277.633-.619v-.367a.626.626 0 00-.633-.62h-.375a.626.626 0 00-.633.62v.367c0 .342.283.62.633.62zm-10.015 0h.375c.35 0 .634-.277.634-.619v-.367a.626.626 0 00-.634-.62h-.375a.626.626 0 00-.633.62v.367c0 .342.283.62.633.62zm7.285-1.544a.452.452 0 00.455-.45V13.19h-1.253a.452.452 0 00-.455.45v.4c0 .45-.347.84-.804.84a.862.862 0 01-.85-.84v-.417a.436.436 0 00-.439-.433h-1.125v4.978h1.116a.445.445 0 00.448-.443v-.374c0-.476.355-.875.812-.875a.85.85 0 01.842.834v.412c0 .246.202.446.451.446h1.257v-1.231a.449.449 0 00-.452-.446H17.8c-.457 0-.881-.366-.881-.817a.824.824 0 01.828-.817h.425zm.481 6.565a.558.558 0 00-.31.735.58.58 0 00.75.304.557.557 0 00.31-.734.58.58 0 00-.75-.305zM13.4 8.897a.558.558 0 00-.311.734.58.58 0 00.75.304.558.558 0 00.311-.734.58.58 0 00-.75-.304zm8.554 4.428a.58.58 0 00.75.304.558.558 0 00.312-.735.58.58 0 00-.75-.304.558.558 0 00-.312.735zM9.312 18.463a.58.58 0 00.751.304.558.558 0 00.311-.734.579.579 0 00-.75-.304.558.558 0 00-.312.734zm0-5.569a.558.558 0 00.311.735.58.58 0 00.751-.304.558.558 0 00-.31-.735.58.58 0 00-.752.304zm9.177-2.959a.58.58 0 00.75-.304.558.558 0 00-.31-.734.58.58 0 00-.75.304.558.558 0 00.31.734zm3.465 8.098a.558.558 0 00.311.734.58.58 0 00.75-.304.558.558 0 00-.31-.734.579.579 0 00-.75.304zm-8.883 4.588a.58.58 0 00.75-.304.558.558 0 00-.31-.734.58.58 0 00-.75.304.557.557 0 00.31.734zm8.443-1.63a.316.316 0 000 .455c.129.125.336.125.464 0s.129-.329 0-.454a.334.334 0 00-.464 0zM10.35 9.912a.316.316 0 000 .455.334.334 0 00.464 0c.128-.126.128-.329 0-.454s-.336-.126-.464 0zm11.164.455a.334.334 0 00.464 0c.129-.126.129-.329 0-.454s-.335-.126-.464 0a.316.316 0 000 .454zM10.35 21.446c.128.125.336.125.464 0s.128-.329 0-.454a.334.334 0 00-.464 0 .316.316 0 000 .454zm13.53-5.847c0 .177.148.32.329.32a.325.325 0 00.328-.32.325.325 0 00-.328-.322.325.325 0 00-.328.322zm-15.925 0c0 .177.147.32.329.32a.325.325 0 00.328-.32.325.325 0 00-.328-.322.325.325 0 00-.329.322zm8.21-7.387a.325.325 0 00.328-.321.325.325 0 00-.329-.322.325.325 0 00-.328.322c0 .177.147.32.328.32zm0 15.576a.325.325 0 00.328-.32.325.325 0 00-.329-.322.325.325 0 00-.328.321c0 .177.147.321.328.321zm10.178-8.19c0 .178.148.322.329.322a.325.325 0 00.328-.321.325.325 0 00-.328-.322.325.325 0 00-.329.322zm-21.097-.16c-.136 0-.246.108-.246.24s.11.242.246.242.247-.108.247-.241-.11-.241-.247-.241zM15.672 5.321c0 .177.147.321.328.321s.328-.144.328-.32c0-.178-.147-.322-.328-.322s-.328.144-.328.321zm9.725 14.105a.479.479 0 00.262.631.5.5 0 00.646-.256.479.479 0 00-.263-.632.497.497 0 00-.645.257zm-5.33 5.19a.334.334 0 00-.43.172.313.313 0 000 .245.331.331 0 00.606.004.313.313 0 00.001-.245.323.323 0 00-.176-.175zM6.442 11.289a.335.335 0 00-.251-.001.322.322 0 00-.179.172.313.313 0 00-.002.246.331.331 0 00.606.004.313.313 0 00.002-.246.323.323 0 00-.176-.175zm-.916 8.25a.398.398 0 00.218.525c.21.086.45-.01.538-.213a.398.398 0 00-.218-.526.414.414 0 00-.538.213zM19.863 6.252c.208.086.45-.01.537-.214a.398.398 0 00-.218-.526.414.414 0 00-.538.214c-.088.204.01.44.219.526zm6.141 4.867a.242.242 0 00-.134.13.234.234 0 00-.001.184.249.249 0 00.455.003.24.24 0 00-.131-.316.248.248 0 00-.189-.001zM11.587 5.95a.24.24 0 00.13.316.25.25 0 00.323-.129.239.239 0 00-.13-.315.247.247 0 00-.323.128zm.063 18.962a.247.247 0 00-.228.148.24.24 0 00.132.315.248.248 0 00.322-.128.239.239 0 00-.13-.315.247.247 0 00-.096-.02zm11.642-1.7a.316.316 0 000-.454.33.33 0 00-.232-.094.33.33 0 00-.233.094.316.316 0 000 .455.334.334 0 00.465 0zM7.935 8.033a.475.475 0 000 .681.497.497 0 00.697 0 .475.475 0 000-.681.501.501 0 00-.697 0zm15.525.09a.237.237 0 000 .34.25.25 0 00.349 0 .238.238 0 000-.34.248.248 0 00-.349 0zM8.027 22.735a.237.237 0 000 .34.25.25 0 00.349 0 .237.237 0 000-.34c-.047-.046-.109-.07-.175-.07s-.127.024-.174.07zM16.082 27c.227 0 .41-.18.41-.401a.406.406 0 00-.41-.402c-.227 0-.41.18-.41.402 0 .221.183.401.41.401z"
  }));
}

const ForwardRef = React.forwardRef(KinIcon);
module.exports = ForwardRef;