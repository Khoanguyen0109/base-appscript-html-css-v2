// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"MvSY":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var id_staff = JSON.parse(localStorage.getItem("id_staff"));
var user_name = JSON.parse(localStorage.getItem("user_name"));
var pos_user = JSON.parse(localStorage.getItem("pos_user"));
var email_user = JSON.parse(localStorage.getItem("email_user"));
var role_doc = JSON.parse(localStorage.getItem("role_doc")).split(",");
var role_human = JSON.parse(localStorage.getItem("role_human")).split(",");
var img_user = "https://drive.google.com/uc?id=".concat(JSON.parse(localStorage.getItem("img_user")));
$("#nav_bar_main").append("<header class=\"main-header\">\n<div class=\"inside-header\">\n    <div class=\"d-flex align-items-center logo-box justify-content-start d-xl-inline-flex d-none\">\n        <!-- Logo -->\n        <a href=\"index.html\" class=\"logo\">\n        <!-- logo-->\n        <div class=\"logo-mini w-30\">\n            <span class=\"light-logo\"><img src=\"/images/logo/lavo.png\" alt=\"logo\"></span>\n        </div>\n        <div class=\"logo-lg\">\n            <span class=\"light-logo text-info fw-bold  fs-16\">LAVO Nh\xE0 M\xE1y S\u1EA3n Xu\u1EA5t</span>\n        </div>\n        </a>\t\n    </div>  \n    <!-- Header Navbar -->\n    <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <div class=\"app-menu\">\n     \n    </div>\n\n    <div class=\"navbar-custom-menu r-side\">\n\n        <ul class=\"nav navbar-nav\">\n         \n            <p id=\"countdown\" href=\"#\" class=\"mb-0 text-primary fw-bold\" style=\"align-self:center\"></p>\n            \n\n            <li class=\"btn-group nav-item d-xl-inline-flex d-none\">\n                <a href=\"#\" data-provide=\"fullscreen\" class=\"waves-effect waves-light nav-link btn-primary-light svg-bt-icon\" title=\"Full Screen\">\n                    <i class=\"icon-Expand-arrows\"><span class=\"path1\"></span><span class=\"path2\"></span></i>\n                </a>\n            </li>\n\n            <!-- User Account-->\n            <li class=\"dropdown user user-menu\">\n                <a href=\"#\" class=\"waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow\" title=\"User\" data-bs-toggle=\"modal\" data-bs-target=\"#quick_user_toggle\">\n                    <div class=\"d-flex pt-1\">\n                        <div class=\"text-end me-10\">\n                            <p class=\"pt-5 fs-14 mb-0 fw-700 text-primary\">".concat(user_name, "</p>\n                            <small class=\"fs-10 mb-0 text-uppercase text-mute\">").concat(pos_user, "</small>\n                        </div>\n                        <img src=\"").concat(img_user, "\" class=\"avatar rounded-10 bg-primary-light h-40 w-40\" alt=\"\" />\n                    </div>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n    </nav>\n</div>\n\n</header>\n\n<nav class=\"main-nav\" role=\"navigation\">\n\n<!-- Mobile menu toggle button (hamburger/x icon) -->\n<input id=\"main-menu-state\" type=\"checkbox\" />\n<label class=\"main-menu-btn\" for=\"main-menu-state\">\n    <span class=\"main-menu-btn-icon\"></span> Toggle main menu visibility\n</label>\n\n<!-- Sample menu definition -->\n<ul id=\"main-menu\" class=\"sm sm-blue\"> \n    <li  id=\"li_nhan_su\"><a href=\"human.html\"><i class=\"fas text-info fa-user-alt\"></i>NH\xC2N S\u1EF0</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"list_baobi.html\"><i class=\"fas text-info fa-home\"></i>KHO BAO B\xCC</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"list_baobi.html\"><i class=\"fas text-info fa-box\"></i>KHO H\xD3A CH\u1EA4T</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"#\"><i class=\"fas text-info fa-cogs\"></i>S\u1EA2N XU\u1EA4T</a>\n    <ul >\n        <li><a href=\"create_plan.html\">L\u1EADp K\u1EBF Ho\u1EA1ch S\u1EA3n Xu\u1EA5t</a></li>\n        <li><a href=\"schedule.html\">Ti\u1EBFn \u0110\u1ED9 S\u1EA3n Xu\u1EA5t</a></li>\n        <li><a href=\"doc_lot.html\">H\u1ED3 S\u01A1 L\xF4 S\u1EA3n Xu\u1EA5t</a></li>\n    </ul>\n    </li>\n    <li  id=\"li_bao_bi\"><a href=\"list_baobi.html\"><i class=\"fas text-info fa-wrench\"></i>B\u1EA2O TR\xCC</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"list_baobi.html\"><i class=\"fas text-info fa-trophy\"></i>CH\u1EA4T L\u01AF\u1EE2NG</a>\n  \n    </li>\n    <li  id=\"li_bao_bi\"><a href=\"list_baobi.html\"><i class=\"fas text-info fa-warehouse\"></i>KHO TH\xC0NH PH\u1EA8M</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"list_baobi.html\"><i class=\"fas text-info fa-truck-moving\"></i>GIAO NH\u1EACN</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"doccument.html\"><i class=\"fas text-info fa-atom\"></i>ISO - GMP</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"hoso.html\"><i class=\"fas text-info fa-book\"></i>H\u1ED2 S\u01A0</a></li>\n    <li  id=\"li_bao_bi\"><a href=\"hoso.html\"><i class=\"fas text-danger fa-chart-bar\"></i>B\xC1O C\xC1O</a></li>\n\n\n</ul>\n</nav>"));
$("#quick_user_toggle").append("\t<div class=\"modal-dialog\">\n<div class=\"modal-content slim-scroll3\">\n    <div class=\"modal-body p-30 bg-white\">\n        <div class=\"d-flex align-items-center justify-content-between pb-30\">\n            <h4 class=\"m-0\">Th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng\n            </h4>\n            <a href=\"#\" class=\"btn btn-icon btn-danger-light btn-sm no-shadow\" data-bs-dismiss=\"modal\">\n               <i class=\"fas fa-times\"></i>\n            </a>\n        </div>\n        <div>\n            <div class=\"d-flex flex-row\">\n                <div class=\"\"><img id=\"img_user\" src=\"".concat(img_user, "\" alt=\"user\"\n                        class=\"rounded bg-danger-light w-150\" width=\"100\"></div>\n                <div class=\"ps-20\">\n                    <h5 class=\"mb-0\">").concat(user_name, "</h5>\n                    <p class=\"my-5 text-fade\">").concat(pos_user, "</p>\n                    <a style=\"display:flex;align-items: center\"><span\n                            class=\"icon-Mail-notification me-5 text-success\"><span\n                                class=\"path1\"></span><span class=\"path2\"></span></span>\n                        ").concat(email_user, "</a>\n                    <button class=\"btn btn-danger-light btn-sm mt-5\" onclick=\"handleSignoutClick()\" ><i class=\"ti-plus\"></i>\n                        LogOut</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"dropdown-divider my-30\"></div>\n        <div>\n            <div class=\"d-flex align-items-center mb-30\">\n                <div class=\"me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center\">\n                    <span class=\"icon-Library fs-24\"><span class=\"path1\"></span><span\n                            class=\"path2\"></span></span>\n                </div>\n                <div class=\"d-flex flex-column fw-500\">\n                    <a href=\"#\" class=\"text-dark hover-primary mb-1 fs-16\" onclick=\"show_change_password()\">Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u</a>\n                    <span class=\"text-fade\">M\u1EADt kh\u1EA9u l\xE0 s\u1ED1 ho\u1EB7c ch\u1EED</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"dropdown-divider my-30\"></div>\n        <div class=\"row change-password m-5 \">\n        <div class=\"form-group\">\n        <div class=\"input-group mb-3\">\n            <span class=\"input-group-text  bg-transparent\"><i\n                    class=\"ti-lock\"></i></span>\n            <input type=\"password\" class=\"form-control ps-15 bg-transparent\"\n                placeholder=\"Nh\u1EADp m\u1EADt kh\u1EA9u\" id=\"edit_password\">\n        </div>\n        <div class=\"col-12 text-center\">\n            <button type=\"button\" class=\"btn btn-warning mt-10\"\n            onclick=\"change_pass()\">\u0110\u1ED4I M\u1EACT KH\u1EA8U</button>\n        </div>\n    </div>\n        </div>\n    </div>\n</div>\n</div>"));
$(".change-password").toggle();
function change_pass() {
  return _change_pass.apply(this, arguments);
}
function _change_pass() {
  _change_pass = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var values;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          values = [[email_user, $("#edit_password").val()]];
          _context.next = 3;
          return push_data(values, "edit_pass");
        case 3:
          showAlert("Đã cập nhật mật khẩu !", "warning");
          $(".change-password").toggle();
          $("#edit_password").val("");
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _change_pass.apply(this, arguments);
}
},{}]},{},["MvSY"], null)