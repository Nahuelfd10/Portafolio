import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nahuel Fernandez Diez
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        {/* <li>
          <a href=""></a>Servicios
        </li> */}
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        {/* <li>
          <a href=""></a>Comentarios
        </li> */}
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nahuelfd10/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/nahuelfz10/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.facebook.com/nahuel.fernandezdiez/"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://github.com/Nahuelfd10" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small> © developed by Nahuel Fernandez Diez </small>
      </div>
    </footer>
  );
};

export default Footer;
