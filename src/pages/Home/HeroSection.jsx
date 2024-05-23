import React from 'react';
import MainContainer from './HeroSectionStyles';
import divider from '../../images/DIVISOR.png';

function HeroSection() {
  return (
    <MainContainer>
      <div className="hero-card-home">
        <h1 className="hero-card-title">Seja muito bem vinda(o)!</h1>
        <div className="hero-card-paragraph-container">
          <p className="hero-card-paragraph ">
            Descubra uma vida com mais disciplina no tempo
            dedicado a si mesma, tranquilidade mental e clareza em suas decisões.
          </p>
          <p className="hero-card-paragraph ">
            Noites de sono serenas e completas são apenas o começo.
            Desperte sua flexibilidade, força e  consciência corporal.
          </p>

        </div>
      </div>
      <img src={divider} alt="divider" className="divider" />
    </MainContainer>
  );
}

export default HeroSection;
