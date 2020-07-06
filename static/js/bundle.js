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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/animations */ "./src/js/components/animations.js");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_animations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/animations.js":
/*!*****************************************!*\
  !*** ./src/js/components/animations.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Smooth Scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Hide Header on on scroll down
// src:https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
function headsUp(el) {
  var elH = el.clientHeight,
      offset = 0,
      lastScroll = 0;

  function makeOffset() {
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop,
        diff = scrollY - lastScroll;
    offset = offset + diff > elH ? elH : scrollY < 0 ? 0 : offset + diff;
    offset = offset < 0 ? 0 : offset;
    el.style.top = -offset + 'px';
    lastScroll = scrollY;
  }

  makeOffset(); // run at load - if scrolled down the page hides the header

  if (window.addEventListener) return window.addEventListener('scroll', makeOffset);
  window.attachEvent('onscroll', makeOffset);
}

var header = document.querySelector('header');
headsUp(header); // Avoid "#" links to reach their target

$(document).on('click', 'a[href="#"]', function (event) {
  event.preventDefault();
}); // Smooth scroll to anchors

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  if (event.currentTarget.attributes.href.nodeValue !== '#') {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
    }, 700);
  }
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vianneybernet/Sites/emma-herve/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhlYWRzVXAiLCJlbCIsImVsSCIsImNsaWVudEhlaWdodCIsIm9mZnNldCIsImxhc3RTY3JvbGwiLCJtYWtlT2Zmc2V0Iiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJkaWZmIiwic3R5bGUiLCJ0b3AiLCJ3aW5kb3ciLCJhdHRhY2hFdmVudCIsImhlYWRlciIsIiQiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImF0dHJpYnV0ZXMiLCJocmVmIiwibm9kZVZhbHVlIiwiYW5pbWF0ZSIsImF0dHIiLCJoZWFkZXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QixHQUFpQ1MsR0FBakMsR0FBdUNhO0FBRG5ELEtBREQsRUFJQyxHQUpEO0FBTUE7QUFDRCxDQVhELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5pbWF0aW9ucyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcbiIsIi8vIFNtb290aCBTY3JvbGwgdG8gYW5jaG9yc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwiLy8gSGlkZSBIZWFkZXIgb24gb24gc2Nyb2xsIGRvd25cbi8vIHNyYzpodHRwczovL21lZGl1bS5jb20vQG1hcml1c2MyMy9oaWRlLWhlYWRlci1vbi1zY3JvbGwtZG93bi1zaG93LW9uLXNjcm9sbC11cC02N2JiYWFlOWE3OGNcbmZ1bmN0aW9uIGhlYWRzVXAoZWwpIHtcblx0dmFyIGVsSCA9IGVsLmNsaWVudEhlaWdodCxcblx0XHRvZmZzZXQgPSAwLFxuXHRcdGxhc3RTY3JvbGwgPSAwO1xuXG5cdGZ1bmN0aW9uIG1ha2VPZmZzZXQoKSB7XG5cdFx0dmFyIHNjcm9sbFkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuXHRcdFx0ZGlmZiA9IHNjcm9sbFkgLSBsYXN0U2Nyb2xsO1xuXG5cdFx0b2Zmc2V0ID0gb2Zmc2V0ICsgZGlmZiA+IGVsSCA/IGVsSCA6IHNjcm9sbFkgPCAwID8gMCA6IG9mZnNldCArIGRpZmY7XG5cdFx0b2Zmc2V0ID0gb2Zmc2V0IDwgMCA/IDAgOiBvZmZzZXQ7XG5cblx0XHRlbC5zdHlsZS50b3AgPSAtb2Zmc2V0ICsgJ3B4JztcblxuXHRcdGxhc3RTY3JvbGwgPSBzY3JvbGxZO1xuXHR9XG5cdG1ha2VPZmZzZXQoKTsgLy8gcnVuIGF0IGxvYWQgLSBpZiBzY3JvbGxlZCBkb3duIHRoZSBwYWdlIGhpZGVzIHRoZSBoZWFkZXJcblx0aWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG1ha2VPZmZzZXQpO1xuXHR3aW5kb3cuYXR0YWNoRXZlbnQoJ29uc2Nyb2xsJywgbWFrZU9mZnNldCk7XG59XG52YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5oZWFkc1VwKGhlYWRlcik7XG5cbi8vIEF2b2lkIFwiI1wiIGxpbmtzIHRvIHJlYWNoIHRoZWlyIHRhcmdldFxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnYVtocmVmPVwiI1wiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gU21vb3RoIHNjcm9sbCB0byBhbmNob3JzXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0aWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5ocmVmLm5vZGVWYWx1ZSAhPT0gJyMnKSB7XG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0XG5cdFx0XHR9LFxuXHRcdFx0NzAwXG5cdFx0KTtcblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9