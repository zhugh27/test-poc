import { isVue3 as Pt, defineComponent as cn, getCurrentInstance as un, ref as yt, watch as Y, onUnmounted as fn, onMounted as sn, unref as ln, h as pn } from "vue-demi";
import { JSONEditor as vn } from "vanilla-jsoneditor";
var bn = typeof global == "object" && global && global.Object === Object && global;
const Ar = bn;
var dn = typeof self == "object" && self && self.Object === Object && self, yn = Ar || dn || Function("return this")();
const T = yn;
var hn = T.Symbol;
const S = hn;
var Sr = Object.prototype, jn = Sr.hasOwnProperty, gn = Sr.toString, N = S ? S.toStringTag : void 0;
function mn(t) {
  var r = jn.call(t, N), n = t[N];
  try {
    t[N] = void 0;
    var e = !0;
  } catch {
  }
  var o = gn.call(t);
  return e && (r ? t[N] = n : delete t[N]), o;
}
var _n = Object.prototype, On = _n.toString;
function wn(t) {
  return On.call(t);
}
var An = "[object Null]", Sn = "[object Undefined]", Gt = S ? S.toStringTag : void 0;
function M(t) {
  return t == null ? t === void 0 ? Sn : An : Gt && Gt in Object(t) ? mn(t) : wn(t);
}
function x(t) {
  return t != null && typeof t == "object";
}
var xn = "[object Symbol]";
function It(t) {
  return typeof t == "symbol" || x(t) && M(t) == xn;
}
function Tn(t, r) {
  for (var n = -1, e = t == null ? 0 : t.length, o = Array(e); ++n < e; )
    o[n] = r(t[n], n, t);
  return o;
}
var En = Array.isArray;
const O = En;
var Pn = 1 / 0, qt = S ? S.prototype : void 0, Zt = qt ? qt.toString : void 0;
function xr(t) {
  if (typeof t == "string")
    return t;
  if (O(t))
    return Tn(t, xr) + "";
  if (It(t))
    return Zt ? Zt.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -Pn ? "-0" : r;
}
function E(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Ct(t) {
  return t;
}
var In = "[object AsyncFunction]", Cn = "[object Function]", $n = "[object GeneratorFunction]", kn = "[object Proxy]";
function $t(t) {
  if (!E(t))
    return !1;
  var r = M(t);
  return r == Cn || r == $n || r == In || r == kn;
}
var Fn = T["__core-js_shared__"];
const ht = Fn;
var Jt = function() {
  var t = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function zn(t) {
  return !!Jt && Jt in t;
}
var Mn = Function.prototype, Un = Mn.toString;
function U(t) {
  if (t != null) {
    try {
      return Un.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Bn = /[\\^$.*+?()[\]{}|]/g, Dn = /^\[object .+?Constructor\]$/, Rn = Function.prototype, Wn = Object.prototype, Ln = Rn.toString, Vn = Wn.hasOwnProperty, Nn = RegExp(
  "^" + Ln.call(Vn).replace(Bn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gn(t) {
  if (!E(t) || zn(t))
    return !1;
  var r = $t(t) ? Nn : Dn;
  return r.test(U(t));
}
function qn(t, r) {
  return t == null ? void 0 : t[r];
}
function B(t, r) {
  var n = qn(t, r);
  return Gn(n) ? n : void 0;
}
var Zn = B(T, "WeakMap");
const _t = Zn;
var Ht = Object.create, Jn = function() {
  function t() {
  }
  return function(r) {
    if (!E(r))
      return {};
    if (Ht)
      return Ht(r);
    t.prototype = r;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const Hn = Jn;
function Kn(t, r, n) {
  switch (n.length) {
    case 0:
      return t.call(r);
    case 1:
      return t.call(r, n[0]);
    case 2:
      return t.call(r, n[0], n[1]);
    case 3:
      return t.call(r, n[0], n[1], n[2]);
  }
  return t.apply(r, n);
}
function Tr(t, r) {
  var n = -1, e = t.length;
  for (r || (r = Array(e)); ++n < e; )
    r[n] = t[n];
  return r;
}
var Qn = 800, Xn = 16, Yn = Date.now;
function te(t) {
  var r = 0, n = 0;
  return function() {
    var e = Yn(), o = Xn - (e - n);
    if (n = e, o > 0) {
      if (++r >= Qn)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function re(t) {
  return function() {
    return t;
  };
}
var ne = function() {
  try {
    var t = B(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const at = ne;
var ee = at ? function(t, r) {
  return at(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: re(r),
    writable: !0
  });
} : Ct;
const oe = ee;
var ae = te(oe);
const ie = ae;
function ce(t, r) {
  for (var n = -1, e = t == null ? 0 : t.length; ++n < e && r(t[n], n, t) !== !1; )
    ;
  return t;
}
var ue = 9007199254740991, fe = /^(?:0|[1-9]\d*)$/;
function kt(t, r) {
  var n = typeof t;
  return r = r ?? ue, !!r && (n == "number" || n != "symbol" && fe.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function lt(t, r, n) {
  r == "__proto__" && at ? at(t, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[r] = n;
}
function Q(t, r) {
  return t === r || t !== t && r !== r;
}
var se = Object.prototype, le = se.hasOwnProperty;
function Er(t, r, n) {
  var e = t[r];
  (!(le.call(t, r) && Q(e, n)) || n === void 0 && !(r in t)) && lt(t, r, n);
}
function W(t, r, n, e) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = r.length; ++a < i; ) {
    var c = r[a], u = e ? e(n[c], t[c], c, n, t) : void 0;
    u === void 0 && (u = t[c]), o ? lt(n, c, u) : Er(n, c, u);
  }
  return n;
}
var Kt = Math.max;
function pe(t, r, n) {
  return r = Kt(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var e = arguments, o = -1, a = Kt(e.length - r, 0), i = Array(a); ++o < a; )
      i[o] = e[r + o];
    o = -1;
    for (var c = Array(r + 1); ++o < r; )
      c[o] = e[o];
    return c[r] = n(i), Kn(t, this, c);
  };
}
function ve(t, r) {
  return ie(pe(t, r, Ct), t + "");
}
var be = 9007199254740991;
function Ft(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= be;
}
function pt(t) {
  return t != null && Ft(t.length) && !$t(t);
}
function de(t, r, n) {
  if (!E(n))
    return !1;
  var e = typeof r;
  return (e == "number" ? pt(n) && kt(r, n.length) : e == "string" && r in n) ? Q(n[r], t) : !1;
}
function Pr(t) {
  return ve(function(r, n) {
    var e = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = t.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && de(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), r = Object(r); ++e < o; ) {
      var c = n[e];
      c && t(r, c, e, a);
    }
    return r;
  });
}
var ye = Object.prototype;
function zt(t) {
  var r = t && t.constructor, n = typeof r == "function" && r.prototype || ye;
  return t === n;
}
function he(t, r) {
  for (var n = -1, e = Array(t); ++n < t; )
    e[n] = r(n);
  return e;
}
var je = "[object Arguments]";
function Qt(t) {
  return x(t) && M(t) == je;
}
var Ir = Object.prototype, ge = Ir.hasOwnProperty, me = Ir.propertyIsEnumerable, _e = Qt(function() {
  return arguments;
}()) ? Qt : function(t) {
  return x(t) && ge.call(t, "callee") && !me.call(t, "callee");
};
const it = _e;
function Oe() {
  return !1;
}
var Cr = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = Cr && typeof module == "object" && module && !module.nodeType && module, we = Xt && Xt.exports === Cr, Yt = we ? T.Buffer : void 0, Ae = Yt ? Yt.isBuffer : void 0, Se = Ae || Oe;
const Z = Se;
var xe = "[object Arguments]", Te = "[object Array]", Ee = "[object Boolean]", Pe = "[object Date]", Ie = "[object Error]", Ce = "[object Function]", $e = "[object Map]", ke = "[object Number]", Fe = "[object Object]", ze = "[object RegExp]", Me = "[object Set]", Ue = "[object String]", Be = "[object WeakMap]", De = "[object ArrayBuffer]", Re = "[object DataView]", We = "[object Float32Array]", Le = "[object Float64Array]", Ve = "[object Int8Array]", Ne = "[object Int16Array]", Ge = "[object Int32Array]", qe = "[object Uint8Array]", Ze = "[object Uint8ClampedArray]", Je = "[object Uint16Array]", He = "[object Uint32Array]", j = {};
j[We] = j[Le] = j[Ve] = j[Ne] = j[Ge] = j[qe] = j[Ze] = j[Je] = j[He] = !0;
j[xe] = j[Te] = j[De] = j[Ee] = j[Re] = j[Pe] = j[Ie] = j[Ce] = j[$e] = j[ke] = j[Fe] = j[ze] = j[Me] = j[Ue] = j[Be] = !1;
function Ke(t) {
  return x(t) && Ft(t.length) && !!j[M(t)];
}
function Mt(t) {
  return function(r) {
    return t(r);
  };
}
var $r = typeof exports == "object" && exports && !exports.nodeType && exports, q = $r && typeof module == "object" && module && !module.nodeType && module, Qe = q && q.exports === $r, jt = Qe && Ar.process, Xe = function() {
  try {
    var t = q && q.require && q.require("util").types;
    return t || jt && jt.binding && jt.binding("util");
  } catch {
  }
}();
const R = Xe;
var tr = R && R.isTypedArray, Ye = tr ? Mt(tr) : Ke;
const Ut = Ye;
var to = Object.prototype, ro = to.hasOwnProperty;
function kr(t, r) {
  var n = O(t), e = !n && it(t), o = !n && !e && Z(t), a = !n && !e && !o && Ut(t), i = n || e || o || a, c = i ? he(t.length, String) : [], u = c.length;
  for (var v in t)
    (r || ro.call(t, v)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    kt(v, u))) && c.push(v);
  return c;
}
function Fr(t, r) {
  return function(n) {
    return t(r(n));
  };
}
var no = Fr(Object.keys, Object);
const eo = no;
var oo = Object.prototype, ao = oo.hasOwnProperty;
function io(t) {
  if (!zt(t))
    return eo(t);
  var r = [];
  for (var n in Object(t))
    ao.call(t, n) && n != "constructor" && r.push(n);
  return r;
}
function X(t) {
  return pt(t) ? kr(t) : io(t);
}
function co(t) {
  var r = [];
  if (t != null)
    for (var n in Object(t))
      r.push(n);
  return r;
}
var uo = Object.prototype, fo = uo.hasOwnProperty;
function so(t) {
  if (!E(t))
    return co(t);
  var r = zt(t), n = [];
  for (var e in t)
    e == "constructor" && (r || !fo.call(t, e)) || n.push(e);
  return n;
}
function L(t) {
  return pt(t) ? kr(t, !0) : so(t);
}
var lo = Pr(function(t, r, n, e) {
  W(r, L(r), t, e);
});
const po = lo;
var vo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bo = /^\w*$/;
function Bt(t, r) {
  if (O(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || It(t) ? !0 : bo.test(t) || !vo.test(t) || r != null && t in Object(r);
}
var yo = B(Object, "create");
const J = yo;
function ho() {
  this.__data__ = J ? J(null) : {}, this.size = 0;
}
function jo(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var go = "__lodash_hash_undefined__", mo = Object.prototype, _o = mo.hasOwnProperty;
function Oo(t) {
  var r = this.__data__;
  if (J) {
    var n = r[t];
    return n === go ? void 0 : n;
  }
  return _o.call(r, t) ? r[t] : void 0;
}
var wo = Object.prototype, Ao = wo.hasOwnProperty;
function So(t) {
  var r = this.__data__;
  return J ? r[t] !== void 0 : Ao.call(r, t);
}
var xo = "__lodash_hash_undefined__";
function To(t, r) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = J && r === void 0 ? xo : r, this;
}
function z(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var e = t[r];
    this.set(e[0], e[1]);
  }
}
z.prototype.clear = ho;
z.prototype.delete = jo;
z.prototype.get = Oo;
z.prototype.has = So;
z.prototype.set = To;
function Eo() {
  this.__data__ = [], this.size = 0;
}
function vt(t, r) {
  for (var n = t.length; n--; )
    if (Q(t[n][0], r))
      return n;
  return -1;
}
var Po = Array.prototype, Io = Po.splice;
function Co(t) {
  var r = this.__data__, n = vt(r, t);
  if (n < 0)
    return !1;
  var e = r.length - 1;
  return n == e ? r.pop() : Io.call(r, n, 1), --this.size, !0;
}
function $o(t) {
  var r = this.__data__, n = vt(r, t);
  return n < 0 ? void 0 : r[n][1];
}
function ko(t) {
  return vt(this.__data__, t) > -1;
}
function Fo(t, r) {
  var n = this.__data__, e = vt(n, t);
  return e < 0 ? (++this.size, n.push([t, r])) : n[e][1] = r, this;
}
function P(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var e = t[r];
    this.set(e[0], e[1]);
  }
}
P.prototype.clear = Eo;
P.prototype.delete = Co;
P.prototype.get = $o;
P.prototype.has = ko;
P.prototype.set = Fo;
var zo = B(T, "Map");
const H = zo;
function Mo() {
  this.size = 0, this.__data__ = {
    hash: new z(),
    map: new (H || P)(),
    string: new z()
  };
}
function Uo(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function bt(t, r) {
  var n = t.__data__;
  return Uo(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function Bo(t) {
  var r = bt(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function Do(t) {
  return bt(this, t).get(t);
}
function Ro(t) {
  return bt(this, t).has(t);
}
function Wo(t, r) {
  var n = bt(this, t), e = n.size;
  return n.set(t, r), this.size += n.size == e ? 0 : 1, this;
}
function I(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var e = t[r];
    this.set(e[0], e[1]);
  }
}
I.prototype.clear = Mo;
I.prototype.delete = Bo;
I.prototype.get = Do;
I.prototype.has = Ro;
I.prototype.set = Wo;
var Lo = "Expected a function";
function Dt(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(Lo);
  var n = function() {
    var e = arguments, o = r ? r.apply(this, e) : e[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = t.apply(this, e);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Dt.Cache || I)(), n;
}
Dt.Cache = I;
var Vo = 500;
function No(t) {
  var r = Dt(t, function(e) {
    return n.size === Vo && n.clear(), e;
  }), n = r.cache;
  return r;
}
var Go = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qo = /\\(\\)?/g, Zo = No(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(Go, function(n, e, o, a) {
    r.push(o ? a.replace(qo, "$1") : e || n);
  }), r;
});
const Jo = Zo;
function Ho(t) {
  return t == null ? "" : xr(t);
}
function zr(t, r) {
  return O(t) ? t : Bt(t, r) ? [t] : Jo(Ho(t));
}
var Ko = 1 / 0;
function dt(t) {
  if (typeof t == "string" || It(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -Ko ? "-0" : r;
}
function Mr(t, r) {
  r = zr(r, t);
  for (var n = 0, e = r.length; t != null && n < e; )
    t = t[dt(r[n++])];
  return n && n == e ? t : void 0;
}
function Qo(t, r, n) {
  var e = t == null ? void 0 : Mr(t, r);
  return e === void 0 ? n : e;
}
function Ur(t, r) {
  for (var n = -1, e = r.length, o = t.length; ++n < e; )
    t[o + n] = r[n];
  return t;
}
var Xo = Fr(Object.getPrototypeOf, Object);
const Rt = Xo;
var Yo = "[object Object]", ta = Function.prototype, ra = Object.prototype, Br = ta.toString, na = ra.hasOwnProperty, ea = Br.call(Object);
function Dr(t) {
  if (!x(t) || M(t) != Yo)
    return !1;
  var r = Rt(t);
  if (r === null)
    return !0;
  var n = na.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && Br.call(n) == ea;
}
function oa() {
  this.__data__ = new P(), this.size = 0;
}
function aa(t) {
  var r = this.__data__, n = r.delete(t);
  return this.size = r.size, n;
}
function ia(t) {
  return this.__data__.get(t);
}
function ca(t) {
  return this.__data__.has(t);
}
var ua = 200;
function fa(t, r) {
  var n = this.__data__;
  if (n instanceof P) {
    var e = n.__data__;
    if (!H || e.length < ua - 1)
      return e.push([t, r]), this.size = ++n.size, this;
    n = this.__data__ = new I(e);
  }
  return n.set(t, r), this.size = n.size, this;
}
function w(t) {
  var r = this.__data__ = new P(t);
  this.size = r.size;
}
w.prototype.clear = oa;
w.prototype.delete = aa;
w.prototype.get = ia;
w.prototype.has = ca;
w.prototype.set = fa;
function sa(t, r) {
  return t && W(r, X(r), t);
}
function la(t, r) {
  return t && W(r, L(r), t);
}
var Rr = typeof exports == "object" && exports && !exports.nodeType && exports, rr = Rr && typeof module == "object" && module && !module.nodeType && module, pa = rr && rr.exports === Rr, nr = pa ? T.Buffer : void 0, er = nr ? nr.allocUnsafe : void 0;
function Wr(t, r) {
  if (r)
    return t.slice();
  var n = t.length, e = er ? er(n) : new t.constructor(n);
  return t.copy(e), e;
}
function va(t, r) {
  for (var n = -1, e = t == null ? 0 : t.length, o = 0, a = []; ++n < e; ) {
    var i = t[n];
    r(i, n, t) && (a[o++] = i);
  }
  return a;
}
function Lr() {
  return [];
}
var ba = Object.prototype, da = ba.propertyIsEnumerable, or = Object.getOwnPropertySymbols, ya = or ? function(t) {
  return t == null ? [] : (t = Object(t), va(or(t), function(r) {
    return da.call(t, r);
  }));
} : Lr;
const Wt = ya;
function ha(t, r) {
  return W(t, Wt(t), r);
}
var ja = Object.getOwnPropertySymbols, ga = ja ? function(t) {
  for (var r = []; t; )
    Ur(r, Wt(t)), t = Rt(t);
  return r;
} : Lr;
const Vr = ga;
function ma(t, r) {
  return W(t, Vr(t), r);
}
function Nr(t, r, n) {
  var e = r(t);
  return O(t) ? e : Ur(e, n(t));
}
function Ot(t) {
  return Nr(t, X, Wt);
}
function _a(t) {
  return Nr(t, L, Vr);
}
var Oa = B(T, "DataView");
const wt = Oa;
var wa = B(T, "Promise");
const At = wa;
var Aa = B(T, "Set");
const St = Aa;
var ar = "[object Map]", Sa = "[object Object]", ir = "[object Promise]", cr = "[object Set]", ur = "[object WeakMap]", fr = "[object DataView]", xa = U(wt), Ta = U(H), Ea = U(At), Pa = U(St), Ia = U(_t), F = M;
(wt && F(new wt(new ArrayBuffer(1))) != fr || H && F(new H()) != ar || At && F(At.resolve()) != ir || St && F(new St()) != cr || _t && F(new _t()) != ur) && (F = function(t) {
  var r = M(t), n = r == Sa ? t.constructor : void 0, e = n ? U(n) : "";
  if (e)
    switch (e) {
      case xa:
        return fr;
      case Ta:
        return ar;
      case Ea:
        return ir;
      case Pa:
        return cr;
      case Ia:
        return ur;
    }
  return r;
});
const K = F;
var Ca = Object.prototype, $a = Ca.hasOwnProperty;
function ka(t) {
  var r = t.length, n = new t.constructor(r);
  return r && typeof t[0] == "string" && $a.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var Fa = T.Uint8Array;
const ct = Fa;
function Lt(t) {
  var r = new t.constructor(t.byteLength);
  return new ct(r).set(new ct(t)), r;
}
function za(t, r) {
  var n = r ? Lt(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var Ma = /\w*$/;
function Ua(t) {
  var r = new t.constructor(t.source, Ma.exec(t));
  return r.lastIndex = t.lastIndex, r;
}
var sr = S ? S.prototype : void 0, lr = sr ? sr.valueOf : void 0;
function Ba(t) {
  return lr ? Object(lr.call(t)) : {};
}
function Gr(t, r) {
  var n = r ? Lt(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var Da = "[object Boolean]", Ra = "[object Date]", Wa = "[object Map]", La = "[object Number]", Va = "[object RegExp]", Na = "[object Set]", Ga = "[object String]", qa = "[object Symbol]", Za = "[object ArrayBuffer]", Ja = "[object DataView]", Ha = "[object Float32Array]", Ka = "[object Float64Array]", Qa = "[object Int8Array]", Xa = "[object Int16Array]", Ya = "[object Int32Array]", ti = "[object Uint8Array]", ri = "[object Uint8ClampedArray]", ni = "[object Uint16Array]", ei = "[object Uint32Array]";
function oi(t, r, n) {
  var e = t.constructor;
  switch (r) {
    case Za:
      return Lt(t);
    case Da:
    case Ra:
      return new e(+t);
    case Ja:
      return za(t, n);
    case Ha:
    case Ka:
    case Qa:
    case Xa:
    case Ya:
    case ti:
    case ri:
    case ni:
    case ei:
      return Gr(t, n);
    case Wa:
      return new e();
    case La:
    case Ga:
      return new e(t);
    case Va:
      return Ua(t);
    case Na:
      return new e();
    case qa:
      return Ba(t);
  }
}
function qr(t) {
  return typeof t.constructor == "function" && !zt(t) ? Hn(Rt(t)) : {};
}
var ai = "[object Map]";
function ii(t) {
  return x(t) && K(t) == ai;
}
var pr = R && R.isMap, ci = pr ? Mt(pr) : ii;
const ui = ci;
var fi = "[object Set]";
function si(t) {
  return x(t) && K(t) == fi;
}
var vr = R && R.isSet, li = vr ? Mt(vr) : si;
const pi = li;
var vi = 1, bi = 2, di = 4, Zr = "[object Arguments]", yi = "[object Array]", hi = "[object Boolean]", ji = "[object Date]", gi = "[object Error]", Jr = "[object Function]", mi = "[object GeneratorFunction]", _i = "[object Map]", Oi = "[object Number]", Hr = "[object Object]", wi = "[object RegExp]", Ai = "[object Set]", Si = "[object String]", xi = "[object Symbol]", Ti = "[object WeakMap]", Ei = "[object ArrayBuffer]", Pi = "[object DataView]", Ii = "[object Float32Array]", Ci = "[object Float64Array]", $i = "[object Int8Array]", ki = "[object Int16Array]", Fi = "[object Int32Array]", zi = "[object Uint8Array]", Mi = "[object Uint8ClampedArray]", Ui = "[object Uint16Array]", Bi = "[object Uint32Array]", h = {};
h[Zr] = h[yi] = h[Ei] = h[Pi] = h[hi] = h[ji] = h[Ii] = h[Ci] = h[$i] = h[ki] = h[Fi] = h[_i] = h[Oi] = h[Hr] = h[wi] = h[Ai] = h[Si] = h[xi] = h[zi] = h[Mi] = h[Ui] = h[Bi] = !0;
h[gi] = h[Jr] = h[Ti] = !1;
function et(t, r, n, e, o, a) {
  var i, c = r & vi, u = r & bi, v = r & di;
  if (n && (i = o ? n(t, e, o, a) : n(t)), i !== void 0)
    return i;
  if (!E(t))
    return t;
  var b = O(t);
  if (b) {
    if (i = ka(t), !c)
      return Tr(t, i);
  } else {
    var l = K(t), p = l == Jr || l == mi;
    if (Z(t))
      return Wr(t, c);
    if (l == Hr || l == Zr || p && !o) {
      if (i = u || p ? {} : qr(t), !c)
        return u ? ma(t, la(i, t)) : ha(t, sa(i, t));
    } else {
      if (!h[l])
        return o ? t : {};
      i = oi(t, l, c);
    }
  }
  a || (a = new w());
  var d = a.get(t);
  if (d)
    return d;
  a.set(t, i), pi(t) ? t.forEach(function(f) {
    i.add(et(f, r, n, f, t, a));
  }) : ui(t) && t.forEach(function(f, s) {
    i.set(s, et(f, r, n, s, t, a));
  });
  var g = v ? u ? _a : Ot : u ? L : X, m = b ? void 0 : g(t);
  return ce(m || t, function(f, s) {
    m && (s = f, f = t[s]), Er(i, s, et(f, r, n, s, t, a));
  }), i;
}
var Di = 1, Ri = 4;
function Wi(t) {
  return et(t, Di | Ri);
}
var Li = "__lodash_hash_undefined__";
function Vi(t) {
  return this.__data__.set(t, Li), this;
}
function Ni(t) {
  return this.__data__.has(t);
}
function ut(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new I(); ++r < n; )
    this.add(t[r]);
}
ut.prototype.add = ut.prototype.push = Vi;
ut.prototype.has = Ni;
function Gi(t, r) {
  for (var n = -1, e = t == null ? 0 : t.length; ++n < e; )
    if (r(t[n], n, t))
      return !0;
  return !1;
}
function qi(t, r) {
  return t.has(r);
}
var Zi = 1, Ji = 2;
function Kr(t, r, n, e, o, a) {
  var i = n & Zi, c = t.length, u = r.length;
  if (c != u && !(i && u > c))
    return !1;
  var v = a.get(t), b = a.get(r);
  if (v && b)
    return v == r && b == t;
  var l = -1, p = !0, d = n & Ji ? new ut() : void 0;
  for (a.set(t, r), a.set(r, t); ++l < c; ) {
    var g = t[l], m = r[l];
    if (e)
      var f = i ? e(m, g, l, r, t, a) : e(g, m, l, t, r, a);
    if (f !== void 0) {
      if (f)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!Gi(r, function(s, y) {
        if (!qi(d, y) && (g === s || o(g, s, n, e, a)))
          return d.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(g === m || o(g, m, n, e, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(t), a.delete(r), p;
}
function Hi(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(e, o) {
    n[++r] = [o, e];
  }), n;
}
function Ki(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(e) {
    n[++r] = e;
  }), n;
}
var Qi = 1, Xi = 2, Yi = "[object Boolean]", tc = "[object Date]", rc = "[object Error]", nc = "[object Map]", ec = "[object Number]", oc = "[object RegExp]", ac = "[object Set]", ic = "[object String]", cc = "[object Symbol]", uc = "[object ArrayBuffer]", fc = "[object DataView]", br = S ? S.prototype : void 0, gt = br ? br.valueOf : void 0;
function sc(t, r, n, e, o, a, i) {
  switch (n) {
    case fc:
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
        return !1;
      t = t.buffer, r = r.buffer;
    case uc:
      return !(t.byteLength != r.byteLength || !a(new ct(t), new ct(r)));
    case Yi:
    case tc:
    case ec:
      return Q(+t, +r);
    case rc:
      return t.name == r.name && t.message == r.message;
    case oc:
    case ic:
      return t == r + "";
    case nc:
      var c = Hi;
    case ac:
      var u = e & Qi;
      if (c || (c = Ki), t.size != r.size && !u)
        return !1;
      var v = i.get(t);
      if (v)
        return v == r;
      e |= Xi, i.set(t, r);
      var b = Kr(c(t), c(r), e, o, a, i);
      return i.delete(t), b;
    case cc:
      if (gt)
        return gt.call(t) == gt.call(r);
  }
  return !1;
}
var lc = 1, pc = Object.prototype, vc = pc.hasOwnProperty;
function bc(t, r, n, e, o, a) {
  var i = n & lc, c = Ot(t), u = c.length, v = Ot(r), b = v.length;
  if (u != b && !i)
    return !1;
  for (var l = u; l--; ) {
    var p = c[l];
    if (!(i ? p in r : vc.call(r, p)))
      return !1;
  }
  var d = a.get(t), g = a.get(r);
  if (d && g)
    return d == r && g == t;
  var m = !0;
  a.set(t, r), a.set(r, t);
  for (var f = i; ++l < u; ) {
    p = c[l];
    var s = t[p], y = r[p];
    if (e)
      var C = i ? e(y, s, p, r, t, a) : e(s, y, p, t, r, a);
    if (!(C === void 0 ? s === y || o(s, y, n, e, a) : C)) {
      m = !1;
      break;
    }
    f || (f = p == "constructor");
  }
  if (m && !f) {
    var k = t.constructor, A = r.constructor;
    k != A && "constructor" in t && "constructor" in r && !(typeof k == "function" && k instanceof k && typeof A == "function" && A instanceof A) && (m = !1);
  }
  return a.delete(t), a.delete(r), m;
}
var dc = 1, dr = "[object Arguments]", yr = "[object Array]", tt = "[object Object]", yc = Object.prototype, hr = yc.hasOwnProperty;
function hc(t, r, n, e, o, a) {
  var i = O(t), c = O(r), u = i ? yr : K(t), v = c ? yr : K(r);
  u = u == dr ? tt : u, v = v == dr ? tt : v;
  var b = u == tt, l = v == tt, p = u == v;
  if (p && Z(t)) {
    if (!Z(r))
      return !1;
    i = !0, b = !1;
  }
  if (p && !b)
    return a || (a = new w()), i || Ut(t) ? Kr(t, r, n, e, o, a) : sc(t, r, u, n, e, o, a);
  if (!(n & dc)) {
    var d = b && hr.call(t, "__wrapped__"), g = l && hr.call(r, "__wrapped__");
    if (d || g) {
      var m = d ? t.value() : t, f = g ? r.value() : r;
      return a || (a = new w()), o(m, f, n, e, a);
    }
  }
  return p ? (a || (a = new w()), bc(t, r, n, e, o, a)) : !1;
}
function Vt(t, r, n, e, o) {
  return t === r ? !0 : t == null || r == null || !x(t) && !x(r) ? t !== t && r !== r : hc(t, r, n, e, Vt, o);
}
var jc = 1, gc = 2;
function mc(t, r, n, e) {
  var o = n.length, a = o, i = !e;
  if (t == null)
    return !a;
  for (t = Object(t); o--; ) {
    var c = n[o];
    if (i && c[2] ? c[1] !== t[c[0]] : !(c[0] in t))
      return !1;
  }
  for (; ++o < a; ) {
    c = n[o];
    var u = c[0], v = t[u], b = c[1];
    if (i && c[2]) {
      if (v === void 0 && !(u in t))
        return !1;
    } else {
      var l = new w();
      if (e)
        var p = e(v, b, u, t, r, l);
      if (!(p === void 0 ? Vt(b, v, jc | gc, e, l) : p))
        return !1;
    }
  }
  return !0;
}
function Qr(t) {
  return t === t && !E(t);
}
function _c(t) {
  for (var r = X(t), n = r.length; n--; ) {
    var e = r[n], o = t[e];
    r[n] = [e, o, Qr(o)];
  }
  return r;
}
function Xr(t, r) {
  return function(n) {
    return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
  };
}
function Oc(t) {
  var r = _c(t);
  return r.length == 1 && r[0][2] ? Xr(r[0][0], r[0][1]) : function(n) {
    return n === t || mc(n, t, r);
  };
}
function wc(t, r) {
  return t != null && r in Object(t);
}
function Ac(t, r, n) {
  r = zr(r, t);
  for (var e = -1, o = r.length, a = !1; ++e < o; ) {
    var i = dt(r[e]);
    if (!(a = t != null && n(t, i)))
      break;
    t = t[i];
  }
  return a || ++e != o ? a : (o = t == null ? 0 : t.length, !!o && Ft(o) && kt(i, o) && (O(t) || it(t)));
}
function Sc(t, r) {
  return t != null && Ac(t, r, wc);
}
var xc = 1, Tc = 2;
function Ec(t, r) {
  return Bt(t) && Qr(r) ? Xr(dt(t), r) : function(n) {
    var e = Qo(n, t);
    return e === void 0 && e === r ? Sc(n, t) : Vt(r, e, xc | Tc);
  };
}
function Pc(t) {
  return function(r) {
    return r == null ? void 0 : r[t];
  };
}
function Ic(t) {
  return function(r) {
    return Mr(r, t);
  };
}
function Cc(t) {
  return Bt(t) ? Pc(dt(t)) : Ic(t);
}
function $c(t) {
  return typeof t == "function" ? t : t == null ? Ct : typeof t == "object" ? O(t) ? Ec(t[0], t[1]) : Oc(t) : Cc(t);
}
function kc(t) {
  return function(r, n, e) {
    for (var o = -1, a = Object(r), i = e(r), c = i.length; c--; ) {
      var u = i[t ? c : ++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return r;
  };
}
var Fc = kc();
const Yr = Fc;
function zc(t, r) {
  return t && Yr(t, r, X);
}
function xt(t, r, n) {
  (n !== void 0 && !Q(t[r], n) || n === void 0 && !(r in t)) && lt(t, r, n);
}
function Mc(t) {
  return x(t) && pt(t);
}
function Tt(t, r) {
  if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
    return t[r];
}
function Uc(t) {
  return W(t, L(t));
}
function Bc(t, r, n, e, o, a, i) {
  var c = Tt(t, n), u = Tt(r, n), v = i.get(u);
  if (v) {
    xt(t, n, v);
    return;
  }
  var b = a ? a(c, u, n + "", t, r, i) : void 0, l = b === void 0;
  if (l) {
    var p = O(u), d = !p && Z(u), g = !p && !d && Ut(u);
    b = u, p || d || g ? O(c) ? b = c : Mc(c) ? b = Tr(c) : d ? (l = !1, b = Wr(u, !0)) : g ? (l = !1, b = Gr(u, !0)) : b = [] : Dr(u) || it(u) ? (b = c, it(c) ? b = Uc(c) : (!E(c) || $t(c)) && (b = qr(u))) : l = !1;
  }
  l && (i.set(u, b), o(b, u, e, a, i), i.delete(u)), xt(t, n, b);
}
function tn(t, r, n, e, o) {
  t !== r && Yr(r, function(a, i) {
    if (o || (o = new w()), E(a))
      Bc(t, r, i, n, tn, e, o);
    else {
      var c = e ? e(Tt(t, i), a, i + "", t, r, o) : void 0;
      c === void 0 && (c = a), xt(t, i, c);
    }
  }, L);
}
var Dc = Pr(function(t, r, n, e) {
  tn(t, r, n, e);
});
const Rc = Dc;
function Wc(t, r) {
  var n = {};
  return r = $c(r), zc(t, function(e, o, a) {
    lt(n, r(e, o, a), e);
  }), n;
}
var ft = function() {
  return ft = Object.assign || function(t) {
    for (var r, n = 1, e = arguments.length; n < e; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, ft.apply(this, arguments);
};
function Lc(t) {
  return t.toLowerCase();
}
var Vc = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], Nc = /[^A-Z0-9]+/gi;
function Gc(t, r) {
  r === void 0 && (r = {});
  for (var n = r.splitRegexp, e = n === void 0 ? Vc : n, o = r.stripRegexp, a = o === void 0 ? Nc : o, i = r.transform, c = i === void 0 ? Lc : i, u = r.delimiter, v = u === void 0 ? " " : u, b = jr(jr(t, e, "$1\0$2"), a, "\0"), l = 0, p = b.length; b.charAt(l) === "\0"; )
    l++;
  for (; b.charAt(p - 1) === "\0"; )
    p--;
  return b.slice(l, p).split("\0").map(c).join(v);
}
function jr(t, r, n) {
  return r instanceof RegExp ? t.replace(r, n) : r.reduce(function(e, o) {
    return e.replace(o, n);
  }, t);
}
function rn(t, r) {
  var n = t.charAt(0), e = t.substr(1).toLowerCase();
  return r > 0 && n >= "0" && n <= "9" ? "_" + n + e : "" + n.toUpperCase() + e;
}
function qc(t, r) {
  return r === void 0 && (r = {}), Gc(t, ft({ delimiter: "", transform: rn }, r));
}
function Zc(t, r) {
  return r === 0 ? t.toLowerCase() : rn(t, r);
}
function Jc(t, r) {
  return r === void 0 && (r = {}), qc(t, ft({ transform: Zc }, r));
}
function Hc(t, r) {
  const n = /* @__PURE__ */ Object.create(null), e = t.split(",");
  for (let o = 0; o < e.length; o++)
    n[e[o]] = !0;
  return r ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Kc = /* @__PURE__ */ Hc(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Qc(t) {
  const r = t && t.toString().match(/^\s*function (\w+)/);
  return r ? r[1] : t === null ? "null" : "";
}
function Xc(t, r) {
  let n;
  const e = Qc(r);
  if (Kc(e)) {
    const o = typeof t;
    n = o === e.toLowerCase(), !n && o === "object" && (n = t instanceof r);
  } else
    e === "Object" ? n = E(t) : e === "Array" ? n = Array.isArray(t) : e === "null" ? n = t === null : n = t instanceof r;
  return {
    valid: n,
    expectedType: e
  };
}
function Yc({
  prop: t,
  type: r,
  validator: n
}) {
  if (![void 0, null].includes(t) && r) {
    let e = !1;
    const o = Array.isArray(r) ? r : [r], a = [];
    for (let i = 0; i < o.length && !e; i++) {
      const { valid: c, expectedType: u } = Xc(t, o[i]);
      a.push(u || ""), e = c;
    }
    if (!e)
      throw new Error(`Invalid prop: type check failed, expecting [${a.join(", ")}], receiving: ${t}`);
  }
  if (n && !n(t))
    throw new Error(`Invalid prop: validator check failed, receiving: ${t}`);
}
function tu(t, {
  mergeObject: r,
  mergeFunction: n
}) {
  const e = [];
  for (let a = t.length - 1; a >= 0; a--)
    e.push(t[a]);
  const o = n ? (a, i) => typeof a == "function" && typeof i == "function" ? n(i, a) : void 0 : void 0;
  return r === "deep" ? Rc(...e, o) : po(...e, o);
}
function ru(t, {
  mergeFunction: r
}) {
  return t.reduce(r, () => {
  });
}
function D(t, r = {}) {
  const {
    type: n,
    default: e,
    defaultIsDynamic: o = !1,
    required: a = !1,
    validator: i,
    camelizeObjectKeys: c = !1,
    mergeObjectApplyOnlyToDefault: u = !1,
    mergeFunctionApplyOnlyToDefault: v = !0
  } = r;
  let {
    mergeObject: b = "deep",
    mergeFunction: l = !1
  } = r;
  const p = [];
  let d, g = !1, m = !1;
  const f = (s) => {
    if (s !== void 0) {
      Yc({ type: n, prop: s, validator: i });
      const y = Dr(s), C = typeof s == "function";
      return g = y, m = C, y ? (s = Wi(s), c ? Wc(s, (k, A) => Jc(A, {
        stripRegexp: /-/g
        // Filter only short horizontal lines for kebab-case conversion to camelCase
      })) : s) : s;
    }
  };
  for (const s of t)
    p.push(f(s));
  if (!o)
    p.push(f(e));
  else if (typeof e != "function")
    throw new TypeError(`Invalid option: config.default should be Function when config.defaultIsDynamic enabled, receiving: ${e}`);
  g || (b = !1, m || (l = !1));
  for (let s = 0; s < p.length; s++) {
    const y = p[s];
    if (y !== void 0) {
      s === p.length - 1 ? d = y : b ? d = tu(u ? [y, e] : p, {
        mergeObject: b,
        mergeFunction: l
      }) : l ? d = ru(v ? [y, e] : p, {
        mergeFunction: l
      }) : d = y;
      break;
    }
  }
  if (a && [void 0, null].includes(d))
    throw new Error("Missing required prop");
  return o ? D(
    t,
    {
      ...r,
      default: e(d),
      defaultIsDynamic: !1
    }
  ) : d;
}
function gr(t) {
  const r = Array.from(t);
  return r[0] = r[0].toUpperCase(), r.unshift("n"), r.unshift("o"), r.join("");
}
function nu(t, r = []) {
  const n = {
    props: {},
    attrs: {},
    listeners: {},
    hooks: {},
    slots: {}
  }, e = Array.isArray(r) ? r : Object.keys(r);
  for (const o in t)
    if (o.startsWith("@")) {
      const a = o.substring(1);
      Pt ? a.startsWith("vnode") ? n.hooks[gr(a)] = t[o] : n.listeners[gr(a)] = t[o] : a.startsWith("hook:") ? n.hooks[a] = t[o] : n.listeners[a] = t[o];
    } else if (o.startsWith("#")) {
      const a = o.substring(1);
      a && (n.slots[a] = t[o]);
    } else
      e.includes(o) ? n.props[o] = t[o] : n.attrs[o] = t[o];
  return n;
}
var eu = typeof global == "object" && global && global.Object === Object && global;
const ou = eu;
var au = typeof self == "object" && self && self.Object === Object && self, iu = ou || au || Function("return this")();
const nn = iu;
var cu = nn.Symbol;
const st = cu;
var en = Object.prototype, uu = en.hasOwnProperty, fu = en.toString, G = st ? st.toStringTag : void 0;
function su(t) {
  var r = uu.call(t, G), n = t[G];
  try {
    t[G] = void 0;
    var e = !0;
  } catch {
  }
  var o = fu.call(t);
  return e && (r ? t[G] = n : delete t[G]), o;
}
var lu = Object.prototype, pu = lu.toString;
function vu(t) {
  return pu.call(t);
}
var bu = "[object Null]", du = "[object Undefined]", mr = st ? st.toStringTag : void 0;
function yu(t) {
  return t == null ? t === void 0 ? du : bu : mr && mr in Object(t) ? su(t) : vu(t);
}
function hu(t) {
  return t != null && typeof t == "object";
}
var ju = "[object Symbol]";
function gu(t) {
  return typeof t == "symbol" || hu(t) && yu(t) == ju;
}
var mu = /\s/;
function _u(t) {
  for (var r = t.length; r-- && mu.test(t.charAt(r)); )
    ;
  return r;
}
var Ou = /^\s+/;
function wu(t) {
  return t && t.slice(0, _u(t) + 1).replace(Ou, "");
}
function Et(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
var _r = 0 / 0, Au = /^[-+]0x[0-9a-f]+$/i, Su = /^0b[01]+$/i, xu = /^0o[0-7]+$/i, Tu = parseInt;
function Or(t) {
  if (typeof t == "number")
    return t;
  if (gu(t))
    return _r;
  if (Et(t)) {
    var r = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Et(r) ? r + "" : r;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = wu(t);
  var n = Su.test(t);
  return n || xu.test(t) ? Tu(t.slice(2), n ? 2 : 8) : Au.test(t) ? _r : +t;
}
var Eu = function() {
  return nn.Date.now();
};
const mt = Eu;
var Pu = "Expected a function", Iu = Math.max, Cu = Math.min;
function $u(t, r, n) {
  var e, o, a, i, c, u, v = 0, b = !1, l = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(Pu);
  r = Or(r) || 0, Et(n) && (b = !!n.leading, l = "maxWait" in n, a = l ? Iu(Or(n.maxWait) || 0, r) : a, p = "trailing" in n ? !!n.trailing : p);
  function d(_) {
    var $ = e, V = o;
    return e = o = void 0, v = _, i = t.apply(V, $), i;
  }
  function g(_) {
    return v = _, c = setTimeout(s, r), b ? d(_) : i;
  }
  function m(_) {
    var $ = _ - u, V = _ - v, Nt = r - $;
    return l ? Cu(Nt, a - V) : Nt;
  }
  function f(_) {
    var $ = _ - u, V = _ - v;
    return u === void 0 || $ >= r || $ < 0 || l && V >= a;
  }
  function s() {
    var _ = mt();
    if (f(_))
      return y(_);
    c = setTimeout(s, m(_));
  }
  function y(_) {
    return c = void 0, p && e ? d(_) : (e = o = void 0, i);
  }
  function C() {
    c !== void 0 && clearTimeout(c), v = 0, e = u = o = c = void 0;
  }
  function k() {
    return c === void 0 ? i : y(mt());
  }
  function A() {
    var _ = mt(), $ = f(_);
    if (e = arguments, o = this, u = _, $) {
      if (c === void 0)
        return g(u);
      if (l)
        return clearTimeout(c), c = setTimeout(s, r), d(u);
    }
    return c === void 0 && (c = setTimeout(s, r)), i;
  }
  return A.cancel = C, A.flush = k, A;
}
const ku = "JsonEditorVue", rt = Pt ? "modelValue" : "value", wr = Pt ? "update:modelValue" : "input", nt = [
  "mainMenuBar",
  "navigationBar",
  "statusBar",
  "askToFormat",
  "readOnly",
  "escapeControlCharacters",
  "escapeUnicodeCharacters",
  "flattenColumns"
], on = cn({
  name: ku,
  props: {
    [rt]: {},
    mode: {
      type: String
    },
    ...Object.fromEntries(
      nt.map((t) => [
        t,
        {
          type: Boolean,
          default: void 0
        }
      ])
    )
  },
  emits: {
    [wr](t) {
      return !0;
    },
    "update:mode": function(t) {
      return !0;
    }
  },
  setup(t, { attrs: r, emit: n, expose: e }) {
    var m;
    const o = (m = un()) == null ? void 0 : m.proxy, a = yt(), i = yt(!1), c = yt(!1), u = D([t.mode, ot.mode], {
      type: String
    }), v = D([t[rt], ot[rt]]), b = Object.fromEntries(
      Array.from(nt, (f) => [f, D([t[f], ot[f]])]).filter(
        ([, f]) => f !== void 0
      )
    ), l = $u((f) => {
      if (c.value) {
        c.value = !1;
        return;
      }
      i.value = !0, n(
        wr,
        f.text === void 0 ? f.json : f.text
      );
    }, 100), p = (f) => {
      n("update:mode", f);
    }, d = (f, s) => (...y) => {
      f(...y), s(...y);
    }, g = D(
      [
        r,
        an,
        {
          // Both user input & setting value programmatically will trigger onChange
          onChange: l,
          onChangeMode: p,
          mode: u,
          ...b,
          ...v !== void 0 && {
            content: {
              json: v
            }
          }
        }
      ],
      {
        type: Object,
        mergeFunction: d
      }
    );
    return Y(
      () => t[rt],
      (f) => {
        var s;
        if (i.value) {
          i.value = !1;
          return;
        }
        c.value = !0, (s = a.value) == null || s.update(
          [void 0, ""].includes(f) ? { text: "" } : { json: f }
        );
      },
      {
        deep: !0
      }
    ), Y(
      () => t.mode,
      (f) => {
        var s;
        (s = a.value) == null || s.updateProps({
          mode: f
        });
      }
    ), Y(
      () => Array.from(nt, (f) => t[f]),
      (f) => {
        var s;
        (s = a.value) == null || s.updateProps(
          Object.fromEntries(Array.from(f, (y, C) => [nt[C], y]).filter(([, y]) => y !== void 0))
        );
      }
    ), Y(
      () => r,
      (f) => {
        var y;
        const s = {};
        f.onChange && (s.onChange = l), f.onChangeMode && (s.onChangeMode = p), (y = a.value) == null || y.updateProps(
          Object.getOwnPropertyNames(s).length > 0 ? D([f, s], {
            type: Object,
            mergeFunction: d
          }) : f
        );
      },
      {
        deep: !0
      }
    ), e == null || e({ jsonEditor: a }), fn(() => {
      var f;
      (f = a.value) == null || f.destroy();
    }), sn(() => {
      a.value = new vn({
        target: o == null ? void 0 : o.$refs.jsonEditorRef,
        props: g
      }), e || (e = (f) => {
        for (const s in f)
          o[s] = ln(f[s]);
      }, e({ jsonEditor: a }));
    }), () => pn("div", { ref: "jsonEditorRef" });
  }
}), ot = {}, an = {};
function Fu(t) {
  return t.install = (r, n = {}) => {
    const { props: e, attrs: o } = nu(n, on.props);
    Object.assign(ot, e), Object.assign(an, o), r.component(t.name, t);
  }, t;
}
const Uu = Fu(on);
export {
  Uu as default
};
//# sourceMappingURL=json-editor-vue.mjs.map
