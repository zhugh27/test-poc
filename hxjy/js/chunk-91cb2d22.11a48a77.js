(window["webpackJsonp_kstar-ui"]=window["webpackJsonp_kstar-ui"]||[]).push([["chunk-91cb2d22"],{"524d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basic-tooltip",style:{width:t.areaWidth}},[n("el-tooltip",{attrs:{effect:"dark",disabled:t.isShowTooltip,content:t.content,placement:t.placement}},[n("p",{staticClass:"main",on:{mouseover:function(e){return t.onMouseOver(t.refName)}}},[t._t("default"),n("span",{ref:t.refName,staticClass:"shadow"},[t._v(t._s(t.content||"-"))])],2)])],1)},o=[],s={name:"BasicTooltip",props:{content:{type:String,default:""},placement:{type:String,default:"top"},refName:{type:String,default:""},areaWidth:{type:String,default:""}},data:function(){return{isShowTooltip:!0}},methods:{onMouseOver:function(t){var e=this.$refs[t].previousSibling.offsetWidth,n=this.$refs[t].offsetWidth;this.isShowTooltip=!(n>=e)}}},a=s,r=(n("cee1"),n("2877")),c=Object(r["a"])(a,i,o,!1,null,"dbb7573c",null);e["default"]=c.exports},a14e:function(t,e,n){},cee1:function(t,e,n){"use strict";n("a14e")}}]);