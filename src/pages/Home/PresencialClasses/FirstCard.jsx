import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { EventFlipCard } from './FlipCardStyles';
import Plus from '../../../images/Plus.svg';

function FirstFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <EventFlipCard>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card first" aria-label="Yoga no Parque">
          <div className="plus-img-container">
            <img src={Plus} alt="Mais informações" />
          </div>
        </button>

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">

          <p className="event-card-paragraph">
            Práticas constituídas por ásanas (posturas)
            com permanência, alinhamento, técnicas de respiração
            (pranayamas) e purificação interna, relaxamento e meditação.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=553132746861&text=Ol%C3%A1,%20quero%20agendar%20uma%20aula%20com%20a%20Isabella%20Cayuela"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="event-card-button">quero participar </button>
          </a>
        </button>

      </ReactCardFlip>
      <p className="sub-card-text H4">Hatha Yoga</p>
    </EventFlipCard>
  );
}

export default FirstFlipCard;
