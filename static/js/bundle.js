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

// (Sticky Nav under Sticky Header) + (Header hiding) when scrolling down, except for mobile screens
var stickyNav = document.querySelector('.page-hero-nav');
var nav = document.querySelector('header');
var scrollUp = 'scroll-up';
var scrollDown = 'scroll-down';
var body = document.querySelector('body');
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

var matchScreenSize = function matchScreenSize(x) {
  if (x.matches) {
    // If media query matches
    var introSectionPadding = document.querySelector('.page-hero');

    if (introSectionPadding) {
      addHeaderHeightAsPadding(introSectionPadding);
    }
  }
};

var screenSize = window.matchMedia('(min-width: 576px)');
document.addEventListener('DOMContentLoaded', function () {
  matchScreenSize(screenSize); // Call listener function at run time

  screenSize.addListener(matchScreenSize); // Attach listener function on state changes
});
var headerHeight = document.querySelector('header').clientHeight;

var addHeaderHeightAsPadding = function addHeaderHeightAsPadding(section) {
  var currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('padding-top'));
  section.style.paddingTop = "".concat(currentPadding + headerHeight, "px");
}; // Closing Notice


var closingNotice = function closingNotice(menuToCloseClass, closingButtonClass) {
  var menuToClose = document.querySelector(menuToCloseClass);
  var closingButton = document.querySelector(closingButtonClass);

  if (closingButton) {
    closingButton.addEventListener('click', function () {
      menuToClose.classList.add('hidden');
    });
  }
};

closingNotice('.notice', '.notice--close'); // Toggling Responsive Menu

var togglingMenu = function togglingMenu(menuToToggleClass, burgerMenuClass) {
  var bodyTag = document.querySelector('body');
  var menuToToggle = document.querySelector(menuToToggleClass);
  var burgerMenu = document.querySelector(burgerMenuClass);
  burgerMenu.addEventListener('click', function () {
    bodyTag.classList.toggle('opened');
    burgerMenu.classList.toggle('opened');
    menuToToggle.classList.toggle('opened');
  });
};

togglingMenu('.nav--mobile__reveal', '.menu--toggle');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInN0aWNreU5hdiIsIm5hdiIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImJvZHkiLCJsYXN0U2Nyb2xsIiwiYWRkSGVhZGVySGVpZ2h0VG9wIiwic2VjdGlvbiIsImN1cnJlbnRQYWRkaW5nIiwicGFyc2VGbG9hdCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJ0b3AiLCJoZWFkZXJIZWlnaHQiLCJjdXJyZW50U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjb250YWlucyIsImFkZCIsIm1hdGNoU2NyZWVuU2l6ZSIsIngiLCJtYXRjaGVzIiwiaW50cm9TZWN0aW9uUGFkZGluZyIsImFkZEhlYWRlckhlaWdodEFzUGFkZGluZyIsInNjcmVlblNpemUiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJjbGllbnRIZWlnaHQiLCJwYWRkaW5nVG9wIiwiY2xvc2luZ05vdGljZSIsIm1lbnVUb0Nsb3NlQ2xhc3MiLCJjbG9zaW5nQnV0dG9uQ2xhc3MiLCJtZW51VG9DbG9zZSIsImNsb3NpbmdCdXR0b24iLCJ0b2dnbGluZ01lbnUiLCJtZW51VG9Ub2dnbGVDbGFzcyIsImJ1cmdlck1lbnVDbGFzcyIsImJvZHlUYWciLCJt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cUJ5QixNQUFyQixDQUE0QixRQUE1QjtBQUNBRixnQkFBWSxDQUFDdkIsU0FBYixDQUF1QnlCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0EsR0FKRDtBQUtBLENBVEQ7O0FBV0FOLFlBQVksQ0FBQyxzQkFBRCxFQUF5QixlQUF6QixDQUFaLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5pbWF0aW9ucyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcbiIsIi8vIFNtb290aCBTY3JvbGwgdG8gYW5jaG9yc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwiLy8gKFN0aWNreSBOYXYgdW5kZXIgU3RpY2t5IEhlYWRlcikgKyAoSGVhZGVyIGhpZGluZykgd2hlbiBzY3JvbGxpbmcgZG93biwgZXhjZXB0IGZvciBtb2JpbGUgc2NyZWVuc1xuXG5jb25zdCBzdGlja3lOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLW5hdicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBzY3JvbGxVcCA9ICdzY3JvbGwtdXAnO1xuY29uc3Qgc2Nyb2xsRG93biA9ICdzY3JvbGwtZG93bic7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IGxhc3RTY3JvbGwgPSAwO1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRUb3AgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKTtcblx0c2VjdGlvbi5zdHlsZS50b3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0Y29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gMCkge1xuXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxVcCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsICYmICFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERvd24pKSB7XG5cdFx0Ly8gZG93blxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRuYXYuY2xhc3NMaXN0LmFkZChzY3JvbGxEb3duKTtcblxuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdHN0aWNreU5hdi5zdHlsZS50b3AgPSAnMCc7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsICYmIG5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyB1cFxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbERvd24pO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbFVwKTtcblx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRhZGRIZWFkZXJIZWlnaHRUb3Aoc3RpY2t5TmF2KTtcblx0XHR9XG5cdH1cblx0bGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG59KTtcblxuLy8gQWRkIGhlYWRlciBoZWlnaHQgYXMgcGFkZGluZy10b3Agb24gZmlyc3Qgc2VjdGlvbiBvZiBlYWNoIHBhZ2VcblxuY29uc3QgbWF0Y2hTY3JlZW5TaXplID0geCA9PiB7XG5cdGlmICh4Lm1hdGNoZXMpIHtcblx0XHQvLyBJZiBtZWRpYSBxdWVyeSBtYXRjaGVzXG5cdFx0Y29uc3QgaW50cm9TZWN0aW9uUGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8nKTtcblx0XHRpZiAoaW50cm9TZWN0aW9uUGFkZGluZykge1xuXHRcdFx0YWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nKGludHJvU2VjdGlvblBhZGRpbmcpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgc2NyZWVuU2l6ZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NzZweCknKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG1hdGNoU2NyZWVuU2l6ZShzY3JlZW5TaXplKTsgLy8gQ2FsbCBsaXN0ZW5lciBmdW5jdGlvbiBhdCBydW4gdGltZVxuXHRzY3JlZW5TaXplLmFkZExpc3RlbmVyKG1hdGNoU2NyZWVuU2l6ZSk7IC8vIEF0dGFjaCBsaXN0ZW5lciBmdW5jdGlvbiBvbiBzdGF0ZSBjaGFuZ2VzXG59KTtcblxuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmcgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KFxuXHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJylcblx0KTtcblx0c2VjdGlvbi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7Y3VycmVudFBhZGRpbmcgKyBoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxuLy8gQ2xvc2luZyBOb3RpY2VcblxuY29uc3QgY2xvc2luZ05vdGljZSA9IChtZW51VG9DbG9zZUNsYXNzLCBjbG9zaW5nQnV0dG9uQ2xhc3MpID0+IHtcblx0Y29uc3QgbWVudVRvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVUb0Nsb3NlQ2xhc3MpO1xuXHRjb25zdCBjbG9zaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zaW5nQnV0dG9uQ2xhc3MpO1xuXHRpZiAoY2xvc2luZ0J1dHRvbikge1xuXHRcdGNsb3NpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRtZW51VG9DbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHR9KTtcblx0fVxufTtcblxuY2xvc2luZ05vdGljZSgnLm5vdGljZScsICcubm90aWNlLS1jbG9zZScpO1xuXG4vLyBUb2dnbGluZyBSZXNwb25zaXZlIE1lbnVcblxuY29uc3QgdG9nZ2xpbmdNZW51ID0gKG1lbnVUb1RvZ2dsZUNsYXNzLCBidXJnZXJNZW51Q2xhc3MpID0+IHtcblx0Y29uc3QgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0Y29uc3QgbWVudVRvVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51VG9Ub2dnbGVDbGFzcyk7XG5cdGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlck1lbnVDbGFzcyk7XG5cdGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Ym9keVRhZy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0XHRidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHRcdG1lbnVUb1RvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0fSk7XG59O1xuXG50b2dnbGluZ01lbnUoJy5uYXYtLW1vYmlsZV9fcmV2ZWFsJywgJy5tZW51LS10b2dnbGUnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=