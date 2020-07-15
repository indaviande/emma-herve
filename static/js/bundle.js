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
} // Closing Notice


var closingNotice = function closingNotice(menuToCloseClass, closingButtonClass) {
  var menuToClose = document.querySelector(menuToCloseClass);
  var closingButton = document.querySelector(closingButtonClass);
  closingButton.addEventListener('click', function () {
    menuToClose.classList.add('hidden');
  });
};

closingNotice('.notice', '.notice--close'); // Toggling Responsive Menu

var togglingMenu = function togglingMenu(menuToToggleClass, burgerMenuClass) {
  var menuToToggle = document.querySelector(menuToToggleClass);
  var burgerMenu = document.querySelector(closingButtonClass);
  burgerMenu.addEventListener('click', function () {
    console.log('clicked');
    burgerMenu.classList.toggle('opened');
    menuToToggle.classList.toggle('opened');
  });
};

closingNotice('.nav--mobile__reveal', '.menu--toggle');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInN0aWNreU5hdiIsIm5hdiIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImxhc3RTY3JvbGwiLCJhZGRIZWFkZXJIZWlnaHRUb3AiLCJzZWN0aW9uIiwiY3VycmVudFBhZGRpbmciLCJwYXJzZUZsb2F0Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHlsZSIsInRvcCIsImhlYWRlckhlaWdodCIsImN1cnJlbnRTY3JvbGwiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjb250YWlucyIsImFkZCIsImNsaWVudEhlaWdodCIsImludHJvU2VjdGlvbiIsImFkZEhlYWRlckhlaWdodCIsInBhZGRpbmdUb3AiLCJjbG9zaW5nTm90aWNlIiwibWVudVRvQ2xvc2VDbGFzcyIsImNsb3NpbmdCdXR0b25DbGFzcyIsIm1lbnVUb0Nsb3NlIiwiY2xvc2luZ0J1dHRvbiIsInRvZ2dsaW5nTWVudSIsIm1lbnVUb1RvZ2dsZUNsYXNzIiwiYnVyZ2VyTWVudUNsYXNzIiwibWVudVRvVG9nZ2xlIiwiYnVyZ2VyTWVudSIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGNBQTFCLEVBQTBDQyxPQUExQyxDQUFrRCxVQUFBQyxNQUFNLEVBQUk7QUFDM0RBLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDQSxLQUFDLENBQUNDLGNBQUY7QUFFQU4sWUFBUSxDQUFDTyxhQUFULENBQXVCLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsRUFBa0RDLGNBQWxELENBQWlFO0FBQ2hFQyxjQUFRLEVBQUU7QUFEc0QsS0FBakU7QUFHQSxHQU5EO0FBT0EsQ0FSRCxFOzs7Ozs7Ozs7OztBQ0RBO0FBRUEsSUFBTUMsU0FBUyxHQUFHWCxRQUFRLENBQUNPLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBQ0EsSUFBTUssR0FBRyxHQUFHWixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLElBQU1NLFFBQVEsR0FBRyxXQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxhQUFuQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLE9BQU8sRUFBSTtBQUNyQyxNQUFNQyxjQUFjLEdBQUdDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QkosT0FBeEIsRUFBaUMsSUFBakMsRUFBdUNLLGdCQUF2QyxDQUF3RCxLQUF4RCxDQUFELENBQWpDO0FBQ0FMLFNBQU8sQ0FBQ00sS0FBUixDQUFjQyxHQUFkLGFBQXVCQyxZQUF2QjtBQUNBLENBSEQ7O0FBS0FMLE1BQU0sQ0FBQ2hCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdkMsTUFBTXNCLGFBQWEsR0FBR04sTUFBTSxDQUFDTyxXQUE3Qjs7QUFDQSxNQUFJRCxhQUFhLElBQUksQ0FBckIsRUFBd0I7QUFDdkJFLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCakIsUUFBdEI7QUFDQTtBQUNBOztBQUVELE1BQUlhLGFBQWEsR0FBR1gsVUFBaEIsSUFBOEIsQ0FBQ0gsR0FBRyxDQUFDaUIsU0FBSixDQUFjRSxRQUFkLENBQXVCakIsVUFBdkIsQ0FBbkMsRUFBdUU7QUFDdEU7QUFDQUYsT0FBRyxDQUFDaUIsU0FBSixDQUFjQyxNQUFkLENBQXFCakIsUUFBckI7QUFDQUQsT0FBRyxDQUFDaUIsU0FBSixDQUFjRyxHQUFkLENBQWtCbEIsVUFBbEI7O0FBRUEsUUFBSUgsU0FBSixFQUFlO0FBQ2RBLGVBQVMsQ0FBQ1ksS0FBVixDQUFnQkMsR0FBaEIsR0FBc0IsR0FBdEI7QUFDQTtBQUNELEdBUkQsTUFRTyxJQUFJRSxhQUFhLEdBQUdYLFVBQWhCLElBQThCSCxHQUFHLENBQUNpQixTQUFKLENBQWNFLFFBQWQsQ0FBdUJqQixVQUF2QixDQUFsQyxFQUFzRTtBQUM1RTtBQUNBRixPQUFHLENBQUNpQixTQUFKLENBQWNDLE1BQWQsQ0FBcUJoQixVQUFyQjtBQUNBRixPQUFHLENBQUNpQixTQUFKLENBQWNHLEdBQWQsQ0FBa0JuQixRQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDZEssd0JBQWtCLENBQUNMLFNBQUQsQ0FBbEI7QUFDQTtBQUNEOztBQUNESSxZQUFVLEdBQUdXLGFBQWI7QUFDQSxDQXhCRCxFLENBMEJBOztBQUVBLElBQU1ELFlBQVksR0FBR3pCLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixFQUFpQzBCLFlBQXREO0FBQ0EsSUFBTUMsWUFBWSxHQUFHbEMsUUFBUSxDQUFDTyxhQUFULENBQXVCLFlBQXZCLENBQXJCOztBQUVBLElBQU00QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFsQixPQUFPLEVBQUk7QUFDbEMsTUFBTUMsY0FBYyxHQUFHQyxVQUFVLENBQ2hDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCSixPQUF4QixFQUFpQyxJQUFqQyxFQUF1Q0ssZ0JBQXZDLENBQXdELGFBQXhELENBRGdDLENBQWpDO0FBR0FMLFNBQU8sQ0FBQ00sS0FBUixDQUFjYSxVQUFkLGFBQThCbEIsY0FBYyxHQUFHTyxZQUEvQztBQUNBLENBTEQ7O0FBT0EsSUFBSVMsWUFBSixFQUFrQjtBQUNqQkMsaUJBQWUsQ0FBQ0QsWUFBRCxDQUFmO0FBQ0EsQyxDQUVEOzs7QUFFQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLGdCQUFELEVBQW1CQyxrQkFBbkIsRUFBMEM7QUFDL0QsTUFBTUMsV0FBVyxHQUFHeEMsUUFBUSxDQUFDTyxhQUFULENBQXVCK0IsZ0JBQXZCLENBQXBCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHekMsUUFBUSxDQUFDTyxhQUFULENBQXVCZ0Msa0JBQXZCLENBQXRCO0FBQ0FFLGVBQWEsQ0FBQ3JDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDN0NvQyxlQUFXLENBQUNYLFNBQVosQ0FBc0JHLEdBQXRCLENBQTBCLFFBQTFCO0FBQ0EsR0FGRDtBQUdBLENBTkQ7O0FBUUFLLGFBQWEsQ0FBQyxTQUFELEVBQVksZ0JBQVosQ0FBYixDLENBRUE7O0FBRUEsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsaUJBQUQsRUFBb0JDLGVBQXBCLEVBQXdDO0FBQzVELE1BQU1DLFlBQVksR0FBRzdDLFFBQVEsQ0FBQ08sYUFBVCxDQUF1Qm9DLGlCQUF2QixDQUFyQjtBQUNBLE1BQU1HLFVBQVUsR0FBRzlDLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QmdDLGtCQUF2QixDQUFuQjtBQUNBTyxZQUFVLENBQUMxQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQzFDMkMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBRixjQUFVLENBQUNqQixTQUFYLENBQXFCb0IsTUFBckIsQ0FBNEIsUUFBNUI7QUFDQUosZ0JBQVksQ0FBQ2hCLFNBQWIsQ0FBdUJvQixNQUF2QixDQUE4QixRQUE5QjtBQUNBLEdBSkQ7QUFLQSxDQVJEOztBQVVBWixhQUFhLENBQUMsc0JBQUQsRUFBeUIsZUFBekIsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL2FuaW1hdGlvbnMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVudSc7XG4iLCIvLyBTbW9vdGggU2Nyb2xsIHRvIGFuY2hvcnNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChhbmNob3IgPT4ge1xuXHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpKS5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCdcblx0XHR9KTtcblx0fSk7XG59KTtcbiIsIi8vIChTdGlja3kgTmF2IHVuZGVyIFN0aWNreSBIZWFkZXIpICsgKEhlYWRlciBoaWRpbmcpIHdoZW4gc2Nyb2xsaW5nIGRvd25cblxuY29uc3Qgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVyby1uYXYnKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3Qgc2Nyb2xsVXAgPSAnc2Nyb2xsLXVwJztcbmNvbnN0IHNjcm9sbERvd24gPSAnc2Nyb2xsLWRvd24nO1xubGV0IGxhc3RTY3JvbGwgPSAwO1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRUb3AgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKTtcblx0c2VjdGlvbi5zdHlsZS50b3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0Y29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gMCkge1xuXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxVcCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsICYmICFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERvd24pKSB7XG5cdFx0Ly8gZG93blxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRuYXYuY2xhc3NMaXN0LmFkZChzY3JvbGxEb3duKTtcblxuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdHN0aWNreU5hdi5zdHlsZS50b3AgPSAnMCc7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsICYmIG5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyB1cFxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbERvd24pO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbFVwKTtcblx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRhZGRIZWFkZXJIZWlnaHRUb3Aoc3RpY2t5TmF2KTtcblx0XHR9XG5cdH1cblx0bGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG59KTtcblxuLy8gQWRkIGhlYWRlciBoZWlnaHQgYXMgcGFkZGluZy10b3Agb24gZmlyc3Qgc2VjdGlvbiBvZiBlYWNoIHBhZ2VcblxuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuY29uc3QgaW50cm9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVybycpO1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHQgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KFxuXHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJylcblx0KTtcblx0c2VjdGlvbi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7Y3VycmVudFBhZGRpbmcgKyBoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxuaWYgKGludHJvU2VjdGlvbikge1xuXHRhZGRIZWFkZXJIZWlnaHQoaW50cm9TZWN0aW9uKTtcbn1cblxuLy8gQ2xvc2luZyBOb3RpY2VcblxuY29uc3QgY2xvc2luZ05vdGljZSA9IChtZW51VG9DbG9zZUNsYXNzLCBjbG9zaW5nQnV0dG9uQ2xhc3MpID0+IHtcblx0Y29uc3QgbWVudVRvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVUb0Nsb3NlQ2xhc3MpO1xuXHRjb25zdCBjbG9zaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zaW5nQnV0dG9uQ2xhc3MpO1xuXHRjbG9zaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdG1lbnVUb0Nsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHR9KTtcbn07XG5cbmNsb3NpbmdOb3RpY2UoJy5ub3RpY2UnLCAnLm5vdGljZS0tY2xvc2UnKTtcblxuLy8gVG9nZ2xpbmcgUmVzcG9uc2l2ZSBNZW51XG5cbmNvbnN0IHRvZ2dsaW5nTWVudSA9IChtZW51VG9Ub2dnbGVDbGFzcywgYnVyZ2VyTWVudUNsYXNzKSA9PiB7XG5cdGNvbnN0IG1lbnVUb1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudVRvVG9nZ2xlQ2xhc3MpO1xuXHRjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zaW5nQnV0dG9uQ2xhc3MpO1xuXHRidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG5cdFx0YnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0XHRtZW51VG9Ub2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG5cdH0pO1xufTtcblxuY2xvc2luZ05vdGljZSgnLm5hdi0tbW9iaWxlX19yZXZlYWwnLCAnLm1lbnUtLXRvZ2dsZScpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==