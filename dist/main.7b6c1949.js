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
})({"kwEv":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var data_work = [];
var vitri_dong_sua;
var hide_desk = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 21, 23];
var hide_mobile = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var hide_info = window.innerWidth < 767 ? hide_mobile : hide_desk;
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var data, regex, matches, jsonObjects;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        $(".fill-buttons").toggle();
        functionInit();
        _context.next = 4;
        return get_data("get_data_initial_schedule");
      case 4:
        data = _context.sent;
        regex = /\{[\s\S]*?\}/g;
        matches = data.match(regex);
        jsonObjects = matches.map(function (match) {
          return JSON.parse(match);
        });
        get_data_work(jsonObjects[0].values);
        select_list_process(jsonObjects[1].values);
        select_list_workers(jsonObjects[2].values);
      case 11:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
function getAllPlan() {
  return _getAllPlan.apply(this, arguments);
}
function _getAllPlan() {
  _getAllPlan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var data, regex, matches, jsonObjects;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          document.getElementById("spin_icon_3").classList.remove("d-none");
          _context6.next = 3;
          return get_data("getAllPlan");
        case 3:
          data = _context6.sent;
          regex = /\{[\s\S]*?\}/g;
          matches = data.match(regex);
          jsonObjects = matches.map(function (match) {
            return JSON.parse(match);
          });
          get_data_work(jsonObjects[0].values);
          select_list_process(jsonObjects[1].values);
          select_list_workers(jsonObjects[2].values);
          document.getElementById("spin_icon_3").classList.add("d-none");
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _getAllPlan.apply(this, arguments);
}
function get_data_work(data) {
  document.getElementById("spinner").style.display = "block";
  var today = moment().format("YYYY-MM-DD");
  var a = 0,
    b = 0,
    c = 0,
    d = 0,
    s = 0,
    f = 0;
  data_work = data.filter(function (item) {
    a = a + 1;
    item[22] == "Đang sản xuất" ? b = b + 1 : "";
    item[22] == "Dang dỡ" ? c = c + 1 : "";
    item[22] == "Chờ sản xuất" ? d = d + 1 : "";
    item[22] == "Hoàn thành" ? s = s + 1 : "";
    item[4] == today ? f = f + 1 : "";
    return item;
  });
  $("#tong_ke_hoach").text(a);
  $("#dang_san_xuat").text(b);
  $("#dang_do").text(c);
  $("#cho_san_xuat").text(d);
  $("#hoan_thanh").text(s);
  $("#hom_nay").text(f);
  install_init(data_work);
}
function install_init(data) {
  if (data != undefined) {
    if ($.fn.dataTable.isDataTable("#table_doc")) {
      $("#table_doc").DataTable().clear().rows.add(data).draw();
    } else {
      create_tabl_work(data);
    }
  } else {
    create_tabl_work([]);
  }
  document.getElementById("spinner").style.display = "none";
  return;
}
function create_tabl_work(data) {
  var table_doc = $("#table_doc").DataTable({
    buttons: [{
      extend: "copy",
      className: "btn-success"
    }, {
      extend: "excel",
      className: "btn-danger"
    }, {
      extend: "pdf",
      className: "btn-warning"
    }, {
      extend: "print",
      className: "btn-info"
    }],
    dom: "Bfrtip",
    bFilter: false,
    fnInitComplete: function fnInitComplete() {
      $(".dt-buttons").toggle();
      if (window.innerWidth > 767) {
        $(".dataTables_scrollBody").slimscroll({
          height: $(window).height() - 360 + "px",
          color: "red",
          axis: "both"
        });
      }
    },
    responsive: true,
    autoWidth: true,
    destroy: true,
    deferRender: true,
    scrollY: window.innerWidth < 767 ? $(window).height() - 150 + "px" : "false",
    scrollX: false,
    bLengthChange: false,
    paging: true,
    info: false,
    // Hiển thị thông tin số bản ghi
    order: [4, "desc"],
    language: {
      paginate: {
        first: "Đầu",
        last: "Cuối",
        next: "Tiếp",
        previous: "Trước"
      }
    },
    data: data,
    columns: [{
      title: "ID",
      className: "text-center"
    },
    //0
    {
      title: "TIMESTAMP",
      className: "text-center"
    },
    //1
    {
      title: "NGƯỜI CẬP NHẬT",
      className: "text-center"
    },
    //2
    {
      title: "ID COMBINE",
      className: "text-center"
    },
    //3
    {
      title: "NGÀY KẾ HOẠCH",
      className: "text-center"
    },
    //4
    {
      title: "NGÀY SẢN XUẤT",
      className: "text-center"
    },
    //5
    {
      title: "SỐ LỆNH",
      className: "text-center"
    },
    //6
    {
      title: "MÃ ",
      className: "text-center"
    },
    //7
    {
      title: "TÊN  SẢN PHẨM",
      render: function render(data, type, row, meta) {
        var schedule = "";
        if (window.innerWidth < 767) {
          var num_per = (row[21] * 100).toFixed(1);
          var arrow = row[21] * 1 > 1 ? "<p  class=\"m-0 p-0 text-warning fw-bold\"><i class=\"fas fa-arrow-up me-5\"></i>".concat(num_per, "% </p> ") : row[21] * 1 < 1 ? "<p  class=\"m-0 p-0 text-danger fw-bold\"><i class=\"fas fa-arrow-down me-5 \"></i>".concat(num_per, "% </p> ") : row[21] * 1 == 1 ? "<p  class=\"m-0 p-0 text-success fw-bold\"><i class=\"far fa-check me-5\"></i>".concat(num_per, "% </p> ") : "";
          var check_class = "badge bg-csx";
          row[22] == "Hoàn thành" ? check_class = "  badge bg-ht" : "";
          row[22] == "Dang dỡ" ? check_class = "  badge bg-dd" : "";
          row[22] == "Đang sản xuất" ? check_class = "  badge bg-dsx" : "";
          row[22] == "" ? (check_class = "  badge bg-csx", row[22] = "Chờ sản xuất") : "";
          schedule = "\n          <div class=\"d-xl-inline-flex d-xl-none mt-10\">\n            <hr class=\"mt-5 mb-10\"/>\n            <div style=\"display:flex\">\n            <div style=\"display: grid;text-align-last:center;width:60px\">\n              <small class=\"fw-bold fs-8\">XLBB</small>\n              <small class=\"fw-bold text-primary fs-8\" style=\"height:fit-content;width: 60px\">".concat(row[17], " </small>\n            </div>\n            <i class=\" ms-5 me-5 fas fa-long-arrow-alt-right\"></i>\n            <div style=\"display: grid;text-align-last:center;width:60px\">\n              <small class=\"fw-bold fs-8\">Chi\u1EBFt r\xF3t </small>\n              <small class=\"fw-bold text-primary fs-8\" style=\"height:fit-content;width: 60px\">").concat(row[18], " </small>\n            </div>\n            <i class=\" ms-5 me-5 fas fa-long-arrow-alt-right\"></i>\n            <div style=\"display: grid;text-align-last:center;width:60px\">\n              <small class=\"fw-bold fs-8\">\u0110\xF3ng g\xF3i </small>\n              <small class=\"fw-bold text-primary fs-8\" style=\"height:fit-content;width: 60px\">").concat(row[19], " </small>\n            </div>\n            <i class=\" ms-5 me-5 fas fa-long-arrow-alt-right\"></i>\n            <div style=\"display: grid;text-align-last:center;width:60px\">\n              <small class=\"fw-bold fs-8\">Nh\u1EADp Kho </small>\n              <small class=\"fw-bold text-primary fs-8\" style=\"height:fit-content;width: 60px\">").concat(row[19], " <small class=\"text-mute\">/ ").concat(row[11], "</small>  </small>\n            </div>\n           \n            </div>\n             <hr class=\"mt-10 mb-0\"/>\n            <div style=\"display:flex;place-content: space-between;place-items:center\">\n              <span class=\"").concat(check_class, " fs-8\" style=\"height:fit-content;width: 100px\">").concat(row[22], " </span>\n               <div style=\"display:grid\">\n                ").concat(arrow, "\n              </div>\n              <div class=\"dropdown\" style=\"display:flex;justify-content: center;align-items: center\">\n                <button  class=\" btn  px-5 editor-edit-note me-10 comment-plan\" id=\"").concat(row[3], "\"><i class=\"fas fa-user-check fs-16 text-info\"></i></button>\n                <button  class=\" btn  px-5 editor-edit-note me-10\" ><i class=\"fad fa-edit text-primary fs-16\" ></i></button>\n                <button  class=\" btn  px-5 editor-delete\"><i class=\"fad fa-trash-alt fs-16 text-danger\"></i></button>\n              </div>\n            </div>\n          </div>\n          ");
        }
        var status_print = row[12] ? "<span class=\"badge bg-primary \" style=\"width:fit-content\">".concat(row[12], "</span>") : "";
        var id_img = row[13] ? "https://drive.google.com/uc?id=".concat(row[13]) : "https://bst.icons8.com/wp-content/uploads/2021/11/lunacy_free_graphic_design_software.webp";
        var check_cb = row[14] ? "text-success" : "text-danger";
        return "\n      <div style=\"display:grid\" >\n        <div style=\"display:flex\">\n        <img class=\"me-5\" src=\"".concat(id_img, "\" height=\"50px\" width=\"50px\" style=\"border-radius:5px\">\n          <div style=\"display:grid\">\n              <p class=\"view_doc_main mb-0 hover-danger fw-bold ").concat(check_cb, "\" style=\" display: block;width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: wrap;\"> ").concat(data, "</p>\n              <div>\n                <span class=\"badge bg-csx\" style=\"width:fit-content\">").concat(row[5], " </span>\n                <span class=\"badge bg-csx \" style=\"width:fit-content\">").concat(row[10], "</span>\n                <span class=\"badge bg-csx \" style=\"width:fit-content\">").concat(row[11], " ").concat(row[9], " </span>\n                ").concat(status_print, "\n              </div>\n          </div> \n        </div>\n        ").concat(schedule, "\n      </div>");
      }
    },
    //8
    {
      title: "ĐVT",
      className: "text-center"
    },
    //9
    {
      title: "SỐ LOT",
      className: "text-center"
    },
    //10
    {
      title: "SỐ LƯỢNG",
      className: "text-center"
    },
    //11
    {
      title: "GHI CHÚ",
      className: "text-center"
    },
    //12
    {
      title: "IMAGE",
      className: "text-center"
    },
    //13
    {
      title: "CÔNG BỐ",
      className: "text-center"
    },
    //14
    {
      title: "1. PHA CHẾ",
      className: "text-center",
      render: function render(data, row) {
        var check_class = "  form-select bg-csx";
        data == "Hoàn thành" ? check_class = "  form-select bg-ht" : "";
        data == "Dang dỡ" ? check_class = "  form-select bg-dd" : "";
        data == "" ? (check_class = "  form-select bg-csx", data = "Chờ sản xuất") : "";
        var res = "<select class=\"".concat(check_class, "  text-center btn btn-sm\"  id=\"pha_che_").concat(row[0], "\"  style=\"border:none\" onchange=\"handleChange(this,'").concat(row[0], "','U')\">\n    <option value=\"").concat(data, "\" hidden >").concat(data, "</option>\n    <option class=\"text-center btn btn-sm  form-select bg-ht\"  >Ho\xE0n th\xE0nh</option>\n    <option class=\" text-center btn btn-sm  form-select bg-dd \" >Dang d\u1EE1</option>\n    <option class=\" text-center btn btn-sm  form-select bg-csx\" >Ch\u1EDD s\u1EA3n xu\u1EA5t</option>\n  </select>");
        return res;
      }
    },
    //15
    {
      title: "2. XUẤT BAO BÌ",
      className: "text-center",
      render: function render(data, row) {
        var check_class = "  form-select bg-csx";
        data == "Hoàn thành" ? check_class = "  form-select bg-ht" : "";
        data == "Dang dỡ" ? check_class = "  form-select bg-dd" : "";
        data == "" ? (check_class = "  form-select bg-csx", data = "Chờ sản xuất") : "";
        var res = "<select class=\"".concat(check_class, "  text-center btn btn-sm\"  id=\"xuat_bao_bi_").concat(row[0], "\"  style=\"border:none\" onchange=\"handleChange(this,'").concat(row[0], "','U')\">\n    <option value=\"").concat(data, "\" hidden >").concat(data, "</option>\n    <option class=\"text-center btn btn-sm  form-select bg-ht\"  >Ho\xE0n th\xE0nh</option>\n    <option class=\" text-center btn btn-sm  form-select bg-dd \" >Dang d\u1EE1</option>\n    <option class=\" text-center btn btn-sm  form-select bg-csx\" >Ch\u1EDD s\u1EA3n xu\u1EA5t</option>\n  </select>");
        return res;
      }
    },
    //16
    {
      title: "3.XLBB",
      className: "text-center"
    },
    //17
    {
      title: "4. CHIẾT RÓT",
      className: "text-center"
    },
    //18
    {
      title: "5. ĐÓNG GÓI",
      className: "text-center"
    },
    //19
    {
      title: "6. NHẬP KHO",
      className: "text-center",
      render: function render(data, type, row, meta) {
        var num_per = (row[21] * 100).toFixed(1);
        var arrow = row[21] * 1 > 1 ? "<p  class=\"m-0 p-0 text-warning fw-bold\"><i class=\"fas fa-arrow-up me-5\"></i>".concat(num_per, "% </p> ") : row[21] * 1 < 1 ? "<p  class=\"m-0 p-0 text-danger fw-bold\"><i class=\"fas fa-arrow-down me-5 \"></i>".concat(num_per, "% </p> ") : row[21] * 1 == 1 ? "<p  class=\"m-0 p-0 text-success fw-bold\"><i class=\"far fa-check me-5\"></i>".concat(num_per, "% </p> ") : "";
        return "\n        <div style=\"display:grid\" >\n        <p  class=\"m-0 p-0\"> <strong class=\"text-info\">".concat(data, " </strong>/ ").concat(row[11], " </p>\n        \n         ").concat(arrow, " \n        </div>\n    ");
      }
    },
    //20
    {
      title: "TỶ LỆ HOÀN THÀNH",
      className: "text-center"
    },
    //21
    {
      title: "TIẾN ĐỘ",
      className: "text-center",
      render: function render(data, row) {
        var check_class = "form-select bg-csx";
        data == "Hoàn thành" ? check_class = "  form-select bg-ht" : "";
        data == "Dang dỡ" ? check_class = "  form-select bg-dd" : "";
        data == "Đang sản xuất" ? check_class = "  form-select bg-dsx" : "";
        data == "" ? (check_class = "  form-select bg-csx", data = "Chờ sản xuất") : "";
        var res = "<select class=\"".concat(check_class, " btn btn-sm text-center\"  id=\"tien_do_").concat(row[0], "\"  style=\"border:none\" onchange=\"handleChange(this,'").concat(row[0], "','U')\">\n          <option value=\"").concat(data, "\" hidden >").concat(data, "</option>\n          <option class=\"text-center  btn btn-sm form-select bg-ht\"  >Ho\xE0n th\xE0nh</option>\n          <option class=\" text-center  btn btn-sm form-select bg-dd \" >Dang d\u1EE1</option>\n          <option class=\" text-center  btn btn-sm form-select bg-csx\" >Ch\u1EDD s\u1EA3n xu\u1EA5t</option>\n          <option class=\" text-center  btn btn-sm form-select bg-dsx\" >\u0110ang s\u1EA3n xu\u1EA5t</option>\n\n        </select>");
        return res;
      }
    },
    //22
    {
      title: "HISTORY",
      className: "text-center",
      render: function render(data, row) {
        var result = data ? data : "";
        return result;
      }
    },
    //23

    {
      data: null,
      title: "HÀNH ĐỘNG",
      className: "uniqueClassName",
      orderable: false,
      render: function render(data, type, row) {
        var res = "<div class=\"dropdown ms-10\">\n                        <button class=\" btn  btn-sm fs-12 dropdown-toggle \" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" ></button>\n                \n                        <div class=\"dropdown-menu dropdown-grid  cols-3\" style=\"\">\n    <a class=\"dropdown-item text-warning print-hsl\" href=\"#\" id= \"CD_".concat(row[0], "\" >\n                        <span class=\"prev-iso icon fad fa-tasks text-warning me-10\" ></span>\n                        <span class=\"title fs-10\">C\xF4ng \u0111o\u1EA1n</span>\n                        </a>\n    <a class=\"dropdown-item text-success print-nvl \" href=\"#\" id= \"NVL_").concat(row[0], "\" > \n                        <span class=\"prev-iso icon fad fa-box text-success me-10\" ></span>\n                        <span class=\"title fs-10\">Nguy\xEAn v\u1EADt li\u1EC7u</span>\n                        </a>\n    <a class=\"dropdown-item text-danger print-ct\" href=\"#\" id= \"CT_").concat(row[0], "\" >\n                        <span class=\"prev-iso icon fad fa-clipboard-list text-danger me-10\"></span>\n                        <span class=\"title fs-10\">Pha ch\u1EBF</span>\n                        </a>\n                        </div>\n                        </div>");
        return "<div style=\"display:flex;justify-content: center;align-items: center\">\n         <button  class=\" btn  px-5 editor-edit-note me-10 comment-plan\" id=\"".concat(row[3], "\"><i class=\"fas fa-info-square fs-16 text-info\"></i></button>\n         <button  class=\" btn  px-5 edit-plan me-10\" ><i class=\"fad fa-edit text-primary fs-14\" ></i></button>\n          <button  class=\" btn  px-5 editor-delete\"   ><i class=\"fad fa-trash-alt fs-14 text-danger\"></i></button>\n\n          ").concat(res, "\n            </div>");
      }
    } //11
    ],

    columnDefs: [{
      targets: hide_info,
      visible: false
    },
    // { responsivePriority: 1, targets: 5 },
    {
      responsivePriority: 0,
      targets: 8
    }],
    rowGroup: {
      dataSrc: function dataSrc(row) {
        var name = '<p class="fw-bold me-10 mb-0 text-info"><i class="fas fa-notes-medical me-10"></i>' + row[4] + "</p>";
        return name;
      }
    }
  });
  // CLICK EDIT
  $("#table_doc").on("click", "tbody td .editor-edit", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    var position = document.getElementById("userPosition").innerHTML;
    if (position == "Admin") {
      plan_edit(data, idx);
    } else {
      sweetAlert("Bạn không có quyền sửa kế hoạch !", "error");
    }
  });

  // CLICK in hsl onclick="dowload_ncr('${row[3]}',0,false,'${row[12]}','${row[0]}')"
  $("#table_doc").on("click", "tbody td .print-hsl", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var idx, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            document.getElementById("spin_icon_4").classList.remove("d-none");
            idx = table_doc.row($(this).parents("tr")).index();
            data = table_doc.row(idx).data();
            vitri_dong_sua = idx;
            dowload_ncr(data[3], "0", false, data[12], data[0], data);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  $("#table_doc").on("click", "tbody td .print-nvl", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var idx, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            document.getElementById("spin_icon_4").classList.remove("d-none");
            idx = table_doc.row($(this).parents("tr")).index();
            data = table_doc.row(idx).data();
            vitri_dong_sua = idx;
            dowload_ncr(data[3], "2045959136", true, data[12], data[0], data);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
  $("#table_doc").on("click", "tbody td .print-ct", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var idx, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            document.getElementById("spin_icon_4").classList.remove("d-none");
            idx = table_doc.row($(this).parents("tr")).index();
            data = table_doc.row(idx).data();
            vitri_dong_sua = idx;
            dowload_ncr(data[3], "118501597", true, data[12], data[0], data);
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }());

  // SỬA KẾ HOẠCH
  $("#table_doc").on("click", "tbody td .edit-plan", function (e) {
    var data = table_doc.row($(this).parents("tr")).data();
    var idx = table_doc.row($(this).parents("tr")).index();
    plan_edit(data, idx);
  });

  // CLICK COMMENT
  $("#table_doc").on("click", "tbody td .comment-plan", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    data_row_current = data;
    show_modal_comment_plan(data);
  });
}
$("#filterbox").on("change", function () {
  var key_word = this.value.toLowerCase();
  console.log(data_work);
  var result = data_work.filter(function (e) {
    if (e[8].toLowerCase().includes(key_word) || e[7].toLowerCase().includes(key_word)) {
      return e;
    }
  });
  $("#table_doc").DataTable().clear().rows.add(result).draw();
});
function reset_table() {
  $("#filterbox").val("");
  $("#fill_muc_tai_lieu").val("");
  if ($(".fill-buttons").is(":visible")) {
    $(".fill-buttons").toggle();
  }
  boxes.forEach(function (otherBox) {
    otherBox.classList.remove("active_but_1");
    otherBox.classList.add("inactive");
  });
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    $("#table_doc").DataTable().clear().rows.add(data_work).draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}

// Lấy danh sách các thẻ có class là "box"
var boxes = document.querySelectorAll(".box_click");

// Lặp qua danh sách các thẻ và gán sự kiện click cho từng thẻ
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    // Nếu thẻ được click, thêm class "active" và loại bỏ class "inactive" (nếu có)
    box.classList.add("active_but_1");
    box.classList.remove("inactive");

    // Lặp qua danh sách các thẻ khác và loại bỏ class "active" và thêm class "inactive" (nếu có)
    boxes.forEach(function (otherBox) {
      if (otherBox !== box) {
        otherBox.classList.remove("active_but_1");
        otherBox.classList.add("inactive");
      }
    });
  });

  // Gán sự kiện mouseleave cho từng thẻ để loại bỏ class "active" nếu thẻ không được click
  box.addEventListener("mouseleave", function () {
    if (!box.classList.contains("active_but_1")) {
      box.classList.remove("active_but_1");
      box.classList.add("inactive");
    }
  });
});

// resize  table
$(window).on("resize", function () {
  var table = $("#table_doc").DataTable();
  table.columns.adjust();
});
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
  document.getElementById("spin_icon_4").classList.add("d-none");
}
function dowload_ncr(id, id_sheet, portrait, content_old, id_unique, data_table) {
  var content = "";
  var check_split = content_old ? "|" : "";
  if (id_sheet == "0") {
    content = "HSL ".concat(check_split, " ").concat(content_old);
  } else if (id_sheet == "2045959136") {
    content = "NVL ".concat(check_split, " ").concat(content_old);
  } else if (id_sheet == "118501597") {
    content = "CT' ".concat(check_split, " ").concat(content_old);
  }
  document.getElementById("spinner").style.display = "block";
  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var values, data, uri;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          values = [id, id_sheet, portrait, content, id_unique];
          _context5.next = 3;
          return push_data(values, "dowload_pdf_HSL");
        case 3:
          data = _context5.sent;
          document.getElementById("spinner").style.display = "none";
          uri = "data:application/pdf;charset=ISO-8859-1;base64," + encodeURIComponent(data.data);
          downloadURI(uri, "Hồ sơ lô - " + id + ".pdf");
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })), 100);
  var table = $("#table_doc").DataTable();
  data_table[12] = content;
  effec_action_table_edit(table, data_table, vitri_dong_sua);
}
function effec_action_table_edit(table, values, idx) {
  showAlert("Đã sửa thành công !", "warning");
  table.row(idx).data(values).draw(false);
  // Highlight the updated row

  var rowNode = table.row(idx).node();
  // console.log(rowNode)
  $(rowNode).toggleClass("highlight-row");

  // Remove the highlight class after 5 seconds
  setTimeout(function () {
    $(rowNode).toggleClass("highlight-row");
  }, 5000);
}
function filter_status_plan(id) {
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    var result = data_work.filter(function (e) {
      if (e[22] == id) {
        return e;
      }
    });
    console.log(result);
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}
function filter_status_plan_today() {
  document.getElementById("spinner").style.display = "block";
  var today = moment().format("YYYY-MM-DD");
  setTimeout(function () {
    var result = data_work.filter(function (e) {
      if (e[4] == today) {
        return e;
      }
    });
    console.log(result);
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}
function filter_status_plan_total() {
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    var result = data_work;
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}
function plan_edit(data, idx) {
  document.getElementById("edit_plan").reset();
  $("#ngayKH_edit_plan").datepicker({
    format: "mm/dd/yyyy"
  });
  $("#ngaySX_edit_plan").datepicker({
    format: "mm/dd/yyyy"
  });
  document.getElementById("index_edit_plan").value = idx;
  document.getElementById("ID_edit_plan").value = data[0];
  document.getElementById("id_combine_old").value = data[3];
  document.getElementById("ngayKH_edit_plan").value = data[4], document.getElementById("ngaySX_edit_plan").value = data[5], document.getElementById("lenhSX_edit_plan").value = data[6];
  document.getElementById("maSP_edit_plan").value = data[7];
  document.getElementById("tenSP_edit_plan").value = data[8];
  document.getElementById("dvt_edit_plan").value = data[9];
  document.getElementById("soLo_edit_plan").value = data[10];
  document.getElementById("slKeHoach_edit_plan").value = data[11];
  $("#modal_edit_plan").modal("show");
}
function submit_edit_plan(formObject) {
  var userName = document.getElementById("userName").innerHTML;
  var values = [];
  var id_combine_new = (formObject.elements["maSP_edit_plan"].value + formObject.elements["soLo_edit_plan"].value).replace(/[\-/.]/g, "");
  var id_combine_old = formObject.elements["id_combine_old"].value;
  var result = [formObject.elements["ID_edit_plan"].value, getFormattedDate(), userName, id_combine_new, formObject.elements["ngayKH_edit_plan"].value, formObject.elements["ngaySX_edit_plan"].value, formObject.elements["lenhSX_edit_plan"].value, formObject.elements["maSP_edit_plan"].value, formObject.elements["tenSP_edit_plan"].value, formObject.elements["dvt_edit_plan"].value, formObject.elements["soLo_edit_plan"].value, formObject.elements["slKeHoach_edit_plan"].value];
  values.push(result);
  console.log(values);

  // google.script.run
  //   .withSuccessHandler(() => {
  //     showAlert("Đã sửa hoạch !", "success");
  //     $("#modal_edit_plan").modal("toggle");
  //     document.getElementById("edit_plan").reset();
  //     plan_getData_reset();

  //   })
  //   .edit_plan(values, id_combine_old);
}
},{}]},{},["kwEv"], null)