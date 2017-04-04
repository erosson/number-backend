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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function isWrapped(a) {
	  return a && typeof a.val !== 'undefined';
	}
	function unwrap(a) {
	  return isWrapped(a) ? a.val : a;
	}
	function wrap(a) {
	  return isWrapped(a) ? a : new WrapNative(a);
	}
	
	var WrapNative = function () {
	  function WrapNative(val) {
	    _classCallCheck(this, WrapNative);
	
	    this.val = val;
	  }
	  // match the decimal.js interface. https://github.com/MikeMcl/decimal.js/
	
	
	  _createClass(WrapNative, [{
	    key: 'abs',
	    value: function abs() {
	      return new WrapNative(Math.abs(this.val));
	    }
	  }, {
	    key: 'absoluteValue',
	    value: function absoluteValue() {
	      return this.abs();
	    }
	  }, {
	    key: 'ceil',
	    value: function ceil() {
	      return new WrapNative(Math.ceil(this.val));
	    }
	  }, {
	    key: 'floor',
	    value: function floor() {
	      return new WrapNative(Math.floor(this.val));
	    }
	  }, {
	    key: 'neg',
	    value: function neg() {
	      return new WrapNative(this.val * -1);
	    }
	  }, {
	    key: 'negated',
	    value: function negated() {
	      return this.neg();
	    }
	  }, {
	    key: 'round',
	    value: function round() {
	      return new WrapNative(Math.round(this.val));
	    }
	
	    // toDecimalPlaces
	    // toDP
	    // toFraction
	    // toNearest
	    // toSignificantDigits
	    // toSD
	
	  }, {
	    key: 'trunc',
	    value: function trunc() {
	      return new WrapNative(Math.trunc(this.val));
	    }
	  }, {
	    key: 'truncated',
	    value: function truncated() {
	      return this.trunc();
	    }
	
	    // toBinary
	    // toExponential
	    // toFixed
	    // toHex
	    // toHexadecimal
	
	  }, {
	    key: 'toJson',
	    value: function toJson() {
	      return this.val;
	    }
	    // toOctal
	    // toPrecision
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.val + '';
	    }
	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.val;
	    }
	    // toNumber
	
	    // cmp
	    // comparedTo
	
	  }, {
	    key: 'eq',
	    value: function eq(a) {
	      return this.val === unwrap(a);
	    }
	  }, {
	    key: 'equals',
	    value: function equals(a) {
	      return this.eq(a);
	    }
	  }, {
	    key: 'gt',
	    value: function gt(a) {
	      return this.val > unwrap(a);
	    }
	  }, {
	    key: 'greaterThan',
	    value: function greaterThan(a) {
	      return this.gt(a);
	    }
	  }, {
	    key: 'gte',
	    value: function gte(a) {
	      return this.val >= unwrap(a);
	    }
	  }, {
	    key: 'greaterThanOrEqualTo',
	    value: function greaterThanOrEqualTo(a) {
	      return this.gte(a);
	    }
	  }, {
	    key: 'lt',
	    value: function lt(a) {
	      return this.val < unwrap(a);
	    }
	  }, {
	    key: 'lessThan',
	    value: function lessThan(a) {
	      return this.lt(a);
	    }
	  }, {
	    key: 'lte',
	    value: function lte(a) {
	      return this.val <= unwrap(a);
	    }
	  }, {
	    key: 'lessThanOrEqualTo',
	    value: function lessThanOrEqualTo(a) {
	      return this.lte(a);
	    }
	  }, {
	    key: 'cbrt',
	    value: function cbrt() {
	      return new WrapNative(Math.cbrt(this.val));
	    }
	  }, {
	    key: 'cubeRoot',
	    value: function cubeRoot() {
	      return this.cbrt();
	    }
	  }, {
	    key: 'div',
	    value: function div(a) {
	      return new WrapNative(this.val / unwrap(a));
	    }
	  }, {
	    key: 'dividedBy',
	    value: function dividedBy(a) {
	      return this.div(a);
	    }
	  }, {
	    key: 'divToInt',
	    value: function divToInt(a) {
	      return this.div(a).floor();
	    }
	  }, {
	    key: 'dividedToIntegerBy',
	    value: function dividedToIntegerBy(a) {
	      return this.divToInt();
	    }
	  }, {
	    key: 'log',
	    value: function log(n) {
	      return new WrapNative(Math.log(this.val, unwrap(n)));
	    }
	  }, {
	    key: 'logarithm',
	    value: function logarithm(n) {
	      return this.log(n);
	    }
	  }, {
	    key: 'sub',
	    value: function sub(a) {
	      return new WrapNative(this.val - unwrap(a));
	    }
	  }, {
	    key: 'minus',
	    value: function minus(a) {
	      return this.sub(a);
	    }
	  }, {
	    key: 'mod',
	    value: function mod(a) {
	      return new WrapNative(this.val % unwrap(a));
	    }
	  }, {
	    key: 'modulo',
	    value: function modulo(a) {
	      return this.mod(a);
	    }
	  }, {
	    key: 'exp',
	    value: function exp() {
	      return new WrapNative(Math.exp(this.val));
	    }
	  }, {
	    key: 'naturalExponential',
	    value: function naturalExponential() {
	      return this.exp();
	    }
	  }, {
	    key: 'ln',
	    value: function ln() {
	      return new WrapNative(Math.ln(this.val));
	    }
	  }, {
	    key: 'naturalLogarithm',
	    value: function naturalLogarithm() {
	      return this.ln();
	    }
	  }, {
	    key: 'add',
	    value: function add(a) {
	      return new WrapNative(this.val + unwrap(a));
	    }
	  }, {
	    key: 'plus',
	    value: function plus(a) {
	      return this.add(a);
	    }
	  }, {
	    key: 'sqrt',
	    value: function sqrt() {
	      return new WrapNative(Math.sqrt(this.val));
	    }
	  }, {
	    key: 'squareRoot',
	    value: function squareRoot() {
	      return this.sqrt();
	    }
	  }, {
	    key: 'mul',
	    value: function mul(a) {
	      return new WrapNative(this.val * unwrap(a));
	    }
	  }, {
	    key: 'times',
	    value: function times(a) {
	      return this.mul(a);
	    }
	  }, {
	    key: 'pow',
	    value: function pow(a) {
	      return new WrapNative(Math.pow(this.val, unwrap(a)));
	    }
	  }, {
	    key: 'toPower',
	    value: function toPower(a) {
	      return this.pow(a);
	    }
	
	    // dp
	    // decimalPlaces
	    // sd
	    // precision
	
	  }, {
	    key: 'cos',
	    value: function cos() {
	      return new WrapNative(Math.cos(this.val));
	    }
	  }, {
	    key: 'cosine',
	    value: function cosine() {
	      return this.cos();
	    }
	  }, {
	    key: 'sin',
	    value: function sin() {
	      return new WrapNative(Math.sin(this.val));
	    }
	  }, {
	    key: 'sine',
	    value: function sine() {
	      return this.sin();
	    }
	  }, {
	    key: 'tan',
	    value: function tan() {
	      return new WrapNative(Math.tan(this.val));
	    }
	  }, {
	    key: 'tangent',
	    value: function tangent() {
	      return this.tan();
	    }
	  }, {
	    key: 'acos',
	    value: function acos() {
	      return new WrapNative(Math.acos(this.val));
	    }
	  }, {
	    key: 'inverseCosine',
	    value: function inverseCosine() {
	      return this.acos();
	    }
	  }, {
	    key: 'asin',
	    value: function asin() {
	      return new WrapNative(Math.asin(this.val));
	    }
	  }, {
	    key: 'inverseSine',
	    value: function inverseSine() {
	      return this.asin();
	    }
	  }, {
	    key: 'atan',
	    value: function atan() {
	      return new WrapNative(Math.atan(this.val));
	    }
	  }, {
	    key: 'inverseTangent',
	    value: function inverseTangent() {
	      return this.asin();
	    }
	
	    // cosh...
	    // acosh...
	
	  }, {
	    key: 'log2',
	    value: function log2() {
	      return new WrapNative(Math.log2(this.val));
	    }
	  }, {
	    key: 'log10',
	    value: function log10() {
	      return new WrapNative(Math.log10(this.val));
	    }
	  }]);
	
	  return WrapNative;
	}();
	
	var backends = {
	  'native': {
	    normalize: function normalize(val) {
	      return wrap(val);
	    }
	  },
	
	  'decimal.js': {
	    // Note that decimal.js is never imported by this library!
	    // We're using its methods passed in by the caller. This keeps the library
	    // much smaller for the common case: no decimal.js.
	    // api docs: https://mikemcl.github.io/decimal.js/
	    _requireDecimal: function _requireDecimal(config) {
	      var Decimal = config && (config.Decimal || config.decimal) || global && global.Decimal || global && global.window && window.Decimal
	      // the build/minifier must avoid compiling this in. It's externalized in the gulpfile.
	      || __webpack_require__(1);
	      return Decimal.clone(config);
	    },
	    normalize: function normalize(val) {
	      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
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