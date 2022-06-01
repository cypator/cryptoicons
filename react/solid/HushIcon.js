const React = require("react");

function HushIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.993-13.343v1.317c0 .056 0 .113.008.168.07.446.453.758.888.726a.848.848 0 00.771-.855c.002-.484.001-.97 0-1.454a.175.175 0 00-.039-.1c-.097-.12-.198-.237-.298-.354-.285-.336-.569-.672-.855-1.006-.096-.112-.212-.146-.321-.098-.12.052-.156.15-.155.278.003.46 0 .919 0 1.378zm.003-9.01c.2-.309.47-.467.832-.468.366 0 .634.165.828.497l.005-.048c-.002-.931.003-1.863-.006-2.794a.831.831 0 00-.983-.82c-.39.068-.678.421-.678.842-.002.91-.001 1.822-.001 2.732l.003.06zm-.003 12.613v.228c0 .893-.003 1.786.002 2.679a.838.838 0 00.782.832c.445.02.83-.305.87-.752.02-.225.013-.454.013-.68.002-.748 0-1.496 0-2.243v-.072c-.197.308-.462.474-.826.475-.365.001-.637-.157-.841-.467zm1.668-8.826l-.001-1.638c0-.07-.006-.143-.021-.212-.092-.414-.484-.708-.879-.664a.84.84 0 00-.766.842c-.003.714-.002 1.429 0 2.143a.17.17 0 00.04.1c.122.149.248.294.373.44.242.282.482.566.725.848a.309.309 0 00.36.094c.119-.048.169-.134.169-.292v-1.66zm1.731-3.377v2.167c0 .051.002.102.006.153.04.52.544.882 1.037.749.379-.103.627-.437.627-.85V9.48c0-.553.003-1.107 0-1.661-.003-.588-.542-.996-1.083-.825-.356.112-.585.44-.586.842v2.22zM13.362 20.76c0-.862.002-1.725-.001-2.587a.834.834 0 00-1.038-.812.847.847 0 00-.628.832v4.753c0 .143-.003.286 0 .429.015.499.493.89.974.797a.845.845 0 00.692-.847c.002-.855 0-1.71 0-2.565zm0-9.446v-.82c0-.898.002-1.796-.001-2.695a.835.835 0 00-1.014-.82.846.846 0 00-.652.842v5.505c0 .506-.004 1.011 0 1.516.005.53.505.928 1.011.81a.844.844 0 00.655-.84v-3.498zm5.044 8.186v3.751c0 .054.002.107.006.16.042.522.554.884 1.048.742.377-.108.616-.44.616-.858v-7.648c-.02-.614-.628-1.014-1.17-.763-.338.157-.5.44-.5.818V19.5zm5.094-3.866V9.677c-.001-.614-.598-1.027-1.148-.798-.326.136-.52.443-.52.828V21.55l.001.076c.014.513.504.906.996.799a.85.85 0 00.67-.852v-5.94zm-13.333-.009v-4.012c0-.656.004-1.312-.001-1.967a.834.834 0 00-1.045-.802c-.376.104-.62.436-.62.845L8.5 21.571v.053c.014.525.514.919 1.015.8.393-.094.652-.43.652-.851v-5.949z"
  }));
}

const ForwardRef = React.forwardRef(HushIcon);
module.exports = ForwardRef;