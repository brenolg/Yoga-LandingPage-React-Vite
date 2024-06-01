import React from 'react';
import PresencialClassesContainer from './PresencialClassesSectionStyles';
import FirstFlipCard from './FirstCard';
import SecondFlipCard from './SecondCard';
import ThirdFlipCard from './ThirdCard';
import FourthFlipCard from './FourthCard';
import divider from '../../../images/DIVISOR.png';

function PresencialClassesSection() {
  return (
    <PresencialClassesContainer id="aulas-presenciais">
      <h1 className="online-classes-title ">Aulas presenciais</h1>
      <div className="online-classes-main-container">
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15010.536358992631!2d-43.9717975!3d-19.8554296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691f5ebf0b98f%3A0xe0496f0bf5fd61c6!2sContemple!5e0!3m2!1spt-BR!2sbr!4v1715217894098!5m2!1spt-BR!2sbr" width="100%" height="460" title="Google Maps" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="custom-google-maps" referrerPolicy="no-referrer-when-downgrade" />
          <span className="address-span">Casa Contemple - Avenida Otacílio Negrão de Lima, 940, São Luiz/BH</span>
        </div>
        <div />
        <div className="card-main-container">
          <FirstFlipCard />
          <SecondFlipCard />
          <ThirdFlipCard />
          <FourthFlipCard />
        </div>
      </div>
      <img src={divider} alt="divider" className="divider" />
    </PresencialClassesContainer>
  );
}

export default PresencialClassesSection;
