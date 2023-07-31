import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiMedal } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Conóceme</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://i.ibb.co/3c6qL6G/me-about.png"
              alt="AboutNahuelFernandezDiez"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>+2 Profesional</small>
            </article>
            <article className="about__card">
              <BiMedal className="about__icon" />
              <h5>Certificaciones</h5>
              <small>+10 Finalizadas</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>+15 Completados</small>
            </article>
          </div>

          <p>
            ¡Hola soy Nahuel 🙋🏻‍♂️!
            <br />
            Tengo 29 años, actualmente desempeñándome como Desarrollador Web
            Front-End 👨‍💻
            <br />
            Al mismo tiempo, continuo con mí desarrollo de forma autodidacta.🤓
            <br />
            Estuve trabajando en varios proyectos, incluyendo colaboraciones con
            clientes de renombre como Despegar. ✈️ <br />
            Esta experiencia me permitió desarrollar habilidades sólidas en el
            ámbito técnico y la colaboración en equipos multidisciplinarios. 🤝
            <br />
            Me gusta mantenerme actualizado con las últimas tendencias y
            tecnologías, dedicando mucho tiempo a la capacitación y al
            aprendizaje continuo. 🚀📚
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
