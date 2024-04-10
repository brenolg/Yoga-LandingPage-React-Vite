import PropTypes from 'prop-types';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import accessImg from '../../../images/access_img.png';
import TextCard from './TextCard';
import { MomentContainer } from './styles';

export default function Moment({ isMobile, isTabletAndMobile }) {
  const isBreakPoint = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <MomentContainer className="section-size">
      <h4 className={`section-main-title ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
        Encontre aulas para o seu momento
      </h4>

      <div className="main-container">
        {isBreakPoint ? (
          <>
            <div
              className="sub-container"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <img className="img" src={accessImg} alt="girl-yoga" />
            </div>

            <div
              className="sub-container"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Para quem nunca praticou"
                text="Nunca teve contato com a prática e se sente insegura se está fazendo certo ou errado."
              />

              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Iniciantes"
                text="Praticou algumas vezes mas nunca conseguiu dar continuidade."
              />
            </div>

            <div
              className="sub-container"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Intermediários"
                text="Já domina as técnicas mas quer avançar ainda mais na sua prática pessoal."
              />

              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Avançados"
                text="Praticante há mais de 5 anos mas sente falta de ser guiado em sua prática pessoal."
              />
            </div>
          </>
        ) : (
          <div className="main-container">
            <div
              className="sub-container"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Para quem nunca praticou"
                text="Nunca teve contato com a prática e se sente insegura se está fazendo certo ou errado."
              />

              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Iniciantes"
                text="Praticou algumas vezes mas nunca conseguiu dar continuidade."
              />
            </div>

            <div
              className="sub-container"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <img className="img" src={accessImg} alt="girl-yoga" />
            </div>

            <div
              className="sub-container"
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Intermediários"
                text="Já domina as técnicas mas quer avançar ainda mais na sua prática pessoal."
              />

              <TextCard
                isMobile={isMobile}
                isTabletAndMobile={isTabletAndMobile}
                title="Avançados"
                text="Praticante há mais de 5 anos mas sente falta de ser guiado em sua prática pessoal."
              />
            </div>
          </div>
        )}
      </div>
    </MomentContainer>
  );
}

Moment.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
};
