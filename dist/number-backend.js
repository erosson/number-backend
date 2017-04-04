(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("decimal.js"));
	else if(typeof define === 'function' && define.amd)
		define(["decimal.js"], factory);
	else if(typeof exports === 'object')
		exports["numberBackend"] = factory(require("decimal.js"));
	else
		root["numberBackend"] = factory(root["decimal.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var backends = {
	  'native': {
	    normalize: function normalize(val) {
	      return val;
	    }
	  },
	
	  'decimal.js': {
	    // Note that decimal.js is never imported by this library!
	    // We're using its methods passed in by the caller. This keeps the library
	    // much smaller for the common case: no decimal.js.
	    // api docs: https://mikemcl.github.io/decimal.js/
	    _requireDecimal: function _requireDecimal(config) {
	      var Decimal = global && global.Decimal || global.window && window.Decimal;
	      if (!Decimal) {
	        // the build/minifier must avoid compiling this in. It's externalized in the gulpfile.
	        Decimal = __webpack_require__(1);
	      }
	      return Decimal.clone(config);
	    },
	    normalize: function normalize(val, config) {
	      var Decimal = this._requireDecimal(config);
	      return new Decimal(val);
	    }
	  }
	};
	exports.default = backends;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=number-backend.js.map