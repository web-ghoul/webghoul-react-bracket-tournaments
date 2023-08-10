"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Round = _interopRequireDefault(require("./Round"));
require("./Bracket.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Component

//Style

var Bracket = function Bracket(_ref) {
  var loadingImg = _ref.loadingImg,
    nodes = _ref.nodes,
    isLoading = _ref.isLoading;
  if (!(Array.isArray(nodes) && nodes.length >= 1)) {
    return;
  }
  var n = nodes[0].length;
  if (Math.log(n) / Math.log(2) % 1 !== 0) {
    return;
  }
  var pad = 100;
  var player_height = 110;
  var max = nodes[0].length;
  var roundHeight = max * 110 + max * 100 + 40;
  var roundBodyHeight = max * 110 + (max - 1) * 100 + 140;
  var calcPadding = function calcPadding(pad) {
    var players = max;
    var x = players * 2 * player_height + (players * 2 - 1) * pad;
    var padding = (x - pad - player_height - player_height * players) / (players - 1);
    return padding;
  };
  var c = max;
  new Array(Math.log2(max) + 1).fill(0).map(function (n, i) {
    if (nodes.length <= i) {
      nodes.push([]);
    }
    new Array(c - nodes[i].length).fill(0).map(function () {
      return nodes[i].push({});
    });
    c = c / 2;
    return 0;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bracket"
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      textAlign: "center"
    }
  }, "Loading...")) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "".concat(roundHeight, "px")
    },
    className: "rounds"
  }, nodes.map(function (node, i) {
    if (i > 0) {
      console.log(pad);
      pad = calcPadding(pad);
    }
    return /*#__PURE__*/_react["default"].createElement(_Round["default"], {
      loadingImg: loadingImg,
      key: i,
      max: max,
      padding: pad,
      matches: node,
      roundBodyHeight: roundBodyHeight,
      round: i + 1
    });
  })));
};
var _default = Bracket;
exports["default"] = _default;