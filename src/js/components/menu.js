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

// Avoid "#" links to reach their target

$(document).on('click', 'a[href="#"]', function(event) {
	event.preventDefault();
});

// Smooth scroll to anchors

$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();

	if (event.currentTarget.attributes.href.nodeValue !== '#') {
		$('html, body').animate(
			{
				scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
			},
			700
		);
	}
});
