// i18n-index.js

// ======================= TRANSLATIONS =======================
const resources = {
  en: {
    translation: {
      title: "HiLegal",
      menu: { about: "about us", services: "services", team: "team", publications: "publications", contact: "contact" },
      header: { address: "Kyiv, Mechnikova str, 14/1" },
      hero: {
        title: "your legal solutions provider",
        menu: {
          consistent: "Consistent",
          customer: "Customer oriented",
          innovative: "Innovative",
          business: "Business oriented",
          title: "We turn the idea of legal services",
          text: "Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry."
        }
      },
      services: {
        link: "Services ›",
        title: "What can we do better than others?",
        items: {
          1: { title: "IT and e-commerce.", desc: "An endless stream of contracts, tax issues, labor relations, corporate papers — legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer." },
          2: { title: "Comprehensive daily legal support.", desc: "Over time, the work becomes routine and uninteresting for a full-time lawyer. We know how difficult it is to find a good IT lawyer in Ukraine." },
          3: { title: "Structuring corporate relationships.", desc: "Instead of just providing legal services, we integrate a lawyer or a team into your company’s daily life." },
          4: { title: "Building contractual relations.", desc: "You have your own lawyer nearby — weekly or monthly — without waiting for status updates." },
          5: { title: "Protection of business and intellectual property.", desc: "All Axon Partners work for you instead of one in-house lawyer." },
          6: { title: "Judicial representation.", desc: "Small business, market leader, local or international company — we represent everyone." }
        }
      },
      publications: {
        link: "Publications",
        title: "Recommended",
        items: {
          1: { title: "Equity associate", date: "April 22", desc: "I'm a junior on projects. I am a co-owner of a law firm. How it happened…" },
          2: { title: "Language Law: How to Make Your Website Relevant", date: "August 19", desc: "Why the Ukrainian-language site is beautiful, effective and relevant." },
          3: { title: "Millennial Testament", date: "August 19", desc: "What modern vloggers and crypto-millionaires will inherit…" },
          4: { title: "Corporate Tax Guide", date: "May 12", desc: "Understanding corporate taxes in 2026 for Ukrainian businesses." },
          5: { title: "Legal Trends 2026", date: "June 5", desc: "The main legal trends affecting business this year." },
          6: { title: "Startup Compliance Tips", date: "July 20", desc: "Practical legal advice for new companies." }
        }
      },
         team: {
        title: "Team ›",
        cards: [
          {
            text: "We have heard, brothers, that we are confident and will always be honest and help you.",
            name: "Alexander Alexandrovsky",
            position: "Managing Partner"
          },
          {
            text: "Our team combines deep legal expertise with modern business thinking. We are not just lawyers, but also strategic partners for our clients.",
            name: "Sergey Binn",
            position: "Associate"
          },
          {
            text: "We support clients in the most complex and non-standard legal cases. Our experience allows us to find effective solutions even in the most difficult situations.",
            name: "Oksana Kobzar",
            position: "Equity partner, Attorney-at-law"
          }
        ]
      },
      footer: {
        trust: "They already trust us",
        address: "Kyiv, Mechnikova str, 14/1",
        map: "On map",
        copyright: "© 2026 HLEGAL Law company, LLC"
      }
    }
  },
  ru: {
    translation: {
      title: "HiLegal",
      menu: { about: "о нас", services: "услуги", team: "команда", publications: "публикации", contact: "контакты" },
      header: { address: "Киев, ул. Мечникова, 14/1" },
      hero: {
        title: "ваш провайдер юридических решений",
        menu: {
          consistent: "Последовательность",
          customer: "Ориентация на клиента",
          innovative: "Инновации",
          business: "Ориентация на бизнес",
          title: "Мы меняем представление о юридических услугах",
          text: "Объединяя многолетний опыт, юристы компании сопровождают сложные проекты и принимают важные решения для отрасли."
        }
      },
      services: {
        link: "Услуги ›",
        title: "Что мы делаем лучше других?",
        items: {
          1: { title: "IT и электронная коммерция.", desc: "Бесконечный поток договоров и налоговых вопросов отвлекает от бизнеса." },
          2: { title: "Комплексная юридическая поддержка.", desc: "Мы знаем, как сложно найти хорошего IT-юриста в Украине." },
          3: { title: "Структурирование корпоративных отношений.", desc: "Мы интегрируем юриста в повседневную жизнь компании." },
          4: { title: "Построение договорных отношений.", desc: "Ваш юрист всегда рядом, без ожиданий обновлений." },
          5: { title: "Защита бизнеса и интеллектуальной собственности.", desc: "Вся команда работает на вас." },
          6: { title: "Судебное представительство.", desc: "Работаем с компаниями любого масштаба." }
        }
      },
       team: {
        title: "Команда ›",
        cards: [
          { text: "Мы уверены и всегда честны и помогаем клиентам.", name: "Александр Александровский", position: "Управляющий партнер" },
          { text: "Наша команда сочетает глубокую юридическую экспертизу и бизнес-мышление.", name: "Сергей Бинн", position: "Ассоциат" },
          { text: "Мы поддерживаем клиентов в самых сложных делах.", name: "Оксана Кобзарь", position: "Партнер, адвокат" }
        ]
      },
      publications: {
        link: "Публикации",
        title: "Рекомендуем",
        items: {
          1: { title: "Младший партнер", date: "22 апреля", desc: "Как я стал совладельцем юридической фирмы…" },
          2: { title: "Языковой закон", date: "19 августа", desc: "Почему украинский сайт — это эффективно." },
          3: { title: "Завещание миллениалов", date: "19 августа", desc: "Что унаследует поколение X…" },
          4: { title: "Корпоративное налогообложение", date: "12 мая", desc: "Понимание корпоративных налогов в 2026 году." },
          5: { title: "Юридические тренды 2026", date: "5 июня", desc: "Основные юридические тренды, влияющие на бизнес." },
          6: { title: "Советы по стартапам", date: "20 июля", desc: "Практические юридические советы для новых компаний." }
        }
      },
      footer: { trust: "Нам уже доверяют", address: "Киев, ул. Мечникова, 14/1", map: "На карте", copyright: "© 2026 Юридическая компания HLEGAL, LLC" }
    }
  },
  ua: {
    translation: {
      title: "HiLegal",
      menu: { about: "про нас", services: "послуги", team: "команда", publications: "публікації", contact: "контакти" },
      header: { address: "Київ, вул. Мечникова, 14/1" },
      hero: {
        title: "ваш провайдер юридичних рішень",
        menu: {
          consistent: "Послідовність",
          customer: "Орієнтація на клієнта",
          innovative: "Інновації",
          business: "Орієнтація на бізнес",
          title: "Ми змінюємо уявлення про юридичні послуги",
          text: "Поєднуючи багаторічний досвід, юристи компанії супроводжують складні проєкти."
        }
      },
      services: {
        link: "Послуги ›",
        title: "Що ми робимо краще за інших?",
        items: {
          1: { title: "IT та електронна комерція.", desc: "Юридична рутина відволікає від бізнесу." },
          2: { title: "Щоденна юридична підтримка.", desc: "Ми знаємо, як важко знайти IT-юриста." },
          3: { title: "Корпоративні відносини.", desc: "Юрист стає частиною команди." },
          4: { title: "Договірні відносини.", desc: "Ваш юрист завжди поруч." },
          5: { title: "Захист бізнесу та ІВ.", desc: "Працює вся команда." },
          6: { title: "Судове представництво.", desc: "Компанії будь-якого масштабу." }
        }
      },
      team: {
        title: "Команда ›",
        cards: [
          { text: "Ми впевнені та завжди чесні та допомагаємо клієнтам.", name: "Олександр Александровський", position: "Керуючий партнер" },
          { text: "Наша команда поєднує глибоку юридичну експертизу та бізнес-мислення.", name: "Сергій Бінн", position: "Ассоціат" },
          { text: "Ми підтримуємо клієнтів у найскладніших справах.", name: "Оксана Кобзар", position: "Партнер, адвокат" }
        ]
      },
      publications: {
        link: "Публікації",
        title: "Рекомендовано",
        items: {
          1: { title: "Молодший партнер", date: "22 квітня", desc: "Як я став співвласником фірми…" },
          2: { title: "Мовний закон", date: "19 серпня", desc: "Чому український сайт ефективний." },
          3: { title: "Заповіт міленіалів", date: "19 серпня", desc: "Спадщина покоління X…" },
          4: { title: "Корпоративне оподаткування", date: "12 травня", desc: "Розуміння корпоративних податків у 2026 році." },
          5: { title: "Юридичні тренди 2026", date: "5 червня", desc: "Основні юридичні тренди, що впливають на бізнес." },
          6: { title: "Поради для стартапів", date: "20 липня", desc: "Практичні юридичні поради для нових компаній." }
        }
      },
      footer: { trust: "Нам уже довіряють", address: "Київ, вул. Мечникова, 14/1", map: "На карті", copyright: "© 2026 Юридична компанія HLEGAL, LLC" }
    }
  }
};

// ======================= INIT I18NEXT =======================
i18next.init({ lng: "en", fallbackLng: "en", resources }, () => {
  updateContent();
  initHeroTeamPublications();
});

// ======================= UPDATE CONTENT =======================
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => el.innerHTML = i18next.t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-alt]").forEach(el => el.alt = i18next.t(el.dataset.i18nAlt));
}

// ======================= LANGUAGE SWITCH =======================
document.querySelectorAll(".header__lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    i18next.changeLanguage(lang, () => {
      document.documentElement.lang = lang;
      updateContent();
      document.querySelectorAll(".header__lang-btn").forEach(b => b.classList.remove("header__lang-btn--active"));
      btn.classList.add("header__lang-btn--active");
    });
  });
});

// ======================= HERO MENU, TEAM, PUBLICATIONS =======================
function initHeroTeamPublications() {
  // ===== HERO MENU =====
  const scrollBtn = document.querySelector(".scroll-btn");
  const heroMenu = document.getElementById("heroMenu");
  const menuItems = document.querySelectorAll(".hero-menu__item");
  const menuTitle = document.getElementById("menuTitle");
  const menuText = document.getElementById("menuText");
  const heroContentKeys = ["consistent", "customer", "innovative", "business"];

  scrollBtn?.addEventListener("click", () => {
    heroMenu.classList.toggle("active");
    scrollBtn.classList.toggle("active");
    heroMenu?.scrollIntoView({ behavior: "smooth" });
  });

  menuItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
      menuItems.forEach(i => i.classList.remove("hero-menu__item--active"));
      item.classList.add("hero-menu__item--active");
      const key = heroContentKeys[idx];
      menuTitle.textContent = i18next.t(`hero.menu.${key}.title`);
      menuText.textContent = i18next.t(`hero.menu.${key}.text`);
    });
  });

  i18next.on("languageChanged", () => {
    const activeIdx = [...menuItems].findIndex(item => item.classList.contains("hero-menu__item--active"));
    const key = heroContentKeys[activeIdx >= 0 ? activeIdx : 0];
    menuTitle.textContent = i18next.t(`hero.menu.${key}.title`);
    menuText.textContent = i18next.t(`hero.menu.${key}.text`);
  });

  // ===== TEAM =====
  const teamData = [
    { img: "./Images/Photo2.webp", key: "team.cards.0" },
    { img: "./Images/Photo1.webp", key: "team.cards.1" },
    { img: "./Images/Photo3.webp", key: "team.cards.2" }
  ];
  const teamCard = document.getElementById("teamCard");
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

    const teamPhoto = teamCard.querySelector(".team-photo");
    const teamText = teamCard.querySelector(".team-text");
    const teamName = teamCard.querySelector(".team-name");
    const teamPosition = teamCard.querySelector(".team-position");
    const teamDots = teamCard.querySelector(".team-dots");

    teamData.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "team-dot";
      dot.addEventListener("click", () => switchTeam(i));
      teamDots.appendChild(dot);
    });

    function renderTeam(index) {
      const data = teamData[index];
      teamPhoto.src = data.img;
      teamText.textContent = i18next.t(`${data.key}.text`);
      teamName.textContent = i18next.t(`${data.key}.name`);
      teamPosition.textContent = i18next.t(`${data.key}.position`);
      teamDots.querySelectorAll(".team-dot").forEach((d, i) => d.classList.toggle("active", i === index));
    }

    function switchTeam(index) {
      if (index === currentTeam) return;
      currentTeam = index;
      renderTeam(currentTeam);
    }

    i18next.on("languageChanged", () => renderTeam(currentTeam));
    renderTeam(currentTeam);
  }

  // ===== PUBLICATIONS =====
  const publicationPages = [
    [1,2,3].map(i => ({ img: `./Images/Publication-${i}.webp`, key: `publications.items.${i}` })),
    [4,5,6].map(i => ({ img: `./Images/Publication-${i}.webp`, key: `publications.items.${i}` }))
  ];
  let currentPage = 0;
  const articlesWrapper = document.getElementById("articles-wrapper");
  const nextBtn = document.querySelector(".slider-btn--next");
  const prevBtn = document.querySelector(".slider-btn--prev");

  function renderPublications(pageIndex) {
    if (!articlesWrapper) return;
    articlesWrapper.innerHTML = "";
    publicationPages[pageIndex].forEach(item => {
      const article = document.createElement("article");
      article.className = "publication-item";

      if (item.img) {
        const img = document.createElement("img");
        img.src = item.img;
        img.className = "publication-item__image";
        article.appendChild(img);
      }

      const title = document.createElement("a");
      title.className = "publication-item__title";
      title.href = "./publications-page.html";
      title.textContent = i18next.t(`${item.key}.title`);
      article.appendChild(title);

      const date = document.createElement("p");
      date.className = "publication-item__date";
      date.textContent = i18next.t(`${item.key}.date`);
      article.appendChild(date);

      const line = document.createElement("div");
      line.className = "h-line-card";
      article.appendChild(line);

      const desc = document.createElement("p");
      desc.className = "publication-item__description";
      desc.textContent = i18next.t(`${item.key}.desc`);
      article.appendChild(desc);

      articlesWrapper.appendChild(article);
    });
  }

  renderPublications(currentPage);

  nextBtn?.addEventListener("click", () => {
    currentPage = (currentPage + 1) % publicationPages.length;
    renderPublications(currentPage);
  });

  prevBtn?.addEventListener("click", () => {
    currentPage = (currentPage - 1 + publicationPages.length) % publicationPages.length;
    renderPublications(currentPage);
  });

  i18next.on("languageChanged", () => renderPublications(currentPage));
}
