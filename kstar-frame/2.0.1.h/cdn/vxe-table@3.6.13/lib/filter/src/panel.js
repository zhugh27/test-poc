"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _conf = _interopRequireDefault(require("../../v-x-e-table/src/conf"));
var _vXETable = _interopRequireDefault(require("../../v-x-e-table"));
var _utils = _interopRequireDefault(require("../../tools/utils"));
var _xeUtils = _interopRequireDefault(require("xe-utils"));
var _vn = require("../../tools/vn");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  name: 'VxeTableFilter',
  props: {
    filterStore: Object
  },
  computed: {
    hasCheckOption: function hasCheckOption() {
      var filterStore = this.filterStore;
      return filterStore && filterStore.options.some(function (option) {
        return option.checked;
      });
    }
  },
  render: function render(h) {
    var $xetable = this.$parent,
      filterStore = this.filterStore;
    var args = filterStore.args,
      column = filterStore.column;
    var filterRender = column ? column.filterRender : null;
    var compConf = filterRender ? _vXETable["default"].renderer.get(filterRender.name) : null;
    var filterClassName = compConf ? compConf.filterClassName : '';
    return h('div', {
      "class": ['vxe-table--filter-wrapper', 'filter--prevent-default', compConf && compConf.className ? compConf.className : '', _utils["default"].getClass(filterClassName, Object.assign({
        $panel: this,
        $table: $xetable
      }, args)), {
        'is--animat': $xetable.animat,
        'is--multiple': filterStore.multiple,
        'is--active': filterStore.visible
      }],
      style: filterStore.style
    }, filterStore.visible ? this.renderOptions(h, filterRender, compConf).concat(this.renderFooter(h)) : []);
  },
  methods: {
    renderOptions: function renderOptions(h, filterRender, compConf) {
      var _this = this;
      var $xetable = this.$parent,
        filterStore = this.filterStore;
      var args = filterStore.args,
        column = filterStore.column,
        multiple = filterStore.multiple,
        maxHeight = filterStore.maxHeight;
      var slots = column.slots;
      if (slots && slots.filter) {
        return [h('div', {
          "class": 'vxe-table--filter-template'
        }, $xetable.callSlot(slots.filter, Object.assign({
          $panel: this,
          context: this
        }, args), h))];
      } else if (compConf && compConf.renderFilter) {
        return [h('div', {
          "class": 'vxe-table--filter-template'
        }, (0, _vn.getSlotVNs)(compConf.renderFilter.call($xetable, h, filterRender, Object.assign({
          $panel: this,
          context: this
        }, args))))];
      }
      var isAllChecked = multiple ? filterStore.isAllSelected : !filterStore.options.some(function (item) {
        return item._checked;
      });
      var isAllIndeterminate = multiple && filterStore.isIndeterminate;
      return [h('ul', {
        "class": 'vxe-table--filter-header'
      }, [h('li', {
        "class": ['vxe-table--filter-option', {
          'is--checked': isAllChecked,
          'is--indeterminate': isAllIndeterminate
        }],
        attrs: {
          title: _conf["default"].i18n(multiple ? 'vxe.table.allTitle' : 'vxe.table.allFilter')
        },
        on: {
          click: function click(evnt) {
            _this.changeAllOption(evnt, !filterStore.isAllSelected);
          }
        }
      }, (multiple ? [h('span', {
        "class": ['vxe-checkbox--icon', isAllIndeterminate ? _conf["default"].icon.TABLE_CHECKBOX_INDETERMINATE : isAllChecked ? _conf["default"].icon.TABLE_CHECKBOX_CHECKED : _conf["default"].icon.TABLE_CHECKBOX_UNCHECKED]
      })] : []).concat([h('span', {
        "class": 'vxe-checkbox--label'
      }, _conf["default"].i18n('vxe.table.allFilter'))]))]), h('ul', {
        "class": 'vxe-table--filter-body',
        style: maxHeight ? {
          maxHeight: "".concat(maxHeight, "px")
        } : {}
      }, filterStore.options.map(function (item) {
        var isChecked = item._checked;
        var isIndeterminate = false;
        return h('li', {
          "class": ['vxe-table--filter-option', {
            'is--checked': isChecked
          }],
          attrs: {
            title: item.label
          },
          on: {
            click: function click(evnt) {
              _this.changeOption(evnt, !item._checked, item);
            }
          }
        }, (multiple ? [h('span', {
          "class": ['vxe-checkbox--icon', isIndeterminate ? _conf["default"].icon.TABLE_CHECKBOX_INDETERMINATE : isChecked ? _conf["default"].icon.TABLE_CHECKBOX_CHECKED : _conf["default"].icon.TABLE_CHECKBOX_UNCHECKED]
        })] : []).concat([h('span', {
          "class": 'vxe-checkbox--label'
        }, _utils["default"].formatText(item.label, 1))]));
      }))];
    },
    renderFooter: function renderFooter(h) {
      var hasCheckOption = this.hasCheckOption,
        filterStore = this.filterStore;
      var column = filterStore.column,
        multiple = filterStore.multiple;
      var filterRender = column.filterRender;
      var compConf = filterRender ? _vXETable["default"].renderer.get(filterRender.name) : null;
      var isDisabled = !hasCheckOption && !filterStore.isAllSelected && !filterStore.isIndeterminate;
      return multiple && (!compConf || (_xeUtils["default"].isBoolean(compConf.showFilterFooter) ? compConf.showFilterFooter !== false : compConf.isFooter !== false)) ? [h('div', {
        "class": 'vxe-table--filter-footer'
      }, [h('button', {
        "class": {
          'is--disabled': isDisabled
        },
        attrs: {
          disabled: isDisabled
        },
        on: {
          click: this.confirmFilter
        }
      }, _conf["default"].i18n('vxe.table.confirmFilter')), h('button', {
        on: {
          click: this.resetFilter
        }
      }, _conf["default"].i18n('vxe.table.resetFilter'))])] : [];
    },
    // 全部筛选事件
    filterCheckAllEvent: function filterCheckAllEvent(evnt, value) {
      var filterStore = this.filterStore;
      filterStore.options.forEach(function (option) {
        option._checked = value;
        option.checked = value;
      });
      filterStore.isAllSelected = value;
      filterStore.isIndeterminate = false;
    },
    /*************************
     * Publish methods
     *************************/
    // （单选）筛选发生改变
    changeRadioOption: function changeRadioOption(evnt, checked, item) {
      var $xetable = this.$parent,
        filterStore = this.filterStore;
      filterStore.options.forEach(function (option) {
        option._checked = false;
      });
      item._checked = checked;
      $xetable.checkFilterOptions();
      this.confirmFilter(evnt);
    },
    // （多选）筛选发生改变
    changeMultipleOption: function changeMultipleOption(evnt, checked, item) {
      var $xetable = this.$parent;
      item._checked = checked;
      $xetable.checkFilterOptions();
    },
    changeAllOption: function changeAllOption(evnt, checked) {
      if (this.filterStore.multiple) {
        this.filterCheckAllEvent(evnt, checked);
      } else {
        this.resetFilter(evnt);
      }
    },
    // 筛选发生改变
    changeOption: function changeOption(evnt, checked, item) {
      if (this.filterStore.multiple) {
        this.changeMultipleOption(evnt, checked, item);
      } else {
        this.changeRadioOption(evnt, checked, item);
      }
    },
    // 确认筛选
    confirmFilter: function confirmFilter(evnt) {
      var $xetable = this.$parent,
        filterStore = this.filterStore;
      filterStore.options.forEach(function (option) {
        option.checked = option._checked;
      });
      $xetable.confirmFilterEvent(evnt);
    },
    // 重置筛选
    resetFilter: function resetFilter(evnt) {
      var $xetable = this.$parent;
      $xetable.resetFilterEvent(evnt);
    }
    /*************************
     * Publish methods
     *************************/
  }
};
exports["default"] = _default;