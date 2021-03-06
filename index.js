"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ShowStaticMarkup = void 0;

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _pretty = _interopRequireDefault(require("pretty"));

var _prismjs = _interopRequireDefault(require("prismjs"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ShowStaticMarkup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShowStaticMarkup, _React$Component);

  function ShowStaticMarkup() {
    _classCallCheck(this, ShowStaticMarkup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowStaticMarkup).apply(this, arguments));
  }

  _createClass(ShowStaticMarkup, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      var markup = _prismjs.default.highlight((0, _pretty.default)(_server.default.renderToStaticMarkup(children)), _prismjs.default.languages.markup, 'markup');

      var channel = _addons.default.getChannel();

      channel.emit('evgenykochetkov/static-markup/show-markup', markup + _style.style);
      return children;
    }
  }]);

  return ShowStaticMarkup;
}(_react.default.Component);

exports.ShowStaticMarkup = ShowStaticMarkup;
var _default = {
  addWithStaticMarkup: function addWithStaticMarkup(storyName, story) {
    this.add(storyName, function () {
      return _react.default.createElement(ShowStaticMarkup, null, story());
    });
  }
};
exports.default = _default;