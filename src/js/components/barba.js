import barba from '@barba/core';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import runScripts from './animations';
import menuScripts from './menu';
import stickyScripts from './sticky';

runScripts();
menuScripts();
stickyScripts();

const scroll2top = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};

barba.init({
	transitions: [
		{
			name: 'fadein',
			once({ current, next, trigger }) {
				return new Promise(resolve => {
					const images = document.querySelectorAll(images);
					imagesLoaded(images, () => {
						const timeline = gsap.timeline({
							onComplete() {
								resolve();
							}
						});

						timeline.set(next.container, { opacity: 0 }).to(next.container, { opacity: 1 });
					});
				});
			},
			leave({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							current.container.remove();
							resolve();
						}
					});

					timeline
						.to('footer', { y: '100%' }, 0)
						.to(current.container, { opacity: 0 })
						.to(next.container, { opacity: 0 });
				});
			},
			enter({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							runScripts();
							menuScripts();
							stickyScripts();
							resolve();
						}
					});

					scroll2top();

					timeline
						.set(next.container, { opacity: 0 })
						.to('footer', { y: '0' }, 0)
						.to(next.container, { opacity: 1 });
				});
			}
		},
		{
			name: 'homepage-transition',
			to: { namespace: 'homepage' },
			once({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							resolve();
						}
					});

					timeline
						.set(next.container, { opacity: 0 })
						.set('.bg-hand', { opacity: 0, x: '-50px' })
						.set('.hp-questions li', { opacity: 0 })
						.set('.notice', { y: '-100%' })
						.to('footer', { y: '0' }, 0)
						.to(next.container, { opacity: 1 })
						.to('.bg-hand', { opacity: 1, x: '0' })
						.to('.hp-questions li', { opacity: 1, stagger: 0.1 })
						.to('.notice', { y: '0' });
				});
			},
			leave({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							current.container.remove();
							resolve();
						}
					});

					timeline
						.to('footer', { y: '100%' }, 0)
						.to(current.container, { opacity: 0 })
						.to(next.container, { opacity: 0 });
				});
			},
			enter({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							runScripts();
							menuScripts();
							stickyScripts();
							resolve();
						}
					});

					scroll2top();

					timeline
						.set(next.container, { opacity: 0 })
						.set('.bg-hand', { opacity: 0, x: '-50px' })
						.set('.hp-questions li', { opacity: 0 })
						.to('footer', { y: '0' }, 0)
						.to(next.container, { opacity: 1 })
						.to('.bg-hand', { opacity: 1, x: '0' })
						.to('.hp-questions li', { opacity: 1, stagger: 0.1 });
				});
			}
		}
	]
});
