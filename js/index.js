import { useDynamicAdapt } from '../libs/dynamicAdapt.js';

useDynamicAdapt();

const burgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav');
const body = document.body;

// убираем скролл при открытии бургер меню

const disableScroll = () => {
	body.classList.add('stop-scroll');
}
const enableScroll = () => {
	body.classList.remove('stop-scroll');
}


burgerBtn.addEventListener('click', () => {

	burgerBtn.classList.toggle('is-active');
	navMenu.classList.toggle('is-open');

	if (navMenu.classList.contains('is-open')) {
		disableScroll();
	} else {
		enableScroll();
	}
});


const swiper = new Swiper(".swiper", {
	navigation: {
		setWrapperSize: true,
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// убираем скролл при открытии модального окна

const openModal = document.querySelector('.hero__btn');
const closeModal = document.querySelector('.modal__close-btn')
const html = document.documentElement;
const scrollPosition = window.pageYOffset;

const scrollPrevent = () => {

	openModal.addEventListener('click', () => {
		html.style.top = -scrollPosition + "px";
		html.classList.add("modal__open");
	});

	closeModal.addEventListener('click', () => {
		html.classList.remove("modal__open");
	})
}

scrollPrevent();

