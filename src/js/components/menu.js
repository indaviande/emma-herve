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
headsUp(header);

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

const introSection = document.querySelector('.site-main > section');
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
