// 1. Mission Section Scrolling - Tied to handleScroll method

Vue.directive('scroll', {
	inserted: function (el, binding) {
		let f = function (evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f);
			}
		};
		window.addEventListener('scroll', f);
	},
});

// 2. JQUERY - Circle

// $(window).scroll(function () {
// 	var wScroll = $(this).scrollTop();
// 	$('.section-pricing--circle').css({
// 		transform: 'translate(-50%, -' + wScroll / 80 + '%)',
// 	});
// });

// 3. Main app
new Vue({
	el: '#app',
	methods: {
		handleScroll: function (evt, el) {
			if (window.scrollY > 50) {
				el.setAttribute('style', 'opacity: 1; transform: translate3d(0, -10px, 0)');
			}
			return window.scrollY > 100;
		},
	},
});

// 4. Intersecting
const faders = document.querySelectorAll('.fade-in');

const options = {
	root: document.querySelector('#scrollArea'),
	rootMargin: '0px 0px -100px 0px',
	threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, options);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
