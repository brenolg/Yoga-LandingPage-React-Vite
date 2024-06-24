import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { EventFlipCard } from './FlipCardStyles';
import Plus from '../../../images/Plus.svg';

function SecondFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <EventFlipCard>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card second" aria-label="Yoga no Parque">
          <div className="plus-img-container">
            <img src={Plus} alt="Mais informações" />
          </div>
        </button>

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">
          <div>
            <p className="event-card-paragraph">
              Práticas que combinam ásanas (posturas)
              e pranayamas (respirações) de forma fluída,
              sendo considerada a melhor meditação ativa em movimento.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=553132746861&text=Ol%C3%A1,%20quero%20agendar%20uma%20aula%20com%20a%20Isabella%20Cayuela"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="event-card-button">quero participar</button>
          </a>
        </button>
      </ReactCardFlip>
      <p className="sub-card-text H4">Hot Yoga</p>
    </EventFlipCard>
  );
}

export default SecondFlipCard;
