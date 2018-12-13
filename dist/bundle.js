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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Espresso.js":
/*!*************************!*\
  !*** ./src/Espresso.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nvar UrlHelper = __webpack_require__(/*! ./Helpers/Url */ \"./src/Helpers/Url.js\");\n\nvar Input = __webpack_require__(/*! ./Kernel/Input */ \"./src/Kernel/Input.js\");\n\nvar ServerRequest = __webpack_require__(/*! ./Kernel/Http/Message/ServerRequest */ \"./src/Kernel/Http/Message/ServerRequest.js\"); // ------------------------------------------------------------------------\n\n/**\n * Class Espresso\n */\n\n\nvar Espresso = function Espresso() {\n  _classCallCheck(this, Espresso);\n\n  this.helper = new Object();\n  this.helper.url = new UrlHelper();\n  this.input = new Input();\n  this.serverRequest = new ServerRequest();\n};\n\nmodule.exports = Espresso;\n\n//# sourceURL=webpack:///./src/Espresso.js?");

/***/ }),

/***/ "./src/Helpers/Url.js":
/*!****************************!*\
  !*** ./src/Helpers/Url.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n/**\n * Class Url\n * \n * @package Helpers\n */\n\n\nvar Url =\n/*#__PURE__*/\nfunction () {\n  function Url() {\n    _classCallCheck(this, Url);\n\n    this.string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');\n  }\n\n  _createClass(Url, [{\n    key: \"build\",\n    value: function build(params, url) {\n      var queryString = '';\n\n      if (typeof url === 'undefined') {\n        url = this.string;\n      }\n\n      for (var key in params) {\n        var value = params[key];\n        queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';\n      }\n\n      if (queryString.length > 0) {\n        queryString = qs.substring(0, queryString.length - 1); //chop off last '&'\n\n        url = url + '?' + queryString;\n      }\n\n      return url;\n    }\n  }, {\n    key: \"base\",\n    value: function base(uri, params) {\n      if (typeof uri === 'undefined') {\n        return this.string;\n      }\n\n      if (Array.isArray(uri)) {\n        return this.build(params, this.string + '/' + uri.join('/'));\n      }\n\n      return this.build(params, this.string);\n    }\n  }, {\n    key: \"current\",\n    value: function current(params) {\n      if (typeof params === 'undefined') {\n        return this.string;\n      }\n\n      return this.build(params, this.string);\n    }\n  }, {\n    key: \"buildQuery\",\n    value: function buildQuery(params) {\n      var uriComponent = encodeURIComponent;\n      var query = Object.keys(params).map(function (key) {\n        return uriComponent(key) + '=' + uriComponent(params[key]);\n      }).join('&');\n    }\n  }, {\n    key: \"string\",\n    get: function get() {\n      return this.string;\n    }\n  }]);\n\n  return Url;\n}();\n\nmodule.exports = Url;\n\n//# sourceURL=webpack:///./src/Helpers/Url.js?");

/***/ }),

/***/ "./src/Kernel/Http/Message/ServerRequest.js":
/*!**************************************************!*\
  !*** ./src/Kernel/Http/Message/ServerRequest.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n\nvar Uri = __webpack_require__(/*! ./Uri */ \"./src/Kernel/Http/Message/Uri.js\");\n/**\n * Class ServerRequest\n * \n * @package Kernel/Http/Message\n */\n\n\nvar ServerRequest =\n/*#__PURE__*/\nfunction () {\n  function ServerRequest() {\n    _classCallCheck(this, ServerRequest);\n\n    this.uri = new Uri();\n    this.queryParams = new URLSearchParams(window.location.search);\n    this.queryString = window.location.search.substring(1);\n  }\n\n  _createClass(ServerRequest, [{\n    key: \"getUri\",\n    value: function getUri() {\n      return this.uri;\n    }\n  }, {\n    key: \"getQueryString\",\n    value: function getQueryString() {\n      return this.queryString;\n    }\n  }, {\n    key: \"getQueryParams\",\n    value: function getQueryParams() {\n      return this.queryParams;\n    }\n  }, {\n    key: \"getHash\",\n    value: function getHash() {\n      return window.location.hash;\n    }\n  }]);\n\n  return ServerRequest;\n}();\n\nmodule.exports = ServerRequest;\n\n//# sourceURL=webpack:///./src/Kernel/Http/Message/ServerRequest.js?");

/***/ }),

/***/ "./src/Kernel/Http/Message/Uri.js":
/*!****************************************!*\
  !*** ./src/Kernel/Http/Message/Uri.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n\nvar Segments = __webpack_require__(/*! ./Uri/Segments */ \"./src/Kernel/Http/Message/Uri/Segments.js\");\n/**\n * Class Uri\n * \n * @package Kernel/Http/Message\n * \n * @todo add domain, subdomain, tld\n */\n\n\nvar Uri =\n/*#__PURE__*/\nfunction () {\n  function Uri() {\n    _classCallCheck(this, Uri);\n\n    this.scheme = window.location.protocol;\n    this.segments = new Segments();\n    this.host = window.location.hostname;\n    this.port = window.location.port;\n    this.hash = window.location.hash; // Query as Object\n\n    this.query = function (a) {\n      if (a == \"\") return {};\n      var b = {};\n\n      for (var i = 0; i < a.length; ++i) {\n        var p = a[i].split('=', 2);\n        if (p.length == 1) b[p[0]] = \"\";else b[p[0]] = decodeURIComponent(p[1].replace(/\\+/g, \" \"));\n      }\n\n      return b;\n    }(window.location.search.substr(1).split('&'));\n  }\n\n  _createClass(Uri, [{\n    key: \"getScheme\",\n    value: function getScheme() {\n      return this.scheme;\n    }\n  }, {\n    key: \"getSegments\",\n    value: function getSegments() {\n      return this.segments;\n    }\n  }, {\n    key: \"withSegments\",\n    value: function withSegments(segments) {\n      if (Array.isArray(segments)) {\n        return this.segments.withParts(segments);\n      }\n    }\n  }, {\n    key: \"getHost\",\n    value: function getHost() {\n      return this.host;\n    }\n  }, {\n    key: \"getPort\",\n    value: function getPort() {\n      return this.port;\n    }\n  }, {\n    key: \"getHash\",\n    value: function getHash() {\n      return this.hash;\n    }\n  }, {\n    key: \"withHash\",\n    value: function withHash(hash) {\n      this.hash = hash;\n    }\n  }, {\n    key: \"getQuery\",\n    value: function getQuery() {\n      return this.query;\n    }\n  }, {\n    key: \"withQuery\",\n    value: function withQuery(params) {\n      if (params instanceof Object) {\n        this.query = Object.assign(this.query, params);\n      }\n    }\n  }, {\n    key: \"buildQuery\",\n    value: function buildQuery(params) {\n      var uriComponent = encodeURIComponent;\n      var query = Object.keys(params).map(function (key) {\n        return uriComponent(key) + '=' + uriComponent(params[key]);\n      }).join('&');\n    }\n  }, {\n    key: \"__toString\",\n    value: function __toString() {\n      var uriString = this.scheme + '//' + this.hostname + (this.port ? ':' + this.port : '') + this.segments.__toString();\n\n      if (this.query.length > 0) {\n        uriString = uriString + this.buildQuery(this.query);\n      }\n\n      if (this.hash) {\n        uriString = uriString + this.hash;\n      }\n\n      return uriString;\n    }\n  }]);\n\n  return Uri;\n}();\n\nmodule.exports = Uri;\n\n//# sourceURL=webpack:///./src/Kernel/Http/Message/Uri.js?");

/***/ }),

/***/ "./src/Kernel/Http/Message/Uri/Segments.js":
/*!*************************************************!*\
  !*** ./src/Kernel/Http/Message/Uri/Segments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n/**\n * Class Segments\n * \n * @package Kernel/Http/Message/Uri\n */\n\n\nvar Segments =\n/*#__PURE__*/\nfunction () {\n  function Segments() {\n    _classCallCheck(this, Segments);\n\n    this.string = window.location.pathname.substr(1);\n    this.parts = this.string.split('/');\n  }\n\n  _createClass(Segments, [{\n    key: \"getString\",\n    value: function getString() {\n      return this.string;\n    }\n  }, {\n    key: \"withString\",\n    value: function withString(string) {\n      this.string = string;\n    }\n  }, {\n    key: \"getParts\",\n    value: function getParts() {\n      return this.parts;\n    }\n  }, {\n    key: \"withParts\",\n    value: function withParts(parts) {\n      if (Array.isArray(parts)) {\n        this.parts.concat(parts);\n      }\n    }\n  }, {\n    key: \"setParts\",\n    value: function setParts(parts) {\n      this.parts = parts;\n    }\n  }, {\n    key: \"getPart\",\n    value: function getPart(index) {\n      if (this.parts.hasOwnProperty(index - 1)) {\n        return this.parts[index - 1];\n      }\n\n      return null;\n    }\n  }, {\n    key: \"withPart\",\n    value: function withPart(part) {\n      this.parts.push(part);\n    }\n  }, {\n    key: \"hasPart\",\n    value: function hasPart(part) {\n      var result = this.parts.find(part);\n\n      if (typeof result === 'undefined') {\n        return false;\n      }\n\n      return true;\n    }\n  }, {\n    key: \"filterPart\",\n    value: function filterPart(part) {\n      return part.replace(/[\\W_-]/g, '').replace(/_+/g, '-').replace(/-+/g, '-');\n    }\n  }, {\n    key: \"getTotalParts\",\n    value: function getTotalParts() {\n      return this.parts.length;\n    }\n  }, {\n    key: \"__toString\",\n    value: function __toString() {\n      if (this.parts.length > 0) {\n        return this.parts.join('/');\n      }\n\n      return '';\n    }\n  }]);\n\n  return Segments;\n}();\n\nmodule.exports = Segments;\n\n//# sourceURL=webpack:///./src/Kernel/Http/Message/Uri/Segments.js?");

/***/ }),

/***/ "./src/Kernel/Input.js":
/*!*****************************!*\
  !*** ./src/Kernel/Input.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n/**\n * This file is part of the O2System Espresso Javascript Framework package.\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n *\n * @author         Steeve Andrian Salim\n * @copyright      Copyright (c) Steeve Andrian Salim\n */\n// ------------------------------------------------------------------------\n\n/**\n * Class Input\n * \n * @package Kernel/Http\n */\n\n\nvar Input =\n/*#__PURE__*/\nfunction () {\n  function Input() {\n    _classCallCheck(this, Input);\n  }\n\n  _createClass(Input, [{\n    key: \"get\",\n    value: function get(name) {\n      name = name.replace(/[\\[\\]]/g, '\\\\$&');\n      var url = window.location.href;\n      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),\n          results = regex.exec(url);\n      if (!results) return null;\n      if (!results[2]) return '';\n      return decodeURIComponent(results[2].replace(/\\+/g, ' '));\n    }\n  }, {\n    key: \"sanitize\",\n    value: function sanitize(string) {\n      var tagBody = '(?:[^\"\\'>]|\"[^\"]*\"|\\'[^\\']*\\')*';\n      var tagOrComment = new RegExp('<(?:' // Comment body.\n      + '!--(?:(?:-*[^->])*--+|-?)' // Special \"raw text\" elements whose content should be elided.\n      + '|script\\\\b' + tagBody + '>[\\\\s\\\\S]*?</script\\\\s*' + '|style\\\\b' + tagBody + '>[\\\\s\\\\S]*?</style\\\\s*' // Regular name\n      + '|/?[a-z]' + tagBody + ')>', 'gi');\n      var oldString;\n\n      do {\n        oldString = string;\n        string = string.replace(tagOrComment, '');\n      } while (string !== oldString);\n\n      return string.replace(/</g, '&lt;');\n    }\n  }, {\n    key: \"formatNumber\",\n    value: function formatNumber(number) {\n      return (\"\" + number).replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, function ($1) {\n        return $1 + \".\";\n      });\n    }\n  }]);\n\n  return Input;\n}();\n\nmodule.exports = Input;\n\n//# sourceURL=webpack:///./src/Kernel/Input.js?");

/***/ }),

/***/ "./src/sample/hello.js":
/*!*****************************!*\
  !*** ./src/sample/hello.js ***!
  \*****************************/
/*! exports provided: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return sayHello; });\nvar sayHello = function sayHello(greeting) {\n  var currentHour = new Date().getHours();\n  var timeGreeting = 'Good morning!';\n\n  if (currentHour >= 12 && currentHour <= 17) {\n    timeGreeting = 'Good afternoon!';\n  } else if (currentHour >= 17) {\n    timeGreeting = 'Good evening!';\n  }\n\n  return \"\".concat(timeGreeting, \" \").concat(greeting);\n};\n\n\n\n//# sourceURL=webpack:///./src/sample/hello.js?");

/***/ }),

/***/ "./src/sample/math.js":
/*!****************************!*\
  !*** ./src/sample/math.js ***!
  \****************************/
/*! exports provided: tambah, kali */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tambah\", function() { return tambah; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kali\", function() { return kali; });\nvar tambah = function tambah(a, b) {\n  return a + b;\n};\n\nvar kali = function kali(a, b) {\n  return a * b;\n};\n\n\n\n//# sourceURL=webpack:///./src/sample/math.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Espresso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Espresso */ \"./src/Espresso.js\");\n/* harmony import */ var _Espresso__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Espresso__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sample_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample/math */ \"./src/sample/math.js\");\n/* harmony import */ var _sample_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample/hello */ \"./src/sample/hello.js\");\n // const arr = [1, 2, 3];\n// const iAmJavascriptES6 = () => console.log(...arr);\n\n\n\n\nconsole.log(\"hello, world\");\nconsole.log(Object(_sample_math__WEBPACK_IMPORTED_MODULE_2__[\"tambah\"])(10, 20));\nconsole.log(Object(_sample_math__WEBPACK_IMPORTED_MODULE_2__[\"kali\"])(3, 4));\nvar resultGreeting = document.getElementById('resultGreeting');\nvar resultSum = document.getElementById('resultSum');\nvar resultProduct = document.getElementById('resultProduct');\nresultGreeting.textContent = Object(_sample_hello__WEBPACK_IMPORTED_MODULE_3__[\"sayHello\"])('Nice to see you! ');\nresultSum.textContent = \"The sum of \".concat(a, \" and \").concat(b, \" is \").concat(sum(a, b), \". \");\nresultProduct.textContent = \"The product of \".concat(a, \" and \").concat(b, \" is \").concat(product(a, b), \". \");\nespresso = new _Espresso__WEBPACK_IMPORTED_MODULE_1___default.a();\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });