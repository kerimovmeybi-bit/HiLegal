// Перевод services-page.html

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
      services: {
        intro: "What can we do better than others?",
        items: {
          1: {
            title: "IT and e-commerce.",
            desc: "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer."
          },
          2: {
            title: "Comprehensive daily legal support.",
            desc: "In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine."
          },
          3: {
            title: "Structuring corporate relationships.",
            desc: "Instead of just providing legal services, we will hire a lawyer or a whole team that will fit into the daily life of your company."
          },
          4: {
            title: "Building contractual relations.",
            desc: "Once a week, or week after month, you have your own lawyer by your side. Anyone in the company can catch it at the coffee maker and just talk about current affairs instead of waiting for update status."
          },
          5: {
            title: "Protection of business, intellectual property.",
            desc: "And all the other time he will work on new diverse projects, so he will definitely not stop in professional development. One way or another, all Axon Partners will work for you instead of a corporate lawyer."
          },
          6: {
            title: "Judicial representation.",
            desc: "Is it a small, medium-sized company or a market leader? Local business or multinational company? Do you have your own legal department or not?"
          }
        },
        footer: {
          title: "They already trust us"
        }
      },
      footer: {
        address: "Kyiv, Mechnikova str, 14/1",
        map: "On map"
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
      services: {
        intro: "Что мы можем делать лучше других?",
        items: {
          1: {
            title: "IT и электронная коммерция.",
            desc: "Бесконечный поток контрактов, налоговые вопросы, трудовые отношения, корпоративные документы – юридическая работа отвлекает вас от ведения бизнеса. Но чтобы нанять внутреннего юриста, особой работы не требуется."
          },
          2: {
            title: "Комплексная ежедневная юридическая поддержка.",
            desc: "Со временем работа станет однообразной и неинтересной для штатного юриста. И мы хорошо знаем, как трудно найти хорошего кандидата с опытом в области IT в Украине."
          },
          3: {
            title: "Структурирование корпоративных отношений.",
            desc: "Вместо того чтобы просто предоставлять юридические услуги, мы наймем юриста или целую команду, которая впишется в повседневную жизнь вашей компании."
          },
          4: {
            title: "Построение договорных отношений.",
            desc: "Раз в неделю или через месяц у вас есть свой юрист рядом. Любой сотрудник может поймать его у кофемашины и просто обсудить текущие вопросы, не ожидая обновления статуса."
          },
          5: {
            title: "Защита бизнеса, интеллектуальной собственности.",
            desc: "В остальное время он будет работать над новыми разнообразными проектами, поэтому точно не остановится в профессиональном развитии. Так или иначе, все Axon Partners будут работать на вас вместо корпоративного юриста."
          },
          6: {
            title: "Судебное представительство.",
            desc: "Малый, средний бизнес или лидер рынка? Местный бизнес или транснациональная компания? У вас есть собственный юридический отдел или нет?"
          }
        },
        footer: {
          title: "Нам уже доверяют"
        }
      },
      footer: {
        address: "Киев, ул. Мечникова,14/1",
        map: "На карте"
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
      services: {
        intro: "Що ми можемо робити краще за інших?",
        items: {
          1: {
            title: "IT та електронна комерція.",
            desc: "Нескінченний потік контрактів, податкові питання, трудові відносини, корпоративні документи – юридична робота відволікає вас від ведення бізнесу. Але щоб найняти внутрішнього юриста, не потрібно багато зусиль."
          },
          2: {
            title: "Комплексна щоденна юридична підтримка.",
            desc: "З часом робота стане одноманітною та нецікавою для штатного юриста. І ми добре знаємо, як важко знайти хорошого кандидата з досвідом у сфері IT в Україні."
          },
          3: {
            title: "Структурування корпоративних відносин.",
            desc: "Замість того, щоб просто надавати юридичні послуги, ми наймемо юриста або цілу команду, яка впишеться у повсякденне життя вашої компанії."
          },
          4: {
            title: "Побудова договірних відносин.",
            desc: "Раз на тиждень або через місяць у вас є свій юрист поруч. Будь-хто в компанії може спіймати його біля кавомашини і просто обговорити поточні питання, не чекаючи оновлення статусу."
          },
          5: {
            title: "Захист бізнесу, інтелектуальної власності.",
            desc: "В інший час він буде працювати над новими різноманітними проектами, тому точно не зупиниться у професійному розвитку. Так чи інакше, всі Axon Partners працюватимуть на вас замість корпоративного юриста."
          },
          6: {
            title: "Судове представництво.",
            desc: "Мала, середня компанія чи лідер ринку? Місцевий бізнес або транснаціональна компанія? У вас є власний юридичний відділ чи ні?"
          }
        },
        footer: {
          title: "Вже довіряють нам"
        }
      },
      footer: {
        address: "Київ, вул. Мечникова,14/1",
        map: "На карті"
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
}

// Переключение языка
document.querySelectorAll('.header__lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.textContent.toLowerCase();
    i18next.changeLanguage(lang, () => {
      updateContent();
      document.querySelectorAll('.header__lang-btn').forEach(b => b.classList.remove('header__lang-btn--active'));
      btn.classList.add('header__lang-btn--active');
    });
  });
});
