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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Espresso.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Espresso.js":
/*!*************************!*\
  !*** ./src/Espresso.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Espresso; });\n/* harmony import */ var _Helpers_Url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers/Url */ \"./src/Helpers/Url.js\");\n/* harmony import */ var _Helpers_Url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Helpers_Url__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Kernel_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kernel/Input */ \"./src/Kernel/Input.js\");\n/* harmony import */ var _Kernel_Input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Kernel_Input__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Kernel_Http_Message_ServerRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Kernel/Http/Message/ServerRequest */ \"./src/Kernel/Http/Message/ServerRequest.js\");\n/* harmony import */ var _Kernel_Http_Message_ServerRequest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Kernel_Http_Message_ServerRequest__WEBPACK_IMPORTED_MODULE_2__);\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n\n\n\n // ------------------------------------------------------------------------\n\nvar Espresso = function Espresso() {\n  _classCallCheck(this, Espresso);\n\n  this.helper = new Object();\n  this.helper.url = _Helpers_Url__WEBPACK_IMPORTED_MODULE_0___default.a;\n  this.input = _Kernel_Input__WEBPACK_IMPORTED_MODULE_1___default.a;\n  this.serverRequest = _Kernel_Http_Message_ServerRequest__WEBPACK_IMPORTED_MODULE_2___default.a;\n};\n\n\n\n//# sourceURL=webpack:///./src/Espresso.js?");

/***/ }),

/***/ "./src/Helpers/Url.js":
/*!****************************!*\
  !*** ./src/Helpers/Url.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n/**\n * Class Url\n * \n * @package Helpers\n */\n\n\nvar Url =\n/*#__PURE__*/\nfunction () {\n  function Url() {\n    _classCallCheck(this, Url);\n\n    this.string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');\n  }\n\n  _createClass(Url, [{\n    key: \"build\",\n    value: function build(params, url) {\n      var queryString = '';\n\n      if (typeof url === 'undefined') {\n        url = this.string;\n      }\n\n      for (var key in params) {\n        var value = params[key];\n        queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';\n      }\n\n      if (queryString.length > 0) {\n        queryString = qs.substring(0, queryString.length - 1); //chop off last '&'\n\n        url = url + '?' + queryString;\n      }\n\n      return url;\n    }\n  }, {\n    key: \"base\",\n    value: function base(uri, params) {\n      if (typeof uri === 'undefined') {\n        return this.string;\n      }\n\n      if (Array.isArray(uri)) {\n        return this.build(params, this.string + '/' + uri.join('/'));\n      }\n\n      return this.build(params, this.string);\n    }\n  }, {\n    key: \"current\",\n    value: function current(params) {\n      if (typeof params === 'undefined') {\n        return this.string;\n      }\n\n      return this.build(params, this.string);\n    }\n  }, {\n    key: \"buildQuery\",\n    value: function buildQuery(params) {\n      var uriComponent = encodeURIComponent;\n      var query = Object.keys(params).map(function (key) {\n        return uriComponent(key) + '=' + uriComponent(params[key]);\n      }).join('&');\n    }\n  }, {\n    key: \"string\",\n    get: function get() {\n      return this.string;\n    }\n  }]);\n\n  return Url;\n}();\n\n//# sourceURL=webpack:///./src/Helpers/Url.js?");

/***/ }),

/***/ "./src/Kernel/Http/Message/ServerRequest.js":
/*!**************************************************!*\
  !*** ./src/Kernel/Http/Message/ServerRequest.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n/**\n * Class ServerRequest\n * \n * @package Kernel/Http/Message\n */\n\n\nvar ServerRequest =\n/*#__PURE__*/\nfunction () {\n  function ServerRequest() {\n    _classCallCheck(this, ServerRequest);\n\n    this.queryParams = new URLSearchParams(window.location.search);\n    this.queryString = window.location.search.substring(1);\n  }\n\n  _createClass(ServerRequest, [{\n    key: \"getQueryString\",\n    value: function getQueryString() {\n      return this.queryString;\n    }\n  }, {\n    key: \"getQueryParams\",\n    value: function getQueryParams() {\n      return this.queryParams;\n    }\n  }, {\n    key: \"getHash\",\n    value: function getHash() {\n      return window.location.hash;\n    }\n  }]);\n\n  return ServerRequest;\n}();\n\n//# sourceURL=webpack:///./src/Kernel/Http/Message/ServerRequest.js?");

/***/ }),

/***/ "./src/Kernel/Input.js":
/*!*****************************!*\
  !*** ./src/Kernel/Input.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n/**\n * Class Input\n * \n * @package Kernel/Http\n */\n\n\nvar Input =\n/*#__PURE__*/\nfunction () {\n  function Input() {\n    _classCallCheck(this, Input);\n  }\n\n  _createClass(Input, [{\n    key: \"get\",\n    value: function get(name) {\n      name = name.replace(/[\\[\\]]/g, '\\\\$&');\n      var url = window.location.href;\n      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),\n          results = regex.exec(url);\n      if (!results) return null;\n      if (!results[2]) return '';\n      return decodeURIComponent(results[2].replace(/\\+/g, ' '));\n    }\n  }, {\n    key: \"sanitize\",\n    value: function sanitize(string) {\n      var tagBody = '(?:[^\"\\'>]|\"[^\"]*\"|\\'[^\\']*\\')*';\n      var tagOrComment = new RegExp('<(?:' // Comment body.\n      + '!--(?:(?:-*[^->])*--+|-?)' // Special \"raw text\" elements whose content should be elided.\n      + '|script\\\\b' + tagBody + '>[\\\\s\\\\S]*?</script\\\\s*' + '|style\\\\b' + tagBody + '>[\\\\s\\\\S]*?</style\\\\s*' // Regular name\n      + '|/?[a-z]' + tagBody + ')>', 'gi');\n      var oldString;\n\n      do {\n        oldString = string;\n        string = string.replace(tagOrComment, '');\n      } while (string !== oldString);\n\n      return string.replace(/</g, '&lt;');\n    }\n  }, {\n    key: \"formatNumber\",\n    value: function formatNumber(number) {\n      return (\"\" + number).replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, function ($1) {\n        return $1 + \".\";\n      });\n    }\n  }]);\n\n  return Input;\n}();\n\n//# sourceURL=webpack:///./src/Kernel/Input.js?");

/***/ })

/******/ });