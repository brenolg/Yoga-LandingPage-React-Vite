import React from 'react';
import { Link } from 'react-scroll';
import instagram from '../../images/instagram.svg';
import whatsapp from '../../images/whatsapp.svg';
import yogaLogo from '../../images/yoga_iclub.svg';
import youtube from '../../images/youtube.svg';
import FooterContainer from './styles';

export default function Footer(isMobile) {
  return (
    <FooterContainer isMobile={isMobile}>

      <div className="section-size main_container">

        <div className="scroll-main-container">
          <div className="scroll-sub-container">
            <button className="text-md" type="button">
              <Link to="start" duration={2000} delay={100} offset={-96}> início </Link>
            </button>

            <button className="text-md" type="button">
              <Link to="iclub" duration={2000} delay={100} offset={-96}> iclub </Link>
            </button>
          </div>

          <div className="scroll-sub-container">

            <button className="text-md" type="button">
              <Link to="students" duration={2000} delay={100} offset={-96}> alunos </Link>
            </button>
            <button className="text-md" type="button">
              <Link to="prices" duration={2000} delay={100} offset={-48}> preços </Link>
            </button>
          </div>

          <div className="scroll-sub-container">
            <button className="text-md" type="button">
              <Link to="doubts" duration={2000} delay={100} offset={-48}> dúvidas </Link>
            </button>
            <button className="text-md" type="button">
              <Link to="contact" duration={2000} delay={100} offset={-96}> contato </Link>
            </button>
          </div>
        </div>

        <nav className="social-links">
          <a
            href="https://www.instagram.com/isabellacayuela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>

          <a
            href="https://www.youtube.com/@isabellacayuelayoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </nav>

        <img className="logo" src={yogaLogo} alt="yoga-logo" />
      </div>

    </FooterContainer>

  );
}
