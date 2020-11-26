'use strict';

// MOBILE MENU FUNCTIONALITY
const burgerNav = document.querySelector('#burger-nav');
const menuModal = document.querySelector('#mobile-menu-modal');

burgerNav.addEventListener('click', function () {
    menuModal.classList.toggle('activate-mobile-menu');
});