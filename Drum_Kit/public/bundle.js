/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DrumButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_keyInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Pad = function Pad($target) {
  var _this = this;

  _classCallCheck(this, Pad);

  _defineProperty(this, "render", function () {
    _utils_keyInfo_js__WEBPACK_IMPORTED_MODULE_1__.default.forEach(function (_ref, idx) {
      var key = _ref.key,
          type = _ref.type,
          src = _ref.src;
      new _DrumButton_js__WEBPACK_IMPORTED_MODULE_0__.default(_this.$pad, {
        key: key,
        type: type,
        src: src
      });
    });
  });

  this.$pad = document.createElement("div");
  this.$pad.classList.add("keys");
  $target.appendChild(this.$pad);
  this.render();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pad);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DrumButton = function DrumButton($target, _ref) {
  var _this = this;

  var _key = _ref.key,
      type = _ref.type,
      src = _ref.src;

  _classCallCheck(this, DrumButton);

  _defineProperty(this, "handleKeyToggle", function (target) {
    return function (e) {
      var key = e.key;

      if (key === _this.key) {
        target.classList.toggle("playing");

        if (target.classList.contains("playing")) {
          _this.$audio.currentTime = 0;

          _this.$audio.play();
        }
      }
    };
  });

  _defineProperty(this, "render", function () {
    var $keyName = document.createElement("kbd");
    $keyName.textContent = _this.key;
    var $keyType = document.createElement("span");
    $keyType.classList.add("sound");
    $keyType.textContent = _this.type;
    _this.$audio = document.createElement("audio");

    _this.$audio.setAttribute("src", _this.audioSrc);

    _this.$audio.dataset.key = _this.key;

    _this.$button.appendChild($keyName);

    _this.$button.appendChild($keyType);

    _this.$button.append(_this.$audio);
  });

  this.key = _key;
  this.type = type;
  this.audioSrc = src;
  this.$button = document.createElement("div");
  this.$button.dataset.key = this.key;
  this.$button.classList.add("key");
  document.addEventListener("keydown", this.handleKeyToggle(this.$button));
  document.addEventListener("keyup", this.handleKeyToggle(this.$button));
  $target.appendChild(this.$button);
  this.render();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrumButton);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keyInfo = [{
  key: "1",
  type: "clap",
  src: "../../sounds/clap.wav"
}, {
  key: "2",
  type: "hihat",
  src: "../../sounds/hihat.wav"
}, {
  key: "3",
  type: "kick",
  src: "../../sounds/kick.wav"
}, {
  key: "4",
  type: "openhat",
  src: "../../sounds/openhat.wav"
}, {
  key: "5",
  type: "boom",
  src: "../../sounds/boom.wav"
}, {
  key: "6",
  type: "ride",
  src: "../../sounds/ride.wav"
}, {
  key: "7",
  type: "snare",
  src: "../../sounds/snare.wav"
}, {
  key: "8",
  type: "tom",
  src: "../../sounds/tom.wav"
}, {
  key: "9",
  type: "tink",
  src: "../../sounds/tink.wav"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyInfo);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

new _components_Pad_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector("#app"));
})();

/******/ })()
;