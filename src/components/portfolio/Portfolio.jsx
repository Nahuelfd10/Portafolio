import React from 'react'
import './portfolio.css';
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
    image: "https://i.ibb.co/p4kMQ5T/Gift-Expert-App2.jpg",
    title: 'Aplicación de GIF',
    github: 'https://github.com/Nahuelfd10/react-giftexpertapp',
    demo: 'https://nahuelfd10.github.io/react-giftexpertapp/'
  },
  {
    id: 2,
    image: "https://i.ibb.co/c87ftsS/Tareas-App.png",
    title: 'Aplicación de tareas',
    github: 'https://github.com/Nahuelfd10/JournalApp',
    demo: 'https://nahuelfd10.github.io/JournalApp'
  },
  {
    id: 3,
    image: "https://i.ibb.co/QpLYKSc/Front2.png",
    title: 'Sección de características',
    github: 'https://github.com/Nahuelfd10/FM-Four-card-feature-section',
    demo: 'https://nahuelfd10.github.io/FM-Four-card-feature-section/'
  },
  {
    id: 4,
    image: "https://i.ibb.co/6tDqD44/Front3.png",
    title: 'Cuadrícula de suscripción',
    github: 'https://github.com/Nahuelfd10/single-price-grid-component-master',
    demo: 'https://nahuelfd10.github.io/single-price-grid-component-master/'
  },
  {
    id: 5,
    image: "https://i.ibb.co/9pLCjKd/Front4.jpg",
    title: 'Tarjeta de estadísticas',
    github: 'https://github.com/Nahuelfd10/stats-preview-card-component-main',
    demo: 'https://nahuelfd10.github.io/stats-preview-card-component-main/'
  },
  {
    id: 6,
    image: "https://i.ibb.co/cwtQnfJ/Front5.png",
    title: 'Desafio QR',
    github: 'https://github.com/Nahuelfd10/Desafio-QR',
    demo: 'https://nahuelfd10.github.io/Desafio-QR/'
  },
  {
    id: 7,
    image: "https://i.ibb.co/wrsKX34/Front6.png",
    title: 'Cuadro perfil',
    github: 'https://github.com/Nahuelfd10/cuadro-perfil',
    demo: 'https://nahuelfd10.github.io/cuadro-perfil/'
  },
  {
    id: 8,
    image: "https://i.ibb.co/yVzQ5qs/Front7.png",
    title: 'Cuadro suscripcion',
    github: 'https://github.com/Nahuelfd10/order-summary-card',
    demo: 'https://nahuelfd10.github.io/order-summary-card/'
  },
  {
    id: 9,
    image: "https://i.ibb.co/QCSLJNM/Front8.png",
    title: 'Carta NFT',
    github: 'https://github.com/Nahuelfd10/nft-preview-card-component/deployments/activity_log?environment=github-pages',
    demo: 'https://nahuelfd10.github.io/nft-preview-card-component/'
  },
  {
    id: 10,
    image: "https://i.ibb.co/nfYXct0/Front1.png",
    title: 'Sección de comentarios',
    github: 'https://github.com/Nahuelfd10/FM-Social-proof-section',
    demo: 'https://nahuelfd10.github.io/FM-Social-proof-section/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabajos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="{title}" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Abrir Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>

  )
}

export default Portfolio