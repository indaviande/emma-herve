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
var introSection = document.querySelector('.page-hero');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInN0aWNreU5hdiIsIm5hdiIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImxhc3RTY3JvbGwiLCJhZGRIZWFkZXJIZWlnaHRUb3AiLCJzZWN0aW9uIiwiY3VycmVudFBhZGRpbmciLCJwYXJzZUZsb2F0Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHlsZSIsInRvcCIsImhlYWRlckhlaWdodCIsImN1cnJlbnRTY3JvbGwiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjb250YWlucyIsImFkZCIsImNsaWVudEhlaWdodCIsImludHJvU2VjdGlvbiIsImFkZEhlYWRlckhlaWdodCIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0Es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LFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixFQUFpQzBCLFlBQXREO0FBQ0EsSUFBTUMsWUFBWSxHQUFHbEMsUUFBUSxDQUFDTyxhQUFULENBQXVCLFlBQXZCLENBQXJCOztBQUVBLElBQU00QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFsQixPQUFPLEVBQUk7QUFDbEMsTUFBTUMsY0FBYyxHQUFHQyxVQUFVLENBQ2hDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCSixPQUF4QixFQUFpQyxJQUFqQyxFQUF1Q0ssZ0JBQXZDLENBQXdELGFBQXhELENBRGdDLENBQWpDO0FBR0FMLFNBQU8sQ0FBQ00sS0FBUixDQUFjYSxVQUFkLGFBQThCbEIsY0FBYyxHQUFHTyxZQUEvQztBQUNBLENBTEQ7O0FBT0EsSUFBSVMsWUFBSixFQUFrQjtBQUNqQkMsaUJBQWUsQ0FBQ0QsWUFBRCxDQUFmO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9hbmltYXRpb25zJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xuIiwiLy8gU21vb3RoIFNjcm9sbCB0byBhbmNob3JzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcblx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCIvLyAoU3RpY2t5IE5hdiB1bmRlciBTdGlja3kgSGVhZGVyKSArIChIZWFkZXIgaGlkaW5nKSB3aGVuIHNjcm9sbGluZyBkb3duXG5cbmNvbnN0IHN0aWNreU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8tbmF2Jyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IHNjcm9sbFVwID0gJ3Njcm9sbC11cCc7XG5jb25zdCBzY3JvbGxEb3duID0gJ3Njcm9sbC1kb3duJztcbmxldCBsYXN0U2Nyb2xsID0gMDtcblxuY29uc3QgYWRkSGVhZGVySGVpZ2h0VG9wID0gc2VjdGlvbiA9PiB7XG5cdGNvbnN0IGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd0b3AnKSk7XG5cdHNlY3Rpb24uc3R5bGUudG9wID0gYCR7aGVhZGVySGVpZ2h0fXB4YDtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdGlmIChjdXJyZW50U2Nyb2xsID09IDApIHtcblx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsVXApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCAmJiAhbmF2LmNsYXNzTGlzdC5jb250YWlucyhzY3JvbGxEb3duKSkge1xuXHRcdC8vIGRvd25cblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxVcCk7XG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoc2Nyb2xsRG93bik7XG5cblx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRzdGlja3lOYXYuc3R5bGUudG9wID0gJzAnO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsIDwgbGFzdFNjcm9sbCAmJiBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERvd24pKSB7XG5cdFx0Ly8gdXBcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxEb3duKTtcblx0XHRuYXYuY2xhc3NMaXN0LmFkZChzY3JvbGxVcCk7XG5cdFx0aWYgKHN0aWNreU5hdikge1xuXHRcdFx0YWRkSGVhZGVySGVpZ2h0VG9wKHN0aWNreU5hdik7XG5cdFx0fVxuXHR9XG5cdGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xufSk7XG5cbi8vIEFkZCBoZWFkZXIgaGVpZ2h0IGFzIHBhZGRpbmctdG9wIG9uIGZpcnN0IHNlY3Rpb24gb2YgZWFjaCBwYWdlXG5cbmNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcbmNvbnN0IGludHJvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8nKTtcblxuY29uc3QgYWRkSGVhZGVySGVpZ2h0ID0gc2VjdGlvbiA9PiB7XG5cdGNvbnN0IGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdChcblx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpXG5cdCk7XG5cdHNlY3Rpb24uc3R5bGUucGFkZGluZ1RvcCA9IGAke2N1cnJlbnRQYWRkaW5nICsgaGVhZGVySGVpZ2h0fXB4YDtcbn07XG5cbmlmIChpbnRyb1NlY3Rpb24pIHtcblx0YWRkSGVhZGVySGVpZ2h0KGludHJvU2VjdGlvbik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9