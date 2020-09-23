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
}); // Fading Background-color by sections

var sections = document.querySelectorAll('section');
var bodyTag = document.querySelector('body');

var changeBackground = function changeBackground() {
  var topViewport = window.pageYOffset;
  var midViewport = topViewport + window.innerHeight / 2;
  var stickyNav = document.querySelector('.page-hero-nav');
  var menu = document.querySelector('.nav--desktop');
  sections.forEach(function (section, index) {
    var topSection = section.offsetTop;
    var distanceToSectionTop = midViewport - topSection;

    if (distanceToSectionTop > -100) {
      var dataBackground = section.getAttribute('data-background');
      bodyTag.style.backgroundColor = dataBackground;

      if (stickyNav) {
        stickyNav.style.backgroundColor = dataBackground;
      }

      menu.style.backgroundColor = dataBackground;
    }
  });
};

document.addEventListener('scroll', function () {
  changeBackground();
});
window.addEventListener('resize', function () {
  changeBackground();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtZW51SXRlbXNXaXRoQ2hpbGRyZW5zIiwibWVudUl0ZW1XaXRoQ2hpbGRyZW5zIiwiaW5kZXgiLCJzdWJNZW51SXRlbXMiLCJzdWJNZW51SXRlbSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHJlc2hvbGQiLCJzbGlkZVJldmVhbHMiLCJzbGlkZSIsInRyYW5zaXRpb25EZWxheSIsIm9ic2VydmUiLCJzZWN0aW9ucyIsImJvZHlUYWciLCJjaGFuZ2VCYWNrZ3JvdW5kIiwidG9wVmlld3BvcnQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsIm1pZFZpZXdwb3J0IiwiaW5uZXJIZWlnaHQiLCJzdGlja3lOYXYiLCJtZW51Iiwic2VjdGlvbiIsInRvcFNlY3Rpb24iLCJvZmZzZXRUb3AiLCJkaXN0YW5jZVRvU2VjdGlvblRvcCIsImRhdGFCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwibmF2Iiwic2Nyb2xsVXAiLCJzY3JvbGxEb3duIiwiYm9keSIsImxhc3RTY3JvbGwiLCJhZGRIZWFkZXJIZWlnaHRUb3AiLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50UGFkZGluZyIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRvcCIsImN1cnJlbnRTY3JvbGwiLCJjb250YWlucyIsIm1hdGNoU2NyZWVuU2l6ZSIsIngiLCJtYXRjaGVzIiwiaW50cm9TZWN0aW9uUGFkZGluZyIsImFkZEhlYWRlckhlaWdodEFzUGFkZGluZyIsInNjcmVlblNpemUiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJwYWRkaW5nVG9wIiwiY2xvc2luZ05vdGljZSIsIm1lbnVUb0Nsb3NlQ2xhc3MiLCJjbG9zaW5nQnV0dG9uQ2xhc3MiLCJtZW51VG9DbG9zZSIsImNsb3NpbmdCdXR0b24iLCJ0b2dnbGluZ01lbnUiLCJtZW51VG9Ub2dnbGVDbGFzcyIsImJ1cmdlck1lbnVDbGFzcyIsIm1lbnVUb1RvZ2dsZSIsImJ1cmdlck1lbnUiLCJ0b2dnbGUiLCJuYXZTdGlja3lTZWN0aW9uIiwibWFpbk5hdkxpbmtzIiwibGFzdElkIiwiY3VyIiwiZXZlbnQiLCJmcm9tVG9wIiwic2Nyb2xsWSIsImxpbmsiLCJoYXNoIiwib2Zmc2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUF3RjtBQUN2RkUsWUFBSSxDQUFDbEUsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO0FBQ0EsT0FGRCxNQUVPO0FBQ05pRSxZQUFJLENBQUNsRSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsU0FBdEI7QUFDQTtBQUNELEtBUkQ7QUFTQSxHQVpEO0FBYUEsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9hbmltYXRpb25zJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc3RpY2t5JztcbiIsIi8vIFNtb290aCBTY3JvbGwgdG8gYW5jaG9yc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuXG4vLyBBbGwgY29sb3JlZC1jaXJjbGUgd2l0aCB0cmFuc2l0aW9uIGRlbGF5XG5cbmNvbnN0IG1lbnVJdGVtc1dpdGhDaGlsZHJlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHQnLmNvbG9yZWQtY2lyY2xlLWVsZW1lbnQsIC5wb3VyLXF1aS1ibG9jay1pbWFnZSdcbik7XG5tZW51SXRlbXNXaXRoQ2hpbGRyZW5zLmZvckVhY2goKG1lbnVJdGVtV2l0aENoaWxkcmVucywgaW5kZXgpID0+IHtcblx0Y29uc3Qgc3ViTWVudUl0ZW1zID0gbWVudUl0ZW1XaXRoQ2hpbGRyZW5zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcmVkLWNpcmNsZScpO1xuXHRzdWJNZW51SXRlbXMuZm9yRWFjaChzdWJNZW51SXRlbSA9PiB7XG5cdFx0c3ViTWVudUl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHs1MDAgKiBpbmRleH1tc2A7XG5cdH0pO1xufSk7XG5cbi8vIEZhZGVpbiB3aGVuIHRleHQgYXBwZWFyc1xuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdGVudHJpZXMgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHRpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC4xKSB7XG5cdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW4tdmlldycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHR7XG5cdFx0dGhyZXNob2xkOiBbMCwgMC4xLCAxXVxuXHR9XG4pO1xuXG5jb25zdCBzbGlkZVJldmVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVfX3JldmVhbCcpO1xuLy8gY29uc3QgcEJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AuYmlnJyk7XG5cbnNsaWRlUmV2ZWFscy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcblx0Y29uc3Qgc3ViTWVudUl0ZW1zID0gc2xpZGUucXVlcnlTZWxlY3RvckFsbCgnaDEsaDInKTtcblx0c3ViTWVudUl0ZW1zLmZvckVhY2goc3ViTWVudUl0ZW0gPT4ge1xuXHRcdHN1Yk1lbnVJdGVtLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAkezMwMCAqIGluZGV4fW1zYDtcblx0fSk7XG59KTtcblxuc2xpZGVSZXZlYWxzLmZvckVhY2goc2xpZGUgPT4ge1xuXHRvYnNlcnZlci5vYnNlcnZlKHNsaWRlKTtcbn0pO1xuXG4vLyBGYWRpbmcgQmFja2dyb3VuZC1jb2xvciBieSBzZWN0aW9uc1xuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG5jb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xuXHRjb25zdCB0b3BWaWV3cG9ydCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0Y29uc3QgbWlkVmlld3BvcnQgPSB0b3BWaWV3cG9ydCArIHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cdGNvbnN0IHN0aWNreU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8tbmF2Jyk7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LS1kZXNrdG9wJyk7XG5cblx0c2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRjb25zdCB0b3BTZWN0aW9uID0gc2VjdGlvbi5vZmZzZXRUb3A7XG5cdFx0Y29uc3QgZGlzdGFuY2VUb1NlY3Rpb25Ub3AgPSBtaWRWaWV3cG9ydCAtIHRvcFNlY3Rpb247XG5cblx0XHRpZiAoZGlzdGFuY2VUb1NlY3Rpb25Ub3AgPiAtMTAwKSB7XG5cdFx0XHRjb25zdCBkYXRhQmFja2dyb3VuZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQnKTtcblx0XHRcdGJvZHlUYWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YUJhY2tncm91bmQ7XG5cdFx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRcdHN0aWNreU5hdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhQmFja2dyb3VuZDtcblx0XHRcdH1cblx0XHRcdG1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YUJhY2tncm91bmQ7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0Y2hhbmdlQmFja2dyb3VuZCgpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cdGNoYW5nZUJhY2tncm91bmQoKTtcbn0pO1xuIiwiLy8gKFN0aWNreSBOYXYgdW5kZXIgU3RpY2t5IEhlYWRlcikgKyAoSGVhZGVyIGhpZGluZykgd2hlbiBzY3JvbGxpbmcgZG93biwgZXhjZXB0IGZvciBtb2JpbGUgc2NyZWVuc1xuXG5jb25zdCBzdGlja3lOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLW5hdicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBzY3JvbGxVcCA9ICdzY3JvbGwtdXAnO1xuY29uc3Qgc2Nyb2xsRG93biA9ICdzY3JvbGwtZG93bic7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IGxhc3RTY3JvbGwgPSAwO1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRUb3AgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXHRjb25zdCBjdXJyZW50UGFkZGluZyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJykpO1xuXHRzZWN0aW9uLnN0eWxlLnRvcCA9IGAke2hlYWRlckhlaWdodH1weGA7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRpZiAoY3VycmVudFNjcm9sbCA9PSAwKSB7XG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFVwKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGwgJiYgIW5hdi5jbGFzc0xpc3QuY29udGFpbnMoc2Nyb2xsRG93bikpIHtcblx0XHQvLyBkb3duXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsVXApO1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKHNjcm9sbERvd24pO1xuXG5cdFx0aWYgKHN0aWNreU5hdikge1xuXHRcdFx0c3RpY2t5TmF2LnN0eWxlLnRvcCA9ICcwJztcblx0XHR9XG5cdH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA8IGxhc3RTY3JvbGwgJiYgbmF2LmNsYXNzTGlzdC5jb250YWlucyhzY3JvbGxEb3duKSkge1xuXHRcdC8vIHVwXG5cdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsRG93bik7XG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoc2Nyb2xsVXApO1xuXHRcdGlmIChzdGlja3lOYXYpIHtcblx0XHRcdGFkZEhlYWRlckhlaWdodFRvcChzdGlja3lOYXYpO1xuXHRcdH1cblx0fVxuXHRsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbn0pO1xuXG4vLyBBZGQgaGVhZGVyIGhlaWdodCBhcyBwYWRkaW5nLXRvcCBvbiBmaXJzdCBzZWN0aW9uIG9mIGVhY2ggcGFnZVxuXG5jb25zdCBtYXRjaFNjcmVlblNpemUgPSB4ID0+IHtcblx0aWYgKHgubWF0Y2hlcykge1xuXHRcdC8vIElmIG1lZGlhIHF1ZXJ5IG1hdGNoZXNcblx0XHRjb25zdCBpbnRyb1NlY3Rpb25QYWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVybycpO1xuXHRcdGlmIChpbnRyb1NlY3Rpb25QYWRkaW5nKSB7XG5cdFx0XHRhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmcoaW50cm9TZWN0aW9uUGFkZGluZyk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBzY3JlZW5TaXplID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDU3NnB4KScpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0bWF0Y2hTY3JlZW5TaXplKHNjcmVlblNpemUpOyAvLyBDYWxsIGxpc3RlbmVyIGZ1bmN0aW9uIGF0IHJ1biB0aW1lXG5cdHNjcmVlblNpemUuYWRkTGlzdGVuZXIobWF0Y2hTY3JlZW5TaXplKTsgLy8gQXR0YWNoIGxpc3RlbmVyIGZ1bmN0aW9uIG9uIHN0YXRlIGNoYW5nZXNcbn0pO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gXHRjb25zdCBoZWFkZXJIZWlnaHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuLy8gXHRjb25zb2xlLmxvZygnbmV3ICcgKyBoZWFkZXJIZWlnaHQyKTtcbi8vIH0pO1xuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXG5jb25zdCBhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmcgPSBzZWN0aW9uID0+IHtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xpZW50SGVpZ2h0O1xuXHRjb25zdCBjdXJyZW50UGFkZGluZyA9IHBhcnNlRmxvYXQoXG5cdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKVxuXHQpO1xuXHRzZWN0aW9uLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtjdXJyZW50UGFkZGluZyArIGhlYWRlckhlaWdodH1weGA7XG59O1xuXG4vLyBDbG9zaW5nIE5vdGljZVxuXG5jb25zdCBjbG9zaW5nTm90aWNlID0gKG1lbnVUb0Nsb3NlQ2xhc3MsIGNsb3NpbmdCdXR0b25DbGFzcykgPT4ge1xuXHRjb25zdCBtZW51VG9DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudVRvQ2xvc2VDbGFzcyk7XG5cdGNvbnN0IGNsb3NpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsb3NpbmdCdXR0b25DbGFzcyk7XG5cdGlmIChjbG9zaW5nQnV0dG9uKSB7XG5cdFx0Y2xvc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdG1lbnVUb0Nsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5jbG9zaW5nTm90aWNlKCcubm90aWNlJywgJy5ub3RpY2UtLWNsb3NlJyk7XG5cbi8vIFRvZ2dsaW5nIFJlc3BvbnNpdmUgTWVudVxuXG5jb25zdCB0b2dnbGluZ01lbnUgPSAobWVudVRvVG9nZ2xlQ2xhc3MsIGJ1cmdlck1lbnVDbGFzcykgPT4ge1xuXHRjb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHRjb25zdCBtZW51VG9Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVUb1RvZ2dsZUNsYXNzKTtcblx0Y29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnVyZ2VyTWVudUNsYXNzKTtcblx0YnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRib2R5VGFnLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHRcdGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG5cdFx0bWVudVRvVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuXHR9KTtcbn07XG5cbnRvZ2dsaW5nTWVudSgnLm5hdi0tbW9iaWxlX19yZXZlYWwnLCAnLm1lbnUtLXRvZ2dsZScpO1xuIiwiLy8gLy8gRmFkZWluIHdoZW4gdGV4dCBhcHBlYXJzIChzcmM6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc3RpY2t5LXNtb290aC1hY3RpdmUtbmF2LylcblxubGV0IG5hdlN0aWNreVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvLW5hdicpO1xuaWYgKG5hdlN0aWNreVNlY3Rpb24pIHtcblx0bGV0IG1haW5OYXZMaW5rcyA9IG5hdlN0aWNreVNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnaDUgYScpO1xuXHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5cblx0bGV0IGxhc3RJZDtcblx0bGV0IGN1ciA9IFtdO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldmVudCA9PiB7XG5cdFx0bGV0IGZyb21Ub3AgPSB3aW5kb3cuc2Nyb2xsWSArIGhlYWRlckhlaWdodCArIHdpbmRvdy5pbm5lckhlaWdodCAvIDQ7XG5cblx0XHRtYWluTmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcblx0XHRcdGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmhhc2gpO1xuXG5cdFx0XHRpZiAoc2VjdGlvbi5vZmZzZXRUb3AgPD0gZnJvbVRvcCAmJiBzZWN0aW9uLm9mZnNldFRvcCArIHNlY3Rpb24ub2Zmc2V0SGVpZ2h0ID4gZnJvbVRvcCkge1xuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=