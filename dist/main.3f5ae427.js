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
})({"REef":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var data_treeview = [{
  id: "Lãnh Đạo",
  parent: "#",
  text: '<p class=" text-info text-bold"> 1. LÃNH ĐẠO</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Nhân Sự",
  parent: "#",
  text: '<p class=" text-info text-bold"> 2. NHÂN SỰ</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Kế Toán",
  parent: "#",
  text: '<p class=" text-info text-bold"> 3. KẾ TOÁN</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Thu Mua",
  parent: "#",
  text: '<p class=" text-info text-bold">4. THU MUA</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "R&D",
  parent: "#",
  text: '<p class=" text-info text-bold"> 5. R&D</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Sản Xuất",
  parent: "#",
  text: '<p class=" text-info text-bold"> 6. SẢN XUẤT</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Chất Lượng",
  parent: "#",
  text: '<p class=" text-info text-bold"> 7. CHẤT LƯỢNG</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Kho",
  parent: "#",
  text: '<p class=" text-info text-bold"> 8. KHO</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Marketing",
  parent: "#",
  text: '<p class=" text-info text-bold"> 9. MARKETING</p>',
  state: {
    opened: true,
    disabled: true
  }
}, {
  id: "Kinh Doanh",
  parent: "#",
  text: '<p class=" text-info text-bold"> 10. KINH DOANH</p>',
  state: {
    opened: true,
    disabled: true
  }
}];
var data_work;
var data_after_fill = [];
var newWindow;
var vitri_dong_sua;
var role = JSON.parse(localStorage.getItem("role"));
var rule = role.split(",");
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var data, regex, matches, jsonObjects;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        // id_staff != "admin" ? $("#li_nhan_su").empty() : "";
        $(".fill-buttons").toggle();
        functionInit();
        _context.next = 4;
        return get_data("get_data_initial_doc");
      case 4:
        data = _context.sent;
        regex = /\{[\s\S]*?\}/g;
        matches = data.match(regex);
        jsonObjects = matches.map(function (match) {
          return JSON.parse(match);
        });
        get_data_work(jsonObjects[0].values);
        get_data_human(jsonObjects[1].values);
        draw_charst_doc(jsonObjects[2].values);
      case 11:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
function get_data_work(data, data_childrent) {
  document.getElementById("spinner").style.display = "block";
  var a = 0,
    b = 0,
    c = 0,
    d = 0,
    s = 0,
    f = 0,
    g = 0,
    h = 0,
    j = 0,
    k = 0,
    l = 0,
    m = 0;
  data_work = data.filter(function (item) {
    a = a + 1;
    item[9] == "1" ? (b = b + 1, data_after_fill.push(item)) : "";
    item[9] == "2" ? (c = c + 1, data_after_fill.push(item)) : "";
    item[9] == "3" ? (d = d + 1, data_after_fill.push(item)) : "";
    item[9] == "4" ? s = s + 1 : "";
    item[9] == "5" ? f = f + 1 : "";
    item[11] == "Đang Soạn" ? g = g + 1 : "";
    item[11] == "Chờ Xem Xét" ? h = h + 1 : "";
    item[11] == "Chờ Duyệt" ? j = j + 1 : "";
    item[11] == "Chờ Ban Hành" ? k = k + 1 : "";
    item[11] == "Hiệu Lực" ? l = l + 1 : "";
    item[11] == "Hết Hiệu Lực" ? m = m + 1 : "";
    var eKey;
    var style_text;
    item[4] == "" ? (eKey = item[12], style_text = "<p class=\"fs-10 text-bold\" style=\" display: block;width: 350px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\" >\uD83D\uDD38 ".concat(item[5], "</p>")) : (eKey = item[4], style_text = "\n                  <p class=\"no-margin fs-12 text-primary\" style=\"display: block;width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\uD83D\uDD39".concat(item[5], "</p>\n                "));
    data_treeview.push({
      id: item[3],
      parent: eKey,
      text: style_text
    });
  });
  $("#tong_tl").text(a);
  $("#tl_cap_1").text(b);
  $("#tl_cap_2").text(c);
  $("#tl_cap_3").text(d);
  $("#tl_cap_4").text(s);
  $("#tl_ngoai").text(f);
  $("#dang_soan").text(g);
  $("#cho_xem_xet").text(h);
  $("#cho_duyet").text(j);
  $("#cho_ban_hanh").text(k);
  $("#hieu_luc").text(l);
  $("#het_hieu_luc").text(m);
  install_init(data_after_fill);
  tree_doc(data_treeview);
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
$(window).on("resize", function () {
  var table = $("#table_doc").DataTable();
  table.columns.adjust();
});
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
      $(".dataTables_scrollBody").slimscroll({
        height: window.innerWidth < 767 ? $(window).height() - 180 + "px" : $(window).height() - 360 + "px",
        color: "red",
        axis: "both"
      });
      var table = $("#table_doc").DataTable();
      table.columns.adjust();
    },
    responsive: true,
    autoWidth: true,
    destroy: true,
    deferRender: true,
    scrollY: false,
    scrollX: false,
    bLengthChange: false,
    paging: true,
    info: false,
    // Hiển thị thông tin số bản ghi
    order: [2, "asc"],
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
      title: "ID"
    },
    //0
    {
      title: "No.",
      className: "text-center"
    },
    //0
    {
      title: "người tạo"
    },
    //0
    {
      title: "MÃ TÀI LIỆU",
      className: "text-center"
    },
    //4
    {
      title: "ID cha"
    },
    //4
    {
      title: "TÊN TÀI LIỆU",
      render: function render(data, type, row, meta) {
        return "\n              <div style=\"display:grid\" >\n              <p class=\"view_doc_main mb-0 hover-danger fw-bold \" style=\" display: block;width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\"> ".concat(data, "</p>\n              <div>\n              <span class=\"badge badge-info-light fw-bold\" style=\"width:fit-content\">").concat(row[3], "</span>\n              <span class=\"badge badge-primary-light \" style=\"width:fit-content\">").concat(row[7], "</span>\n              </div>\n            \n\n              </div>");
      }
    },
    //5
    {
      title: "PHIÊN BẢN",
      className: "text-center"
    },
    //6
    {
      title: "NGÀY LẬP",
      className: "text-center"
    },
    //6
    {
      title: "NGÀY BAN HÀNH",
      className: "text-center"
    },
    //6
    {
      title: "CẤP TÀI LIỆU",
      className: "text-center"
    },
    //7
    {
      title: "SỐ TRANG",
      className: "text-center"
    },
    //7
    {
      title: "TRẠNG THÁI",
      className: "text-center",
      render: function render(data, type, row, meta) {
        if (data == "Hiệu Lực") {
          var color_state = " badge badge-success";
        } else if (data == "Hết Hiệu Lực") {
          var color_state = "badge badge-danger";
        } else {
          var color_state = "badge badge-warning";
        }
        return "<span class=\"".concat(color_state, " mt-5\" style=\"height:fit-content;\">").concat(data, "</span>");
      }
    },
    //8
    {
      title: "PHÒNG BAN",
      className: "text-center"
    },
    //9
    {
      title: "ÁP DỤNG",
      className: "text-center"
    },
    //10
    {
      title: "PHÂN PHỐI"
    },
    //10
    {
      title: "GHI CHÚ"
    },
    //10
    {
      title: "ID FILE"
    },
    //10
    {
      title: "LOẠI FILE"
    },
    //10
    {
      title: "NGƯỜI XEM"
    },
    //10
    {
      title: "NGƯỜI XÉT"
    },
    //10
    {
      title: "NGƯỜI DUYỆT"
    },
    //10
    {
      title: "LỊCH SỬ"
    },
    //10

    {
      data: null,
      title: "HÀNH ĐỘNG",
      className: "uniqueClassName",
      orderable: false,
      render: function render(data, type, row) {
        var dis_edit = rule.includes("S\u1EEDa ".concat(row[9])) || id_staff == "admin" ? "" : "d-none";
        var dis_add = rule.includes("Th\xEAm note ".concat(row[9])) || id_staff == "admin" ? "" : "d-none";
        var dis_delete = rule.includes("X\xF3a ".concat(row[9])) || id_staff == "admin" ? "" : "d-none";
        return "<div class=\"dropdown\" style=\"display:flex;justify-content: center;align-items: center\">\n         <button  class=\" ".concat(dis_edit, " btn  px-5 editor-edit-note me-10\" ><i class=\"fad fa-edit text-primary fs-14\"></i></button>\n         <button  class=\"").concat(dis_add, " btn  px-5 editor-add-note me-10\"  ><i class=\"fas fa-plus-square fs-14 text-success\"></i></button>\n         <button  class=\"").concat(dis_add, " btn  px-5 email-sent me-10\"   tit><i class=\"fas fa-envelope text-warning email-sent\" ></i></button>\n          <button  class=\" ").concat(dis_delete, " btn  px-5 editor-delete\"   ><i class=\"fad fa-trash-alt fs-14 text-danger\"></i></button>\n            </div>");
      }
    } //11
    ],

    columnDefs: [{
      targets: [0, 2, 3, 4, 7, 8, 12, 15, 16, 17, 18, 19, 20, 21],
      visible: false
    },
    // { responsivePriority: 1, targets: 5 },
    {
      responsivePriority: 0,
      targets: -1
    }],
    rowGroup: {
      dataSrc: function dataSrc(row) {
        var name = '<p class="fw-bold me-10 mb-0 text-info"><i class="fas fa-notes-medical me-10"></i>' + row[12] + "</p>";
        return name;
      }
    }
  });
  // CLICK view
  $("#table_doc").on("click", "tbody td .editor-view", function (e) {
    document.getElementById("spinner").style.display = "block";
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    var url = data[8];
    view_pdf(url, data[7], data[0]);
  });

  // Xem tài liệu
  $("#table_doc").on("click", "tbody td .view_doc_main", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    if (data[16]) {
      document.getElementById("file_doc_view").src = "";
      $("#doc_view").modal("show");
      $("#name_doc").text(data[5].toUpperCase());
      var link = "https://docs.google.com/viewer?srcid=".concat(data[16], "&pid=explorer&efh=false&a=v&chrome=false&embedded=true");
      document.getElementById("file_doc_view").src = link;
    } else {
      showAlert("Không có tập tin đính kèm !", "error");
    }
  });

  // CLICK DELETE
  $("#table_doc").on("click", "tbody td .editor-delete", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var table = table_doc.row(idx);
    var data = table.data();
    var id = data[0];
    swal({
      title: "Bạn Muốn Xóa Dữ Liệu?",
      text: "Xóa sẽ không thể phục hồi !",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Xóa",
      closeOnConfirm: false
    }, function () {
      swal("Đã Xóa!", "File xóa rồi ko khôi phục được", "success");
      table.remove().draw();
      deleta_data(id, "delete_data_doc_parrent");
    });
  });

  // CLICK add note
  $("#table_doc").on("click", "tbody td .editor-add-note", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    show_modal_add_new_doc();
    fill_form(data);
  });

  // CLICK edit note
  $("#table_doc").on("click", "tbody td .editor-edit-note", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    vitri_dong_sua = idx;
    show_modal_add_new_doc();
    fill_form_edit(data);
  });

  // email-sent
  $("#table_doc").on("click", "tbody td .email-sent", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var idx, timestamp, data, history;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            idx = table_doc.row($(this).parents("tr")).index();
            timestamp = moment().format("DD/MM/YYYY - hh:mm:ss ");
            data = table_doc.row(idx).data();
            history = "".concat(data[20], " \uD83D\uDD39 ").concat(timestamp, "  - ").concat(user_name, " \u0110\xE3 g\u1EEDi Email . ").concat(data[14]);
            swal({
              title: "<p class=\"text-info fs-14\"> ".concat(data[5], "</p>"),
              html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags',
              text: "".concat(user_name, "  - Email s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi v\u1EDBi tr\u1EA1ng th\xE1i ").concat(data[11], " "),
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Gửi Email",
              closeOnConfirm: false
            }, function () {
              data[19] = data[14];
              effec_action_table_edit(table_doc, data, idx);
              swal(user_name, "Mail đã được gửi & lịch sử gửi đã được ghi nhận!", "success");
              sent_email([data], "email_cong_van_den", history, unique_email);
            });
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
  table_doc.on("order.dt search.dt", function () {
    var i = 1;
    table_doc.cells(null, 1, {
      search: "applied",
      order: "applied"
    }).every(function (cell) {
      this.data(i++);
    });
  }).draw();
}
$("#filterbox").on("change", function () {
  var key_word = this.value.toLowerCase();
  var result = data_work.filter(function (e) {
    if (e[4].toLowerCase().includes(key_word) || e[5].toLowerCase().includes(key_word) || e[11].toLowerCase().includes(key_word)) {
      return e;
    }
  });
  var result_fill = result.filter(function (item, index, self) {
    return index === self.findIndex(function (t) {
      return t[4] === item[4];
    });
  });
  $("#table_doc").DataTable().clear().rows.add(result_fill).draw();
  $("#table_doc").DataTable().search("").draw();
});
function fill_doc(value, box) {
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    var result = data_work.filter(function (e) {
      return e[9] == value;
    });
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}
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
function tree_doc(data_treeview) {
  $("#jstree").jstree({
    getFilterTree: function getFilterTree() {
      return $("#jstree");
    },
    core: {
      themes: {
        icons: false
      },
      data: data_treeview
    },
    search: {
      show_only_matches: true,
      show_only_matches_children: true
    },
    plugins: ["dnd", "types", "contextmenu", "crrm", "search", "html_data"]
  });
}
$("#search_field").keyup(function () {
  var searchstring = $(this).val().trim();
  $("#jstree").jstree("search", searchstring);
});
$("#jstree").slimScroll({
  height: window.innerWidth < 767 ? $(window).height() - 180 + "px" : $(window).height() - 550 + "px",
  color: "green"
});
function show_hide_button() {
  $(".dt-buttons").toggle();
}
function show_hide_filter() {
  $(".fill-buttons").toggle();
}
},{}]},{},["REef"], null)