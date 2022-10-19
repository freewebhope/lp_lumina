!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AutoKana = e() : t.AutoKana = e() }(window, function () { return function (t) { var e = {}; function n(i) { if (e[i]) return e[i].exports; var r = e[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = t, n.c = e, n.d = function (t, e, i) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function (e) { return t[e] }.bind(null, r)); return i }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 2) }([function (t, e) { t.exports = function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } }, function (t, e) { function n(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } t.exports = function (t, e, i) { return e && n(t.prototype, e), i && n(t, i), t } }, function (t, e, n) { "use strict"; n.r(e); var i = n(0), r = n.n(i), a = n(1), u = n.n(a); function o(t) { var e = Number(t); return e >= 12353 && e <= 12435 || 12445 === e || 12446 === e } function s(t) { return "string" == typeof (e = t) || e instanceof String ? document.getElementById(function (t, e) { e = e ? e.replace(/([[\]().?/*{}+$^:])/g, "$1") : " \\s "; var n = new RegExp("^[".concat(e, "]+"), "g"); return t.replace(n, "") }(t, "#")) : t instanceof Element ? t : null; var e } var l = /[^ 　ぁあ-んー]/g, c = /[ぁぃぅぇぉっゃゅょ]/g, h = function () { function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; r()(this, t), this.isActive = !0, this.timer = null, this.initializeValues(), this.option = Object.assign({ katakana: !1, debug: !1, checkInterval: 30 }, i); var a = s(e), u = s(n); if (!a) throw new Error("Element not found: ".concat(e)); this.elName = a, this.registerEvents(this.elName), u && (this.elFurigana = u) } return u()(t, [{ key: "getFurigana", value: function () { return this.furigana } }, { key: "start", value: function () { this.isActive = !0 } }, { key: "stop", value: function () { this.isActive = !1 } }, { key: "toggle", value: function (t) { if (t) { var e = Event.element(t); e && (this.isActive = e.checked) } else this.isActive = !this.isActive } }, { key: "initializeValues", value: function () { this.baseKana = "", this.furigana = "", this.isConverting = !1, this.ignoreString = "", this.input = "", this.values = [] } }, { key: "registerEvents", value: function (t) { var e = this; t.addEventListener("blur", function () { e.debug("blur"), e.clearInterval() }), t.addEventListener("focus", function () { e.debug("focus"), e.onInput(), e.setInterval() }), t.addEventListener("keydown", function () { e.debug("keydown"), e.isConverting && e.onInput() }) } }, { key: "clearInterval", value: function (t) { function e() { return t.apply(this, arguments) } return e.toString = function () { return t.toString() }, e }(function () { this.timer && clearInterval(this.timer) }) }, { key: "toKatakana", value: function (t) { if (this.option.katakana) { for (var e, n = "", i = 0; i < t.length; i += 1)o(e = t.charCodeAt(i)) ? n += String.fromCharCode(e + 96) : n += t.charAt(i); return n } return t } }, { key: "setFurigana", value: function (t) { this.isConverting || (t && (this.values = t), this.isActive && (this.furigana = this.toKatakana(this.baseKana + this.values.join("")), this.elFurigana && (this.elFurigana.value = this.furigana))) } }, { key: "removeString", value: function (t) { if (-1 !== t.indexOf(this.ignoreString)) return String(t).replace(this.ignoreString, ""); for (var e = this.ignoreString.split(""), n = t.split(""), i = 0; i < e.length; i += 1)e[i] === n[i] && (n[i] = ""); return n.join("") } }, { key: "checkConvert", value: function (t) { if (!this.isConverting) if (Math.abs(this.values.length - t.length) > 1) { var e = t.join("").replace(c, "").split(""); Math.abs(this.values.length - e.length) > 1 && this.onConvert() } else this.values.length === this.input.length && this.values.join("") !== this.input && this.input.match(l) && this.onConvert() } }, { key: "checkValue", value: function () { var t; if ("" === (t = this.elName.value)) this.initializeValues(), this.setFurigana(); else { if (t = this.removeString(t), this.input === t) return; if (this.input = t, this.isConverting) return; var e = t.replace(l, "").split(""); this.checkConvert(e), this.setFurigana(e) } this.debug(this.input) } }, { key: "setInterval", value: function (t) { function e() { return t.apply(this, arguments) } return e.toString = function () { return t.toString() }, e }(function () { this.timer = setInterval(this.checkValue.bind(this), this.option.checkInterval) }) }, { key: "onInput", value: function () { this.elFurigana && (this.baseKana = this.elFurigana.value), this.isConverting = !1, this.ignoreString = this.elName.value } }, { key: "onConvert", value: function () { this.baseKana = this.baseKana + this.values.join(""), this.isConverting = !0, this.values = [] } }, { key: "debug", value: function () { var t; this.option.debug && (t = console).log.apply(t, arguments) } }]), t }(); function f(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return new h(t, e, n) } n.d(e, "bind", function () { return f }) }]) });