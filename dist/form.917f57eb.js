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
})({"SLdT":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var arr_id = ["0"];
var arr_record_combo = [];
$(".input_lis_box").slimscroll({
  height: $(window).height() - 300 + "px",
  color: "blue"
});
function add_product_from_list(data) {
  var element = arr_id[arr_id.length - 1];
  var number = +element + 1;
  arr_id.push("".concat(number));
  input_form(data, number);
}
function input_form(data, index) {
  var id_combine = (data[8] + data[41]).replace(/[\-/.]/g, "");
  var image = data[38] ? "https://drive.google.com/uc?export=view&id=".concat(data[38]) : "https://drive.google.com/uc?export=view&id=1ol7mZ9xsisiih6hJlskj2w_qjXADfTyj";
  $(".input_lis_box").prepend("\n    <div class=\"col-12 order_list_output\" id=\"order_list_output_".concat(index, "\">\n            <div class=\"row  mb-0\">\n            <input type=\"text\" class=\"\" id='combine_").concat(index, "' value=").concat(id_combine, ">\n            <input type=\"text\" class=\"\"  id='image_").concat(index, "' value=").concat(data[38], ">\n            <input type=\"text\" class=\"\"  id='cong_bo_").concat(index, "' value=").concat(data[36], ">\n                <div class=\"form-group  col-sm-12 col-xl-2 mb-0 \" style=\"display: inline-flex\">\n                <small class=\"fs-10 fw-bold\" style=\"align-self:center\">").concat(index, ".</small>\n                    <input type=\"text\"  class=\"form-control text-primary\" autocomplete=\"off\" required value =\"").concat(data[8], "\" style=\"border:unset\" id='ma_").concat(index, "'>\n                </div>\n                <div class=\"form-group col-sm-12 col-xl-4 mb-0 \" style=\"display: inline-flex\">\n                  <img class=\"zoom-image-prod \" src=\"").concat(image, "\" height=\"50px\" style=\"border-radius: 5px\">\n                  <input type=\"text\"  class=\"form-control text-primary\" autocomplete=\"off\" required value =\"").concat(data[9], "\" style=\"border:unset\" id='ten_").concat(index, "'>\n                </div>\n                <div class=\"form-group  col-sm-12 col-xl-1 mb-0\">\n                    <input type=\"text\"  class=\"form-control text-primary\" autocomplete=\"off\" required value =\"").concat(data[10], "\" style=\"border:unset\" id='unit_").concat(index, "'>\n                </div>\n                <div class=\"form-group col-sm-12 col-xl-2 mb-0\">\n                    <input type=\"number\"  class=\"form-control text-success fw-bold\" autocomplete=\"off\" required id='so_luong_").concat(index, "' step=\"1\" min= \"0\">\n                </div>\n                <div class=\"form-group col-sm-12  col-xl-2 mb-0\">\n                    <input type=\"text\"  class=\"form-control text-primary\" autocomplete=\"off\" required value =\"").concat(data[41], "\" style=\"border:unset\" id='lot_").concat(index, "' onchange= change_day_plan()>\n                </div>\n                <div class=\"form-group  col-sm-12  col-xl-1 mb-0\">\n                    <button type=\"button\" class=\"btn  btn-danger btn-sm hover-danger \" onclick=\"remove_box('").concat(index, "')\"\n                        style=\"width:auto\"> <i class=\"fad fa-trash-alt fs-14 \"></i>\n                    </button>\n                </div>\n            </div>\n\n            <hr/>\n    </div>\n    "));
}
function remove_box(id) {
  $("#order_list_output_".concat(id)).remove(); //This removes the a tag

  var index = arr_id.indexOf(id);
  index > -1 ? arr_id.splice(index, 1) : "";
  arr_record_combo = _toConsumableArray(arr_record_combo).filter(function (e, idx) {
    var box_compare = e[0].split("_");
    return "".concat(box_compare[0], "_").concat(box_compare[1]) != "combo_" + id;
  });
}
function remove_all() {
  arr_id.map(function (e) {
    $("#order_list_output_".concat(e)).remove();
  });
  arr_id = ["0"];
  $("#plan_excell").val("");
  $("#excell_json").val("");
  var table_product = $("#table_product").DataTable();
  table_product.rows().deselect();
}
function them_ke_hoach_moi() {
  return _them_ke_hoach_moi.apply(this, arguments);
} // excell import
// IMPORT FILE Pack
function _them_ke_hoach_moi() {
  _them_ke_hoach_moi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var values, uid, timeStamp, lsx, so_ke_hoach;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          document.getElementById("spin_icon").classList.remove("d-none");
          values = [];
          uid = new Date().getTime().toString(36);
          timeStamp = moment().format("DD/MM/YYYY hh:mm:ss ");
          lsx = $("#lenh_san_xuat").val();
          arr_id.shift();
          so_ke_hoach = arr_id.length;
          console.log(so_ke_hoach);
          arr_id.map(function (e, idx) {
            values.push([uid + idx, timeStamp, user_name, ($("#ma_".concat(e)).val() + $("#lot_".concat(e)).val()).split(".").join(""), $("#ngay_ke_hoach").val(), $("#ngay_san_xuat").val(), $("#lenh_san_xuat").val(), $("#ma_".concat(e)).val(), $("#ten_".concat(e)).val(), $("#unit_".concat(e)).val(), $("#lot_".concat(e)).val(), $("#so_luong_".concat(e)).val(), "", $("#image_".concat(e)).val(), $("#cong_bo_".concat(e)).val(), "", "", "", "", "", "", "", "", "".concat(timeStamp, " - l\u1EADp k\u1EBF ho\u1EA1ch by - ").concat(user_name)]);
            $("#order_list_output_".concat(e)).remove();
          });
          if (!(so_ke_hoach > 0)) {
            _context.next = 18;
            break;
          }
          _context.next = 12;
          return push_data(values, "update_new_plan");
        case 12:
          showAlert("Đã cập nhật thành công !", "success");
          arr_id = ["0"];
          document.getElementById("spin_icon").classList.add("d-none");
          Swal.fire({
            title: "Bạn có muốn gửi kế hoạch này qua Email & Group Telegram ! ",
            text: "K\u1EBF ho\u1EA1ch  n\xE0y c\xF3 ".concat(values.length, " s\u1EA3n ph\u1EA9m s\u1EA3n xu\u1EA5t "),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33"
          }).then(function (result) {
            if (result.isConfirmed) {
              console.log([[lsx, so_ke_hoach]]);
              push_data([[lsx, so_ke_hoach]], "export_file_pdf_sent_telegram");
            }
          });
          _context.next = 19;
          break;
        case 18:
          if (so_ke_hoach = 0) {
            document.getElementById("spin_icon").classList.add("d-none");
            Swal.fire({
              title: "Chưa có kế hoạch nào được tạo ! ",
              text: "t\xECm ki\u1EBFm s\u1EA3n ph\u1EA9m t\u1EEB b\u1EA3ng DSSP ",
              icon: "warning",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "OK"
            });
          }
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _them_ke_hoach_moi.apply(this, arguments);
}
function plan_import_submit() {
  var values = {};
  values.table = document.getElementById("plan_excell").value;
  var res = JSON.parse(values.table);
  console.log(res);
  res.shift();
  number_cus = res.length;
  if (number_cus > 0) {
    Swal.fire({
      title: "Bạn đang import data từ Excell ! ",
      text: "File n\xE0y c\xF3 ".concat(number_cus, " s\u1EA3n ph\u1EA9m c\u1EA7n l\xEAn k\u1EBF ho\u1EA1ch ? "),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK"
    }).then(function (result) {
      if (result.isConfirmed) {
        res.map(function (e, index) {
          if (e.length > 0) {
            add_product_from_list(e);
          }
        });
      } else {
        remove_all();
      }
    });
  }
}

// convert file excell
function handleFile_Select_plan(_x) {
  return _handleFile_Select_plan.apply(this, arguments);
}
function _handleFile_Select_plan() {
  _handleFile_Select_plan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var files, xl2json;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          files = e.target.files;
          xl2json = new ExcellJson("#plan_excell");
          console.log(xl2json);
          xl2json.parseExcel(files[0]);
          setTimeout(function () {
            plan_import_submit();
          }, 1000);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _handleFile_Select_plan.apply(this, arguments);
}
var ExcellJson = /*#__PURE__*/function () {
  function ExcellJson(name) {
    _classCallCheck(this, ExcellJson);
    this.name = name;
  }
  _createClass(ExcellJson, [{
    key: "parseExcel",
    value: function parseExcel(file) {
      var _this = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
          type: "binary"
        });
        jQuery(_this.name).val(JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
          header: 1
        })));
      };
      reader.onerror = function (ex) {
        console.log(ex);
      };
      reader.readAsBinaryString(file);
    }
  }]);
  return ExcellJson;
}(); //  thêm mới sản phẩm
function update_new_product() {
  // reset_form();
  $("#modal_sale_form").modal("show");
  $("#title_form").text("THÊM MÃ HÀNG - SẢN PHẨM MỚI");
  $("#kt_dropzonejs_example_2").empty();
  $("#kt_dropzonejs_example_3").empty();
  $("#kt_dropzonejs_example_4").empty();
  $("#kt_dropzonejs_example_2").append("\n    <div class=\"dz-message needsclick\" style=\"display:block\">\n      <i class=\"bi bi-file-earmark-arrow-up text-primary fs-3x\"></i>\n      <div class=\"ms-4\">\n        <h3 class=\"fs-5 fw-bold mb-1 text-info\">\n          CLICK UPLOAD H\xCCNH \u1EA2NH S\u1EA2N PH\u1EA8M \n        </h3>\n        <span class=\"fs-7 fw-semibold\">t\u1ED1i \u0111a 10\n          file (or k\xE9o th\u1EA3 h\xECnh v\xE0o khung n\xE0y)</span>\n      </div>\n    </div>\n");
}
function change_day_plan() {
  if (arr_id.length > 0) {
    arr_id.map(function (e) {
      var id_combine = ($("#ma_".concat(e)).val() + $("#lot_".concat(e)).val()).replace(/[\-/.]/g, "");
      $("#combine_".concat(e)).val(id_combine);
    });
  }
}
},{}]},{},["SLdT"], null)