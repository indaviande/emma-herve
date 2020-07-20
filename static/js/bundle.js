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
/* harmony import */ var _components_sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sticky */ "./src/js/components/sticky.js");
/* harmony import */ var _components_sticky__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_sticky__WEBPACK_IMPORTED_MODULE_2__);




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
}); // All colored-circle with transition delay

var menuItemsWithChildrens = document.querySelectorAll('.colored-circle-element, .pour-qui-block-image');
menuItemsWithChildrens.forEach(function (menuItemWithChildrens, index) {
  var subMenuItems = menuItemWithChildrens.querySelectorAll('.colored-circle');
  subMenuItems.forEach(function (subMenuItem) {
    subMenuItem.style.animationDelay = "".concat(500 * index, "ms");
  });
}); // Fadein when text appears

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio >= 0.1) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, {
  threshold: [0, 0.1, 1]
});
var slideReveals = document.querySelectorAll('.slide__reveal'); // const pBig = document.querySelectorAll('p.big');

slideReveals.forEach(function (slide) {
  observer.observe(slide);
}); // realisations.forEach(realisation => {
// 	observer.observe(realisation);
// });
// pBig.forEach(realisation => {
// 	observer.observe(realisation);
// });

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
  var headerHeight = document.querySelector('header').clientHeight;
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
}); // document.addEventListener('DOMContentLoaded', () => {
// 	const headerHeight2 = document.querySelector('header').clientHeight;
// 	console.log('new ' + headerHeight2);
// });

var headerHeight = document.querySelector('header').clientHeight;

var addHeaderHeightAsPadding = function addHeaderHeightAsPadding(section) {
  var headerHeight = document.querySelector('header').clientHeight;
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

/***/ "./src/js/components/sticky.js":
/*!*************************************!*\
  !*** ./src/js/components/sticky.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// // Fadein when text appears (src: https://css-tricks.com/sticky-smooth-active-nav/)
var navStickySection = document.querySelector('.page-hero-nav');

if (navStickySection) {
  var mainNavLinks = navStickySection.querySelectorAll('h5 a');
  var headerHeight = document.querySelector('header').clientHeight;
  var lastId;
  var cur = [];
  window.addEventListener('scroll', function (event) {
    var fromTop = window.scrollY + headerHeight + window.innerHeight / 4;
    mainNavLinks.forEach(function (link) {
      var section = document.querySelector(link.hash);

      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtZW51SXRlbXNXaXRoQ2hpbGRyZW5zIiwibWVudUl0ZW1XaXRoQ2hpbGRyZW5zIiwiaW5kZXgiLCJzdWJNZW51SXRlbXMiLCJzdWJNZW51SXRlbSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHJlc2hvbGQiLCJzbGlkZVJldmVhbHMiLCJzbGlkZSIsIm9ic2VydmUiLCJzdGlja3lOYXYiLCJuYXYiLCJzY3JvbGxVcCIsInNjcm9sbERvd24iLCJib2R5IiwibGFzdFNjcm9sbCIsImFkZEhlYWRlckhlaWdodFRvcCIsInNlY3Rpb24iLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50UGFkZGluZyIsInBhcnNlRmxvYXQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRvcCIsImN1cnJlbnRTY3JvbGwiLCJwYWdlWU9mZnNldCIsImNvbnRhaW5zIiwibWF0Y2hTY3JlZW5TaXplIiwieCIsIm1hdGNoZXMiLCJpbnRyb1NlY3Rpb25QYWRkaW5nIiwiYWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nIiwic2NyZWVuU2l6ZSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInBhZGRpbmdUb3AiLCJjbG9zaW5nTm90aWNlIiwibWVudVRvQ2xvc2VDbGFzcyIsImNsb3NpbmdCdXR0b25DbGFzcyIsIm1lbnVUb0Nsb3NlIiwiY2xvc2luZ0J1dHRvbiIsInRvZ2dsaW5nTWVudSIsIm1lbnVUb1RvZ2dsZUNsYXNzIiwiYnVyZ2VyTWVudUNsYXNzIiwiYm9keVRhZyIsIm1lbnVUb1RvZ2dsZSIsImJ1cmdlck1lbnUiLCJ0b2dnbGUiLCJuYXZTdGlja3lTZWN0aW9uIiwibWFpbk5hdkxpbmtzIiwibGFzdElkIiwiY3VyIiwiZXZlbnQiLCJmcm9tVG9wIiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwibGluayIsImhhc2giLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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QUF2QixFQUFpQ2lDLFlBQXREO0FBRUEsTUFBSWlDLE1BQUo7QUFDQSxNQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUVBL0IsUUFBTSxDQUFDdkMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQXVFLEtBQUssRUFBSTtBQUMxQyxRQUFJQyxPQUFPLEdBQUdqQyxNQUFNLENBQUNrQyxPQUFQLEdBQWlCdEMsWUFBakIsR0FBZ0NJLE1BQU0sQ0FBQ21DLFdBQVAsR0FBcUIsQ0FBbkU7QUFFQU4sZ0JBQVksQ0FBQ3RFLE9BQWIsQ0FBcUIsVUFBQTZFLElBQUksRUFBSTtBQUM1QixVQUFJekMsT0FBTyxHQUFHdEMsUUFBUSxDQUFDTyxhQUFULENBQXVCd0UsSUFBSSxDQUFDQyxJQUE1QixDQUFkOztBQUVBLFVBQUkxQyxPQUFPLENBQUMyQyxTQUFSLElBQXFCTCxPQUFyQixJQUFnQ3RDLE9BQU8sQ0FBQzJDLFNBQVIsR0FBb0IzQyxPQUFPLENBQUM0QyxZQUE1QixHQUEyQ04sT0FBL0UsRUFBd0Y7QUFDdkZHLFlBQUksQ0FBQ3ZELFNBQUwsQ0FBZUMsR0FBZixDQUFtQixTQUFuQjtBQUNBLE9BRkQsTUFFTztBQUNOc0QsWUFBSSxDQUFDdkQsU0FBTCxDQUFlRSxNQUFmLENBQXNCLFNBQXRCO0FBQ0E7QUFDRCxLQVJEO0FBU0EsR0FaRDtBQWFBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5pbWF0aW9ucyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0aWNreSc7XG4iLCIvLyBTbW9vdGggU2Nyb2xsIHRvIGFuY2hvcnNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChhbmNob3IgPT4ge1xuXHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpKS5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCdcblx0XHR9KTtcblx0fSk7XG59KTtcblxuLy8gQWxsIGNvbG9yZWQtY2lyY2xlIHdpdGggdHJhbnNpdGlvbiBkZWxheVxuXG5jb25zdCBtZW51SXRlbXNXaXRoQ2hpbGRyZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0Jy5jb2xvcmVkLWNpcmNsZS1lbGVtZW50LCAucG91ci1xdWktYmxvY2staW1hZ2UnXG4pO1xubWVudUl0ZW1zV2l0aENoaWxkcmVucy5mb3JFYWNoKChtZW51SXRlbVdpdGhDaGlsZHJlbnMsIGluZGV4KSA9PiB7XG5cdGNvbnN0IHN1Yk1lbnVJdGVtcyA9IG1lbnVJdGVtV2l0aENoaWxkcmVucy5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3JlZC1jaXJjbGUnKTtcblx0c3ViTWVudUl0ZW1zLmZvckVhY2goc3ViTWVudUl0ZW0gPT4ge1xuXHRcdHN1Yk1lbnVJdGVtLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7NTAwICogaW5kZXh9bXNgO1xuXHR9KTtcbn0pO1xuXG4vLyBGYWRlaW4gd2hlbiB0ZXh0IGFwcGVhcnNcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuXHRlbnRyaWVzID0+IHtcblx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0aWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IDAuMSkge1xuXHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaW4tdmlldycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2luLXZpZXcnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0e1xuXHRcdHRocmVzaG9sZDogWzAsIDAuMSwgMV1cblx0fVxuKTtcblxuY29uc3Qgc2xpZGVSZXZlYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlX19yZXZlYWwnKTtcbi8vIGNvbnN0IHBCaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwLmJpZycpO1xuXG5zbGlkZVJldmVhbHMuZm9yRWFjaChzbGlkZSA9PiB7XG5cdG9ic2VydmVyLm9ic2VydmUoc2xpZGUpO1xufSk7XG5cbi8vIHJlYWxpc2F0aW9ucy5mb3JFYWNoKHJlYWxpc2F0aW9uID0+IHtcbi8vIFx0b2JzZXJ2ZXIub2JzZXJ2ZShyZWFsaXNhdGlvbik7XG4vLyB9KTtcblxuLy8gcEJpZy5mb3JFYWNoKHJlYWxpc2F0aW9uID0+IHtcbi8vIFx0b2JzZXJ2ZXIub2JzZXJ2ZShyZWFsaXNhdGlvbik7XG4vLyB9KTtcbiIsIi8vIChTdGlja3kgTmF2IHVuZGVyIFN0aWNreSBIZWFkZXIpICsgKEhlYWRlciBoaWRpbmcpIHdoZW4gc2Nyb2xsaW5nIGRvd24sIGV4Y2VwdCBmb3IgbW9iaWxlIHNjcmVlbnNcblxuY29uc3Qgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVyby1uYXYnKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3Qgc2Nyb2xsVXAgPSAnc2Nyb2xsLXVwJztcbmNvbnN0IHNjcm9sbERvd24gPSAnc2Nyb2xsLWRvd24nO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBsYXN0U2Nyb2xsID0gMDtcblxuY29uc3QgYWRkSGVhZGVySGVpZ2h0VG9wID0gc2VjdGlvbiA9PiB7XG5cdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKTtcblx0c2VjdGlvbi5zdHlsZS50b3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0Y29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gMCkge1xuXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxVcCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsICYmICFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERvd24pKSB7XG5cdFx0Ly8gZG93blxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRuYXYuY2xhc3NMaXN0LmFkZChzY3JvbGxEb3duKTtcblxuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdHN0aWNreU5hdi5zdHlsZS50b3AgPSAnMCc7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsICYmIG5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyB1cFxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbERvd24pO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbFVwKTtcblx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRhZGRIZWFkZXJIZWlnaHRUb3Aoc3RpY2t5TmF2KTtcblx0XHR9XG5cdH1cblx0bGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG59KTtcblxuLy8gQWRkIGhlYWRlciBoZWlnaHQgYXMgcGFkZGluZy10b3Agb24gZmlyc3Qgc2VjdGlvbiBvZiBlYWNoIHBhZ2VcblxuY29uc3QgbWF0Y2hTY3JlZW5TaXplID0geCA9PiB7XG5cdGlmICh4Lm1hdGNoZXMpIHtcblx0XHQvLyBJZiBtZWRpYSBxdWVyeSBtYXRjaGVzXG5cdFx0Y29uc3QgaW50cm9TZWN0aW9uUGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8nKTtcblx0XHRpZiAoaW50cm9TZWN0aW9uUGFkZGluZykge1xuXHRcdFx0YWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nKGludHJvU2VjdGlvblBhZGRpbmcpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgc2NyZWVuU2l6ZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NzZweCknKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG1hdGNoU2NyZWVuU2l6ZShzY3JlZW5TaXplKTsgLy8gQ2FsbCBsaXN0ZW5lciBmdW5jdGlvbiBhdCBydW4gdGltZVxuXHRzY3JlZW5TaXplLmFkZExpc3RlbmVyKG1hdGNoU2NyZWVuU2l6ZSk7IC8vIEF0dGFjaCBsaXN0ZW5lciBmdW5jdGlvbiBvbiBzdGF0ZSBjaGFuZ2VzXG59KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vIFx0Y29uc3QgaGVhZGVySGVpZ2h0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcbi8vIFx0Y29uc29sZS5sb2coJ25ldyAnICsgaGVhZGVySGVpZ2h0Mik7XG4vLyB9KTtcbmNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblxuY29uc3QgYWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nID0gc2VjdGlvbiA9PiB7XG5cdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KFxuXHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJylcblx0KTtcblx0c2VjdGlvbi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7Y3VycmVudFBhZGRpbmcgKyBoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxuLy8gQ2xvc2luZyBOb3RpY2VcblxuY29uc3QgY2xvc2luZ05vdGljZSA9IChtZW51VG9DbG9zZUNsYXNzLCBjbG9zaW5nQnV0dG9uQ2xhc3MpID0+IHtcblx0Y29uc3QgbWVudVRvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVUb0Nsb3NlQ2xhc3MpO1xuXHRjb25zdCBjbG9zaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zaW5nQnV0dG9uQ2xhc3MpO1xuXHRpZiAoY2xvc2luZ0J1dHRvbikge1xuXHRcdGNsb3NpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRtZW51VG9DbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHR9KTtcblx0fVxufTtcblxuY2xvc2luZ05vdGljZSgnLm5vdGljZScsICcubm90aWNlLS1jbG9zZScpO1xuXG4vLyBUb2dnbGluZyBSZXNwb25zaXZlIE1lbnVcblxuY29uc3QgdG9nZ2xpbmdNZW51ID0gKG1lbnVUb1RvZ2dsZUNsYXNzLCBidXJnZXJNZW51Q2xhc3MpID0+IHtcblx0Y29uc3QgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0Y29uc3QgbWVudVRvVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51VG9Ub2dnbGVDbGFzcyk7XG5cdGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlck1lbnVDbGFzcyk7XG5cdGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Ym9keVRhZy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0XHRidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHRcdG1lbnVUb1RvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0fSk7XG59O1xuXG50b2dnbGluZ01lbnUoJy5uYXYtLW1vYmlsZV9fcmV2ZWFsJywgJy5tZW51LS10b2dnbGUnKTtcbiIsIi8vIC8vIEZhZGVpbiB3aGVuIHRleHQgYXBwZWFycyAoc3JjOiBodHRwczovL2Nzcy10cmlja3MuY29tL3N0aWNreS1zbW9vdGgtYWN0aXZlLW5hdi8pXG5cbmxldCBuYXZTdGlja3lTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVyby1uYXYnKTtcbmlmIChuYXZTdGlja3lTZWN0aW9uKSB7XG5cdGxldCBtYWluTmF2TGlua3MgPSBuYXZTdGlja3lTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2g1IGEnKTtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXG5cdGxldCBsYXN0SWQ7XG5cdGxldCBjdXIgPSBbXTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZlbnQgPT4ge1xuXHRcdGxldCBmcm9tVG9wID0gd2luZG93LnNjcm9sbFkgKyBoZWFkZXJIZWlnaHQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgLyA0O1xuXG5cdFx0bWFpbk5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG5cdFx0XHRsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluay5oYXNoKTtcblxuXHRcdFx0aWYgKHNlY3Rpb24ub2Zmc2V0VG9wIDw9IGZyb21Ub3AgJiYgc2VjdGlvbi5vZmZzZXRUb3AgKyBzZWN0aW9uLm9mZnNldEhlaWdodCA+IGZyb21Ub3ApIHtcblx0XHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9