import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { EventFlipCard } from './FlipCardStyles';

function ThirdFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <EventFlipCard>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card third" aria-label="Ice Yoga" />

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">
          <div>
            <p className="event-card-paragraph">
              <span className="destaque-span">IceYOGA:</span>
              {' '}
              IceYOGA chegou para te mostrar a força,
              a resiliência e autoconsciência que já existe em você!
            </p>
            <br />
            <p className="event-card-paragraph">
              Uma experiência única que utiliza o Yoga
              e a respiração para elevar sua consciência,
              seu autocontrole e domínio sobre o corpo e a mente.
            </p>
          </div>
          <a
            href="https://chat.whatsapp.com/EfiSFkE5OOqJiuNM6S5cv8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="event-card-button">quero participar</button>
          </a>
        </button>
      </ReactCardFlip>
      <p className="sub-card-text H4">Ice Yoga</p>
    </EventFlipCard>
  );
}

export default ThirdFlipCard;
