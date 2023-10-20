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
})({"FLth":[function(require,module,exports) {
var define;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var info_product = [];
function show_modal_comment_plan(_x) {
  return _show_modal_comment_plan.apply(this, arguments);
} // CREATE TABLE
function _show_modal_comment_plan() {
  _show_modal_comment_plan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          info_form_detail_schedule(data);
          schedule_detail_table(data[3]);
          $("#modal_schedule_comment").modal("show");
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _show_modal_comment_plan.apply(this, arguments);
}
function schedule_detail_table(_x2) {
  return _schedule_detail_table.apply(this, arguments);
}
function _schedule_detail_table() {
  _schedule_detail_table = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
    var data, regex, matches, jsonObjects;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return push_data([[id]], "schedule_detail");
        case 2:
          data = _context2.sent;
          regex = /\{[\s\S]*?\}/g;
          matches = data.data.match(regex);
          jsonObjects = matches.map(function (match) {
            return JSON.parse(match);
          });
          create_table_detail(jsonObjects[0].values);
          info_product = jsonObjects[1].values;
          if (info_product[0][0]) {
            document.getElementById("semi_1").style.display = "block";
            document.getElementById("name_semi_1").innerHTML = info_product[0][11];
            document.getElementById("kl_semi_main_1").innerHTML = info_product[0][12];
            document.getElementById("kl_semi_main_2").innerHTML = info_product[0][13];
            document.getElementById("kl_semi_main_3").innerHTML = info_product[0][14] + "  ± " + info_product[0][15] + "&nbsp (g)";
          } else {
            document.getElementById("semi_1").style.display = "none";
          }
          if (info_product[0][24]) {
            document.getElementById("semi_2").style.display = "block";
            document.getElementById("name_semi_2").innerHTML = info_product[0][24];
            document.getElementById("kl_semi_sub_1").innerHTML = info_product[0][25];
            document.getElementById("kl_semi_sub_2").innerHTML = info_product[0][26];
            document.getElementById("kl_semi_sub_3").innerHTML = info_product[0][27] + "  ± " + info_product[0][28] + "&nbsp (g)";
          } else {
            document.getElementById("semi_2").style.display = "none";
          }
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _schedule_detail_table.apply(this, arguments);
}
function create_table_detail(data_detail_schedule) {
  if ($.fn.dataTable.isDataTable("#schedule_detail_table") === true && data_detail_schedule === undefined) {
    $("#schedule_detail_table").DataTable().clear().draw();
  }
  if (data_detail_schedule) {
    var table_schedule_detail = $("#schedule_detail_table").DataTable({
      destroy: true,
      scrollY: window.innerWidth < 767 ? $(window).height() - 250 + "px" : "false",
      scrollX: false,
      paging: false,
      info: false,
      bFilter: false,
      bLengthChange: false,
      responsive: true,
      autoWidth: true,
      order: [[1, "desc"]],
      data: data_detail_schedule,
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
        title: "SL KẾ HOẠCH",
        className: "text-center"
      },
      //4
      {
        title: "LOẠI CÔNG ĐOẠN",
        className: "text-center"
      },
      //5
      {
        title: "CÔNG ĐOẠN",
        className: "text-center",
        render: function render(data, type, row, meta) {
          var schedule_detail = "";
          var num_per = (row[16] * 100).toFixed(1);
          var arrow_detail = row[16] * 1 > 1 ? "<p  class=\"m-0 p-0 text-warning fw-bold\"><i class=\"fas fa-arrow-up me-5\"></i>".concat(num_per, "% </p> ") : row[16] * 1 < 1 ? "<p  class=\"m-0 p-0 text-danger fw-bold\"><i class=\"fas fa-arrow-down me-5 \"></i>".concat(num_per, "% </p> ") : row[16] * 1 == 1 ? "<p  class=\"m-0 p-0 text-success fw-bold\"><i class=\"far fa-check me-5\"></i>".concat(num_per, "% </p> ") : "";
          var check_class = "badge bg-csx";
          row[8] == "Hoàn thành" ? check_class = "  badge bg-ht" : "";
          row[8] == "Dang dỡ" ? check_class = "  badge bg-dd" : "";
          row[8] == "Đang sản xuất" ? check_class = "  badge bg-dsx" : "";
          row[8] == "" ? (check_class = "  badge bg-csx", row[8] = "Chờ sản xuất") : "";
          schedule_detail = "\n                <div style=\"display:flex;place-content: space-between;place-items:center\">\n                  <span class=\"".concat(check_class, " fs-8\" style=\"height:fit-content;width: 100px\">").concat(row[8], " </span>\n                  <div style=\"display:grid\">\n                    ").concat(arrow_detail, "\n                    </div>\n                    <div class=\"dropdown\" style=\"display:flex;justify-content: center;align-items: center\">\n                      <button  class=\"btn px-5 edit-schedule-user me-10 \" ><i class=\"fad fa-edit text-primary fs-16\" ></i></button>\n                    </div>\n                </div>\n              ");
          var res = "\n            <div style=\"display:flex;place-content: space-between;place-items:center\" >\n             <p class=\"m-0 p-0 fw-bold text-info fs-14\"> ".concat(data, "</p>\n             <span class=\"badge badge-success-light fw-bold\">").concat(row[12], "</span>\n            </div>\n            <div style=\"text-align: left\";>\n             <p class=\"m-0 p-0 \"><strong>Ki\u1EC3m tra b\u1EDFi: </strong> ").concat(row[13], "</p>\n             <p class=\"m-0 p-0 \"><strong>S\u1EA3n xu\u1EA5t b\u1EDFi: </strong> ").concat(row[10], "</p>\n             <small><strong>N\u0103ng su\u1EA5t / ph\xFAt</strong> : ").concat(row[9], " ").concat(row[7], " / ").concat(row[11], " ph\xFAt </small>\n            </div>\n              \n             ").concat(schedule_detail, "\n            ");
          return res;
        }
      },
      //6
      {
        title: "ĐVT",
        className: "text-center"
      },
      //7
      {
        title: "TRẠNG THÁI ",
        className: "text-center"
      },
      //8
      {
        title: "NĂNG SUẤT",
        className: "text-center"
      },
      //9
      {
        title: "CÔNG NHÂN"
      },
      //10
      {
        title: "THỜI GIAN",
        className: "text-center"
      },
      //11
      {
        title: "CHẤT LƯỢNG",
        className: "text-center"
      },
      //12
      {
        title: "QC CHECK",
        className: "text-center"
      },
      //13
      {
        title: "GHI CHÚ",
        className: "text-center"
      },
      //14
      {
        title: "IMAGE",
        className: "text-center"
      },
      //15
      {
        title: "%  HOÀN THÀNH",
        className: "text-center"
      },
      //16
      {
        title: "HISTORY",
        className: "text-center",
        render: function render(data, type, row, meta) {
          var val = data ? data : "";
          return val;
        }
      } //17
      ],

      columnDefs: [{
        targets: [0, 1, 2, 3, 4, 5, 7, 9, 8, 11, 10, 12, 13, 14, 15, 16, 17],
        visible: false
      }, {
        responsivePriority: 0,
        targets: 6
      }],
      fnInitComplete: function fnInitComplete() {}
    });
  }
  // CLICK update
  $("#schedule_detail_table").on("click", "tbody td .edit-schedule-user", function () {
    var row = $(this).closest("tr");
    var data_schedule_user = $("#schedule_detail_table").DataTable().row($(this).parents("tr")).data();
    console.log(data_schedule_user);
    if (pos_user == "Admin" || pos_user == "Manager" || pos_user == "QC") {
      console.log(data_schedule_user[13], user_name);
      if (data_schedule_user[13] == user_name) {
        document.getElementById("formSchedule").reset();
        $("#tenCongDoan").val("").trigger("change");
        $("#congNhan").val("").trigger("change");
        $("#modal_add_schedule").modal("show");
        schedule_edit(data_schedule_user);
      } else {
        console.log("123");
        new swal({
          title: "Công việc này của " + data_schedule_user[13] + " kiểm soát !",
          text: "Bạn không có quyền cập nhật",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "OK",
          closeOnConfirm: false
        });
      }
    } else {
      new swal({
        title: "PHÂN QUYỀN",
        text: "Bạn không có quyền cập nhật",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "OK",
        closeOnConfirm: false
      });
    }
  });
}

// Tính năng suất
function calculator_nangSuat() {
  var nangSuat_new = document.getElementById("nangSuat_new").value * 1;
  var nangSuat_old = document.getElementById("nangSuat_old").value * 1;
  var res_nangSuat = nangSuat_new + nangSuat_old;
  document.getElementById("nangSuat").value = res_nangSuat;
}

// Tính thời gian
function calculator_time_product() {
  var time_new = document.getElementById("time_new").value * 1;
  var time_old = document.getElementById("time_old").value * 1;
  var res_time = time_new + time_old;
  document.getElementById("time_product").value = res_time;
}

//UPLOAD picture error TO GOOGLEDRIVER
function schedule_upload_picture_process_error(e) {
  document.getElementById("submit-form-process").style.display = "none";
  var imageFile = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var img = document.createElement("img");
    img.onload = function (event) {
      var elem = document.createElement("canvas");
      var width = Math.min(800, img.width);
      var scaleFactor = width / img.width;
      elem.width = width;
      elem.height = img.height * scaleFactor;
      var ctx = elem.getContext("2d");
      ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
      var dataurl = elem.toDataURL(imageFile.type);
      document.getElementById("picture_Error").src = dataurl;
      var fileData = dataurl.substr(dataurl.indexOf(",") + 1);
      var mimeTypeStart = dataurl.indexOf("data:") + 5;
      var mimeTypeEnd = dataurl.indexOf(";");
      var mimeType = dataurl.substr(mimeTypeStart, mimeTypeEnd - mimeTypeStart);
      var fileName = imageFile.name;
      google.script.run.withFailureHandler(function () {
        showAlert("Cập nhật file lên googleDriver thất bại !", "error");
        document.getElementById("submit-form-process").style.display = "inline-block";
      }).withSuccessHandler(function (url) {
        showAlert("Cập nhật file lên googleDriver thành công !", "success");
        document.getElementById("input_picError").value = url;
        document.getElementById("submit-form-process").style.display = "inline-block";
      }).schedule_upload_picture_process_error(fileData, mimeType, fileName);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(imageFile);
}
function info_form_detail_schedule(data) {
  document.getElementById("comment_name_product").innerHTML = data[8];
  document.getElementById("comment_lot_product").innerHTML = data[5] + "&nbsp-&nbsp" + data[10] + "&nbsp-&nbsp" + data[11] + "&nbsp" + data[9];
  document.getElementById("comment_date_product").innerHTML = data[4];
  document.getElementById("comment_staff_plan").innerHTML = "Mỹ Tiên";
  data[13] ? document.getElementById("comment_avatar_product").src = "https://drive.google.com/uc?export=download&id=" + data[13] : "https://bst.icons8.com/wp-content/uploads/2021/11/lunacy_free_graphic_design_software.webp";
}

// Mở form cập nhật tiến độ từ popup chi tiết tiết độ
function open_form_update_schedule() {
  $("#modal_add_schedule").modal("show");
  document.getElementById("nameModal_schedule_title").innerHTML = "Thêm Mới Công Đoạn";
  document.getElementById("nangSuat_text").style.display = "none";
  document.getElementById("time_text").style.display = "none";
  document.getElementById("formSchedule").reset();
  $("#tenCongDoan").val("").trigger("change");
  $("#congNhan").val("").trigger("change");
  schedule_add_new(data_row_current);
  $("#modal_add_schedule").modal("show");
  picture_prod_error_show();
}

// chọn công nhân
function select_list_workers(data) {
  var list_worker = [];
  data.map(function (item, index) {
    list_worker.push({
      id: item[4],
      text: item[4]
    });
  });
  $("#nguoi_nhan_nc").select2({
    dropdownParent: $("#div_nguoi_nhan_nc"),
    tags: true,
    data: list_worker
  });
  $("#nguoi_phat_hien").select2({
    dropdownParent: $("#div_nguoi_phat_hien"),
    tags: true,
    data: list_worker
  });
  $("#congNhan").select2({
    dropdownParent: $("#div_congNhan"),
    tags: true,
    data: list_worker
  });
}

// chọn công đoạn
function select_list_process(data) {
  var list_process = [];
  data.map(function (item, index) {
    list_process.push({
      id: item[3],
      text: item[3],
      loaiCongDoan: item[4]
    });
  });
  $("#tenCongDoan").select2({
    dropdownParent: $("#div_tenCongDoan"),
    tags: true,
    data: list_process
  }).on("select2:select", function (e) {
    console.log(e.params.data.loaiCongDoan);
    $("#loaiCongDoan").val(e.params.data.loaiCongDoan);
  });
}

// push data vào form updateschedule
function schedule_add_new(data) {
  $("#search").val(data[8] + "-" + data[5] + "-" + data[10]);
  document.getElementById("search_infor").innerHTML = data[8] + "-" + data[5] + "-" + data[10];
  $("#ngayKH").val(data[4]);
  $("#ngaySX").val(data[5]);
  $("#lenhSX").val(data[6]);
  $("#maSP").val(data[7]);
  $("#tenSP").val(data[8]);
  $("#dvt").val(data[9]);
  $("#slKeHoach").val(data[11].replace(/,/g, "."));
  $("#soLo").val(data[10]);
  data[13] ? $("#img_SP").val(data[13]) : $("#img_SP").val("1P8mJ8DCR8S7q6kNoeREb9Mxl3X7aOA00");
  calculator_nangSuat();
  calculator_time_product();
}
function picture_prod_error_show() {
  $("#NOK").is(":checked") ? $("#div_picture_prod_error_show").show() : $("#div_picture_prod_error_show").hide();
}

// submit tiến độ công đoạn LXBB , CR, DG
function submit_add_schedule(formObject) {
  var id_schedule = formObject.elements["ID_schedule"].value;
  if (id_schedule) {
    edit_schedule(formObject);
  } else {
    new_schedule(formObject);
  }
}

// submit add new
function new_schedule(_x3) {
  return _new_schedule.apply(this, arguments);
} // Tính năng suất
function _new_schedule() {
  _new_schedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(formObject) {
    var id_combine, timeStamp, values;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          document.getElementById("spin_icon").classList.remove("d-none");
          id_combine = (formObject.elements["maSP"].value + formObject.elements["soLo"].value).replace(/[\/.]/g, "");
          timeStamp = moment().format("MM/DD/YYYY hh:mm");
          values = [[new Date().getTime().toString(), timeStamp, user_name, id_combine, formObject.elements["slKeHoach"].value, $("#loaiCongDoan").val().toString(), $("#tenCongDoan").val().toString(), formObject.elements["loaiBaoBi"].value, formObject.elements["trangThai"].value, formObject.elements["nangSuat"].value, $("#congNhan").val().toString(), formObject.elements["time_product"].value, formObject.elements["result"].value, user_name, formObject.elements["ghiChu"].value, $("#id_file").val(), "", "".concat(timeStamp, " ").concat(user_name, " Ki\u1EC3m tra c\xF4ng \u0111o\u1EA1n"), formObject.elements["img_SP"].value, formObject.elements["tenSP"].value, formObject.elements["maSP"].value, formObject.elements["soLo"].value, formObject.elements["ngayKH"].value]];
          console.log(values);
          $("#modal_add_schedule").modal("toggle");
          document.getElementById("formSchedule").reset();
          $("#tenCongDoan").val("").trigger("change");
          $("#congNhan").val("").trigger("change");
          _context3.next = 11;
          return push_data(values, "add_new_process");
        case 11:
          document.getElementById("spin_icon").classList.add("d-none");
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _new_schedule.apply(this, arguments);
}
function calculator_nangSuat() {
  var nangSuat_new = document.getElementById("nangSuat_new").value * 1;
  var nangSuat_old = document.getElementById("nangSuat_old").value * 1;
  var res_nangSuat = nangSuat_new + nangSuat_old;
  document.getElementById("nangSuat").value = res_nangSuat;
}

// Tính thời gian
function calculator_time_product() {
  var time_new = document.getElementById("time_new").value * 1;
  var time_old = document.getElementById("time_old").value * 1;
  var res_time = time_new + time_old;
  document.getElementById("time_product").value = res_time;
}

// ADD DATA TO FORM EDIT
function schedule_edit(data) {
  document.getElementById("nameModal_schedule_title").innerHTML = "Cập Nhật Lại Công Đoạn";
  document.getElementById("search_infor").innerHTML = data_row_current[7] + "-" + data_row_current[8] + "-" + data_row_current[9] + "-" + data_row_current[10];
  $("#search").val(data[6] + "-" + data[8] + "-" + data[9]);
  document.getElementById("ID_schedule").value = data[0];
  document.getElementById("loaiCongDoan").value = data[5];
  document.getElementById("ngayKH").value = data_row_current[4];
  document.getElementById("maSP").value = data_row_current[7];
  document.getElementById("tenSP").value = data_row_current[8];
  document.getElementById("soLo").value = data_row_current[10];
  document.getElementById("slKeHoach").value = data[11];
  $("#tenCongDoan").val(data[6].split(",")).trigger("change");
  document.getElementById("loaiBaoBi").value = data[7];
  document.getElementById("trangThai").value = data[8];
  document.getElementById("nangSuat_old").value = data[9];
  document.getElementById("nangSuat_text").innerHTML = "(Đã sản xuất :" + data[4] + "/" + data[9] + ")";
  document.getElementById("time_text").innerHTML = "(Số phút sản xuất :" + data[11] + ")";
  document.getElementById("nangSuat_text").style.display = "block";
  document.getElementById("time_text").style.display = "block";
  $("#congNhan").val(data[10].split(",")).trigger("change");
  document.getElementById("time_old").value = data[11];
  document.getElementById(data[12]).checked = true;
  document.getElementById("ghiChu").value = data[14];
  document.getElementById("img_SP").value = data_row_current[13];
  calculator_nangSuat();
  calculator_time_product();
}

// submit add new
function edit_schedule(_x4) {
  return _edit_schedule.apply(this, arguments);
}
function _edit_schedule() {
  _edit_schedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(formObject) {
    var id_combine, timeStamp, values;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          document.getElementById("spin_icon").classList.remove("d-none");
          id_combine = (formObject.elements["maSP"].value + formObject.elements["soLo"].value).replace(/[\/.]/g, "");
          timeStamp = moment().format("MM/DD/YYYY hh:mm");
          values = [[formObject.elements["ID_schedule"].value, timeStamp, user_name, id_combine, formObject.elements["slKeHoach"].value, $("#loaiCongDoan").val().toString(), $("#tenCongDoan").val().toString(), formObject.elements["loaiBaoBi"].value, formObject.elements["trangThai"].value, formObject.elements["nangSuat"].value, $("#congNhan").val().toString(), formObject.elements["time_product"].value, formObject.elements["result"].value, user_name, formObject.elements["ghiChu"].value, $("#id_file").val(), "", "".concat(timeStamp, " ").concat(user_name, " c\u1EADp nh\u1EADt c\xF4ng \u0111o\u1EA1n"), formObject.elements["img_SP"].value, formObject.elements["tenSP"].value, formObject.elements["maSP"].value, formObject.elements["soLo"].value, formObject.elements["ngayKH"].value]];
          console.log(values);
          $("#modal_add_schedule").modal("toggle");
          document.getElementById("formSchedule").reset();
          $("#tenCongDoan").val("").trigger("change");
          $("#congNhan").val("").trigger("change");
          _context4.next = 11;
          return push_data(values, "edit_schedule_process");
        case 11:
          document.getElementById("spin_icon").classList.add("d-none");
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _edit_schedule.apply(this, arguments);
}
function open_form_update_schedule_fill() {
  return _open_form_update_schedule_fill.apply(this, arguments);
}
function _open_form_update_schedule_fill() {
  _open_form_update_schedule_fill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var isoDate;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          reset_form_info_product();
          $("#modal_update_product").modal("show");
          isoDate = moment(info_product[0][35], "DD/MM/YYYY").format("YYYY-MM-DD");
          $("#id").val(info_product[0][0]);
          $("#timestamp").val(info_product[0][1]);
          $("#nguoi_cap_nhat").val(info_product[0][2]);
          $("#thuong_hieu").val(info_product[0][3]);
          $("#cong_dung").val(info_product[0][4]);
          $("#nhom_hang").val(info_product[0][5]);
          $("#dung_tich").val(info_product[0][6]);
          $("#tinh_trang").val(info_product[0][7]);
          $("#ma_hang").val(info_product[0][8]);
          $("#ten_san_pham").val(info_product[0][9]);
          $("#don_vi_tinh").val(info_product[0][10]);
          $("#ten_btp_I").val(info_product[0][11]);
          $("#dung_sai_1").val(info_product[0][12]);
          $("#kl_bao_bi_1").val(info_product[0][13]);
          $("#kl_btp_1").val(info_product[0][14]);
          $("#tong_kl_1").val(info_product[0][15]);
          $("#ngoai_quan_1").val(info_product[0][16]);
          $("#mau_1").val(info_product[0][17]);
          $("#mui_1").val(info_product[0][18]);
          $("#ph_1").val(info_product[0][19]);
          $("#do_nhot_1").val(info_product[0][20]);
          $("#ty_trong_1").val(info_product[0][21]);
          $("#ten_sp_2").val(info_product[0][22]);
          $("#don_vi_2").val(info_product[0][23]);
          $("#ten_btp_2").val(info_product[0][24]);
          $("#dung_sai_2").val(info_product[0][25]);
          $("#kl_bao_bi_2").val(info_product[0][26]);
          $("#kl_btp_2").val(info_product[0][27]);
          $("#tong_kl_2").val(info_product[0][28]);
          $("#ngoai_quan_2").val(info_product[0][29]);
          $("#mau_2").val(info_product[0][30]);
          $("#mui_2").val(info_product[0][31]);
          $("#ph_2").val(info_product[0][32]);
          $("#do_nhot_2").val(info_product[0][33]);
          $("#ty_trong_2").val(info_product[0][34]);
          $("#ngay_cong_bo").val(isoDate);
          $("#so_cong_bo").val(info_product[0][36]);
          $("#ten_cong_bo").val(info_product[0][37]);
          $("#hinh_anh").val(info_product[0][38]);
          $("#ghi_chu").val(info_product[0][39]);
          $("#lich_su_thay_doi").val(info_product[0][40]);
          info_product[0][38] ? info_product[0][38].split("/").map(function (e) {
            console.log(e);
            e ? review_image(e) : "";
          }) : "";
        case 45:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _open_form_update_schedule_fill.apply(this, arguments);
}
function update_thong_tin_san_pham() {
  return _update_thong_tin_san_pham.apply(this, arguments);
}
function _update_thong_tin_san_pham() {
  _update_thong_tin_san_pham = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var data_update;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          document.getElementById("spin_icon_2").classList.remove("d-none");
          data_update = [$("#id").val(), $("#timestamp").val(), $("#nguoi_cap_nhat").val(), $("#thuong_hieu").val(), $("#cong_dung").val(), $("#nhom_hang").val(), $("#dung_tich").val(), $("#tinh_trang").val(), $("#ma_hang").val(), $("#ten_san_pham").val(), $("#don_vi_tinh").val(), $("#ten_btp_I").val(), $("#dung_sai_1").val(), $("#kl_bao_bi_1").val(), $("#kl_btp_1").val(), $("#tong_kl_1").val(), $("#ngoai_quan_1").val(), $("#mau_1").val(), $("#mui_1").val(), $("#ph_1").val(), $("#do_nhot_1").val(), $("#ty_trong_1").val(), $("#ten_sp_2").val(), $("#don_vi_2").val(), $("#ten_btp_2").val(), $("#dung_sai_2").val(), $("#kl_bao_bi_2").val(), $("#kl_btp_2").val(), $("#tong_kl_2").val(), $("#ngoai_quan_2").val(), $("#mau_2").val(), $("#mui_2").val(), $("#ph_2").val(), $("#do_nhot_2").val(), $("#ty_trong_2").val(), $("#ngay_cong_bo").val(), $("#so_cong_bo").val(), $("#ten_cong_bo").val(), $("#hinh_anh").val(), $("#ghi_chu").val(), $("#lich_su_thay_doi").val()];
          _context6.next = 4;
          return push_data(data_update, "update_info_product");
        case 4:
          reset_form_info_product();
          $("#modal_update_product").modal("hide");
          showAlert("Đã sửa thành công !", "success");
          document.getElementById("spin_icon_2").classList.add("d-none");
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _update_thong_tin_san_pham.apply(this, arguments);
}
function reset_form_info_product() {
  $("#form_update_info_product").trigger("reset");
  $("#kt_dropzonejs_example_2").empty();
  $("#kt_dropzonejs_example_2").append("\n    <div class=\"dz-message needsclick\" style=\"display:block\">\n        <i class=\"bi bi-file-earmark-arrow-up text-primary fs-3x\"></i>\n        <div class=\"ms-4\">\n          <h3 class=\"fs-5 fw-bold mb-1 text-info\">\n            <i class=\"fad fa-cloud-upload me-10\"></i>\n            Click ch\u1ECDn file c\u1EA7n upload\n          </h3>\n          <input class=\"d-none\" type=\"text\" id=\"hinh_anh\" />\n        </div>\n      </div>\n  ");
}
},{}]},{},["FLth"], null)