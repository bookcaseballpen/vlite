/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window) {
  window.Vlite = function () {
    var vlite = {
      config: {},
      el: {},
      init: function init(node, tpl, imgServer) {
        var _this = this;
        _this.config.node = node;
        _this.config.tpl = tpl;
        if (!node) {
          console.error("Node is not proivded");
        }
        this.el = $(node)[0];
        var url = imgServer + tpl;
        $.get(url, function (data) {
          var ele = data.split("<template>")[1].split("</template>")[0];
          var ctrl = data.split("<script>")[1].split("</script>")[0];
          var sty = data.split("<style>")[1].split("</style>")[0];
          ele = ele.replace(/@imgServer/g, imgServer);
          _this.create(node, ele, ctrl, sty);
        });
      },
      create: function create(node, ele, ctrl, sty) {
        if (!ele) {
          console.error("no element is provided in template");
          return;
        }
        var tempNode = document.createElement("div");
        tempNode.innerHTML = ele;
        this.el.appendChild(tempNode.childNodes[1]);
        if (sty) {
          tempNode = document.createElement("style");
          tempNode.innerHTML = sty;
          document.head.appendChild(tempNode);
        }
        if (ctrl) {
          eval(ctrl);
        }
      }
    };
    return vlite;
  };
})(window);

/***/ })
/******/ ]);