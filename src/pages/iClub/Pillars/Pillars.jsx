import PropTypes from 'prop-types';
import React from 'react';
import body from '../../../images/body.png';
import mind from '../../../images/mind.png';
import soul from '../../../images/soul.png';
import PillarCard from './PillarCard';
import { PillarsContainer } from './styles';

export default function Pillars({ isMobile, isTabletAndMobile }) {
  return (
    <PillarsContainer className="section-size" isMobile={isMobile} id="iclub">

      <h3 className={`section-main-title ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Como funciona o Yoga iClub?</h3>

      <div className="pillars_container ">

        <PillarCard
          isTabletAndMobile={isTabletAndMobile}
          img={body}
          title="body"
          text="Práticas de yoga desenvolvidas para construir consciência do corpo,
            da respiração, força, flexibilidade, equilíbrio e bem estar com
            ásanas e pránayamas"
        />

        <PillarCard
          isTabletAndMobile={isTabletAndMobile}
          img={mind}
          title="mind"
          text="Meditações guiadas elaboradas para te tornar mais consciente de seus
          pensamentos, desenvolvendo maior inteligência e gestão emocional"
        />

        <PillarCard
          isTabletAndMobile={isTabletAndMobile}
          img={soul}
          title="soul"
          text="Yoga é ferramenta para desenvolvimento completo do ser, é elevação
          espiritual. Aulas teóricas que vão te convidar a um mergulho ainda
          mais profundo."
        />
      </div>
    </PillarsContainer>
  );
}

Pillars.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
});
