"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Match = _interopRequireDefault(require("./Match"));
require("./Bracket.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Round = function Round(_ref) {
  var padding = _ref.padding,
    loadingImg = _ref.loadingImg,
    roundBodyHeight = _ref.roundBodyHeight,
    max = _ref.max,
    matches = _ref.matches,
    round = _ref.round;
  var matchHeight = padding / 2 + 26.5;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "".concat(roundBodyHeight, "px")
    },
    className: "".concat(matches.length === 1 && "last", " round")
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "round_number"
  }, "Round ".concat(round)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      gap: "".concat(padding, "px")
    },
    className: "matches"
  }, matches.map(function (match, i) {
    var dir;
    var last = false;
    var waiting1 = true;
    var waiting2 = true;
    if (i % 2 === 0) {
      dir = "top";
      if (matches.length === 1) {
        last = true;
      }
    } else {
      dir = "bottom";
    }
    if (match.hasOwnProperty("player1")) {
      waiting1 = false;
    }
    if (match.hasOwnProperty("player2")) {
      waiting2 = false;
    }
    return /*#__PURE__*/_react["default"].createElement(_Match["default"], {
      loadingImg: loadingImg,
      h: matchHeight,
      waiting2: waiting2,
      waiting1: waiting1,
      last: last,
      match: match,
      key: i,
      dir: dir
    });
  })));
};
var _default = Round;
exports["default"] = _default;