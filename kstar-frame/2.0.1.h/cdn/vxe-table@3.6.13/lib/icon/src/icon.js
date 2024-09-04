"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'VxeIcon',
  props: {
    name: String,
    roll: Boolean
  },
  render: function render(h) {
    return h('i', {
      "class": ["vxe-icon-".concat(this.name), this.roll ? 'roll' : ''],
      on: {
        click: this.clickEvent
      }
    });
  },
  methods: {
    clickEvent: function clickEvent(evnt) {
      this.$emit('click', {
        $event: evnt
      });
    }
  }
};
exports["default"] = _default;