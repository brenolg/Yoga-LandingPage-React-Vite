import React from 'react';
import logo from '../../images/yoga_iclub1.svg';
import FooterContainer from './FooterStyles';
import insta from '../../images/INSTAGRAM.svg';
import youtube from '../../images/YOUTUBE.svg';
import whatsapp from '../../images/WHATSAPP.svg';

function Footer() {
  return (
    <FooterContainer>
      <nav className="footer-nav">

        <a
          className="footer-button"
          href="https://www.instagram.com/isabellacayuela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>

        <a
          className="footer-button"
          href="https://api.whatsapp.com/send/?phone=5531996793158"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a
          className="footer-button"
          href="https://www.youtube.com/@isabellacayuelayoga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>
      </nav>

      <img src={logo} alt="Logo" className="footer-logo" />
    </FooterContainer>
  );
}

export default Footer;
