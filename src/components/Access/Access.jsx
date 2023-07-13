import PropTypes from 'prop-types';
import React from 'react';
import arow from '../../images/arow.png';
import girlYoga from '../../images/girlYoga.png';
import graphic from '../../images/graphic.png';
import onlineTechs from '../../images/onlineTechs.png';
import AccessContainer from './styles';

export default function Access({ isMobile }) {
  return (
    <AccessContainer>
      <div className="access_section main-section">
        <h4 className="text-3xl title">O que terá acesso?</h4>

        <div
          className="main_container"
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="sub_container">
            <img alt="tech-img" src={onlineTechs} />
            <p className={isMobile ? 'text-sm' : 'text-md'}>

              Aulas ao vivo toda terça e quinta as 07h, 09h e 19:30 com correção e ajustes
            </p>
          </div>

          <div className="sub_container">
            <img alt="graphic-img" src={graphic} />
            <p className={isMobile ? 'text-sm' : 'text-md'}>

              Aulas com diferentes níveis e durações para não se sentir
              desestimulado
            </p>
          </div>

          <div className="sub_container">
            <img alt="girl-yoga" src={girlYoga} />
            <p className={isMobile ? 'text-sm' : 'text-md'}>

              Módulos desenvolvidos para cultivar disciplina, constância e presença
            </p>
          </div>

          <div className="sub_container">
            <img alt="arow-img" src={arow} />
            <p className={isMobile ? 'text-sm' : 'text-md'}>

              Estilos diferentes para variar sua prática: Hatha e Vinyasa
            </p>
          </div>

        </div>
      </div>
    </AccessContainer>
  );
}

Access.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
});
