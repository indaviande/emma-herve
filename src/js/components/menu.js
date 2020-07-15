// (Sticky Nav under Sticky Header) + (Header hiding) when scrolling down

const stickyNav = document.querySelector('.page-hero-nav');
const nav = document.querySelector('header');
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

const addHeaderHeightTop = section => {
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

const headerHeight = document.querySelector('header').clientHeight;
const introSection = document.querySelector('.page-hero');

const addHeaderHeight = section => {
	const currentPadding = parseFloat(
		window.getComputedStyle(section, null).getPropertyValue('padding-top')
	);
	section.style.paddingTop = `${currentPadding + headerHeight}px`;
};

if (introSection) {
	addHeaderHeight(introSection);
}

// Closing Notice

const closingNotice = (menuToCloseClass, closingButtonClass) => {
	const menuToClose = document.querySelector(menuToCloseClass);
	const closingButton = document.querySelector(closingButtonClass);
	closingButton.addEventListener('click', () => {
		menuToClose.classList.add('hidden');
	});
};

closingNotice('.notice', '.notice--close');

// Toggling Responsive Menu

const togglingMenu = (menuToToggleClass, burgerMenuClass) => {
	const menuToToggle = document.querySelector(menuToToggleClass);
	const burgerMenu = document.querySelector(closingButtonClass);
	burgerMenu.addEventListener('click', () => {
		console.log('clicked');
		burgerMenu.classList.toggle('opened');
		menuToToggle.classList.toggle('opened');
	});
};

closingNotice('.nav--mobile__reveal', '.menu--toggle');
