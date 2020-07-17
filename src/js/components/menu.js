// (Sticky Nav under Sticky Header) + (Header hiding) when scrolling down, except for mobile screens

const stickyNav = document.querySelector('.page-hero-nav');
const nav = document.querySelector('header');
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
const body = document.querySelector('body');
let lastScroll = 0;

const addHeaderHeightTop = section => {
	const headerHeight = document.querySelector('header').clientHeight;
	const currentPadding = parseFloat(window.getComputedStyle(section, null).getPropertyValue('top'));
	section.style.top = `${headerHeight}px`;
};

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
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
});

// Add header height as padding-top on first section of each page

const matchScreenSize = x => {
	if (x.matches) {
		// If media query matches
		const introSectionPadding = document.querySelector('.page-hero');
		if (introSectionPadding) {
			addHeaderHeightAsPadding(introSectionPadding);
		}
	}
};

const screenSize = window.matchMedia('(min-width: 576px)');
document.addEventListener('DOMContentLoaded', () => {
	matchScreenSize(screenSize); // Call listener function at run time
	screenSize.addListener(matchScreenSize); // Attach listener function on state changes
});

// document.addEventListener('DOMContentLoaded', () => {
// 	const headerHeight2 = document.querySelector('header').clientHeight;
// 	console.log('new ' + headerHeight2);
// });
const headerHeight = document.querySelector('header').clientHeight;

const addHeaderHeightAsPadding = section => {
	const headerHeight = document.querySelector('header').clientHeight;
	const currentPadding = parseFloat(
		window.getComputedStyle(section, null).getPropertyValue('padding-top')
	);
	section.style.paddingTop = `${currentPadding + headerHeight}px`;
};

// Closing Notice

const closingNotice = (menuToCloseClass, closingButtonClass) => {
	const menuToClose = document.querySelector(menuToCloseClass);
	const closingButton = document.querySelector(closingButtonClass);
	if (closingButton) {
		closingButton.addEventListener('click', () => {
			menuToClose.classList.add('hidden');
		});
	}
};

closingNotice('.notice', '.notice--close');

// Toggling Responsive Menu

const togglingMenu = (menuToToggleClass, burgerMenuClass) => {
	const bodyTag = document.querySelector('body');
	const menuToToggle = document.querySelector(menuToToggleClass);
	const burgerMenu = document.querySelector(burgerMenuClass);
	burgerMenu.addEventListener('click', () => {
		bodyTag.classList.toggle('opened');
		burgerMenu.classList.toggle('opened');
		menuToToggle.classList.toggle('opened');
	});
};

togglingMenu('.nav--mobile__reveal', '.menu--toggle');
