// Smooth Scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// All colored-circle with transition delay

const menuItemsWithChildrens = document.querySelectorAll(
	'.colored-circle-element, .pour-qui-block-image'
);
menuItemsWithChildrens.forEach((menuItemWithChildrens, index) => {
	const subMenuItems = menuItemWithChildrens.querySelectorAll('.colored-circle');
	subMenuItems.forEach(subMenuItem => {
		subMenuItem.style.animationDelay = `${500 * index}ms`;
	});
});
