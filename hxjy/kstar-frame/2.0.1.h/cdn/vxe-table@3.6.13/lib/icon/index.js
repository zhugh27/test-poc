"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Icon = void 0;
var _icon = _interopRequireDefault(require("./src/icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Icon = Object.assign(_icon["default"], {
  install: function install(Vue) {
    Vue.component(_icon["default"].name, _icon["default"]);
  }
});
exports.Icon = Icon;
var _default = Icon;
exports["default"] = _default;