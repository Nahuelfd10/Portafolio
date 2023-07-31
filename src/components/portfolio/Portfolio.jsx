import React from "react";
import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAngular,
} from "react-icons/si";
import Miweb from "../../assets/Miweb2.jpg";
/* import IMG1 from '../../assets/GifApp.jpg';
import IMG2 from '../../assets/Front1.png';
import IMG3 from '../../assets/Front2.png';
import IMG4 from '../../assets/Front3.png';
import IMG5 from '../../assets/Front4.png';
import IMG6 from '../../assets/Front5.png';
import IMG7 from '../../assets/Front6.png';
import IMG8 from '../../assets/Front7.png';
import IMG9 from '../../assets/Front8.png';
import IMG10 from '../../assets/TareasApp.png'; */

const data = [
  {
    id: 1,
    image: Miweb,
    title: "Mi web",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nahuelfd10/Portafolio",
    demo: "nahuelfd10.github.io/Portafolio/",
  },
  {
    id: 2,
    image: "https://i.ibb.co/p4kMQ5T/Gift-Expert-App2.jpg",
    title: "Buscador de GIF",
    technologies: ["Angular", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nahuelfd10/react-giftexpertapp",
    demo: "https://nahuelfd10.github.io/react-giftexpertapp/",
  },
  {
    id: 3,
    image: "https://i.ibb.co/c87ftsS/Tareas-App.png",
    title: "Organizador de tareas",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nahuelfd10/JournalApp",
    demo: "https://nahuelfd10.github.io/JournalApp",
  },
  {
    id: 4,
    image: "https://i.ibb.co/QpLYKSc/Front2.png",
    title: "Sección de características",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/FM-Four-card-feature-section",
    demo: "https://nahuelfd10.github.io/FM-Four-card-feature-section/",
  },
  {
    id: 5,
    image: "https://i.ibb.co/6tDqD44/Front3.png",
    title: "Cuadrícula de suscripción",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/single-price-grid-component-master",
    demo: "https://nahuelfd10.github.io/single-price-grid-component-master/",
  },
  {
    id: 6,
    image: "https://i.ibb.co/9pLCjKd/Front4.jpg",
    title: "Tarjeta de estadísticas",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/stats-preview-card-component-main",
    demo: "https://nahuelfd10.github.io/stats-preview-card-component-main/",
  },
  {
    id: 7,
    image: "https://i.ibb.co/cwtQnfJ/Front5.png",
    title: "Desafio QR",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/Desafio-QR",
    demo: "https://nahuelfd10.github.io/Desafio-QR/",
  },
  {
    id: 8,
    image: "https://i.ibb.co/wrsKX34/Front6.png",
    title: "Cuadro perfil",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/cuadro-perfil",
    demo: "https://nahuelfd10.github.io/cuadro-perfil/",
  },
  {
    id: 9,
    image: "https://i.ibb.co/yVzQ5qs/Front7.png",
    title: "Cuadro suscripcion",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/order-summary-card",
    demo: "https://nahuelfd10.github.io/order-summary-card/",
  },
  {
    id: 10,
    image: "https://i.ibb.co/QCSLJNM/Front8.png",
    title: "Carta NFT",
    technologies: ["HTML5", "CSS3"],
    github:
      "https://github.com/Nahuelfd10/nft-preview-card-component/deployments/activity_log?environment=github-pages",
    demo: "https://nahuelfd10.github.io/nft-preview-card-component/",
  },
  {
    id: 11,
    image: "https://i.ibb.co/nfYXct0/Front1.png",
    title: "Sección de comentarios",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Nahuelfd10/FM-Social-proof-section",
    demo: "https://nahuelfd10.github.io/FM-Social-proof-section/",
  },
];

const getIconForTechnology = (technology) => {
  switch (technology) {
    case "React":
      return <SiReact />;
    case "Angular":
      return <SiAngular />;
    case "HTML5":
      return <SiHtml5 />;
    case "CSS3":
      return <SiCss3 />;
    case "JavaScript":
      return <SiJavascript />;
    default:
      return null;
  }
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabajos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, technologies, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <h3>{title}</h3>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio__item-bottom-card">
                <div className="portfolio__item-title-bottom">
                  <div className="portfolio__item-technologies">
                    {technologies.map((technology) => (
                      <span key={technology} className="technology-icon">
                        {getIconForTechnology(technology)}{" "}
                        <h5 className="technology-name">{technology}</h5>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="portfolio__item-cta">
                  <div className="buttons">
                    <a
                      href={github}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                    <a href={demo} className="btn btn-primary" target="_blank">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Abrir Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
