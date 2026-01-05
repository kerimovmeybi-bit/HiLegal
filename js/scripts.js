
/* Burger Menu Toggle */
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


/* Footer Image Slider */
const slider = document.querySelector('.footer__images');
const images = document.querySelectorAll('.footer__image');
const dots = document.querySelectorAll('.footer__dot');

let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('footer__dot--active'));
    dots[index].classList.add('footer__dot--active');

    currentIndex = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});


