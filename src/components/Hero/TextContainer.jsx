import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import { TextContainerStyle } from './styles';

export default function TextContainer({ isTabletAndMobile }) {
  const handleTextClass = () => {
    if (isTabletAndMobile) {
      return 'main_text text-xs';
    }
    return 'main_text text-sm';
  };

  return (
    <TextContainerStyle
      className="hero_text"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      <h2 className={`${isTabletAndMobile ? 'H3' : 'H2'} main_title `}>
        A plataforma de yoga mais prática, didática e direta que você já acessou!
      </h2>

      <div>
        <p className={handleTextClass()}>
          Quer começar mas não sabe por onde? Já pratica e quer evolui? O Yoga
          iClub é para todos!
        </p>

        <p className={handleTextClass()}>
          Aqui você não precisa ter flexibilidade, força,
          peso ou idade ideais. Vamos praticar técnicas milenares e alcançar os
          benefícios juntos!
        </p>

        <p className={handleTextClass()}>
          Yoga iClub é para todos aqueles que acreditam que é
          possível ter uma vida equilibrada! Meu objetivo é te ajudar a
          encontrar a prática e rotina ideais pra você!
        </p>
      </div>

      <div className="button_container">
        <button className="Button button" type="button">
          <Link to="prices" duration={2000} delay={100} offset={-96}>
            Quero começar!
          </Link>
        </button>

        <span className="text-md span">
          + de 500 vidas impactadas
        </span>
      </div>
    </TextContainerStyle>
  );
}

TextContainer.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
});
