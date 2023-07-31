import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <div className="header_text">
            <h5>
              <i className="fas fa-hand-paper"></i>Hola, soy
            </h5>
            <h1 className="nombre">Nahuel</h1>
            <h1 className="apellido">Fernandez Diez</h1>
            <h5 className="text-light">Desarrollador Front End</h5>
          </div>
          <div className="header_buttons">
            <CTA />
            <HeaderSocials />
          </div>
        </div>
        <div className="me"></div>

        <a href="#contact" className="scroll__down">
          Ir al final →
        </a>
      </div>
      {/* <section className="home">
        <div className="home-content">
          <h1>Hola, soy Nahuel Fernandez Diez</h1>
          <h5>Frontend Developer</h5>
          <p>
            lorem asodpas dalksdn alskdnalsk dnasdn ansld knald lorem asodpas
            dalksdn alskdnalsk dnasdn ansld knald lorem asodpas dalksdn
            alskdnalsk dnasdn ansld knald lorem asodpas dalksdn alskdnalsk
            dnasdn ansld knald lorem asodpas dalksdn alskdnalsk dnasdn ansld
            knald lorem asodpas dalksdn alskdnalsk dnasdn ansld knald
          </p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a href="#">Let's Talk</a>
          </div>
        </div>
      </section> */}
    </header>
  );
};

export default Header;
