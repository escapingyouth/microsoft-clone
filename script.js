'use strict';

// For desktop dropdowns
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownDesktop = document.querySelector('.dropdown-container');

// For mobile dropdowns
const hamburger = document.querySelector('.hamburger');
const dropdownMobile = document.querySelector('.dropdown-mobile');

const sublists = document.querySelectorAll('.sublist');
const sublistBtns = document.querySelectorAll('.sublist-btn');

const showDropdown = (el) => {
	el.classList.toggle('show');
};

dropdownBtn.addEventListener('click', () => {
	showDropdown(dropdownDesktop);
});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	showDropdown(dropdownMobile);
});

for (let i = 0; i < sublistBtns.length; i++) {
	sublistBtns[i].addEventListener('click', () => {
		sublistBtns[i].classList.toggle('rotate');
		showDropdown(sublists[i]);
	});
}
