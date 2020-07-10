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
headsUp(header); // // Avoid "#" links to reach their target
// $(document).on('click', 'a[href="#"]', function(event) {
// 	event.preventDefault();
// });
// Smooth scroll to anchors
// $(document).on('click', 'a[href^="#"]', function(event) {
// 	event.preventDefault();
// 	if (event.currentTarget.attributes.href.nodeValue !== '#') {
// 		$('html, body').animate(
// 			{
// 				scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
// 			},
// 			700
// 		);
// 	}
// });
// Add header height as padding-top on first section of the page

var headerHeight = document.querySelector('header').clientHeight;

var addHeaderHeight = function addHeaderHeight(section) {
  var currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('padding-top'));
  section.style.paddingTop = "".concat(currentPadding + headerHeight, "px");
};

var introSection = document.querySelector('.page-hero, .hp-hero');

if (introSection) {
  addHeaderHeight(introSection);
} // Add padding-top as top for sticky positioning


var addPadding2Top = function addPadding2Top(section) {
  section.style.top = window.getComputedStyle(section, null).getPropertyValue('padding-top');
};

var addHeaderHeightTop = function addHeaderHeightTop(section) {
  var currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('top'));
  section.style.top = "".concat(headerHeight, "px");
};

var stickyNav = document.querySelector('.page-hero-nav');
addPadding2Top(stickyNav); // const addHeaderHeightTop = section => {
// 	const currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('top'));
// 	section.style.top = `${headerHeight}px`;
// };
// const stickyNav = document.querySelector('.nav-sticky .sticky-container');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhlYWRzVXAiLCJlbCIsImVsSCIsImNsaWVudEhlaWdodCIsIm9mZnNldCIsImxhc3RTY3JvbGwiLCJtYWtlT2Zmc2V0Iiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJkaWZmIiwic3R5bGUiLCJ0b3AiLCJ3aW5kb3ciLCJhdHRhY2hFdmVudCIsImhlYWRlciIsImhlYWRlckhlaWdodCIsImFkZEhlYWRlckhlaWdodCIsInNlY3Rpb24iLCJjdXJyZW50UGFkZGluZyIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBhZGRpbmdUb3AiLCJpbnRyb1NlY3Rpb24iLCJhZGRQYWRkaW5nMlRvcCIsImFkZEhlYWRlckhlaWdodFRvcCIsInN0aWNreU5hdiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsY0FBMUIsRUFBMENDLE9BQTFDLENBQWtELFVBQUFDLE1BQU0sRUFBSTtBQUMzREEsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTQyxDQUFULEVBQVk7QUFDNUNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBTixZQUFRLENBQUNPLGFBQVQsQ0FBdUIsS0FBS0MsWUFBTCxDQUFrQixNQUFsQixDQUF2QixFQUFrREMsY0FBbEQsQ0FBaUU7QUFDaEVDLGNBQVEsRUFBRTtBQURzRCxLQUFqRTtBQUdBLEdBTkQ7QUFPQSxDQVJELEU7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBLFNBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBQ3BCLE1BQUlDLEdBQUcsR0FBR0QsRUFBRSxDQUFDRSxZQUFiO0FBQUEsTUFDQ0MsTUFBTSxHQUFHLENBRFY7QUFBQSxNQUVDQyxVQUFVLEdBQUcsQ0FGZDs7QUFJQSxXQUFTQyxVQUFULEdBQXNCO0FBQ3JCLFFBQUlDLE9BQU8sR0FBR2xCLFFBQVEsQ0FBQ21CLGVBQVQsQ0FBeUJDLFNBQXpCLElBQXNDcEIsUUFBUSxDQUFDcUIsSUFBVCxDQUFjRCxTQUFsRTtBQUFBLFFBQ0NFLElBQUksR0FBR0osT0FBTyxHQUFHRixVQURsQjtBQUdBRCxVQUFNLEdBQUdBLE1BQU0sR0FBR08sSUFBVCxHQUFnQlQsR0FBaEIsR0FBc0JBLEdBQXRCLEdBQTRCSyxPQUFPLEdBQUcsQ0FBVixHQUFjLENBQWQsR0FBa0JILE1BQU0sR0FBR08sSUFBaEU7QUFDQVAsVUFBTSxHQUFHQSxNQUFNLEdBQUcsQ0FBVCxHQUFhLENBQWIsR0FBaUJBLE1BQTFCO0FBRUFILE1BQUUsQ0FBQ1csS0FBSCxDQUFTQyxHQUFULEdBQWUsQ0FBQ1QsTUFBRCxHQUFVLElBQXpCO0FBRUFDLGNBQVUsR0FBR0UsT0FBYjtBQUNBOztBQUNERCxZQUFVLEdBaEJVLENBZ0JOOztBQUNkLE1BQUlRLE1BQU0sQ0FBQ3JCLGdCQUFYLEVBQTZCLE9BQU9xQixNQUFNLENBQUNyQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2EsVUFBbEMsQ0FBUDtBQUM3QlEsUUFBTSxDQUFDQyxXQUFQLENBQW1CLFVBQW5CLEVBQStCVCxVQUEvQjtBQUNBOztBQUNELElBQUlVLE1BQU0sR0FBRzNCLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FJLE9BQU8sQ0FBQ2dCLE1BQUQsQ0FBUCxDLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUc1QixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNPLFlBQXREOztBQUVBLElBQU1lLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsT0FBTyxFQUFJO0FBQ2xDLE1BQU1DLGNBQWMsR0FBR0MsVUFBVSxDQUNoQ1AsTUFBTSxDQUFDUSxnQkFBUCxDQUF3QkgsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUNJLGdCQUF2QyxDQUF3RCxhQUF4RCxDQURnQyxDQUFqQztBQUdBSixTQUFPLENBQUNQLEtBQVIsQ0FBY1ksVUFBZCxhQUE4QkosY0FBYyxHQUFHSCxZQUEvQztBQUNBLENBTEQ7O0FBT0EsSUFBTVEsWUFBWSxHQUFHcEMsUUFBUSxDQUFDTyxhQUFULENBQXVCLHNCQUF2QixDQUFyQjs7QUFDQSxJQUFJNkIsWUFBSixFQUFrQjtBQUNqQlAsaUJBQWUsQ0FBQ08sWUFBRCxDQUFmO0FBQ0EsQyxDQUVEOzs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFQLE9BQU8sRUFBSTtBQUNqQ0EsU0FBTyxDQUFDUCxLQUFSLENBQWNDLEdBQWQsR0FBb0JDLE1BQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0JILE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDSSxnQkFBdkMsQ0FBd0QsYUFBeEQsQ0FBcEI7QUFDQSxDQUZEOztBQUlBLElBQU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQVIsT0FBTyxFQUFJO0FBQ3JDLE1BQU1DLGNBQWMsR0FBR0MsVUFBVSxDQUFDUCxNQUFNLENBQUNRLGdCQUFQLENBQXdCSCxPQUF4QixFQUFpQyxJQUFqQyxFQUF1Q0ksZ0JBQXZDLENBQXdELEtBQXhELENBQUQsQ0FBakM7QUFDQUosU0FBTyxDQUFDUCxLQUFSLENBQWNDLEdBQWQsYUFBdUJJLFlBQXZCO0FBQ0EsQ0FIRDs7QUFLQSxJQUFNVyxTQUFTLEdBQUd2QyxRQUFRLENBQUNPLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBRUE4QixjQUFjLENBQUNFLFNBQUQsQ0FBZCxDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSw2RSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9hbmltYXRpb25zJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xuIiwiLy8gU21vb3RoIFNjcm9sbCB0byBhbmNob3JzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcblx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCIvLyBIaWRlIEhlYWRlciBvbiBvbiBzY3JvbGwgZG93blxuLy8gc3JjOmh0dHBzOi8vbWVkaXVtLmNvbS9AbWFyaXVzYzIzL2hpZGUtaGVhZGVyLW9uLXNjcm9sbC1kb3duLXNob3ctb24tc2Nyb2xsLXVwLTY3YmJhYWU5YTc4Y1xuZnVuY3Rpb24gaGVhZHNVcChlbCkge1xuXHR2YXIgZWxIID0gZWwuY2xpZW50SGVpZ2h0LFxuXHRcdG9mZnNldCA9IDAsXG5cdFx0bGFzdFNjcm9sbCA9IDA7XG5cblx0ZnVuY3Rpb24gbWFrZU9mZnNldCgpIHtcblx0XHR2YXIgc2Nyb2xsWSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG5cdFx0XHRkaWZmID0gc2Nyb2xsWSAtIGxhc3RTY3JvbGw7XG5cblx0XHRvZmZzZXQgPSBvZmZzZXQgKyBkaWZmID4gZWxIID8gZWxIIDogc2Nyb2xsWSA8IDAgPyAwIDogb2Zmc2V0ICsgZGlmZjtcblx0XHRvZmZzZXQgPSBvZmZzZXQgPCAwID8gMCA6IG9mZnNldDtcblxuXHRcdGVsLnN0eWxlLnRvcCA9IC1vZmZzZXQgKyAncHgnO1xuXG5cdFx0bGFzdFNjcm9sbCA9IHNjcm9sbFk7XG5cdH1cblx0bWFrZU9mZnNldCgpOyAvLyBydW4gYXQgbG9hZCAtIGlmIHNjcm9sbGVkIGRvd24gdGhlIHBhZ2UgaGlkZXMgdGhlIGhlYWRlclxuXHRpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbWFrZU9mZnNldCk7XG5cdHdpbmRvdy5hdHRhY2hFdmVudCgnb25zY3JvbGwnLCBtYWtlT2Zmc2V0KTtcbn1cbnZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmhlYWRzVXAoaGVhZGVyKTtcblxuLy8gLy8gQXZvaWQgXCIjXCIgbGlua3MgdG8gcmVhY2ggdGhlaXIgdGFyZ2V0XG5cbi8vICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhW2hyZWY9XCIjXCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIH0pO1xuXG4vLyBTbW9vdGggc2Nyb2xsIHRvIGFuY2hvcnNcblxuLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gXHRpZiAoZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmhyZWYubm9kZVZhbHVlICE9PSAnIycpIHtcbi8vIFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcbi8vIFx0XHRcdHtcbi8vIFx0XHRcdFx0c2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHRcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHQ3MDBcbi8vIFx0XHQpO1xuLy8gXHR9XG4vLyB9KTtcblxuLy8gQWRkIGhlYWRlciBoZWlnaHQgYXMgcGFkZGluZy10b3Agb24gZmlyc3Qgc2VjdGlvbiBvZiB0aGUgcGFnZVxuXG5jb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5cbmNvbnN0IGFkZEhlYWRlckhlaWdodCA9IHNlY3Rpb24gPT4ge1xuXHRjb25zdCBjdXJyZW50UGFkZGluZyA9IHBhcnNlRmxvYXQoXG5cdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKVxuXHQpO1xuXHRzZWN0aW9uLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtjdXJyZW50UGFkZGluZyArIGhlYWRlckhlaWdodH1weGA7XG59O1xuXG5jb25zdCBpbnRyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLCAuaHAtaGVybycpO1xuaWYgKGludHJvU2VjdGlvbikge1xuXHRhZGRIZWFkZXJIZWlnaHQoaW50cm9TZWN0aW9uKTtcbn1cblxuLy8gQWRkIHBhZGRpbmctdG9wIGFzIHRvcCBmb3Igc3RpY2t5IHBvc2l0aW9uaW5nXG5jb25zdCBhZGRQYWRkaW5nMlRvcCA9IHNlY3Rpb24gPT4ge1xuXHRzZWN0aW9uLnN0eWxlLnRvcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyk7XG59O1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRUb3AgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKTtcblx0c2VjdGlvbi5zdHlsZS50b3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxuY29uc3Qgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVyby1uYXYnKTtcblxuYWRkUGFkZGluZzJUb3Aoc3RpY2t5TmF2KTtcblxuLy8gY29uc3QgYWRkSGVhZGVySGVpZ2h0VG9wID0gc2VjdGlvbiA9PiB7XG4vLyBcdGNvbnN0IGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd0b3AnKSk7XG4vLyBcdHNlY3Rpb24uc3R5bGUudG9wID0gYCR7aGVhZGVySGVpZ2h0fXB4YDtcbi8vIH07XG5cbi8vIGNvbnN0IHN0aWNreU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3RpY2t5IC5zdGlja3ktY29udGFpbmVyJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9