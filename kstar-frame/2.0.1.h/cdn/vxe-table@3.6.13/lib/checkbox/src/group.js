"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _xeUtils = _interopRequireDefault(require("xe-utils"));
var _conf = _interopRequireDefault(require("../../v-x-e-table/src/conf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default2 = {
  name: 'VxeCheckboxGroup',
  props: {
    value: Array,
    disabled: Boolean,
    max: [String, Number],
    size: {
      type: String,
      "default": function _default() {
        return _conf["default"].checkbox.size || _conf["default"].size;
      }
    }
  },
  inject: {
    $xeform: {
      "default": null
    },
    $xeformiteminfo: {
      "default": null
    }
  },
  provide: function provide() {
    return {
      $xecheckboxgroup: this
    };
  },
  computed: {
    vSize: function vSize() {
      return this.size || this.$parent.size || this.$parent.vSize;
    },
    isMaximize: function isMaximize() {
      var value = this.value,
        max = this.max;
      if (max) {
        return value.length >= _xeUtils["default"].toNumber(max);
      }
      return false;
    }
  },
  render: function render(h) {
    var $scopedSlots = this.$scopedSlots;
    return h('div', {
      "class": 'vxe-checkbox-group'
    }, $scopedSlots["default"] ? $scopedSlots["default"].call(this, {}) : []);
  },
  methods: {
    handleChecked: function handleChecked(params, evnt) {
      var checked = params.checked,
        label = params.label;
      var checklist = this.value || [];
      var checkIndex = checklist.indexOf(label);
      if (checked) {
        if (checkIndex === -1) {
          checklist.push(label);
        }
      } else {
        checklist.splice(checkIndex, 1);
      }
      this.$emit('input', checklist);
      this.$emit('change', Object.assign({
        checklist: checklist
      }, params));
      // 自动更新校验状态
      if (this.$xeform && this.$xeformiteminfo) {
        this.$xeform.triggerItemEvent(evnt, this.$xeformiteminfo.itemConfig.field, checklist);
      }
    }
  }
};
exports["default"] = _default2;