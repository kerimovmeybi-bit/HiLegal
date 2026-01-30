/* Service entry page switcher */
const data = {
    1: {
    image: "./Images/Ecommerce.svg",
    title: "IT and e-commerce",
    text1: `An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts
            you from doing business. But there is not much work to do to hire an in-house lawyer.
            In addition, over time, the work will become the same type and uninteresting for a full-time lawyer.`,
    text2: `And we know very well how difficult it is to find a good candidate with experience in the field of
            information technology in Ukraine.`
  },
    2: {
    image: "./Images/Support.svg",
    title: "Comprehensive daily legal support",
    text1: `We understand that every business is unique and requires individual legal support.
            Therefore, we offer comprehensive daily legal support tailored to your specific needs.
            Our team of experienced lawyers will work closely with you to understand your business operations`, 
    text2: `and provide proactive legal advice and solutions. From contract drafting and review to regulatory compliance
            and risk management, we will ensure that your business is legally protected and positioned for success.`
  },
    3: {
    image: "./Images/Coprorate.svg",
    title: "Structuring corporate relationships.",
    text1: `We help to structure corporate relationships in a way that minimizes potential conflicts
            and ensures smooth business operations. Our team of experienced lawyers will work with you to
            develop customized corporate governance frameworks, shareholder agreements, and other essential documents`, 
    text2: `that align with your business goals and protect the interests of all stakeholders. We also provide ongoing support and advice to help you navigate complex corporate issues
            and maintain strong relationships with your partners and investors.`
  },
    4: {
    image: "./Images/Trust.svg",
    title: "Building contractual relations.",
    text1: `We understand that strong contractual relationships are essential for the success of any business.
            Therefore, we offer comprehensive support in building and managing contractual relationships with your clients,
            suppliers, and partners. Our team of experienced lawyers will work with you to draft, review,
            and finalize contracts that are clear, concise, and legally binding.`, 
    text2: `and negotiate contracts that protect your interests and minimize risks. We also provide ongoing support and advice to help you manage your contractual relationships effectively
            and resolve any disputes that may arise.`
  },
    5: {
    image: "./Images/Protection.svg",
    title: "Protection of business,intellectual property.",
    text1: `We understand that protecting your business and intellectual property is crucial for long-term success.
            Therefore, we offer comprehensive legal services to help you safeguard your assets and maintain a competitive edge in the market.
            Our team of experienced lawyers will work with you to develop customized strategies for protecting your intellectual property,
            including trademarks, copyrights, and patents.`, 
    text2: `We also provide ongoing support and advice to help you navigate complex legal issues related to business protection,
            including data privacy, cybersecurity, and regulatory compliance. With our help, you can focus on growing your business with confidence,
            knowing that your assets are well-protected.`
  },
    6: {
    image: "./Images/Court.svg",
    title: "Judicial representation.",
    text1: `We provide comprehensive judicial representation services to help you navigate complex legal proceedings.
            Our experienced team of lawyers will represent your interests in court and ensure that your rights are protected.
            We understand that legal disputes can be stressful and overwhelming, which is why we are committed to providing
            personalized support and guidance throughout the entire process.`, 
    text2: `Whether you are facing a civil dispute, criminal charges, or any other legal matter, we will work tirelessly to achieve the best possible outcome for your case.
            With our help, you can have confidence that your case is in capable hands.`
  }
};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!data[id]) {
  console.error("Service not found");
} else {
  document.getElementById("serviceImage").src = data[id].image;
  document.getElementById("serviceTitle").textContent = data[id].title;
  document.getElementById("serviceText1").textContent = data[id].text1;
  document.getElementById("serviceText2").textContent = data[id].text2;
}


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


/* End of Publication articles slider*/