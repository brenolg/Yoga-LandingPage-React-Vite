import React from 'react';
import { EventsSectionContainer } from './EventsSectionStyles';
import FirstFlipCard from './FirstFlipCard';
import SecondFlipCard from './SecondFlipCard';
import ThirdFlipCard from './ThirdFlipCard';
import divider from '../../../images/DIVISOR.png';

function EventsSection() {
  return (
    <EventsSectionContainer>

      <h2 className="title ">Eventos Presenciais</h2>
      <div className="events-card-main-container">
        <FirstFlipCard />
        <SecondFlipCard />
        <ThirdFlipCard />
      </div>
      <img src={divider} alt="divider" className="divider-btn" />
    </EventsSectionContainer>
  );
}

export default EventsSection;
