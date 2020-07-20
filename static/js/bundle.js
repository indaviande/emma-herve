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

slideReveals.forEach(function (slide, index) {
  var subMenuItems = slide.querySelectorAll('h1,h2');
  subMenuItems.forEach(function (subMenuItem) {
    subMenuItem.style.transitionDelay = "".concat(300 * index, "ms");
  });
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtZW51SXRlbXNXaXRoQ2hpbGRyZW5zIiwibWVudUl0ZW1XaXRoQ2hpbGRyZW5zIiwiaW5kZXgiLCJzdWJNZW51SXRlbXMiLCJzdWJNZW51SXRlbSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHJlc2hvbGQiLCJzbGlkZVJldmVhbHMiLCJzbGlkZSIsInRyYW5zaXRpb25EZWxheSIsIm9ic2VydmUiLCJzdGlja3lOYXYiLCJuYXYiLCJzY3JvbGxVcCIsInNjcm9sbERvd24iLCJib2R5IiwibGFzdFNjcm9sbCIsImFkZEhlYWRlckhlaWdodFRvcCIsInNlY3Rpb24iLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50UGFkZGluZyIsInBhcnNlRmxvYXQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRvcCIsImN1cnJlbnRTY3JvbGwiLCJwYWdlWU9mZnNldCIsImNvbnRhaW5zIiwibWF0Y2hTY3JlZW5TaXplIiwieCIsIm1hdGNoZXMiLCJpbnRyb1NlY3Rpb25QYWRkaW5nIiwiYWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nIiwic2NyZWVuU2l6ZSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInBhZGRpbmdUb3AiLCJjbG9zaW5nTm90aWNlIiwibWVudVRvQ2xvc2VDbGFzcyIsImNsb3NpbmdCdXR0b25DbGFzcyIsIm1lbnVUb0Nsb3NlIiwiY2xvc2luZ0J1dHRvbiIsInRvZ2dsaW5nTWVudSIsIm1lbnVUb1RvZ2dsZUNsYXNzIiwiYnVyZ2VyTWVudUNsYXNzIiwiYm9keVRhZyIsIm1lbnVUb1RvZ2dsZSIsImJ1cmdlck1lbnUiLCJ0b2dnbGUiLCJuYXZTdGlja3lTZWN0aW9uIiwibWFpbk5hdkxpbmtzIiwibGFzdElkIiwiY3VyIiwiZXZlbnQiLCJmcm9tVG9wIiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwibGluayIsImhhc2giLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL2FuaW1hdGlvbnMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdGlja3knO1xuIiwiLy8gU21vb3RoIFNjcm9sbCB0byBhbmNob3JzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcblx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXG5cdFx0fSk7XG5cdH0pO1xufSk7XG5cbi8vIEFsbCBjb2xvcmVkLWNpcmNsZSB3aXRoIHRyYW5zaXRpb24gZGVsYXlcblxuY29uc3QgbWVudUl0ZW1zV2l0aENoaWxkcmVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdCcuY29sb3JlZC1jaXJjbGUtZWxlbWVudCwgLnBvdXItcXVpLWJsb2NrLWltYWdlJ1xuKTtcbm1lbnVJdGVtc1dpdGhDaGlsZHJlbnMuZm9yRWFjaCgobWVudUl0ZW1XaXRoQ2hpbGRyZW5zLCBpbmRleCkgPT4ge1xuXHRjb25zdCBzdWJNZW51SXRlbXMgPSBtZW51SXRlbVdpdGhDaGlsZHJlbnMucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yZWQtY2lyY2xlJyk7XG5cdHN1Yk1lbnVJdGVtcy5mb3JFYWNoKHN1Yk1lbnVJdGVtID0+IHtcblx0XHRzdWJNZW51SXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAkezUwMCAqIGluZGV4fW1zYDtcblx0fSk7XG59KTtcblxuLy8gRmFkZWluIHdoZW4gdGV4dCBhcHBlYXJzXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0ZW50cmllcyA9PiB7XG5cdFx0ZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRcdGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjEpIHtcblx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2luLXZpZXcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdHtcblx0XHR0aHJlc2hvbGQ6IFswLCAwLjEsIDFdXG5cdH1cbik7XG5cbmNvbnN0IHNsaWRlUmV2ZWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZV9fcmV2ZWFsJyk7XG4vLyBjb25zdCBwQmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncC5iaWcnKTtcblxuc2xpZGVSZXZlYWxzLmZvckVhY2goKHNsaWRlLCBpbmRleCkgPT4ge1xuXHRjb25zdCBzdWJNZW51SXRlbXMgPSBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCdoMSxoMicpO1xuXHRzdWJNZW51SXRlbXMuZm9yRWFjaChzdWJNZW51SXRlbSA9PiB7XG5cdFx0c3ViTWVudUl0ZW0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gYCR7MzAwICogaW5kZXh9bXNgO1xuXHR9KTtcbn0pO1xuXG5zbGlkZVJldmVhbHMuZm9yRWFjaChzbGlkZSA9PiB7XG5cdG9ic2VydmVyLm9ic2VydmUoc2xpZGUpO1xufSk7XG5cbi8vIHJlYWxpc2F0aW9ucy5mb3JFYWNoKHJlYWxpc2F0aW9uID0+IHtcbi8vIFx0b2JzZXJ2ZXIub2JzZXJ2ZShyZWFsaXNhdGlvbik7XG4vLyB9KTtcblxuLy8gcEJpZy5mb3JFYWNoKHJlYWxpc2F0aW9uID0+IHtcbi8vIFx0b2JzZXJ2ZXIub2JzZXJ2ZShyZWFsaXNhdGlvbik7XG4vLyB9KTtcbiIsIi8vIChTdGlja3kgTmF2IHVuZGVyIFN0aWNreSBIZWFkZXIpICsgKEhlYWRlciBoaWRpbmcpIHdoZW4gc2Nyb2xsaW5nIGRvd24sIGV4Y2VwdCBmb3IgbW9iaWxlIHNjcmVlbnNcblxuY29uc3Qgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVyby1uYXYnKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3Qgc2Nyb2xsVXAgPSAnc2Nyb2xsLXVwJztcbmNvbnN0IHNjcm9sbERvd24gPSAnc2Nyb2xsLWRvd24nO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBsYXN0U2Nyb2xsID0gMDtcblxuY29uc3QgYWRkSGVhZGVySGVpZ2h0VG9wID0gc2VjdGlvbiA9PiB7XG5cdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpKTtcblx0c2VjdGlvbi5zdHlsZS50b3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0Y29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gMCkge1xuXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxVcCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsICYmICFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERvd24pKSB7XG5cdFx0Ly8gZG93blxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRuYXYuY2xhc3NMaXN0LmFkZChzY3JvbGxEb3duKTtcblxuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdHN0aWNreU5hdi5zdHlsZS50b3AgPSAnMCc7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsICYmIG5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyB1cFxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbERvd24pO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbFVwKTtcblx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRhZGRIZWFkZXJIZWlnaHRUb3Aoc3RpY2t5TmF2KTtcblx0XHR9XG5cdH1cblx0bGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG59KTtcblxuLy8gQWRkIGhlYWRlciBoZWlnaHQgYXMgcGFkZGluZy10b3Agb24gZmlyc3Qgc2VjdGlvbiBvZiBlYWNoIHBhZ2VcblxuY29uc3QgbWF0Y2hTY3JlZW5TaXplID0geCA9PiB7XG5cdGlmICh4Lm1hdGNoZXMpIHtcblx0XHQvLyBJZiBtZWRpYSBxdWVyeSBtYXRjaGVzXG5cdFx0Y29uc3QgaW50cm9TZWN0aW9uUGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8nKTtcblx0XHRpZiAoaW50cm9TZWN0aW9uUGFkZGluZykge1xuXHRcdFx0YWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nKGludHJvU2VjdGlvblBhZGRpbmcpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgc2NyZWVuU2l6ZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NzZweCknKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG1hdGNoU2NyZWVuU2l6ZShzY3JlZW5TaXplKTsgLy8gQ2FsbCBsaXN0ZW5lciBmdW5jdGlvbiBhdCBydW4gdGltZVxuXHRzY3JlZW5TaXplLmFkZExpc3RlbmVyKG1hdGNoU2NyZWVuU2l6ZSk7IC8vIEF0dGFjaCBsaXN0ZW5lciBmdW5jdGlvbiBvbiBzdGF0ZSBjaGFuZ2VzXG59KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vIFx0Y29uc3QgaGVhZGVySGVpZ2h0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcbi8vIFx0Y29uc29sZS5sb2coJ25ldyAnICsgaGVhZGVySGVpZ2h0Mik7XG4vLyB9KTtcbmNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblxuY29uc3QgYWRkSGVhZGVySGVpZ2h0QXNQYWRkaW5nID0gc2VjdGlvbiA9PiB7XG5cdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblx0Y29uc3QgY3VycmVudFBhZGRpbmcgPSBwYXJzZUZsb2F0KFxuXHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJylcblx0KTtcblx0c2VjdGlvbi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7Y3VycmVudFBhZGRpbmcgKyBoZWFkZXJIZWlnaHR9cHhgO1xufTtcblxuLy8gQ2xvc2luZyBOb3RpY2VcblxuY29uc3QgY2xvc2luZ05vdGljZSA9IChtZW51VG9DbG9zZUNsYXNzLCBjbG9zaW5nQnV0dG9uQ2xhc3MpID0+IHtcblx0Y29uc3QgbWVudVRvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVUb0Nsb3NlQ2xhc3MpO1xuXHRjb25zdCBjbG9zaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zaW5nQnV0dG9uQ2xhc3MpO1xuXHRpZiAoY2xvc2luZ0J1dHRvbikge1xuXHRcdGNsb3NpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRtZW51VG9DbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHR9KTtcblx0fVxufTtcblxuY2xvc2luZ05vdGljZSgnLm5vdGljZScsICcubm90aWNlLS1jbG9zZScpO1xuXG4vLyBUb2dnbGluZyBSZXNwb25zaXZlIE1lbnVcblxuY29uc3QgdG9nZ2xpbmdNZW51ID0gKG1lbnVUb1RvZ2dsZUNsYXNzLCBidXJnZXJNZW51Q2xhc3MpID0+IHtcblx0Y29uc3QgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0Y29uc3QgbWVudVRvVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51VG9Ub2dnbGVDbGFzcyk7XG5cdGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlck1lbnVDbGFzcyk7XG5cdGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Ym9keVRhZy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0XHRidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHRcdG1lbnVUb1RvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0fSk7XG59O1xuXG50b2dnbGluZ01lbnUoJy5uYXYtLW1vYmlsZV9fcmV2ZWFsJywgJy5tZW51LS10b2dnbGUnKTtcbiIsIi8vIC8vIEZhZGVpbiB3aGVuIHRleHQgYXBwZWFycyAoc3JjOiBodHRwczovL2Nzcy10cmlja3MuY29tL3N0aWNreS1zbW9vdGgtYWN0aXZlLW5hdi8pXG5cbmxldCBuYXZTdGlja3lTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVyby1uYXYnKTtcbmlmIChuYXZTdGlja3lTZWN0aW9uKSB7XG5cdGxldCBtYWluTmF2TGlua3MgPSBuYXZTdGlja3lTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2g1IGEnKTtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXG5cdGxldCBsYXN0SWQ7XG5cdGxldCBjdXIgPSBbXTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZlbnQgPT4ge1xuXHRcdGxldCBmcm9tVG9wID0gd2luZG93LnNjcm9sbFkgKyBoZWFkZXJIZWlnaHQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgLyA0O1xuXG5cdFx0bWFpbk5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG5cdFx0XHRsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluay5oYXNoKTtcblxuXHRcdFx0aWYgKHNlY3Rpb24ub2Zmc2V0VG9wIDw9IGZyb21Ub3AgJiYgc2VjdGlvbi5vZmZzZXRUb3AgKyBzZWN0aW9uLm9mZnNldEhlaWdodCA+IGZyb21Ub3ApIHtcblx0XHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9