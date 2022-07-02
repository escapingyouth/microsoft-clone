'use strict';

import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	mousewheel: true,
	keyboard: true
});