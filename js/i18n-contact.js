// Перевод contact.html
const resources = {
  en: {
    translation: {
      title: "HiLegal",
      menu: {
        about: "about us",
        services: "services",
        team: "team",
        publications: "publications",
        contact: "contact"
      },
      header: {
        address: "Kyiv, Mechnikova str,14/1"
      },
      contact: {
        address: "Kyiv,<br>Mechnikova str, 14",
        facebook: "Our page <br>on facebook",
        feedback: {
          intro: "We would like to help you",
          question: "How to answer you?",
          send: "Send message",
          name: "Name",
          message: "Message",
          phone: "Phone number",
          email: "Email"
        }
      },
      footer: {
        achievements: "ACHIEVEMENTS",
        address: "Kyiv, Mechnikova str, 14/1",
        map: "On map"
      }
    }
  },
  ua: {
    translation: {
      title: "HiLegal",
      menu: {
        about: "про нас",
        services: "послуги",
        team: "команда",
        publications: "публікації",
        contact: "контакт"
      },
      header: {
        address: "Київ, вул. Мечникова, 14/1"
      },
      contact: {
        address: "Київ,<br>вул. Мечникова, 14",
        facebook: "Наша сторінка <br>у Facebook",
        feedback: {
          intro: "Ми хочемо вам допомогти",
          question: "Як з вами зв'язатися?",
          send: "Відправити повідомлення",
          name: "Ім'я",
          message: "Повідомлення",
          phone: "Телефон",
          email: "Електронна пошта"
        }
      },
      footer: {
        achievements: "ДОСЯГНЕННЯ",
        address: "Київ, вул. Мечникова, 14/1",
        map: "На мапі"
      }
    }
  },
  ru: {
    translation: {
      title: "HiLegal",
      menu: {
        about: "о нас",
        services: "услуги",
        team: "команда",
        publications: "публикации",
        contact: "контакт"
      },
      header: {
        address: "Киев, ул. Мечникова, 14/1"
      },
      contact: {
        address: "Киев,<br>ул. Мечникова, 14",
        facebook: "Наша страница <br>в Facebook",
        feedback: {
          intro: "Мы хотим вам помочь",
          question: "Как с вами связаться?",
          send: "Отправить сообщение",
          name: "Имя",
          message: "Сообщение",
          phone: "Телефон",
          email: "Эл. почта"
        }
      },
      footer: {
        achievements: "ДОСТИЖЕНИЯ",
        address: "Киев, ул. Мечникова, 14/1",
        map: "На карте"
      }
    }
  }
};
i18next.init({
  lng: 'en', 
  debug: true,
  resources
}, function(err, t) {
  updateContent();
});

// Функция обновления текста на странице
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });

  // Переводим placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', i18next.t(key));
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

