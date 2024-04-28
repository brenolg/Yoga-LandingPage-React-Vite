import React from 'react';
import MainContainer from './HeroSectionStyles';

function HeroSection() {
  return (
    <MainContainer>
      <div className="hero-card-home">
        <h1 className="hero-card-title H3">Seja muito bem vinda(0)!</h1>
        <div className="hero-card-paragraph-container">
          <p className="hero-card-paragraph text-md">
            Descubra uma vida com mais disciplina no tempo
            dedicado a si mesma, tranquilidade mental e clareza em suas decisões.
          </p>
          <p className="hero-card-paragraph text-md">
            Noites de sono serenas e completas são apenas o começo.
            Desperte sua flexibilidade, força e  consciência corporal.
          </p>

        </div>
      </div>
    </MainContainer>
  );
}

export default HeroSection;
