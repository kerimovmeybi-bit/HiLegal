const teamData = {
  1: {
    name: 'Alexander Alexandrovsky',
    position: 'Managing Partner',
    img: './Images/Photo2.webp',
    email:'alexandrovsky@forstudy.space',
    text1: `
      <p>Alexander specializes in maritime and commercial law, representing the interests of
                        shipowners, charterers, cargo owners, shipping agents, and P&I clubs. He has extensive
                        experience in resolving disputes related to charter parties, bills of lading, cargo claims,
                        collisions, and marine insurance.</p>
    `,
    text2: `<p>Alexander is known for his strategic approach to dispute resolution, often achieving favorable
                        outcomes through negotiation and alternative dispute resolution methods. He is also skilled in
                        handling complex litigation cases in both national and international courts.</p>
    `,
    text3: `<p>Odesa I. I. Mechnykov National University.</p>
    `,
    text4: `<p>Over 15 years of experience in maritime and commercial law, representing clients in various
                        jurisdictions and handling a wide range of maritime disputes.</p>
    `
  },

  2: {
    name: 'Evgeny Patrikov',
    position: 'Equity partner, Attorney-at-law',
    img: './Images/Photo4.webp',
    email:'patrikov@forstudy.space',
    text1: `
      <p>Evgeny Patrikov is a seasoned maritime lawyer with over 20 years of experience in the field.
                        He has a deep understanding of international maritime law, shipping regulations, and
                        commercial practices. Evgeny has represented numerous clients in complex maritime disputes,
                        including charter party disagreements, cargo claims, and salvage operations.</p>
    `,
    text2: `<p>Evgeny is known for his meticulous approach to case preparation and his ability to navigate
                        complex legal frameworks. He has successfully represented clients in both national and
                        international courts, as well as in arbitration proceedings. Evgeny's expertise extends to
                        advising clients on regulatory compliance, risk management, and contractual negotiations within
                        the maritime industry.</p>
    `,
    text3: `<p>Kyiv National University named after Taras Shevchenko, Faculty of Law.</p>
    `,
    text4: `<p>Over 20 years of experience in maritime law, representing clients in various jurisdictions and
                        handling a wide range of maritime disputes.</p>
    `
  },

  3: {
    name: 'Vladislav Melnik',
    position: 'Associate',
    img: './Images/Photo6.webp',
    email:'melnik@forstudy.space',
    text1: `
      <p>Vladislav Melnik is an Associate at HLEGAL Law Company, specializing in maritime and commercial
                        law. He has a strong background in handling various legal matters related to shipping,
                        logistics, and international trade. Vladislav is dedicated to providing clients with
                        comprehensive legal solutions tailored to their specific needs.</p>
    `,
    text2: `<p>Vladislav is known for his meticulous approach to legal research and his ability to navigate
                        complex regulatory frameworks. He works closely with clients to ensure compliance with
                        international maritime conventions and domestic laws, helping them mitigate risks and resolve
                        disputes effectively.</p>
    `,
    text3: `<p>Odesa I. I. Mechnykov National University.</p>
    `,
    text4: `<p>Prior to joining HLEGAL, Vladislav gained experience working with a prominent maritime law
                        firm, where he assisted in handling cases related to ship arrests, cargo claims, and charter
                        party disputes. He has also been involved in advising clients on regulatory compliance and
                        contractual matters within the shipping industry.</p>
    `
    
  },

  4: {
    name: 'Sergey Binn',
    position: 'Associate',
    img: './Images/Photo1.webp',
    email:'binn@forstudy.space',
     text1: `
      <p>Sergey Binn is an Associate at HLEGAL, specializing in maritime law. He holds a degree in Law
                        from Odesa I. I. Mechnykov National University and has a strong passion for the complexities of
                        maritime regulations and international shipping practices.</p>
    `,
    text2: `<p> Sergey is dedicated to providing clients with comprehensive legal support in matters related to
                        shipping contracts, maritime disputes, and regulatory compliance. His analytical skills and
                        attention to detail enable him to navigate the intricacies of maritime law effectively.</p>
    `,
    text3: `<p>Sergey graduated with a Bachelor's degree in Law from Odesa I. I. Mechnykov National University,
                        where he developed a solid foundation in various legal disciplines, with a particular focus on
                        maritime law.</p>
    `,
    text4: `<p>Prior to joining HLEGAL, Sergey gained experience working with a maritime law firm where he
                        assisted in handling various shipping cases and regulatory matters.</p>
    `
  },

  5: {
    name: 'Oksana Kobzar',
    position: 'Equity partner, Attorney-at-law',
    img: './Images/Photo3.webp',
    email:'kobzar@forstudy.space',
     text1: `
      <p> Oksana heads the practice of international trade and shipping. He specializes in resolving
                        disputes related to the purchase and sale of raw materials and transportation of goods by
                        sea.</p>
    `,
    text2: `<p> Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents,
                        container lines, as well as international banks and P&I clubs.</p>
    `,
    text3: `<p> National University "Odessa Law Academy", Master of Law.</p>
    `,
    text4: `<p> Her professional experience includes resolving disputes under English law and representing
                        interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Danilo also
                        represents the interests of clients in the state courts of Ukraine on similar disputes, as well
                        as in the ICAC and IAC at the CCI of Ukraine.</p>
    `
  },

  6: {
    name: 'Julia Wolk',
    position: 'Associate, Attorney-at-law',
    img: './Images/Photo5.webp',
    email:'wolk@forstudy.space',
    text1: `
      <p> Julia Wolk is an Associate and Attorney-at-law at HLEGAL Law Company, specializing in maritime
                        and commercial law. With a strong background in international trade regulations and shipping
                        law, Julia provides expert legal counsel to clients involved in maritime commerce.</p>
    `,
    text2: `<p> Julia is known for her meticulous approach to legal issues and her ability to navigate complex
                        regulatory environments. She has successfully represented clients in various maritime disputes,
                        including cargo claims, charter party disputes, and regulatory compliance matters.</p>
    `,
    text3: `<p> Julia holds a Juris Doctor degree from Kyiv National University and is a member of the Ukrainian
                        Bar Association. She has also completed specialized training in maritime law and international
                        trade regulations.</p>
    `,
    text4: `<p> Prior to joining HLEGAL, Julia gained experience working with a leading maritime law firm,
                        where she handled a variety of cases related to shipping contracts, maritime insurance, and
                        international trade disputes. Her practical experience and deep understanding of maritime law
                        make her a valuable asset to the HLEGAL team.</p>
    `
  }
};


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const member = teamData[id];

if (!member) {
  console.error('Team member not found');
} else {
  document.querySelector('[data-name]').textContent = member.name;
  document.querySelector('[data-position]').textContent = member.position;
    document.querySelector('[data-img]').src = member.img;
    document.querySelector('[data-email]').textContent = member.email;
    document.querySelector('[data-text1]').innerHTML = member.text1;
    document.querySelector('[data-text2]').innerHTML = member.text2;
    document.querySelector('[data-text3]').innerHTML = member.text3;
    document.querySelector('[data-text4]').innerHTML = member.text4;
}
