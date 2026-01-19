
/* Burger Menu Toggle */
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


/* Footer Image Slider */
const dots = document.querySelectorAll('.footer__dot');
const images = document.querySelectorAll('.footer__image');

let currentIndex = 0;
const intervalTime = 3000;
let sliderInterval;

function animateSlide(index) {
    // активная точка
    dots.forEach(d => d.classList.remove('footer__dot--active'));
    dots[index].classList.add('footer__dot--active');

    // slide-анимация
    images.forEach(img => {
        img.style.transform = 'translateX(-40px)';
        img.style.opacity = '0';
    });

    setTimeout(() => {
        images.forEach(img => {
            img.style.transform = 'translateX(40px)';
        });

        images[0].offsetHeight; // force reflow

        images.forEach(img => {
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
        });
    }, 500);

    currentIndex = index;
}

function startAutoSlide() {
    sliderInterval = setInterval(() => {
        let next = currentIndex + 1;
        if (next >= dots.length) next = 0;
        animateSlide(next);
    }, intervalTime);
}

// клики по точкам
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(sliderInterval);
        animateSlide(index);
        startAutoSlide();
    });
});

// старт
animateSlide(0);
startAutoSlide();

/* Feedback Form Submission */
const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
        name: formData.get('name'),
        message: formData.get('message'),
        phone: formData.get('phone'),
        email: formData.get('email')
    };

    console.log('Отправлено:', data);

    alert('Message sent successfully!');

    form.reset();
});












