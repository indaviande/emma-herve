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

// (Sticky Nav under Sticky Header) + (Header hiding) when scrolling down
var stickyNav = document.querySelector('.page-hero-nav');
var nav = document.querySelector('header');
var scrollUp = 'scroll-up';
var scrollDown = 'scroll-down';
var lastScroll = 0;

var addHeaderHeightTop = function addHeaderHeightTop(section) {
  var currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('top'));
  section.style.top = "".concat(headerHeight, "px");
};

window.addEventListener('scroll', function () {
  var currentScroll = window.pageYOffset;

  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
    // down
    nav.classList.remove(scrollUp);
    nav.classList.add(scrollDown);

    if (stickyNav) {
      stickyNav.style.top = '0';
    }
  } else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
    // up
    nav.classList.remove(scrollDown);
    nav.classList.add(scrollUp);

    if (stickyNav) {
      addHeaderHeightTop(stickyNav);
    }
  }

  lastScroll = currentScroll;
}); // Add header height as padding-top on first section of each page

var headerHeight = document.querySelector('header').clientHeight;
var introSection = document.querySelector('.page-hero, .hp-hero');

var addHeaderHeight = function addHeaderHeight(section) {
  var currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('padding-top'));
  section.style.paddingTop = "".concat(currentPadding + headerHeight, "px");
};

if (introSection) {
  addHeaderHeight(introSection);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInN0aWNreU5hdiIsIm5hdiIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImxhc3RTY3JvbGwiLCJhZGRIZWFkZXJIZWlnaHRUb3AiLCJzZWN0aW9uIiwiY3VycmVudFBhZGRpbmciLCJwYXJzZUZsb2F0Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHlsZSIsInRvcCIsImhlYWRlckhlaWdodCIsImN1cnJlbnRTY3JvbGwiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjb250YWlucyIsImFkZCIsImNsaWVudEhlaWdodCIsImludHJvU2VjdGlvbiIsImFkZEhlYWRlckhlaWdodCIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGNBQTFCLEVBQTBDQyxPQUExQyxDQUFrRCxVQUFBQyxNQUFNLEVBQUk7QUFDM0RBLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDQSxLQUFDLENBQUNDLGNBQUY7QUFFQU4sWUFBUSxDQUFDTyxhQUFULENBQXVCLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsRUFBa0RDLGNBQWxELENBQWlFO0FBQ2hFQyxjQUFRLEVBQUU7QUFEc0QsS0FBakU7QUFHQSxHQU5EO0FBT0EsQ0FSRCxFOzs7Ozs7Ozs7OztBQ0RBO0FBRUEsSUFBTUMsU0FBUyxHQUFHWCxRQUFRLENBQUNPLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBQ0EsSUFBTUssR0FBRyxHQUFHWixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLElBQU1NLFFBQVEsR0FBRyxXQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxhQUFuQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLE9BQU8sRUFBSTtBQUNyQyxNQUFNQyxjQUFjLEdBQUdDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QkosT0FBeEIsRUFBaUMsSUFBakMsRUFBdUNLLGdCQUF2QyxDQUF3RCxLQUF4RCxDQUFELENBQWpDO0FBQ0FMLFNBQU8sQ0FBQ00sS0FBUixDQUFjQyxHQUFkLGFBQXVCQyxZQUF2QjtBQUNBLENBSEQ7O0FBS0FMLE1BQU0sQ0FBQ2hCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdkMsTUFBTXNCLGFBQWEsR0FBR04sTUFBTSxDQUFDTyxXQUE3Qjs7QUFDQSxNQUFJRCxhQUFhLElBQUksQ0FBckIsRUFBd0I7QUFDdkJFLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCakIsUUFBdEI7QUFDQTtBQUNBOztBQUVELE1BQUlhLGFBQWEsR0FBR1gsVUFBaEIsSUFBOEIsQ0FBQ0gsR0FBRyxDQUFDaUIsU0FBSixDQUFjRSxRQUFkLENBQXVCakIsVUFBdkIsQ0FBbkMsRUFBdUU7QUFDdEU7QUFDQUYsT0FBRyxDQUFDaUIsU0FBSixDQUFjQyxNQUFkLENBQXFCakIsUUFBckI7QUFDQUQsT0FBRyxDQUFDaUIsU0FBSixDQUFjRyxHQUFkLENBQWtCbEIsVUFBbEI7O0FBRUEsUUFBSUgsU0FBSixFQUFlO0FBQ2RBLGVBQVMsQ0FBQ1ksS0FBVixDQUFnQkMsR0FBaEIsR0FBc0IsR0FBdEI7QUFDQTtBQUNELEdBUkQsTUFRTyxJQUFJRSxhQUFhLEdBQUdYLFVBQWhCLElBQThCSCxHQUFHLENBQUNpQixTQUFKLENBQWNFLFFBQWQsQ0FBdUJqQixVQUF2QixDQUFsQyxFQUFzRTtBQUM1RTtBQUNBRixPQUFHLENBQUNpQixTQUFKLENBQWNDLE1BQWQsQ0FBcUJoQixVQUFyQjtBQUNBRixPQUFHLENBQUNpQixTQUFKLENBQWNHLEdBQWQsQ0FBa0JuQixRQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDZEssd0JBQWtCLENBQUNMLFNBQUQsQ0FBbEI7QUFDQTtBQUNEOztBQUNESSxZQUFVLEdBQUdXLGFBQWI7QUFDQSxDQXhCRCxFLENBMEJBOztBQUVBLElBQU1ELFlBQVksR0FBR3pCLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixFQUFpQzBCLFlBQXREO0FBQ0EsSUFBTUMsWUFBWSxHQUFHbEMsUUFBUSxDQUFDTyxhQUFULENBQXVCLHNCQUF2QixDQUFyQjs7QUFFQSxJQUFNNEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBbEIsT0FBTyxFQUFJO0FBQ2xDLE1BQU1DLGNBQWMsR0FBR0MsVUFBVSxDQUNoQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QkosT0FBeEIsRUFBaUMsSUFBakMsRUFBdUNLLGdCQUF2QyxDQUF3RCxhQUF4RCxDQURnQyxDQUFqQztBQUdBTCxTQUFPLENBQUNNLEtBQVIsQ0FBY2EsVUFBZCxhQUE4QmxCLGNBQWMsR0FBR08sWUFBL0M7QUFDQSxDQUxEOztBQU9BLElBQUlTLFlBQUosRUFBa0I7QUFDakJDLGlCQUFlLENBQUNELFlBQUQsQ0FBZjtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5pbWF0aW9ucyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcbiIsIi8vIFNtb290aCBTY3JvbGwgdG8gYW5jaG9yc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwiLy8gKFN0aWNreSBOYXYgdW5kZXIgU3RpY2t5IEhlYWRlcikgKyAoSGVhZGVyIGhpZGluZykgd2hlbiBzY3JvbGxpbmcgZG93blxuXG5jb25zdCBzdGlja3lOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLW5hdicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBzY3JvbGxVcCA9ICdzY3JvbGwtdXAnO1xuY29uc3Qgc2Nyb2xsRG93biA9ICdzY3JvbGwtZG93bic7XG5sZXQgbGFzdFNjcm9sbCA9IDA7XG5cbmNvbnN0IGFkZEhlYWRlckhlaWdodFRvcCA9IHNlY3Rpb24gPT4ge1xuXHRjb25zdCBjdXJyZW50UGFkZGluZyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJykpO1xuXHRzZWN0aW9uLnN0eWxlLnRvcCA9IGAke2hlYWRlckhlaWdodH1weGA7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRpZiAoY3VycmVudFNjcm9sbCA9PSAwKSB7XG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGwgJiYgIW5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyBkb3duXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsVXApO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbERvd24pO1xuXG5cdFx0aWYgKHN0aWNreU5hdikge1xuXHRcdFx0c3RpY2t5TmF2LnN0eWxlLnRvcCA9ICcwJztcblx0XHR9XG5cdH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA8IGxhc3RTY3JvbGwgJiYgbmF2LmNsYXNzTGlzdC5jb250YWlucyhzY3JvbGxEb3duKSkge1xuXHRcdC8vIHVwXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsRG93bik7XG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoc2Nyb2xsVXApO1xuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdGFkZEhlYWRlckhlaWdodFRvcChzdGlja3lOYXYpO1xuXHRcdH1cblx0fVxuXHRsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbn0pO1xuXG4vLyBBZGQgaGVhZGVyIGhlaWdodCBhcyBwYWRkaW5nLXRvcCBvbiBmaXJzdCBzZWN0aW9uIG9mIGVhY2ggcGFnZVxuXG5jb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5jb25zdCBpbnRyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLCAuaHAtaGVybycpO1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHQgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KFxuXHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJylcblx0KTtcblx0c2VjdGlvbi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7Y3VycmVudFBhZGRpbmcgKyBoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxuaWYgKGludHJvU2VjdGlvbikge1xuXHRhZGRIZWFkZXJIZWlnaHQoaW50cm9TZWN0aW9uKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=