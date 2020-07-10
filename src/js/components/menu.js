// Hide Header on on scroll down
// src:https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
const headsUp = (el, stickyCat) => {
	var elH = el.clientHeight,
		offset = 0,
		lastScroll = 0;

	const makeOffset = () => {
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop,
			diff = scrollY - lastScroll;

		offset = offset + diff > elH ? elH : scrollY < 0 ? 0 : offset + diff;
		offset = offset < 0 ? 0 : offset;

		el.style.top = -offset + 'px';

		lastScroll = scrollY;

		// if (stickyCat) {
		// 	stickyCat.forEach(cat => {
		// 		cat.style.top = '0';
		// 	});
		// }
	};
	makeOffset(); // run at load - if scrolled down the page hides the header
	if (window.addEventListener) return window.addEventListener('scroll', makeOffset);
	window.attachEvent('onscroll', makeOffset);
};
const stickyCategories = document.querySelector('.page-hero-nav');
const header = document.querySelector('header');
headsUp(header, stickyCategories);

// // Hide Header on on scroll down
// // src:https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
// var didScroll;
// var lastScrollTop = 0;
// var delta = 1;
// const headerTag = document.querySelector('.header');
// var navbarHeight = headerTag.outerHeight();

// const stickyCategories = document.querySelector('.page-hero-nav');
// if (stickyCategories) {
// 	stickyCategories.forEach(cat => {
// 		cat.style.top = '0';
// 	});
// }

// $(window).scroll(function(event) {
// 	didScroll = true;
// });

// setInterval(function() {
// 	if (didScroll) {
// 		hasScrolled();
// 		didScroll = false;
// 	}
// }, 100);

// const hasScrolled = () => {
// 	var st = $(this).scrollTop();

// 	// Make sure they scroll more than delta
// 	if (Math.abs(lastScrollTop - st) <= delta) return;

// 	// If they scrolled down and are past the navbar, add class .nav-up.
// 	// This is necessary so you never see what is "behind" the navbar.
// 	if (st > lastScrollTop && st > navbarHeight) {
// 		// Scroll Down
// 		headerTag.classList.add('nav-up');

// 		if (stickyNav) {
// 			stickyNav.style.top = '0';
// 		}
// 		if (stickyCategories) {
// 			stickyCategories.forEach(cat => {
// 				cat.style.top = '0';
// 			});
// 		}
// 	} else {
// 		// Scroll Up
// 		if (st + $(window).height() < $(document).height()) {
// 			headerTag.classList.remove('nav-up');
// 			if (stickyNav) {
// 				addPadding2Top(stickyNav);
// 			}
// 			if (stickyCategories) {
// 				stickyCategories.forEach(cat => {
// 					addHeaderHeightTop(cat);
// 				});
// 			}
// 		}
// 	}

// 	lastScrollTop = st;
// };

// // Avoid "#" links to reach their target

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

const headerHeight = document.querySelector('header').clientHeight;

const addHeaderHeight = section => {
	const currentPadding = parseFloat(
		window.getComputedStyle(section, null).getPropertyValue('padding-top')
	);
	section.style.paddingTop = `${currentPadding + headerHeight}px`;
};

const introSection = document.querySelector('.page-hero, .hp-hero');
if (introSection) {
	addHeaderHeight(introSection);
}

// Add padding-top as top for sticky positioning
const addPadding2Top = section => {
	section.style.top = window.getComputedStyle(section, null).getPropertyValue('padding-top');
};

const addHeaderHeightTop = section => {
	const currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('top'));
	section.style.top = `${headerHeight}px`;
};

const stickyNav = document.querySelector('.page-hero-nav');

addPadding2Top(stickyNav);

// const addHeaderHeightTop = section => {
// 	const currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('top'));
// 	section.style.top = `${headerHeight}px`;
// };

// const stickyNav = document.querySelector('.nav-sticky .sticky-container');
