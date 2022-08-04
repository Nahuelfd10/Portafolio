import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiMedal } from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>1+ Año trabajando</small>
            </article>
            <article className='about__card'>
              <BiMedal className='about__icon' />
              <h5>Certificaciones</h5>
              <small>5+ Finalizadas</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>10+ Completados</small>
            </article>
          </div>

          <p>
            ¡Hola soy Nahuel 🙋🏻‍♂️!<br />

            Tengo 28 años, actualmente desempeñándome como Desarrollador Web Front-End Jr 👨‍💻<br />
            Al mismo tiempo, continuo con mí desarrollo de forma autodidacta.🤓<br />

            Anteriormente comencé una fábrica de revestimientos símil piedra y baldosas 🏭<br />
            Esta etapa, requirió no sólo aprender los procesos de producción de los mismos👷,
            sino también habilidades sobre:<br />
            🗣 Comunicación
            💡 Liderazgo
            💻 Marketing digital<br />
            y utilizar programas como:<br />
            🖌 Photoshop
            📊 Excel<br />
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About