"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  markupPanel: {
    margin: 10,
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto'
  }
};

var StaticMarkup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StaticMarkup, _React$Component);

  function StaticMarkup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StaticMarkup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StaticMarkup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      markup: ''
    };
    _this.onShowStaticMarkup = _this.onShowStaticMarkup.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StaticMarkup, [{
    key: "onShowStaticMarkup",
    value: function onShowStaticMarkup(markup) {
      this.setState({
        markup: markup
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          channel = _this$props.channel,
          api = _this$props.api;
      channel.on('evgenykochetkov/static-markup/show-markup', this.onShowStaticMarkup); // Clear the current state on every story change.

      this.stopListeningOnStory = api.onStory(function () {
        _this2.onShowStaticMarkup('');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          markup = _this$state.markup,
          _this$state$active = _this$state.active,
          active = _this$state$active === void 0 ? true : _this$state$active;
      return active ? _react.default.createElement("div", {
        style: styles.markupPanel,
        dangerouslySetInnerHTML: {
          __html: markup
        }
      }) : null;
    } // This is some cleanup tasks when the StaticMarkup panel is unmounting.

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.stopListeningOnStory) {
        this.stopListeningOnStory();
      }

      this.unmounted = true;
      var _this$props2 = this.props,
          channel = _this$props2.channel,
          api = _this$props2.api;
      channel.removeListener('evgenykochetkov/static-markup/show-markup', this.onShowStaticMarkup);
    }
  }]);

  return StaticMarkup;
}(_react.default.Component); // Register the addon with a unique name.


_addons.default.register('evgenykochetkov/static-markup', function (api) {
  // Also need to set a unique name to the panel.
  _addons.default.addPanel('evgenykochetkov/static-markup/panel', {
    title: 'Static Markup',
    render: function render(_ref) {
      var active = _ref.active;
      return _react.default.createElement(StaticMarkup, {
        channel: _addons.default.getChannel(),
        api: api,
        active: active
      });
    }
  });
});