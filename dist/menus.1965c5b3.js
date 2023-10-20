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
})({"r0uX":[function(require,module,exports) {
/*!
 * SmartMenus more option - November 9, 2016
 * http://www.smartmenus.org/
 */

$(function () {
  $("#navbar-container").load("navbar.html");
  $("#main-nav").load("main-nav.html");
});
(function ($) {
  $.SmartMenus.prototype.old_init = $.SmartMenus.prototype.init;
  $.SmartMenus.prototype.init = function (refresh) {
    if (!refresh && !this.$root.hasClass("sm-vertical")) {
      var $originalItems = this.$root.children("li"),
        $moreSub = this.$root.clone().removeAttr("id").removeAttr("class").addClass("dropdown-menu"),
        $moreSubItems = $moreSub.children("li"),
        $moreItem = $('<li><a href="#">MORE <span class="caret"></span></a></li>').append($moreSub).appendTo(this.$root),
        self = this,
        vieportW,
        hiddenItems = [],
        hiddenMoreItems = [];
    }
    this.old_init(refresh);
    if (!refresh && !this.$root.hasClass("sm-vertical")) {
      function handleResize(force) {
        var curWidth = $(window).width();
        if (vieportW !== curWidth || force) {
          // hide More item
          $moreItem.detach();

          // show all main menu items
          $.each(hiddenItems, function () {
            $(this).appendTo(self.$root);
          });
          hiddenItems = [];

          // show all More sub items
          $.each(hiddenMoreItems, function () {
            $(this).prependTo($moreSub);
          });
          hiddenMoreItems = [];

          // if in desktop view and the last item is wrapped
          if (!self.$root.hasClass("sm-vertical") && (/^(left|right)$/.test(self.$firstLink.parent().css("float")) || self.$firstLink.parent().css("display") == "table-cell") && $originalItems.eq(-1)[0].offsetTop != $originalItems.eq(0)[0].offsetTop) {
            // show More item
            $moreItem.appendTo(self.$root);

            // while the More item is wrapped
            while ($moreItem[0].offsetTop != $originalItems.eq(0)[0].offsetTop) {
              hiddenItems.unshift($moreItem.prev("li").detach());
            }

            // hide proper More sub items
            $moreSubItems.slice(0, $moreSubItems.length - hiddenItems.length).each(function () {
              hiddenMoreItems.unshift($(this).detach());
            });
          }

          // save new viewport width
          vieportW = curWidth;
        }
      }
      handleResize();
      $(window).bind({
        "load.smartmenus": function loadSmartmenus() {
          handleResize(true);
        },
        "resize.smartmenus": handleResize
      });
    }
  };

  // Fix isCollapsible method
  $.SmartMenus.prototype.isCollapsible = function () {
    return this.$root.find("ul").eq(0).css("position") == "static";
  };
})(jQuery);

// SmartMenus init
$(function () {
  $("#main-menu").smartmenus({
    mainMenuSubOffsetX: 1,
    mainMenuSubOffsetY: -0,
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -0
  });
});
},{}]},{},["r0uX"], null)