import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { EventFlipCard } from './FlipCardStyles';

function SecondFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <EventFlipCard>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card second" aria-label="Nature Yoga" />

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">
          <div className="text-paragraph-container">
            <p className="event-card-paragraph">
              <span className="destaque-span">NatureYOGA:</span>
              {' '}
              a yoga trip com propósito para sair da rotina e se (re)conectar com si mesmo!
            </p>

            <p className="event-card-paragraph">
              Durante 4 dias aprofundaremos na prática e na
              filosofia do Yoga equilibrando seu corpo,
              sua mente e elevando seu espírito em Unah Piracanga, Bahia.
            </p>
          </div>
          <a
            href="https://unah.eco/nature-yoga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="event-card-button">quero participar</button>
          </a>
        </button>
      </ReactCardFlip>
      <p className="sub-card-text H4">Nature Yoga</p>
    </EventFlipCard>
  );
}

export default SecondFlipCard;
