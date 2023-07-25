import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import defaultScrollProps from '../../utils/defaultScrollProps';
import { TextContainerStyle } from './styles';

export default function TextContainer({ isTabletAndMobile, isMobile, isTablet }) {
  const handleTextClass = () => {
    if (isTabletAndMobile) {
      return 'main_text text-xs';
    }
    return 'main_text text-sm';
  };

  const handleTitleClass = () => {
    if (isTablet) {
      return 'H4';
    }
    if (isMobile) {
      return 'H5';
    }
    return 'H2';
  };

  return (
    <TextContainerStyle
      className="hero_text"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      <h2 className={`${handleTitleClass()} main_title`}>
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
        <Link className="link" to="prices" {...defaultScrollProps}>
          <button className="Button button" type="button">
            Quero começar!
          </button>
        </Link>

        <span className="text-md span">
          + de 500 vidas impactadas
        </span>
      </div>
    </TextContainerStyle>
  );
}

TextContainer.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
});
