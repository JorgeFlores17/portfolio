AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Analista de datos y sistemas",
    cardImage: "assets/images/experience-page/logo-coppel.svg",
    place: "Coppel S.A. de C.V.",
    area:"Solución y operaciones finanzas",
    time: "(Marzo, 2022 - present)",
    desp: "<li>Area de sistemas y operaciones TI donde se llevan acabo actividades de soporte a areas financieras de la organización.</li><li>Manejo de datos para cubrir las necesidades de la empresa, flujo de integraciones programadas para bases de datos en la nube.</li><li>Timbrado de nominas y manejo de sistemas legados, entre otras actividades como desarrollo de sistemas para óptimizar servicios y tareas diarias.</li>",
  },
  {
    title: "Freelance - Cientifico de Datos",
    cardImage: "assets/images/experience-page/freelancer-logo.svg",
    place: "Remote",
    time: "(Junio, 2020 - Aug, 2022)",
    desp: "<li>Como científico de datos freelance, aplico mis habilidades en Python y Jupyter Notebooks para realizar análisis profundos y desarrollar modelos predictivos. Colaboro con clientes de diversas industrias, proporcionando soluciones analíticas que respaldan sus decisiones estratégicas..</li><li>Mi experiencia como científico de datos independiente se destaca por la resolución creativa de problemas y la entrega de resultados de alta calidad. Trabajo de manera flexible y adaptativa, abordando desafíos únicos en proyectos que van desde la visualización de datos hasta la implementación de modelos de aprendizaje automático.</li>",
  },
  {
    title: "Servicio Social",
    cardImage: "assets/images/experience-page/servicio_social.jpg",
    place: "Secretaría de Economía del Estado de Sinaloa",
    time: "(Febrero, 2023 - Agosto, 2023)",
    desp: "<li>Servicio social realizado en la secretaría de economía del estado de Sinaloa para la Facultad de Ciencias Economicas y Sociales.</li><li>Tuve un papal de analista financiero en el cual desarrollé actividades y habiliades para el manejo de datos utilizando software como excel y python, el objetivo era desarrollar informes gerenciales para la toma de decisiones basadas en los datos analizados.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Competitions Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Racing Oracle 2024",
    subtitle: "Campeón",
    image: "assets/images/experience-page/Foto_racing_champion.png",
    desp: "Competencia Nacional Racing Oracle Coppel 2024, primer lugar en laboratorios en diversas pruebas técnicas de manejo de tecnología propía de Oracle (APEX, OTM, OCI, ERP)",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7166987227619639296/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
