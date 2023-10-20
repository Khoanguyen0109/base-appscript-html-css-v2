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
})({"uY3C":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
;
// jQuery toast plugin created by Kamran Ahmed copyright MIT license 2015
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
(function ($, window, document, undefined) {
  "use strict";

  var Toast = {
    _positionClasses: ['bottom-left', 'bottom-right', 'top-right', 'top-left', 'bottom-center', 'top-center', 'mid-center'],
    _defaultIcons: ['success', 'error', 'info', 'warning'],
    init: function init(options, elem) {
      this.prepareOptions(options, $.toast.options);
      this.process();
    },
    prepareOptions: function prepareOptions(options, options_to_extend) {
      var _options = {};
      if (typeof options === 'string' || options instanceof Array) {
        _options.text = options;
      } else {
        _options = options;
      }
      this.options = $.extend({}, options_to_extend, _options);
    },
    process: function process() {
      this.setup();
      this.addToDom();
      this.position();
      this.bindToast();
      this.animate();
    },
    setup: function setup() {
      var _toastContent = '';
      this._toastEl = this._toastEl || $('<div></div>', {
        class: 'jq-toast-single'
      });

      // For the loader on top
      _toastContent += '<span class="jq-toast-loader"></span>';
      if (this.options.allowToastClose) {
        _toastContent += '<span class="close-jq-toast-single">&times;</span>';
      }
      ;
      if (this.options.text instanceof Array) {
        if (this.options.heading) {
          _toastContent += '<h2 class="jq-toast-heading">' + this.options.heading + '</h2>';
        }
        ;
        _toastContent += '<ul class="jq-toast-ul">';
        for (var i = 0; i < this.options.text.length; i++) {
          _toastContent += '<li class="jq-toast-li" id="jq-toast-item-' + i + '">' + this.options.text[i] + '</li>';
        }
        _toastContent += '</ul>';
      } else {
        if (this.options.heading) {
          _toastContent += '<h2 class="jq-toast-heading">' + this.options.heading + '</h2>';
        }
        ;
        _toastContent += this.options.text;
      }
      this._toastEl.html(_toastContent);
      if (this.options.bgColor !== false) {
        this._toastEl.css("background-color", this.options.bgColor);
      }
      ;
      if (this.options.textColor !== false) {
        this._toastEl.css("color", this.options.textColor);
      }
      ;
      if (this.options.textAlign) {
        this._toastEl.css('text-align', this.options.textAlign);
      }
      if (this.options.icon !== false) {
        this._toastEl.addClass('jq-has-icon');
        if ($.inArray(this.options.icon, this._defaultIcons) !== -1) {
          this._toastEl.addClass('jq-icon-' + this.options.icon);
        }
        ;
      }
      ;
    },
    position: function position() {
      if (typeof this.options.position === 'string' && $.inArray(this.options.position, this._positionClasses) !== -1) {
        if (this.options.position === 'bottom-center') {
          this._container.css({
            left: $(window).outerWidth() / 2 - this._container.outerWidth() / 2,
            bottom: 20
          });
        } else if (this.options.position === 'top-center') {
          this._container.css({
            left: $(window).outerWidth() / 2 - this._container.outerWidth() / 2,
            top: 20
          });
        } else if (this.options.position === 'mid-center') {
          this._container.css({
            left: $(window).outerWidth() / 2 - this._container.outerWidth() / 2,
            top: $(window).outerHeight() / 2 - this._container.outerHeight() / 2
          });
        } else {
          this._container.addClass(this.options.position);
        }
      } else if (_typeof(this.options.position) === 'object') {
        this._container.css({
          top: this.options.position.top ? this.options.position.top : 'auto',
          bottom: this.options.position.bottom ? this.options.position.bottom : 'auto',
          left: this.options.position.left ? this.options.position.left : 'auto',
          right: this.options.position.right ? this.options.position.right : 'auto'
        });
      } else {
        this._container.addClass('bottom-left');
      }
    },
    bindToast: function bindToast() {
      var that = this;
      this._toastEl.on('afterShown', function () {
        that.processLoader();
      });
      this._toastEl.find('.close-jq-toast-single').on('click', function (e) {
        e.preventDefault();
        if (that.options.showHideTransition === 'fade') {
          that._toastEl.trigger('beforeHide');
          that._toastEl.fadeOut(function () {
            that._toastEl.trigger('afterHidden');
          });
        } else if (that.options.showHideTransition === 'slide') {
          that._toastEl.trigger('beforeHide');
          that._toastEl.slideUp(function () {
            that._toastEl.trigger('afterHidden');
          });
        } else {
          that._toastEl.trigger('beforeHide');
          that._toastEl.hide(function () {
            that._toastEl.trigger('afterHidden');
          });
        }
      });
      if (typeof this.options.beforeShow == 'function') {
        this._toastEl.on('beforeShow', function () {
          that.options.beforeShow(that._toastEl);
        });
      }
      ;
      if (typeof this.options.afterShown == 'function') {
        this._toastEl.on('afterShown', function () {
          that.options.afterShown(that._toastEl);
        });
      }
      ;
      if (typeof this.options.beforeHide == 'function') {
        this._toastEl.on('beforeHide', function () {
          that.options.beforeHide(that._toastEl);
        });
      }
      ;
      if (typeof this.options.afterHidden == 'function') {
        this._toastEl.on('afterHidden', function () {
          that.options.afterHidden(that._toastEl);
        });
      }
      ;
      if (typeof this.options.onClick == 'function') {
        this._toastEl.on('click', function () {
          that.options.onClick(that._toastEl);
        });
      }
      ;
    },
    addToDom: function addToDom() {
      var _container = $('.jq-toast-wrap');
      if (_container.length === 0) {
        _container = $('<div></div>', {
          class: "jq-toast-wrap"
        });
        $('body').append(_container);
      } else if (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) {
        _container.empty();
      }
      _container.find('.jq-toast-single:hidden').remove();
      _container.append(this._toastEl);
      if (this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
        var _prevToastCount = _container.find('.jq-toast-single').length,
          _extToastCount = _prevToastCount - this.options.stack;
        if (_extToastCount > 0) {
          $('.jq-toast-wrap').find('.jq-toast-single').slice(0, _extToastCount).remove();
        }
        ;
      }
      this._container = _container;
    },
    canAutoHide: function canAutoHide() {
      return this.options.hideAfter !== false && !isNaN(parseInt(this.options.hideAfter, 10));
    },
    processLoader: function processLoader() {
      // Show the loader only, if auto-hide is on and loader is demanded
      if (!this.canAutoHide() || this.options.loader === false) {
        return false;
      }
      var loader = this._toastEl.find('.jq-toast-loader');

      // 400 is the default time that jquery uses for fade/slide
      // Divide by 1000 for milliseconds to seconds conversion
      var transitionTime = (this.options.hideAfter - 400) / 1000 + 's';
      var loaderBg = this.options.loaderBg;
      var style = loader.attr('style') || '';
      style = style.substring(0, style.indexOf('-webkit-transition')); // Remove the last transition definition

      style += '-webkit-transition: width ' + transitionTime + ' ease-in; \
                      -o-transition: width ' + transitionTime + ' ease-in; \
                      transition: width ' + transitionTime + ' ease-in; \
                      background-color: ' + loaderBg + ';';
      loader.attr('style', style).addClass('jq-toast-loaded');
    },
    animate: function animate() {
      var that = this;
      this._toastEl.hide();
      this._toastEl.trigger('beforeShow');
      if (this.options.showHideTransition.toLowerCase() === 'fade') {
        this._toastEl.fadeIn(function () {
          that._toastEl.trigger('afterShown');
        });
      } else if (this.options.showHideTransition.toLowerCase() === 'slide') {
        this._toastEl.slideDown(function () {
          that._toastEl.trigger('afterShown');
        });
      } else {
        this._toastEl.show(function () {
          that._toastEl.trigger('afterShown');
        });
      }
      if (this.canAutoHide()) {
        var that = this;
        window.setTimeout(function () {
          if (that.options.showHideTransition.toLowerCase() === 'fade') {
            that._toastEl.trigger('beforeHide');
            that._toastEl.fadeOut(function () {
              that._toastEl.trigger('afterHidden');
            });
          } else if (that.options.showHideTransition.toLowerCase() === 'slide') {
            that._toastEl.trigger('beforeHide');
            that._toastEl.slideUp(function () {
              that._toastEl.trigger('afterHidden');
            });
          } else {
            that._toastEl.trigger('beforeHide');
            that._toastEl.hide(function () {
              that._toastEl.trigger('afterHidden');
            });
          }
        }, this.options.hideAfter);
      }
      ;
    },
    reset: function reset(resetWhat) {
      if (resetWhat === 'all') {
        $('.jq-toast-wrap').remove();
      } else {
        this._toastEl.remove();
      }
    },
    update: function update(options) {
      this.prepareOptions(options, this.options);
      this.setup();
      this.bindToast();
    },
    close: function close() {
      this._toastEl.find('.close-jq-toast-single').click();
    }
  };
  $.toast = function (options) {
    var toast = Object.create(Toast);
    toast.init(options, this);
    return {
      reset: function reset(what) {
        toast.reset(what);
      },
      update: function update(options) {
        toast.update(options);
      },
      close: function close() {
        toast.close();
      }
    };
  };
  $.toast.options = {
    text: '',
    heading: '',
    showHideTransition: 'fade',
    allowToastClose: true,
    hideAfter: 3000,
    loader: true,
    loaderBg: '#9EC600',
    stack: 5,
    position: 'bottom-left',
    bgColor: false,
    textColor: false,
    textAlign: 'left',
    icon: false,
    beforeShow: function beforeShow() {},
    afterShown: function afterShown() {},
    beforeHide: function beforeHide() {},
    afterHidden: function afterHidden() {},
    onClick: function onClick() {}
  };
})(jQuery, window, document);
},{}]},{},["uY3C"], null)