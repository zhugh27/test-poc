"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _conf = _interopRequireDefault(require("../../v-x-e-table/src/conf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  name: 'VxeLoading',
  props: {
    value: Boolean,
    icon: String,
    text: String
  },
  computed: {
    loadingIcon: function loadingIcon() {
      return this.icon || _conf["default"].icon.LOADING;
    },
    loadingText: function loadingText() {
      var loadingText = _conf["default"].loadingText;
      return this.text || (loadingText === null ? loadingText : _conf["default"].i18n('vxe.loading.text'));
    }
  },
  render: function render(h) {
    var $scopedSlots = this.$scopedSlots,
      loadingIcon = this.loadingIcon,
      loadingText = this.loadingText;
    var defaultSlot = $scopedSlots["default"];
    return h('div', {
      "class": ['vxe-loading', {
        'is--visible': this.value
      }]
    }, defaultSlot ? [h('div', {
      "class": 'vxe-loading--warpper'
    }, defaultSlot.call(this, {}))] : [h('div', {
      "class": 'vxe-loading--chunk'
    }, [loadingIcon ? h('i', {
      "class": loadingIcon
    }) : h('div', {
      "class": 'vxe-loading--spinner'
    }), loadingText ? h('div', {
      "class": 'vxe-loading--text'
    }, "".concat(loadingText)) : null])]);
  }
};
exports["default"] = _default;