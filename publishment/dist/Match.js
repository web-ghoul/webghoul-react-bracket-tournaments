"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Arrow = _interopRequireDefault(require("./Arrow"));
require("./Bracket.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Component

//Style

var Match = function Match(_ref) {
  var waiting1 = _ref.waiting1,
    waiting2 = _ref.waiting2,
    loadingImg = _ref.loadingImg,
    match = _ref.match,
    last = _ref.last,
    dir = _ref.dir,
    h = _ref.h;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(waiting1 && waiting2 && "wait_match_box", " match_box")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "match"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return match.hasOwnProperty("handlePlayer2Clicked") && match.handlePlayer2Clicked;
    },
    className: "player"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "player 1",
    src: waiting1 ? loadingImg : match.avatar1
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "player_name"
  }, !match.hasOwnProperty("player1") || waiting1 ? "Waiting..." : match.player1.length > 10 ? match.player1.slice(0, 9) + "..." : match.player1)), /*#__PURE__*/_react.default.createElement("hr", {
    className: "".concat(waiting1 && waiting2 ? "noDivider" : "divider")
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return match.hasOwnProperty("handlePlayer1Clicked") && match.handlePlayer1Clicked;
    },
    className: "player"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "player 2",
    src: waiting2 ? loadingImg : match.avatar2
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "player_name"
  }, !match.hasOwnProperty("player2") || waiting2 ? "Waiting..." : match.player2.length > 10 ? match.player2.slice(0, 9) + "..." : match.player2)), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, !waiting1 && !waiting2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, match.hasOwnProperty("matchLink") && /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: match.gameLink
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "match"
  }, "Match")), match.hasOwnProperty("handleAbortMatch") && /*#__PURE__*/_react.default.createElement("button", {
    onClick: match.handleAbortMatch,
    className: "abort"
  }, "Abort"), match.hasOwnProperty("handleFinishMatch") && /*#__PURE__*/_react.default.createElement("button", {
    onClick: match.handleFinishMatch,
    className: "finish"
  }, "Finish")))), !last && /*#__PURE__*/_react.default.createElement(_Arrow.default, {
    dir: dir,
    h: h,
    wait: waiting1 || waiting2 ? true : false
  }));
};
var _default = Match;
exports.default = _default;