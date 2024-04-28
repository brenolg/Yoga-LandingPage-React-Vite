import PropTypes from 'prop-types';
import React from 'react';
import arow from '../../../images/arow.png';
import girlYoga from '../../../images/girlYoga.png';
import graphic from '../../../images/graphic.png';
import onlineTechs from '../../../images/onlineTechs.png';
import AccessCard from './AccessCard';
import { AccessContainer } from './styles';

export default function Access({ isMobile }) {
  return (
    <AccessContainer>
      <div className="access_section section-size">
        <h4 className={`${isMobile ? 'text-2xl' : 'text-3xl'} section-main-title`}>O que terá acesso?</h4>

        <div
          className="main_container"
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >

          <AccessCard
            isMobile={isMobile}
            img={onlineTechs}
            text="Aulas ao vivo toda terça: 8h e 19h30, e quinta: 8h e 9h, com correções e ajustes"
          />

          <AccessCard
            isMobile={isMobile}
            img={graphic}
            text="Aulas com diferentes níveis e durações para não se sentir
            desestimulado"
          />

          <AccessCard
            isMobile={isMobile}
            img={girlYoga}
            text="Módulos desenvolvidos para cultivar disciplina, constância e presença"
          />

          <AccessCard
            isMobile={isMobile}
            img={arow}
            text="Estilos diferentes para variar sua prática: Hatha e Vinyasa"
          />
        </div>
      </div>
    </AccessContainer>
  );
}

Access.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
});
