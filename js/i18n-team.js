// Перевод team.html

const resources = {
  en: {
    translation: {
      title: "HiLegal",
      menu: {
        about: "About Us",
        services: "Services",
        team: "Team",
        publications: "Publications",
        contact: "Contact"
      },
      header: {
        address: "Kyiv, Mechnikova str,14/1"
      },
      team: {
        title: "We are used to taking responsibility and always guarantee honest, timely assistance, even in situations where most are powerless.",
        members: {
          1: { name: "Alexander Alexandrovsky", role: "Managing partner" },
          2: { name: "Evgeny Patrikov", role: "Equity partner, Attorney-at-law" },
          3: { name: "Vladislav Melnik", role: "Associate" },
          4: { name: "Sergey Binn", role: "Associate" },
          5: { name: "Oksana Kobzar", role: "Equity partner, Attorney-at-law" },
          6: { name: "Julia Wolk", role: "Associate, Attorney-at-law" }
        }
      },
      footer: {
        address: "Kyiv, Mechnikova str, 14/1",
        map: "On map"
      },
      images: {
        fbAlt: "Facebook Logo",
        member1: "Alexander Alexandrovsky",
        member2: "Evgeny Patrikov",
        member3: "Vladislav Melnik",
        member4: "Sergey Binn",
        member5: "Oksana Kobzar",
        member6: "Julia Wolk"
      }
    }
  },
  ru: {
    translation: {
      title: "HiLegal",
      menu: {
        about: "О нас",
        services: "Услуги",
        team: "Команда",
        publications: "Публикации",
        contact: "Контакты"
      },
      header: {
        address: "Киев, ул. Мечникова,14/1"
      },
      team: {
        title: "Мы привыкли брать на себя ответственность и всегда гарантируем честную, своевременную помощь, даже в ситуациях, где большинство бессильно.",
        members: {
          1: { name: "Александр Александровский", role: "Управляющий партнер" },
          2: { name: "Евгений Патриков", role: "Партнер, адвокат" },
          3: { name: "Владислав Мельник", role: "Ассоциат" },
          4: { name: "Сергей Бинн", role: "Ассоциат" },
          5: { name: "Оксана Кобзарь", role: "Партнер, адвокат" },
          6: { name: "Юлия Вольк", role: "Ассоциат, адвокат" }
        }
      },
      footer: {
        address: "Киев, ул. Мечникова,14/1",
        map: "На карте"
      },
      images: {
        fbAlt: "Логотип Facebook",
        member1: "Александр Александровский",
        member2: "Евгений Патриков",
        member3: "Владислав Мельник",
        member4: "Сергей Бинн",
        member5: "Оксана Кобзарь",
        member6: "Юлия Вольк"
      }
    }
  },
  ua: {
    translation: {
      title: "HiLegal",
      menu: {
        about: "Про нас",
        services: "Послуги",
        team: "Команда",
        publications: "Публікації",
        contact: "Контакти"
      },
      header: {
        address: "Київ, вул. Мечникова,14/1"
      },
      team: {
        title: "Ми звикли брати на себе відповідальність і завжди гарантуємо чесну, своєчасну допомогу, навіть у ситуаціях, де більшість безсильні.",
        members: {
          1: { name: "Олександр Олександровський", role: "Керуючий партнер" },
          2: { name: "Євген Патриков", role: "Партнер, адвокат" },
          3: { name: "Владислав Мельник", role: "Ассоціат" },
          4: { name: "Сергій Бінн", role: "Ассоціат" },
          5: { name: "Оксана Кобзар", role: "Партнер, адвокат" },
          6: { name: "Юлія Вольк", role: "Ассоціат, адвокат" }
        }
      },
      footer: {
        address: "Київ, вул. Мечникова,14/1",
        map: "На карті"
      },
      images: {
        fbAlt: "Логотип Facebook",
        member1: "Олександр Олександровський",
        member2: "Євген Патриков",
        member3: "Владислав Мельник",
        member4: "Сергій Бінн",
        member5: "Оксана Кобзар",
        member6: "Юлія Вольк"
      }
    }
  }
};

// Инициализация i18next
i18next.init({
  lng: 'en',
  resources
}, function(err, t) {
  updateContent();
});

// Функция обновления текста
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });

  // alt для изображений
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    el.alt = i18next.t(key);
  });
}

// Переключение языка
document.querySelectorAll('.header__lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    i18next.changeLanguage(lang, () => {
      updateContent();
      document.querySelectorAll('.header__lang-btn').forEach(b => b.classList.remove('header__lang-btn--active'));
      btn.classList.add('header__lang-btn--active');
    });
  });
});
