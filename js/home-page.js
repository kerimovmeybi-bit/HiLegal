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

document.addEventListener('DOMContentLoaded', () => {

  /* ===================== TEAM ===================== */

  const teamData = [
    { img: './Images/Photo2.webp', key: 'team.cards.0' },
    { img: './Images/Photo1.webp', key: 'team.cards.1' },
    { img: './Images/Photo3.webp', key: 'team.cards.2' }
  ];

  const teamCard = document.getElementById('teamCard');
  let currentTeam = 0;

  if (teamCard) {
    teamCard.innerHTML = `
      <div class="team-card__inner show">
        <img class="team-photo" />
        <div class="team-content">
          <a href="./team.html" class="team-title" data-i18n="team.title"></a>
          <p class="team-text"></p>
          <p class="team-name"></p>
          <p class="team-position"></p>
        </div>
      </div>
      <div class="team-dots"></div>
    `;

    const teamPhoto = teamCard.querySelector('.team-photo');
    const teamText = teamCard.querySelector('.team-text');
    const teamName = teamCard.querySelector('.team-name');
    const teamPosition = teamCard.querySelector('.team-position');
    const teamDots = teamCard.querySelector('.team-dots');

    teamData.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'team-dot';
      dot.addEventListener('click', () => switchTeamCard(i));
      teamDots.appendChild(dot);
    });

    function renderTeamCard(index) {
      const data = teamData[index];

      teamPhoto.src = data.img;
      teamText.textContent = i18next.t(`${data.key}.text`);
      teamName.textContent = i18next.t(`${data.key}.name`);
      teamPosition.textContent = i18next.t(`${data.key}.position`);

      teamDots.querySelectorAll('.team-dot').forEach((d, i) =>
        d.classList.toggle('active', i === index)
      );
    }

    function switchTeamCard(index) {
      if (index === currentTeam) return;
      currentTeam = index;
      renderTeamCard(currentTeam);
    }

    i18next.on('languageChanged', () => renderTeamCard(currentTeam));

    renderTeamCard(currentTeam);
  }
  /* ===================== PUBLICATIONS ===================== */

const publicationPages = [
  [
    { img: './Images/Publication-1.webp', key: 'publications.items.1' },
    { img: './Images/Publication-4.webp', key: 'publications.items.2' },
    { img: './Images/Publication-3.webp', key: 'publications.items.3' }
  ],
  [
    { img: './Images/Publication-2.webp', key: 'publications.items.4' },
    { img: './Images/Publication-5.webp', key: 'publications.items.5' },
    { img: './Images/Publication-6.webp', key: 'publications.items.6' }
  ]
];

let currentPublicationPage = 0;
const articlesWrapper = document.getElementById('articles-wrapper');
const nextBtn = document.querySelector('.slider-btn--next');
const prevBtn = document.querySelector('.slider-btn--prev');

function renderPublicationPage(index) {
  if (!articlesWrapper) return;

  articlesWrapper.innerHTML = '';

  publicationPages[index].forEach(item => {
    const article = document.createElement('article');
    article.className = 'publication-item';

    const img = document.createElement('img');
    img.src = item.img;
    img.className = 'publication-item__image';

    const title = document.createElement('a');
    title.className = 'publication-item__title';
    title.href = './publications-page.html';
    title.textContent = i18next.t(`${item.key}.title`);

    const date = document.createElement('p');
    date.className = 'publication-item__date';
    date.textContent = i18next.t(`${item.key}.date`);

    const line = document.createElement('div');
    line.className = 'h-line-card';

    const desc = document.createElement('p');
    desc.className = 'publication-item__description';
    desc.textContent = i18next.t(`${item.key}.desc`);

    article.append(img, title, date, line, desc);
    articlesWrapper.appendChild(article);
  });
}

// первая отрисовка
renderPublicationPage(currentPublicationPage);

// кнопки
nextBtn?.addEventListener('click', () => {
  currentPublicationPage =
    (currentPublicationPage + 1) % publicationPages.length;
  renderPublicationPage(currentPublicationPage);
});

prevBtn?.addEventListener('click', () => {
  currentPublicationPage =
    (currentPublicationPage - 1 + publicationPages.length) %
    publicationPages.length;
  renderPublicationPage(currentPublicationPage);
});

//  ПЕРЕВОД ПРИ СМЕНЕ ЯЗЫКА
i18next.on('languageChanged', () => {
  renderPublicationPage(currentPublicationPage);
});

});
