import PropTypes from 'prop-types';
import React from 'react';
import imgDesktop from '../../images/bela-about-desktop.png';
import imgMobile from '../../images/bela-about-mobile.png';
import imgTablet from '../../images/bela-about-tablet.png';
import { AboutContainer, ContactContainer } from './styles';

export default function About({ isMobile, isTablet }) {
  const handleTextClass = () => {
    if (isMobile) {
      return 'text-xs';
    }
    if (isTablet) {
      return 'text-sm';
    }
    return 'text-lg';
  };

  const handleImage = () => {
    if (isMobile) {
      return imgMobile;
    }
    if (isTablet) {
      return imgTablet;
    }
    return imgDesktop;
  };

  return (
    <>
      <AboutContainer id="contact">

        <div className="section-size about-section">
          {isMobile && (<h4 className="text-3xl about-title">Olá! Eu sou Isabella Cayuela,</h4>)}

          <div className="img-container">
            <img
              className="image"
              src={handleImage()}
              alt="Isabella Cayuela"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>

          <div className="text-xs text-container">
            {!isMobile && (<h4 className="text-3xl about-title">Olá! Eu sou Isabella Cayuela,</h4>)}

            <p className={handleTextClass()}>
              Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe
              a embarcar na sua jornada de autoconhecimento e autocuidado.
            </p>

            <p className={handleTextClass()}>
              Minha missão é transformar a vida das pessoas através da prática,
              fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão.
            </p>

            <p className={handleTextClass()}>
              Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub,
              em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas
              de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas
              na plataforma toda semana.
            </p>

            <p className={handleTextClass()}>
              Através da minha metodologia, tivemos mais de 500 vidas impactadas
              e transformadas. Vem fazer parte dessa comunidade também!
            </p>
          </div>
        </div>
      </AboutContainer>

      <ContactContainer className="section-size">
        <h4 className={`${isMobile ? 'text-2xl' : 'text-3xl'}`}>Ainda com dúvidas?</h4>
        <button className="Button button" type="button">
          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONVERSE COMIGO
          </a>
        </button>
      </ContactContainer>
    </>
  );
}

About.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};
