/*!
 * @license :taj-test - V1.0.0 - 02/09/2020
 * https://github.com/ujjwalguptaofficial/taj
 * Copyright (c) 2020 @Ujjwal Gupta; Licensed ISC
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/decorators/action.ts":
/*!**********************************!*\
  !*** ./src/decorators/action.ts ***!
  \**********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
// tslint:disable-next-line
function Action(name) {
    return function (target, key) {
        target[key] = function (payload) {
            target.$store.execute(name, payload);
        };
    };
}
;


/***/ }),

/***/ "./src/decorators/getter.ts":
/*!**********************************!*\
  !*** ./src/decorators/getter.ts ***!
  \**********************************/
/*! exports provided: Getter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getter", function() { return Getter; });
function Getter(name) {
    return function (target, key) {
        if (!target._$storeGetters) {
            target._$storeGetters = [];
        }
        target._$storeGetters.push({
            prop: key,
            state: name
        });
    };
}


/***/ }),

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/*! exports provided: Getter, Mutation, Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getter */ "./src/decorators/getter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Getter", function() { return _getter__WEBPACK_IMPORTED_MODULE_0__["Getter"]; });

/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "./src/decorators/mutation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _mutation__WEBPACK_IMPORTED_MODULE_1__["Mutation"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/decorators/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _action__WEBPACK_IMPORTED_MODULE_2__["Action"]; });






/***/ }),

/***/ "./src/decorators/mutation.ts":
/*!************************************!*\
  !*** ./src/decorators/mutation.ts ***!
  \************************************/
/*! exports provided: Mutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
// tslint:disable-next-line
function Mutation(name) {
    return function (target, key) {
        target[key] = function (payload) {
            target.$store.commit(name, payload);
        };
    };
}
;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Getter, Mutation, Action, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./src/interfaces/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ "./src/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Getter", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Getter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Mutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["Action"]; });

/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsdom */ "jsdom");
/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsdom__WEBPACK_IMPORTED_MODULE_2__);
// export * from "./plugin";



var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.prototype.setup = function (Taj) {
        Taj.Component.prototype.$initiate = function (option, cb) {
            var dom = new jsdom__WEBPACK_IMPORTED_MODULE_2__["JSDOM"]("");
            global.window = dom.window;
            global.document = dom.window.document;
            if (cb) {
                cb();
            }
        };
        Object.defineProperty(Taj.Component, "$html", {
            get: function () {
                return this._$element.innerHTML;
            }
        });
        Object.defineProperty(Taj.Component, "$text", {
            get: function () {
                return this._$element.innerText;
            }
        });
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./src/interfaces/index.ts":
/*!*********************************!*\
  !*** ./src/interfaces/index.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/interfaces/store.ts");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/interfaces/store.ts":
/*!*********************************!*\
  !*** ./src/interfaces/store.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "jsdom":
/*!************************!*\
  !*** external "jsdom" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ })

/******/ });
//# sourceMappingURL=taj-test.js.map