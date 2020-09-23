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

// Fadein when text appears
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.intersectionRatio >= 0.1) {
				entry.target.classList.add('in-view');
			} else {
				entry.target.classList.remove('in-view');
			}
		});
	},
	{
		threshold: [0, 0.1, 1]
	}
);

const slideReveals = document.querySelectorAll('.slide__reveal');
// const pBig = document.querySelectorAll('p.big');

slideReveals.forEach((slide, index) => {
	const subMenuItems = slide.querySelectorAll('h1,h2');
	subMenuItems.forEach(subMenuItem => {
		subMenuItem.style.transitionDelay = `${300 * index}ms`;
	});
});

slideReveals.forEach(slide => {
	observer.observe(slide);
});

// Fading Background-color by sections
const sections = document.querySelectorAll('section');
const bodyTag = document.querySelector('body');
console.log(sections);
console.log(bodyTag);

const changeBackground = () => {
	const topViewport = window.pageYOffset;
	const midViewport = topViewport + window.innerHeight / 2;

	sections.forEach((section, index) => {
		const topSection = section.offsetTop;
		const midSection = topSection + section.offsetHeight / 2;

		const distanceToSection = midViewport - midSection;
		console.log(distanceToSection);

		if (distanceToSection > -300) {
			const dataBackground = section.getAttribute('data-background');
			bodyTag.style.backgroundColor = dataBackground;
		}
	});
};

document.addEventListener('scroll', () => {
	changeBackground();
});

window.addEventListener('resize', () => {
	changeBackground();
});
