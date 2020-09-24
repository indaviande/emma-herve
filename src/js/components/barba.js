import barba from '@barba/core';
import gsap from 'gsap';
import runScripts from './animations';
import menuScripts from './menu';
import stickyScripts from './sticky';
import optimizations from './optimizations';

runScripts();
menuScripts();
optimizations();
stickyScripts();

const scroll2top = () => {
	window.scrollTo({
		top: 0
	});
};

barba.init({
	transitions: [
		{
			name: 'fadein',
			once({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							resolve();
						}
					});

					timeline.set(next.container, { opacity: 0 }).to(next.container, { opacity: 1 });
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
							optimizations();
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
							optimizations();
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
		},
		{
			name: 'contact-transition',
			to: { namespace: 'contact' },
			once({ current, next, trigger }) {
				return new Promise(resolve => {
					const timeline = gsap.timeline({
						onComplete() {
							resolve();
						}
					});

					timeline
						.set(next.container, { opacity: 0 })
						.set('.contact-shapes img', { opacity: 0 })
						.to('footer', { y: '0' }, 0)
						.to(next.container, { opacity: 1 })
						.to('.contact-shapes img', { opacity: 1, stagger: 0.5 });
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
					scroll2top();

					const timeline = gsap.timeline({
						onComplete() {
							runScripts();
							menuScripts();
							optimizations();
							stickyScripts();
							resolve();
						}
					});

					timeline
						.set(next.container, { opacity: 0 })
						.set('.contact-shapes img', { opacity: 0 })
						.to('footer', { y: '0' }, 0)
						.to(next.container, { opacity: 1 })
						.to('.contact-shapes img', { opacity: 1, stagger: 0.5 });
				});
			}
		}
	]
});
