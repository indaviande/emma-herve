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
console.log(sections);
console.log(bodyTag);

var changeBackground = function changeBackground() {
  var topViewport = window.pageYOffset;
  var midViewport = topViewport + window.innerHeight / 2;
  sections.forEach(function (section, index) {
    var topSection = section.offsetTop;
    var midSection = topSection + section.offsetHeight / 2;
    var distanceToSection = midViewport - midSection;
    console.log(distanceToSection);

    if (distanceToSection > -300) {
      var dataBackground = section.getAttribute('data-background');
      bodyTag.style.backgroundColor = dataBackground;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtZW51SXRlbXNXaXRoQ2hpbGRyZW5zIiwibWVudUl0ZW1XaXRoQ2hpbGRyZW5zIiwiaW5kZXgiLCJzdWJNZW51SXRlbXMiLCJzdWJNZW51SXRlbSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHJlc2hvbGQiLCJzbGlkZVJldmVhbHMiLCJzbGlkZSIsInRyYW5zaXRpb25EZWxheSIsIm9ic2VydmUiLCJzZWN0aW9ucyIsImJvZHlUYWciLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlQmFja2dyb3VuZCIsInRvcFZpZXdwb3J0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJtaWRWaWV3cG9ydCIsImlubmVySGVpZ2h0Iiwic2VjdGlvbiIsInRvcFNlY3Rpb24iLCJvZmZzZXRUb3AiLCJtaWRTZWN0aW9uIiwib2Zmc2V0SGVpZ2h0IiwiZGlzdGFuY2VUb1NlY3Rpb24iLCJkYXRhQmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsInN0aWNreU5hdiIsIm5hdiIsInNjcm9sbFVwIiwic2Nyb2xsRG93biIsImJvZHkiLCJsYXN0U2Nyb2xsIiwiYWRkSGVhZGVySGVpZ2h0VG9wIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY3VycmVudFBhZGRpbmciLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0b3AiLCJjdXJyZW50U2Nyb2xsIiwiY29udGFpbnMiLCJtYXRjaFNjcmVlblNpemUiLCJ4IiwibWF0Y2hlcyIsImludHJvU2VjdGlvblBhZGRpbmciLCJhZGRIZWFkZXJIZWlnaHRBc1BhZGRpbmciLCJzY3JlZW5TaXplIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwicGFkZGluZ1RvcCIsImNsb3NpbmdOb3RpY2UiLCJtZW51VG9DbG9zZUNsYXNzIiwiY2xvc2luZ0J1dHRvbkNsYXNzIiwibWVudVRvQ2xvc2UiLCJjbG9zaW5nQnV0dG9uIiwidG9nZ2xpbmdNZW51IiwibWVudVRvVG9nZ2xlQ2xhc3MiLCJidXJnZXJNZW51Q2xhc3MiLCJtZW51VG9Ub2dnbGUiLCJidXJnZXJNZW51IiwidG9nZ2xlIiwibmF2U3RpY2t5U2VjdGlvbiIsIm1haW5OYXZMaW5rcyIsImxhc3RJZCIsImN1ciIsImV2ZW50IiwiZnJvbVRvcCIsInNjcm9sbFkiLCJsaW5rIiwiaGFzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUVPO0FBQ05vRSxZQUFJLENBQUNyRSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsU0FBdEI7QUFDQTtBQUNELEtBUkQ7QUFTQSxHQVpEO0FBYUEsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9hbmltYXRpb25zJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc3RpY2t5JztcbiIsIi8vIFNtb290aCBTY3JvbGwgdG8gYW5jaG9yc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuXG4vLyBBbGwgY29sb3JlZC1jaXJjbGUgd2l0aCB0cmFuc2l0aW9uIGRlbGF5XG5cbmNvbnN0IG1lbnVJdGVtc1dpdGhDaGlsZHJlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHQnLmNvbG9yZWQtY2lyY2xlLWVsZW1lbnQsIC5wb3VyLXF1aS1ibG9jay1pbWFnZSdcbik7XG5tZW51SXRlbXNXaXRoQ2hpbGRyZW5zLmZvckVhY2goKG1lbnVJdGVtV2l0aENoaWxkcmVucywgaW5kZXgpID0+IHtcblx0Y29uc3Qgc3ViTWVudUl0ZW1zID0gbWVudUl0ZW1XaXRoQ2hpbGRyZW5zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcmVkLWNpcmNsZScpO1xuXHRzdWJNZW51SXRlbXMuZm9yRWFjaChzdWJNZW51SXRlbSA9PiB7XG5cdFx0c3ViTWVudUl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHs1MDAgKiBpbmRleH1tc2A7XG5cdH0pO1xufSk7XG5cbi8vIEZhZGVpbiB3aGVuIHRleHQgYXBwZWFyc1xuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdGVudHJpZXMgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHRpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC4xKSB7XG5cdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW4tdmlldycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHR7XG5cdFx0dGhyZXNob2xkOiBbMCwgMC4xLCAxXVxuXHR9XG4pO1xuXG5jb25zdCBzbGlkZVJldmVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVfX3JldmVhbCcpO1xuLy8gY29uc3QgcEJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AuYmlnJyk7XG5cbnNsaWRlUmV2ZWFscy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcblx0Y29uc3Qgc3ViTWVudUl0ZW1zID0gc2xpZGUucXVlcnlTZWxlY3RvckFsbCgnaDEsaDInKTtcblx0c3ViTWVudUl0ZW1zLmZvckVhY2goc3ViTWVudUl0ZW0gPT4ge1xuXHRcdHN1Yk1lbnVJdGVtLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAkezMwMCAqIGluZGV4fW1zYDtcblx0fSk7XG59KTtcblxuc2xpZGVSZXZlYWxzLmZvckVhY2goc2xpZGUgPT4ge1xuXHRvYnNlcnZlci5vYnNlcnZlKHNsaWRlKTtcbn0pO1xuXG4vLyBGYWRpbmcgQmFja2dyb3VuZC1jb2xvciBieSBzZWN0aW9uc1xuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG5jb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc29sZS5sb2coc2VjdGlvbnMpO1xuY29uc29sZS5sb2coYm9keVRhZyk7XG5cbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG5cdGNvbnN0IHRvcFZpZXdwb3J0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRjb25zdCBtaWRWaWV3cG9ydCA9IHRvcFZpZXdwb3J0ICsgd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuXHRzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IHRvcFNlY3Rpb24gPSBzZWN0aW9uLm9mZnNldFRvcDtcblx0XHRjb25zdCBtaWRTZWN0aW9uID0gdG9wU2VjdGlvbiArIHNlY3Rpb24ub2Zmc2V0SGVpZ2h0IC8gMjtcblxuXHRcdGNvbnN0IGRpc3RhbmNlVG9TZWN0aW9uID0gbWlkVmlld3BvcnQgLSBtaWRTZWN0aW9uO1xuXHRcdGNvbnNvbGUubG9nKGRpc3RhbmNlVG9TZWN0aW9uKTtcblxuXHRcdGlmIChkaXN0YW5jZVRvU2VjdGlvbiA+IC0zMDApIHtcblx0XHRcdGNvbnN0IGRhdGFCYWNrZ3JvdW5kID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2dyb3VuZCcpO1xuXHRcdFx0Ym9keVRhZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhQmFja2dyb3VuZDtcblx0XHR9XG5cdH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRjaGFuZ2VCYWNrZ3JvdW5kKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0Y2hhbmdlQmFja2dyb3VuZCgpO1xufSk7XG4iLCIvLyAoU3RpY2t5IE5hdiB1bmRlciBTdGlja3kgSGVhZGVyKSArIChIZWFkZXIgaGlkaW5nKSB3aGVuIHNjcm9sbGluZyBkb3duLCBleGNlcHQgZm9yIG1vYmlsZSBzY3JlZW5zXG5cbmNvbnN0IHN0aWNreU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8tbmF2Jyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IHNjcm9sbFVwID0gJ3Njcm9sbC11cCc7XG5jb25zdCBzY3JvbGxEb3duID0gJ3Njcm9sbC1kb3duJztcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgbGFzdFNjcm9sbCA9IDA7XG5cbmNvbnN0IGFkZEhlYWRlckhlaWdodFRvcCA9IHNlY3Rpb24gPT4ge1xuXHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5cdGNvbnN0IGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd0b3AnKSk7XG5cdHNlY3Rpb24uc3R5bGUudG9wID0gYCR7aGVhZGVySGVpZ2h0fXB4YDtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdGlmIChjdXJyZW50U2Nyb2xsID09IDApIHtcblx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsVXApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCAmJiAhbmF2LmNsYXNzTGlzdC5jb250YWlucyhzY3JvbGxEb3duKSkge1xuXHRcdC8vIGRvd25cblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxVcCk7XG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoc2Nyb2xsRG93bik7XG5cblx0XHRpZiAoc3RpY2t5TmF2KSB7XG5cdFx0XHRzdGlja3lOYXYuc3R5bGUudG9wID0gJzAnO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsIDwgbGFzdFNjcm9sbCAmJiBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERvd24pKSB7XG5cdFx0Ly8gdXBcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxEb3duKTtcblx0XHRuYXYuY2xhc3NMaXN0LmFkZChzY3JvbGxVcCk7XG5cdFx0aWYgKHN0aWNreU5hdikge1xuXHRcdFx0YWRkSGVhZGVySGVpZ2h0VG9wKHN0aWNreU5hdik7XG5cdFx0fVxuXHR9XG5cdGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xufSk7XG5cbi8vIEFkZCBoZWFkZXIgaGVpZ2h0IGFzIHBhZGRpbmctdG9wIG9uIGZpcnN0IHNlY3Rpb24gb2YgZWFjaCBwYWdlXG5cbmNvbnN0IG1hdGNoU2NyZWVuU2l6ZSA9IHggPT4ge1xuXHRpZiAoeC5tYXRjaGVzKSB7XG5cdFx0Ly8gSWYgbWVkaWEgcXVlcnkgbWF0Y2hlc1xuXHRcdGNvbnN0IGludHJvU2VjdGlvblBhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZXJvJyk7XG5cdFx0aWYgKGludHJvU2VjdGlvblBhZGRpbmcpIHtcblx0XHRcdGFkZEhlYWRlckhlaWdodEFzUGFkZGluZyhpbnRyb1NlY3Rpb25QYWRkaW5nKTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHNjcmVlblNpemUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNTc2cHgpJyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRtYXRjaFNjcmVlblNpemUoc2NyZWVuU2l6ZSk7IC8vIENhbGwgbGlzdGVuZXIgZnVuY3Rpb24gYXQgcnVuIHRpbWVcblx0c2NyZWVuU2l6ZS5hZGRMaXN0ZW5lcihtYXRjaFNjcmVlblNpemUpOyAvLyBBdHRhY2ggbGlzdGVuZXIgZnVuY3Rpb24gb24gc3RhdGUgY2hhbmdlc1xufSk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4vLyBcdGNvbnN0IGhlYWRlckhlaWdodDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG4vLyBcdGNvbnNvbGUubG9nKCduZXcgJyArIGhlYWRlckhlaWdodDIpO1xuLy8gfSk7XG5jb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5cbmNvbnN0IGFkZEhlYWRlckhlaWdodEFzUGFkZGluZyA9IHNlY3Rpb24gPT4ge1xuXHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGllbnRIZWlnaHQ7XG5cdGNvbnN0IGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdChcblx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpXG5cdCk7XG5cdHNlY3Rpb24uc3R5bGUucGFkZGluZ1RvcCA9IGAke2N1cnJlbnRQYWRkaW5nICsgaGVhZGVySGVpZ2h0fXB4YDtcbn07XG5cbi8vIENsb3NpbmcgTm90aWNlXG5cbmNvbnN0IGNsb3NpbmdOb3RpY2UgPSAobWVudVRvQ2xvc2VDbGFzcywgY2xvc2luZ0J1dHRvbkNsYXNzKSA9PiB7XG5cdGNvbnN0IG1lbnVUb0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51VG9DbG9zZUNsYXNzKTtcblx0Y29uc3QgY2xvc2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xvc2luZ0J1dHRvbkNsYXNzKTtcblx0aWYgKGNsb3NpbmdCdXR0b24pIHtcblx0XHRjbG9zaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0bWVudVRvQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmNsb3NpbmdOb3RpY2UoJy5ub3RpY2UnLCAnLm5vdGljZS0tY2xvc2UnKTtcblxuLy8gVG9nZ2xpbmcgUmVzcG9uc2l2ZSBNZW51XG5cbmNvbnN0IHRvZ2dsaW5nTWVudSA9IChtZW51VG9Ub2dnbGVDbGFzcywgYnVyZ2VyTWVudUNsYXNzKSA9PiB7XG5cdGNvbnN0IGJvZHlUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdGNvbnN0IG1lbnVUb1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudVRvVG9nZ2xlQ2xhc3MpO1xuXHRjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXJnZXJNZW51Q2xhc3MpO1xuXHRidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGJvZHlUYWcuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG5cdFx0YnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcblx0XHRtZW51VG9Ub2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG5cdH0pO1xufTtcblxudG9nZ2xpbmdNZW51KCcubmF2LS1tb2JpbGVfX3JldmVhbCcsICcubWVudS0tdG9nZ2xlJyk7XG4iLCIvLyAvLyBGYWRlaW4gd2hlbiB0ZXh0IGFwcGVhcnMgKHNyYzogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zdGlja3ktc21vb3RoLWFjdGl2ZS1uYXYvKVxuXG5sZXQgbmF2U3RpY2t5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlcm8tbmF2Jyk7XG5pZiAobmF2U3RpY2t5U2VjdGlvbikge1xuXHRsZXQgbWFpbk5hdkxpbmtzID0gbmF2U3RpY2t5U2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdoNSBhJyk7XG5cdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsaWVudEhlaWdodDtcblxuXHRsZXQgbGFzdElkO1xuXHRsZXQgY3VyID0gW107XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2ZW50ID0+IHtcblx0XHRsZXQgZnJvbVRvcCA9IHdpbmRvdy5zY3JvbGxZICsgaGVhZGVySGVpZ2h0ICsgd2luZG93LmlubmVySGVpZ2h0IC8gNDtcblxuXHRcdG1haW5OYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuXHRcdFx0bGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmsuaGFzaCk7XG5cblx0XHRcdGlmIChzZWN0aW9uLm9mZnNldFRvcCA8PSBmcm9tVG9wICYmIHNlY3Rpb24ub2Zmc2V0VG9wICsgc2VjdGlvbi5vZmZzZXRIZWlnaHQgPiBmcm9tVG9wKSB7XG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGluay5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==