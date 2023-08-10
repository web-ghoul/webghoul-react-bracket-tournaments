"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Bracket.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Style

var Arrow = function Arrow(_ref) {
  var dir = _ref.dir,
    h = _ref.h,
    wait = _ref.wait;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      transform: dir === "top" ? "translateY(".concat(h / 2 + 3, "px)") : "translateY(-".concat(h / 2 + 3, "px)")
    },
    className: "arrow ".concat(dir === "top" ? "top" : "bottom", " ").concat(wait && dir === "top" && "wait_arrow_top", " ").concat(wait && dir === "bottom" && "wait_arrow_bottom")
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "".concat(h, "px")
    },
    className: "curve curve_1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "".concat(h, "px")
    },
    className: "curve curve_2"
  }));
};
var _default = Arrow;
exports.default = _default;