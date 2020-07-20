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
var headers = document.querySelectorAll('h1'); // const pBig = document.querySelectorAll('p.big');

headers.forEach(function (header) {
  observer.observe(header);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtZW51SXRlbXNXaXRoQ2hpbGRyZW5zIiwibWVudUl0ZW1XaXRoQ2hpbGRyZW5zIiwiaW5kZXgiLCJzdWJNZW51SXRlbXMiLCJzdWJNZW51SXRlbSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHJlc2hvbGQiLCJoZWFkZXJzIiwiaGVhZGVyIiwib2JzZXJ2ZSIsInN0aWNreU5hdiIsIm5hdiIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImJvZHkiLCJsYXN0U2Nyb2xsIiwiYWRkSGVhZGVySGVpZ2h0VG9wIiwic2VjdGlvbiIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsImN1cnJlbnRQYWRkaW5nIiwicGFyc2VGbG9hdCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidG9wIiwiY3VycmVudFNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwiY29udGFpbnMiLCJtYXRjaFNjcmVlblNpemUiLCJ4IiwibWF0Y2hlcyIsImludHJvU2VjdGlvblBhZGRpbmciLCJhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmciLCJzY3JlZW5TaXplIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwicGFkZGluZ1RvcCIsImNsb3NpbmdOb3RpY2UiLCJtZW51VG9DbG9zZUNsYXNzIiwiY2xvc2luZ0J1dHRvbkNsYXNzIiwibWVudVRvQ2xvc2UiLCJjbG9zaW5nQnV0dG9uIiwidG9nZ2xpbmdNZW51IiwibWVudVRvVG9nZ2xlQ2xhc3MiLCJidXJnZXJNZW51Q2xhc3MiLCJib2R5VGFnIiwibWVudVRvVG9nZ2xlIiwiYnVyZ2VyTWVudSIsInRvZ2dsZSIsIm5hdlN0aWNreVNlY3Rpb24iLCJtYWluTmF2TGlua3MiLCJsYXN0SWQiLCJjdXIiLCJldmVudCIsImZyb21Ub3AiLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsaW5rIiwiaGFzaCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUEr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RUFBaUNpQyxZQUF0RDtBQUVBLE1BQUlpQyxNQUFKO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQS9CLFFBQU0sQ0FBQ3ZDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQUF1RSxLQUFLLEVBQUk7QUFDMUMsUUFBSUMsT0FBTyxHQUFHakMsTUFBTSxDQUFDa0MsT0FBUCxHQUFpQnRDLFlBQWpCLEdBQWdDSSxNQUFNLENBQUNtQyxXQUFQLEdBQXFCLENBQW5FO0FBRUFOLGdCQUFZLENBQUN0RSxPQUFiLENBQXFCLFVBQUE2RSxJQUFJLEVBQUk7QUFDNUIsVUFBSXpDLE9BQU8sR0FBR3RDLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QndFLElBQUksQ0FBQ0MsSUFBNUIsQ0FBZDs7QUFFQSxVQUFJMUMsT0FBTyxDQUFDMkMsU0FBUixJQUFxQkwsT0FBckIsSUFBZ0N0QyxPQUFPLENBQUMyQyxTQUFSLEdBQW9CM0MsT0FBTyxDQUFDNEMsWUFBNUIsR0FBMkNOLE9BQS9FLEVBQXdGO0FBQ3ZGRyxZQUFJLENBQUN2RCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsU0FBbkI7QUFDQSxPQUZELE1BRU87QUFDTnNELFlBQUksQ0FBQ3ZELFNBQUwsQ0FBZUUsTUFBZixDQUFzQixTQUF0QjtBQUNBO0FBQ0QsS0FSRDtBQVNBLEdBWkQ7QUFhQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL2FuaW1hdGlvbnMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdGlja3knO1xuIiwiLy8gU21vb3RoIFNjcm9sbCB0byBhbmNob3JzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcblx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXG5cdFx0fSk7XG5cdH0pO1xufSk7XG5cbi8vIEFsbCBjb2xvcmVkLWNpcmNsZSB3aXRoIHRyYW5zaXRpb24gZGVsYXlcblxuY29uc3QgbWVudUl0ZW1zV2l0aENoaWxkcmVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdCcuY29sb3JlZC1jaXJjbGUtZWxlbWVudCwgLnBvdXItcXVpLWJsb2NrLWltYWdlJ1xuKTtcbm1lbnVJdGVtc1dpdGhDaGlsZHJlbnMuZm9yRWFjaCgobWVudUl0ZW1XaXRoQ2hpbGRyZW5zLCBpbmRleCkgPT4ge1xuXHRjb25zdCBzdWJNZW51SXRlbXMgPSBtZW51SXRlbVdpdGhDaGlsZHJlbnMucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yZWQtY2lyY2xlJyk7XG5cdHN1Yk1lbnVJdGVtcy5mb3JFYWNoKHN1Yk1lbnVJdGVtID0+IHtcblx0XHRzdWJNZW51SXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAkezUwMCAqIGluZGV4fW1zYDtcblx0fSk7XG59KTtcblxuLy8gRmFkZWluIHdoZW4gdGV4dCBhcHBlYXJzXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0ZW50cmllcyA9PiB7XG5cdFx0ZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRcdGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjEpIHtcblx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2luLXZpZXcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdHtcblx0XHR0aHJlc2hvbGQ6IFswLCAwLjEsIDFdXG5cdH1cbik7XG5cbmNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMScpO1xuLy8gY29uc3QgcEJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AuYmlnJyk7XG5cbmhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuXHRvYnNlcnZlci5vYnNlcnZlKGhlYWRlcik7XG59KTtcblxuLy8gcmVhbGlzYXRpb25zLmZvckVhY2gocmVhbGlzYXRpb24gPT4ge1xuLy8gXHRvYnNlcnZlci5vYnNlcnZlKHJlYWxpc2F0aW9uKTtcbi8vIH0pO1xuXG4vLyBwQmlnLmZvckVhY2gocmVhbGlzYXRpb24gPT4ge1xuLy8gXHRvYnNlcnZlci5vYnNlcnZlKHJlYWxpc2F0aW9uKTtcbi8vIH0pO1xuIiwiLy8gKFN0aWNreSBOYXYgdW5kZXIgU3RpY2t5IEhlYWRlcikgKyAoSGVhZGVyIGhpZGluZykgd2hlbiBzY3JvbGxpbmcgZG93biwgZXhjZXB0IGZvciBtb2JpbGUgc2NyZWVuc1xuXG5jb25zdCBzdGlja3lOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLW5hdicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBzY3JvbGxVcCA9ICdzY3JvbGwtdXAnO1xuY29uc3Qgc2Nyb2xsRG93biA9ICdzY3JvbGwtZG93bic7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IGxhc3RTY3JvbGwgPSAwO1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRUb3AgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXHRjb25zdCBjdXJyZW50UGFkZGluZyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJykpO1xuXHRzZWN0aW9uLnN0eWxlLnRvcCA9IGAke2hlYWRlckhlaWdodH1weGA7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRpZiAoY3VycmVudFNjcm9sbCA9PSAwKSB7XG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGwgJiYgIW5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyBkb3duXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsVXApO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbERvd24pO1xuXG5cdFx0aWYgKHN0aWNreU5hdikge1xuXHRcdFx0c3RpY2t5TmF2LnN0eWxlLnRvcCA9ICcwJztcblx0XHR9XG5cdH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA8IGxhc3RTY3JvbGwgJiYgbmF2LmNsYXNzTGlzdC5jb250YWlucyhzY3JvbGxEb3duKSkge1xuXHRcdC8vIHVwXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsRG93bik7XG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoc2Nyb2xsVXApO1xuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdGFkZEhlYWRlckhlaWdodFRvcChzdGlja3lOYXYpO1xuXHRcdH1cblx0fVxuXHRsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbn0pO1xuXG4vLyBBZGQgaGVhZGVyIGhlaWdodCBhcyBwYWRkaW5nLXRvcCBvbiBmaXJzdCBzZWN0aW9uIG9mIGVhY2ggcGFnZVxuXG5jb25zdCBtYXRjaFNjcmVlblNpemUgPSB4ID0+IHtcblx0aWYgKHgubWF0Y2hlcykge1xuXHRcdC8vIElmIG1lZGlhIHF1ZXJ5IG1hdGNoZXNcblx0XHRjb25zdCBpbnRyb1NlY3Rpb25QYWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVybycpO1xuXHRcdGlmIChpbnRyb1NlY3Rpb25QYWRkaW5nKSB7XG5cdFx0XHRhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmcoaW50cm9TZWN0aW9uUGFkZGluZyk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBzY3JlZW5TaXplID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDU3NnB4KScpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0bWF0Y2hTY3JlZW5TaXplKHNjcmVlblNpemUpOyAvLyBDYWxsIGxpc3RlbmVyIGZ1bmN0aW9uIGF0IHJ1biB0aW1lXG5cdHNjcmVlblNpemUuYWRkTGlzdGVuZXIobWF0Y2hTY3JlZW5TaXplKTsgLy8gQXR0YWNoIGxpc3RlbmVyIGZ1bmN0aW9uIG9uIHN0YXRlIGNoYW5nZXNcbn0pO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gXHRjb25zdCBoZWFkZXJIZWlnaHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuLy8gXHRjb25zb2xlLmxvZygnbmV3ICcgKyBoZWFkZXJIZWlnaHQyKTtcbi8vIH0pO1xuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmcgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXHRjb25zdCBjdXJyZW50UGFkZGluZyA9IHBhcnNlRmxvYXQoXG5cdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKVxuXHQpO1xuXHRzZWN0aW9uLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtjdXJyZW50UGFkZGluZyArIGhlYWRlckhlaWdodH1weGA7XG59O1xuXG4vLyBDbG9zaW5nIE5vdGljZVxuXG5jb25zdCBjbG9zaW5nTm90aWNlID0gKG1lbnVUb0Nsb3NlQ2xhc3MsIGNsb3NpbmdCdXR0b25DbGFzcykgPT4ge1xuXHRjb25zdCBtZW51VG9DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudVRvQ2xvc2VDbGFzcyk7XG5cdGNvbnN0IGNsb3NpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsb3NpbmdCdXR0b25DbGFzcyk7XG5cdGlmIChjbG9zaW5nQnV0dG9uKSB7XG5cdFx0Y2xvc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdG1lbnVUb0Nsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5jbG9zaW5nTm90aWNlKCcubm90aWNlJywgJy5ub3RpY2UtLWNsb3NlJyk7XG5cbi8vIFRvZ2dsaW5nIFJlc3BvbnNpdmUgTWVudVxuXG5jb25zdCB0b2dnbGluZ01lbnUgPSAobWVudVRvVG9nZ2xlQ2xhc3MsIGJ1cmdlck1lbnVDbGFzcykgPT4ge1xuXHRjb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHRjb25zdCBtZW51VG9Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVUb1RvZ2dsZUNsYXNzKTtcblx0Y29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnVyZ2VyTWVudUNsYXNzKTtcblx0YnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRib2R5VGFnLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHRcdGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG5cdFx0bWVudVRvVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHR9KTtcbn07XG5cbnRvZ2dsaW5nTWVudSgnLm5hdi0tbW9iaWxlX19yZXZlYWwnLCAnLm1lbnUtLXRvZ2dsZScpO1xuIiwiLy8gLy8gRmFkZWluIHdoZW4gdGV4dCBhcHBlYXJzIChzcmM6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc3RpY2t5LXNtb290aC1hY3RpdmUtbmF2LylcblxubGV0IG5hdlN0aWNreVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLW5hdicpO1xuaWYgKG5hdlN0aWNreVNlY3Rpb24pIHtcblx0bGV0IG1haW5OYXZMaW5rcyA9IG5hdlN0aWNreVNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnaDUgYScpO1xuXHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5cblx0bGV0IGxhc3RJZDtcblx0bGV0IGN1ciA9IFtdO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldmVudCA9PiB7XG5cdFx0bGV0IGZyb21Ub3AgPSB3aW5kb3cuc2Nyb2xsWSArIGhlYWRlckhlaWdodCArIHdpbmRvdy5pbm5lckhlaWdodCAvIDQ7XG5cblx0XHRtYWluTmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcblx0XHRcdGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmhhc2gpO1xuXG5cdFx0XHRpZiAoc2VjdGlvbi5vZmZzZXRUb3AgPD0gZnJvbVRvcCAmJiBzZWN0aW9uLm9mZnNldFRvcCArIHNlY3Rpb24ub2Zmc2V0SGVpZ2h0ID4gZnJvbVRvcCkge1xuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=