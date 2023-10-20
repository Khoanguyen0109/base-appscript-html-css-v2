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
})({"vHcP":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var data_work;
var data_sale_list;
var newWindow;
var vitri_dong_sua;
var phong_ban = JSON.parse(localStorage.getItem("phong_ban"));
var id_staff = JSON.parse(localStorage.getItem("id_staff"));
var user_name = JSON.parse(localStorage.getItem("user_name"));
var role = JSON.parse(localStorage.getItem("role"));
var rule = role.split(",");
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var data, regex, matches, jsonObjects;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        id_staff != "admin" ? $("#li_nhan_su").empty() : "";
        $(".fill-buttons").toggle();
        functionInit();
        _context.next = 5;
        return get_data("get_data_initial_list_baobi");
      case 5:
        data = _context.sent;
        regex = /\{[\s\S]*?\}/g;
        matches = data.match(regex);
        jsonObjects = matches.map(function (match) {
          return JSON.parse(match);
        });
        data_sale_list = jsonObjects[0].values;
        get_data_work(jsonObjects[0].values, jsonObjects[1].values);
        select_list_fill_pack(jsonObjects[2].values);
      case 12:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
function get_data_work(data, report) {
  document.getElementById("spinner").style.display = "block";
  $("#tong_bao_bi").text(report[0][1]);
  $("#dang_su_dung").text(report[1][1]);
  $("#chua_su_dung").text(report[2][1]);
  $("#chua_thiet_ke").text(report[3][1]);
  $("#bo_mau").text(report[4][1]);
  $("#tl_tong_bao_bi").text(report[0][2]);
  $("#tl_dang_su_dung").text(report[1][2]);
  $("#tl_chua_su_dung").text(report[2][2]);
  $("#tl_chua_thiet_ke").text(report[3][2]);
  $("#tl_bo_mau").text(report[4][2]);
  install_init(data);
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
      $(".dataTables_scrollBody").slimscroll({
        height: $(window).height() - 260 + "px",
        color: "red",
        axis: "both"
      });
    },
    responsive: true,
    autoWidth: true,
    destroy: true,
    scrollCollapse: true,
    deferRender: true,
    scrollY: true,
    scrollX: true,
    bLengthChange: false,
    paging: true,
    info: false,
    // Hiển thị thông tin số bản ghi
    order: [3, "asc"],
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
      title: "STT",
      className: "text-center"
    },
    //1
    {
      title: "NGƯỜI CẬP NHẬT"
    },
    //3
    {
      title: "MÃ BAO BÌ",
      className: "text-center"
    },
    //4
    {
      title: "TÊN BAO BÌ",
      render: function render(data, type, row, meta) {
        var image = row[11] ? "https://drive.google.com/uc?export=view&id=" + row[11] : "https://drive.google.com/uc?export=view&id=1ol7mZ9xsisiih6hJlskj2w_qjXADfTyj";
        return "\n              <div style=\"display:flex\" >\n              <div style=\"display:grid;place-items: center;align-content: center;\" class=\"me-10\">\n            <img class=\"zoom-image-prod \" src=\"".concat(image, "\" height=\"30px\" style=\"border-radius: 5px\">\n         \n          </div>\n                <p title = ").concat(data, " class=\" zoom-image-prod mb-0 hover-danger editor-view_doc_main text-primary\" style=\"white-space: normal;cursor:pointer;width: 350px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\"> ").concat(data, "</p>\n              </div>");
      }
    },
    //5
    {
      title: "ĐVT",
      className: "text-center"
    },
    //6
    {
      title: "LOẠI",
      className: "text-center"
    },
    //7
    {
      title: "NHÓM"
    },
    //7
    {
      title: "DÒNG",
      className: "text-center",
      render: function render(data, type, row, meta) {
        return "\n            <div style=\"display:block\" >\n              <p class=\"mb-0 hover-danger\" style=\"white-space: normal;cursor:pointer\"> ".concat(row[7], "</p>\n              <span class=\"badge badge-secondary \" style=\"height:fit-content;\"> ").concat(data, "</span>\n           \n            </div>");
      }
    },
    //7
    {
      title: "THƯƠNG HIỆU",
      className: "text-center"
    },
    //7
    {
      title: "TRẠNG THÁI",
      className: "text-center",
      render: function render(data, type, row, meta) {
        if (data == "Process material") {
          var color_state = " badge badge-success";
        } else if (data == "Cancel Material") {
          var color_state = "badge badge-danger";
        } else if (data == "New Material - Y") {
          var color_state = "badge badge-warning";
        } else if (data == "New Material - N") {
          var color_state = "badge badge-primary";
        }
        return "<span class=\"".concat(color_state, " mt-5\" style=\"height:fit-content;\">").concat(data, "</span>");
      }
    },
    //8

    {
      title: "HÌNH ẢNH",
      className: "text-center"
    },
    //9
    {
      title: "TỒN KHO",
      className: "text-center",
      render: function render(data, type, row, meta) {
        return "\n            <div style=\"display:block\" >\n              <p class=\"mb-0 fw-bold text-info fs-14\" > ".concat(data, "</p>\n           \n            </div>");
      }
    },
    //10
    {
      title: "XUẤT XỨ",
      render: function render(data, type, row, meta) {
        var check_node = data != undefined ? data : row[5];
        return check_node;
      }
    },
    //10
    {
      title: "MÃ NCC",
      className: "text-center"
    },
    //9

    {
      title: "TÊN NCC / XUẤT XỨ",
      className: "text-center",
      render: function render(data, type, row, meta) {
        return "\n        <p class=\"mb-0 hover-danger editor-view_doc_main text-primary\" style=\"white-space: normal;cursor:pointer\"> ".concat(row[14], " - ").concat(data, "</p>\n        <span class=\"badge badge-primary mt-5\" style=\"height:fit-content;\">").concat(row[13], "</span>\n        ");
      }
    },
    //9
    {
      title: "CHECK",
      className: "text-center"
    } //9

    // {
    //   data: null,
    //   title: "Act",
    //   className: "uniqueClassName",
    //   orderable: false,
    //   render: function (data, type, row) {
    //     var dis_edit =
    //       rule.includes(`Sửa ${row[9]}`) || id_staff == "admin"
    //         ? ""
    //         : "d-none";
    //     var dis_add =
    //       rule.includes(`Thêm note ${row[9]}`) || id_staff == "admin"
    //         ? ""
    //         : "d-none";
    //     var dis_delete =
    //       rule.includes(`Xóa ${row[9]}`) || id_staff == "admin"
    //         ? ""
    //         : "d-none";
    //     return `<div class="dropdown" style="display:flex;justify-content: center;align-items: center">
    //    <button  class=" ${dis_edit} btn  px-5 editor-edit-note me-10" data-bs-toggle="tooltip"  title="Sửa tài liệu hoặc ghi chú"><i class="fad fa-edit text-primary fs-14"></i></button>
    //    <button  class="${dis_add} btn  px-5 editor-add-note me-10" data-bs-toggle="tooltip"  title="Thêm ghi chú cho tài liệu này"><i class="fas fa-plus-square fs-14 text-warning"></i></button>
    //     <button  class=" ${dis_delete} btn  px-5 editor-delete" data-bs-toggle="tooltip"  title="Xóa tài liệu này"><i class="fad fa-trash-alt fs-14 text-danger"></i></button>
    //       </div>`;
    //   },
    // }, //11
    ],

    columnDefs: [{
      responsivePriority: 1,
      targets: 4
    }, {
      targets: [0, 2, 7, 11, 13, 14, 16],
      visible: false
    }

    // { responsivePriority: 2, targets: 10 },
    ],

    rowGroup: {
      dataSrc: function dataSrc(row) {
        var name = '<p class="fw-bold me-10 mb-0"><i class="fas fa-notes-medical me-10"></i>' + row[9] + "</p>";
        return name;
      }
    }
  });
  table_doc.on("order.dt search.dt", function () {
    var i = 1;
    table_doc.cells(null, 1, {
      search: "applied",
      order: "applied"
    }).every(function (cell) {
      this.data(i++);
    });
  }).draw();
  table_doc.on("order.dt search.dt", function () {
    var i = 1;
    table_doc.cells(null, 1, {
      search: "applied",
      order: "applied"
    }).every(function (cell) {
      this.data(i++);
    });
  }).draw();

  //  zoom-image-prod
  $("#table_doc").on("click", "tbody td .zoom-image-prod", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    $('#show_note').modal('show');
    pack_detail(data);
    // $("#name_pic_title").text(`${data[3]} - ${data[4]}`)
    // $("#imagepreview").attr("src",`https://drive.google.com/uc?export=view&id=${data[11]}`)
  });
}

$("#filterbox").on("change", function () {
  var key_word = this.value.toLowerCase();
  var result = data_work.filter(function (e) {
    if (e[4].toLowerCase().includes(key_word) || e[3].toLowerCase().includes(key_word) || e[15].toLowerCase().includes(key_word)) {
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
function show_hide_button() {
  $(".dt-buttons").toggle();
}
function show_hide_filter() {
  $(".fill-buttons").toggle();
}
function show_change_password() {
  $(".change-password").toggle();
}
function pack_detail(data) {
  $("#Pak_Modal_Detail").modal("show");
  $("#product_use").empty();
  if (data[10] === "Process material") {
    document.getElementById("status_pack").innerHTML = "Đang sử dụng";
    $("#background_status_pack").addClass("ribbon-two ribbon-two-success");
  } else if (data[10] === "New Material - N") {
    document.getElementById("status_pack").innerHTML = "Chưa thiết kế";
    $("#background_status_pack").addClass("ribbon-two ribbon-two-warning");
  } else if (data[10] === "New Material - Y") {
    document.getElementById("status_pack").innerHTML = "Chưa sử dụng";
    $("#background_status_pack").addClass("ribbon-two ribbon-two-primary");
  } else if (data[10] === "Cancel Material") {
    document.getElementById("status_pack").innerHTML = "Bỏ mẫu";
    $("#background_status_pack").addClass("ribbon-two ribbon-two-danger");
  }
  document.getElementById("code_pack").innerHTML = data[3];
  document.getElementById("name_pack").innerHTML = "<strong>" + data[3] + "</strong> &nbsp" + data[4];
  document.getElementById("driver_pack").innerHTML = data[6];
  document.getElementById("brand_pack").innerHTML = data[7];
  document.getElementById("suplier_pack").innerHTML = data[15];
  document.getElementById("stock_pack").innerHTML = data[12];
  document.getElementById("img_pack").src = "https://drive.google.com/uc?id=" + data[11];
}
},{}]},{},["vHcP"], null)