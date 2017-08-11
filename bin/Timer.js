'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    _createClass(Timer, null, [{
        key: 'start',
        value: function start(onCall) {
            var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

            this.timer ? clearInterval(this.timer) : null;
            var _onCall = this.onCall || onCall;
            var _interval = this.interval || interval;
            this.timer = _onCall ? setInterval(function () {
                _onCall();
            }, _interval) : 0;
            this.interval = _interval;
            this.onCall = _onCall;
        }
    }, {
        key: 'stop',
        value: function stop() {
            clearInterval(this.timer);
        }
    }]);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        var onCall = props.onCall,
            _props$interval = props.interval,
            interval = _props$interval === undefined ? 100 : _props$interval;

        _this.state = {
            timer: 0,
            onCall: onCall,
            interval: interval
        };
        return _this;
    }

    _createClass(Timer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.setState({
                timer: setInterval(function () {
                    _this2.state.onCall();
                }, this.state.interval)
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.state.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return Timer;
}(_react2.default.Component);

Timer.PropTypes = {
    interval: _propTypes2.default.number.isRequired,
    onCall: _propTypes2.default.func.isRequired
};

exports.default = Timer;
//# sourceMappingURL=Timer.js.map