// home-page.js
// Скрипт для главной страницы
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll-btn');
    const menu = document.getElementById('heroMenu');

    const items = document.querySelectorAll('.hero-menu__item');
    const title = document.getElementById('menuTitle');
    const text = document.getElementById('menuText');

    const content = {
        consistent: {
            title: 'We turn the idea of legal services',
            text: `Consolidating many years of experience and practice, the company's
            lawyers accompany complex projects and achieve a number of
            important decisions for the industry.`
        },
        customer: {
            title: 'Customer oriented approach',
            text: `We focus on the client’s business goals, offering legal solutions
            that create value, reduce risks and support long-term growth.`
        },
        innovative: {
            title: 'Innovative legal solutions',
            text: `We use modern legal instruments and creative approaches to solve
            complex non-standard tasks in a rapidly changing environment.`
        },
        business: {
            title: 'Business oriented mindset',
            text: `We think like entrepreneurs, helping businesses make effective
            decisions, scale projects and confidently enter new markets.`
        }
    };

    // toggle меню + вращение кнопки
    scrollBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        scrollBtn.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menu.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // переключение пунктов меню
    items.forEach(item => {
        item.addEventListener('click', () => {
            const key = item.dataset.key;

            items.forEach(i =>
                i.classList.remove('hero-menu__item--active')
            );
            item.classList.add('hero-menu__item--active');

            title.textContent = content[key].title;
            text.textContent = content[key].text;
        });
    });
});

// Скрипт для секции "Команда"
const teamData = [
    {
        img: './Images/Photo2.webp',
        text: 'We have heard, brothers, that we are confident and will always be honest and help you.',
        name: 'Alexander Alexandrovsky',
        position: 'Managing Partner'
    },
    {
        img: './Images/Photo1.webp',
        text: 'Our team combines deep legal expertise with modern business thinking. We are not just lawyers, but also strategic partners for our clients.',
        name: 'Sergey Binn',
        position: 'Associate'
    },
    {
        img: './Images/Photo3.webp',
        text: 'We support clients in the most complex and non-standard legal cases. Our experience allows us to find effective solutions even in the most difficult situations.',
        name: 'Oksana Kobzar',
        position: 'Equity partner, Attorney-at-law'
    }
];

const card = document.getElementById('teamCard');
let current = 0;

function renderCard(index) {
    card.innerHTML = `
        <div class="team-card__inner">
            <img class="team-photo" src="${teamData[index].img}" alt="">
            <div class="team-content">
                <a href="./team.html" class="team-title">Team ›</a>
                <p class="team-text">${teamData[index].text}</p>
                <p class="team-name">${teamData[index].name}</p>
                <p class="team-position">${teamData[index].position}</p>
            </div>
        </div>

        <div class="team-dots">
            ${teamData.map((_, i) =>
                `<button class="team-dot ${i === index ? 'active' : ''}" data-index="${i}"></button>`
            ).join('')}
        </div>
    `;

    const inner = card.querySelector('.team-card__inner');
    requestAnimationFrame(() => inner.classList.add('show'));

    card.querySelectorAll('.team-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            if (+dot.dataset.index === current) return;
            switchCard(+dot.dataset.index);
        });
    });
}

function switchCard(index) {
    const inner = card.querySelector('.team-card__inner');
    inner.classList.remove('show');

    setTimeout(() => {
        current = index;
        renderCard(current);
    }, 300);
}

renderCard(current);


/* Publication articles slider*/


document.addEventListener('DOMContentLoaded', () => {
        const pages = [
            [
                `<article class="publication-item">
                <img src="./Images/Publication-1.webp" class="publication-item__image">
                <a href="./publications-page.html" class="publication-item__title">Equity associate</a>
                <p class="publication-item__date">April 22</p>
                <div class="h-line-card"></div>
                <p class="publication-item__description">I'm a jun on projects...</p>
            </article>`,
                `<article class="publication-item">
                <img src="./Images/Publication-4.webp" class="publication-item__image">
                <a href="./publications-page.html" class="publication-item__title">Language Law: How to Make Your Website Relevant</a>
                <p class="publication-item__date">August 19</p>
                <div class="h-line-card"></div>
                <p class="publication-item__description">Natalia Kyryk, head of content studio Wordfactory.ua...</p>
            </article>`,
                `<article class="publication-item">
                <img src="./Images/Publication-3.webp" class="publication-item__image">
                <a href="./publications-page.html" class="publication-item__title">Millennial Testament</a>
                <p class="publication-item__date">August 19</p>
                <div class="h-line-card"></div>
                <p class="publication-item__description">What and how modern vloggers...</p>
            </article>`
            ],
            [
                `<article class="publication-item">
                <img src="./Images/Publication-2.webp" class="publication-item__image">
                <a href="./publications-entry-page.html?id=2" class="publication-item__title">
                    Penalty for the Good Corporation...
                </a>
                <p class="publication-item__date">September 29</p>
                <div class="h-line"></div>
                <p class="publication-item__description">And why the recovery of 50 million euros...</p>
            </article>`,
                `<article class="publication-item">
                <img src="./Images/Publication-5.webp" class="publication-item__image">
                <a href="./publications-entry-page.html?id=5" class="publication-item__title">
                    Reimbursement of the child's tuition fees...
                </a>
                <p class="publication-item__date">February 5, 2018</p>
                <div class="h-line"></div>
                <p class="publication-item__description">What we are talking about In June this year...</p>
            </article>`,
                `<article class="publication-item">
                <a href="./publications-entry-page.html?id=6" class="publication-item__title">Currency control is dead...</a>
                <p class="publication-item__date">June 14, 2018</p>
                <div class="h-line"></div>
                <p class="publication-item__description">Experts hold conferences, round tables...</p>
            </article>`
            ]
        ];

        let currentPage = 0;
        const wrapper = document.getElementById('articles-wrapper');

        function renderPage(pageIndex) {
            wrapper.innerHTML = pages[pageIndex].join('');
        }

        // Показ первой страницы при загрузке
        renderPage(currentPage);

        document.querySelector('.slider-btn--next').addEventListener('click', () => {
            currentPage = (currentPage + 1) % pages.length;
            renderPage(currentPage);
        });

        document.querySelector('.slider-btn--prev').addEventListener('click', () => {
            currentPage = (currentPage - 1 + pages.length) % pages.length;
            renderPage(currentPage);
        });
    });


