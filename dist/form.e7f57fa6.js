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
})({"FIae":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var arr_id = ["0"];
var arr_record_combo = [];
function show_modal_add_new_doc() {
  reset_form();
  $(".box_khach_hang").empty();
  $("#phan_loai").empty();
  $("#packing_form_import").modal("show");
  $("#title").text("THÊM TÀI LIỆU MỚI");
  $("#btn_upload_file").show();
  $("#btn_up_cus").show();
  $("#btn_them_note").show();
  $("#xoa_all_note").show();
  $("#btn_edit_tai_lieu").hide();
}
function add_product_from_list_order() {
  var element = arr_id[arr_id.length - 1];
  var number = +element + 1;
  arr_id.push("".concat(number));
  input_form(number);
}
function input_form(index) {
  $(".box_khach_hang").append("\n   <div class=\"row\" id=\"cost_box_".concat(index, "\">\n      <div class=\"col-12\">\n          <div class=\"row\">\n              <div class=\"form-group col-8 col-sm-8 col-xl-8\">\n              <input type=\"text\" id=\"id_note_").concat(index, "\" class=\"d-none\" >\n                  <div class=\"controls\">\n                      <input type=\"text\" id=\"ghi_chu_").concat(index, "\" class=\"form-control text-primary fw-bold\"\n                          autocomplete=\"off\" required >\n                  </div>\n              </div>\n              <div class=\"form-group col-2 col-sm-2  col-xl-3 \">\n                  <div class=\"controls\">\n                       <input type=\"number\" id=\"trang_").concat(index, "\" class=\"form-control text-primary fw-bold\"\n                          autocomplete=\"off\" required min=\"1\" value=\"1\">\n                  </div>\n              </div>\n              <div class=\"form-group col-2 col-sm-2  col-xl-1\">\n                  <button type = \"button\" class=\"btn-danger  btn-sm hover-danger \" onclick =\"remove_box('").concat(index, "')\">\n                        <i class=\"fad fa-trash-alt fs-14 \"></i> \n                  </button>\n              </div>\n          </hr>\n          </div>\n      </div>\n  </div>"));
}

// ADD NEW
function check_add_new_doc_or_note() {
  var id = $("#id_tai_lieu").val();
  if (id) {
    add_new_note(id);
  } else {
    add_new_doc();
  }
}

// add doc
function add_new_doc() {
  return _add_new_doc.apply(this, arguments);
} // add note
function _add_new_doc() {
  _add_new_doc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var values_child, values_parent, uid, date, link_file, them_ghi_chu, table;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          values_child = [];
          values_parent = [];
          uid = new Date().getTime().toString(36);
          date = moment($("#date").val()).format("DD/MM/YYYY");
          link_file = "https://drive.google.com/file/d/".concat($("#id_file").val(), "/view?usp=drivesdk");
          them_ghi_chu = "";
          arr_id.shift();
          arr_id.map(function (e, idx) {
            them_ghi_chu = them_ghi_chu + $("#ghi_chu_".concat(e)).val();
            values_child.push([uid + idx, uid, $("#ghi_chu_".concat(e)).val(), $("#trang_".concat(e)).val()]);
            $("#cost_box_".concat(e)).remove();
          });
          values_parent = [[uid, "", $("#muc_chua_tai_lieu").val(), user_name, $("#ma_doc").val(), $("#name_doc").val(), date, link_file, $("#status").val(), $("#phan_loai").val(), $("#nhan_vien").val().toString()]];
          $("#packing_form_import").modal("hide");
          _context.next = 12;
          return push_data(values_parent, "update_new_doc_parent");
        case 12:
          // ==============
          table = $("#table_doc").DataTable();
          effec_action_table_add_new(table, values_parent[0]);
          showAlert("Đã cập nhật thành công !", "success");
          arr_id = ["0"];
          reset_form();
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _add_new_doc.apply(this, arguments);
}
function add_new_note(_x) {
  return _add_new_note.apply(this, arguments);
} // RESET
function _add_new_note() {
  _add_new_note = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
    var values_child, uid;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          values_child = [];
          uid = new Date().getTime().toString(36);
          arr_id.shift();
          arr_id.map(function (e, idx) {
            values_child.push([uid, id, $("#ghi_chu_".concat(e)).val(), $("#trang_".concat(e)).val(), $("#id_file").val()]);
            $("#cost_box_".concat(e)).remove();
          });
          data_chill.push(values_child[0]);
          $("#packing_form_import").modal("hide");
          _context2.next = 8;
          return push_data(values_child, "update_new_doc_child");
        case 8:
          showAlert("Đã cập nhật thành công !", "success");
          arr_id = ["0"];
          reset_form();
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _add_new_note.apply(this, arguments);
}
function reset_form() {
  $("#packing_excell").val("");
  $("#nhan_vien").val("").trigger("change");
  remove_all();
  document.getElementById("form_packing_import").reset();
}
function remove_box(id) {
  $("#cost_box_".concat(id)).remove(); //This removes the a tag
  var index = arr_id.indexOf(id);
  index > -1 ? arr_id.splice(index, 1) : "";
}
function remove_all() {
  arr_id.map(function (e) {
    $("#cost_box_".concat(e)).remove();
  });
  arr_id = ["0"];
  $("#packing_excell").val("");
  $("#excell_json").val("");
}

//  fill form thêm note
function fill_form(data) {
  var isoDate = moment(data[6], "DD/MM/YYYY").format("YYYY-MM-DD");
  $(".box_khach_hang").empty();
  $("#btn_them_note").show();
  $("#xoa_all_note").show();
  $("#btn_upload_file").hide();
  $("#btn_edit_tai_lieu").hide();
  $("#btn_up_cus").show();
  $("#title").text("THÊM NOTE CHO TÀI LIỆU"), $("#btn_upload_file").hide(), $("#id_tai_lieu").val(data[0]), $("#ma_doc").val(data[4]);
  $("#name_doc").val(data[5]);
  $("#id_file").val(data[7]);
  $("#muc_chua_tai_lieu").val(data[2]);
  $("#date").val(isoDate);
  $("#status").val(data[8]);
  $("#phan_loai").val(data[9]);
  $("#nhan_vien").val(data[10].split(",")).trigger("change");
}

//  fill form edit note / tài liệu
function fill_form_edit(data) {
  var isoDate = moment(data[6], "DD/MM/YYYY").format("YYYY-MM-DD");
  $(".box_khach_hang").empty();
  $("#btn_them_note").hide();
  $("#xoa_all_note").hide();
  $("#btn_up_cus").hide();
  $("#btn_edit_tai_lieu").show();
  $("#title").text("SỬA TÀI LIỆU / NOTE "), $("#btn_upload_file").hide(), $("#id_tai_lieu").val(data[0]), $("#muc_chua_tai_lieu").val(data[2]).trigger("change");
  $("#ma_doc").val(data[4]);
  $("#name_doc").val(data[5]);
  $("#id_file").val(data[7]);
  $("#date").val(isoDate);
  $("#status").val(data[8]);
  $("#phan_loai").val(data[9]);
  $("#nhan_vien").val(data[10].split(",")).trigger("change");
  data_chill.map(function (e, index) {
    if (data[0] == e[1]) {
      input_form_edit(index);
      $("#id_note_".concat(index)).val(e[0]);
      $("#ghi_chu_".concat(index)).val(e[2]);
      $("#trang_".concat(index)).val(e[3]);
    }
  });
}
function input_form_edit(index) {
  $(".box_khach_hang").append("\n   <div class=\"row\" id=\"cost_box_".concat(index, "\">\n      <div class=\"col-12\">\n          <div class=\"row\">\n              <div class=\"form-group col-6 col-sm-12 col-xl-8\">\n              <input type=\"text\" id=\"id_note_").concat(index, "\" class=\"d-none\" >\n                  <div class=\"controls\">\n                      <input type=\"text\" id=\"ghi_chu_").concat(index, "\" class=\"form-control text-primary fw-bold\"\n                          autocomplete=\"off\" required >\n                  </div>\n              </div>\n              <div class=\"form-group col-2 col-sm-12  col-xl-2 \">\n                  <div class=\"controls\">\n                       <input type=\"number\" id=\"trang_").concat(index, "\" class=\"form-control text-primary fw-bold\"\n                          autocomplete=\"off\" required min=\"1\" value=\"1\">\n                  </div>\n              </div>\n              <div class=\"form-group col-4 col-sm-12  col-xl-2\">\n                  <button type = \"button\" class=\"btn-success  btn-sm  me-10\" onclick =\"edit_note_tai_lieu('").concat(index, "')\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"C\u1EADp nh\u1EADt l\u1EA1i ghi ch\xFA n\xE0y\">\n                        <i class=\"fas fa-paper-plane fs-14 \"></i>\n                  </button>\n                  <button type = \"button\" class=\"btn-danger  btn-sm  \" onclick =\"delete_data_doc_childrent('").concat(index, "')\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"X\xF3a ghi ch\xFA n\xE0y\">\n                        <i class=\"fad fa-trash-alt fs-14 \"></i> \n                  </button>\n              </div>\n          </hr>\n          </div>\n      </div>\n  </div>"));
}

// Sửa tài liệu
function edit_tai_lieu() {
  return _edit_tai_lieu.apply(this, arguments);
}
function _edit_tai_lieu() {
  _edit_tai_lieu = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var date, id, check, table;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          date = moment($("#date").val()).format("DD/MM/YYYY");
          id = $("#id_tai_lieu").val();
          values_parent = [[$("#id_tai_lieu").val(), "", $("#muc_chua_tai_lieu").val(), user_name, $("#ma_doc").val(), $("#name_doc").val(), date, $("#id_file").val(), $("#status").val(), $("#phan_loai").val(), $("#nhan_vien").val().toString()]];
          check = check_id_add_array(id, data_work);
          data_work[check] = values_parent[0];
          $("#packing_form_import").modal("hide");
          _context3.next = 8;
          return push_data(values_parent, "edit_tai_lieu");
        case 8:
          // ==============
          table = $("#table_doc").DataTable();
          effec_action_table_edit(table, values_parent[0], vitri_dong_sua);
          showAlert("Đã cập nhật lại tài liệu thành công !", "success");
          reset_form();
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _edit_tai_lieu.apply(this, arguments);
}
function effec_action_table_edit(table, values, idx) {
  showAlert("Đã sửa thành công !", "warning");
  table.row(idx).data(values).draw();
  // Highlight the updated row

  var rowNode = table.row(idx).node();
  // console.log(rowNode)
  $(rowNode).toggleClass("highlight-row");

  // Remove the highlight class after 5 seconds
  setTimeout(function () {
    $(rowNode).toggleClass("highlight-row");
  }, 5000);
}

// Sữa note
function edit_note_tai_lieu(_x2) {
  return _edit_note_tai_lieu.apply(this, arguments);
} // Xóa note
function _edit_note_tai_lieu() {
  _edit_note_tai_lieu = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(index) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          value_childrent = [[$("#id_note_".concat(index)).val(), $("#id_tai_lieu").val(), $("#ghi_chu_".concat(index)).val(), $("#trang_".concat(index)).val(), $("#id_file").val()]];
          $("#packing_form_import").modal("hide");
          data_chill[index] = value_childrent[0];
          _context4.next = 5;
          return push_data(value_childrent, "edit_note_tai_lieu");
        case 5:
          showAlert("Đã cập nhật lại tài liệu thành công !", "success");
          reset_form();
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _edit_note_tai_lieu.apply(this, arguments);
}
function delete_data_doc_childrent(_x3) {
  return _delete_data_doc_childrent.apply(this, arguments);
} //  SCROLL
function _delete_data_doc_childrent() {
  _delete_data_doc_childrent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(index) {
    var id;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = $("#id_note_".concat(index)).val();
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
            deleta_data(id, "delete_data_doc_childrent");
            $("#cost_box_".concat(index)).remove();
          });
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _delete_data_doc_childrent.apply(this, arguments);
}
$(".input_lis_box").slimscroll({
  height: $(window).height() - 360 + "px",
  color: "blue"
});
function effec_action_table_add_new(table, values) {
  table.row.add(values).draw(false);
  table.order(2, ["asc"]).draw();
  table.order(1, ["asc"]).draw();
  var index = table.rows().count() - 1;
  table.row(index).node().classList.add("highlight-row");
  // Thêm lớp CSS để định dạng dòng vừa mới
  setTimeout(function () {
    table.row(index).node().classList.remove("highlight-row");
    // Xóa lớp CSS để xóa định dạng dòng vừa mới
  }, 5000);
  showAlert("Đã cập nhật thành công !", "success");
}
function check_muc_chua_tai_lieu(data) {
  var data_muc_chua_tai_lieu = [];
  data.map(function (item) {
    data_muc_chua_tai_lieu.push({
      id: item[0],
      text: item[0]
    });
    $("#fill_muc_tai_lieu").append("<option>".concat(item[0], "</option>"));
  });
  $("#muc_chua_tai_lieu").select2({
    dropdownParent: $("#div_muc_chua_tai_lieu"),
    data: data_muc_chua_tai_lieu,
    tags: true
  }).on("select2:select", function (e) {
    if (e.params.data.isNew) {
      var newOption = new Option(e.params.data.text, e.params.data.id, false, false);
      $("#muc_chua_tai_lieu").append(newOption).trigger("change");
    }
  });
}
function check_id_add_array(valueToFind, arr) {
  var foundIndex = null;
  // Duyệt qua các phần tử trong mảng arr
  for (var i = 0; i < arr.length; i++) {
    // Nếu phần tử có giá trị bằng valueToFind, lưu lại chỉ số của phần tử và thoát vòng lặp
    if (arr[i][0] === valueToFind) {
      foundIndex = i;
      break;
    }
    // Nếu đã tìm thấy phần tử cần tìm, thoát khỏi vòng lặp ngoài cùng
    if (foundIndex !== null) {
      break;
    }
  }
  return foundIndex;
}
$(".fill-input-table").on("change", function () {
  var key_1 = $("#fill_muc_tai_lieu").val().toLowerCase();
  var result = data_work.filter(function (e) {
    var condition_1 = key_1 == "" || e[2].toLowerCase().includes(key_1);
    return condition_1;
  });
  $("#table_doc").DataTable().clear().rows.add(result).draw();
  $("#table_doc").DataTable().search("").draw();
});
function get_data_human(data) {
  var human = [];
  data.map(function (e) {
    human.push({
      id: e[9],
      text: e[9]
    });
  });
  $("#nguoi_duyet").select2({
    dropdownParent: $("#div_nguoi_duyet"),
    placeholder: "Chọn email người duyệt",
    closeOnSelect: false,
    allowClear: true,
    data: human,
    width: "resolve"
  });
  $("#nguoi_xem_xet").select2({
    dropdownParent: $("#div_nguoi_xem_xet"),
    placeholder: "Chọn email người xem xét",
    closeOnSelect: false,
    allowClear: true,
    data: human,
    width: "resolve"
  });
}
function create_file_doc() {
  return _create_file_doc.apply(this, arguments);
}
function _create_file_doc() {
  _create_file_doc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var namefile;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          namefile = $("#ten_tai_lieu").val();
          if (namefile) {
            Swal.fire({
              title: " Bạn có chắc là muốn tạo một file DOC?",
              text: "".concat(namefile),
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Tạo mới & mở"
            }).then( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(result) {
                var timerInterval, data, url;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!result.isConfirmed) {
                        _context6.next = 7;
                        break;
                      }
                      Swal.fire({
                        title: "Tài liệu đang được tạo !",
                        html: "Hãy chờ  <b> 5s </b> tài liệu sẽ tự mở",
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: function didOpen() {
                          Swal.showLoading();
                          var b = Swal.getHtmlContainer().querySelector("b");
                          timerInterval = setInterval(function () {
                            b.textContent = Swal.getTimerLeft();
                          }, 100);
                        },
                        willClose: function willClose() {
                          clearInterval(timerInterval);
                        }
                      }).then(function (result) {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                          console.log("I was closed by the timer");
                        }
                      });
                      _context6.next = 4;
                      return push_data(namefile, "createShareAndMoveGoogleDoc");
                    case 4:
                      data = _context6.sent;
                      url = "https://docs.google.com/document/d/".concat(data.data, "/edit");
                      window.open(url, "_blank");
                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x4) {
                return _ref.apply(this, arguments);
              };
            }());
          } else {
            Swal.fire('Chú ý!', 'Hãy đặt tên cho tài liệu này nhé !', 'warning');
          }
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _create_file_doc.apply(this, arguments);
}
},{}]},{},["FIae"], null)