// // Fadein when text appears (src: https://css-tricks.com/sticky-smooth-active-nav/)

let navStickySection = document.querySelector('.page-hero-nav');
if (navStickySection) {
	let mainNavLinks = navStickySection.querySelectorAll('h5 a');
	const headerHeight = document.querySelector('header').clientHeight;

	let lastId;
	let cur = [];

	window.addEventListener('scroll', event => {
		let fromTop = window.scrollY + headerHeight + window.innerHeight / 4;

		mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);

			if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
				link.classList.add('current');
			} else {
				link.classList.remove('current');
			}
		});
	});
}
