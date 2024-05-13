import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { EventFlipCard } from './FlipCardStyles';

function FirstFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <EventFlipCard>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card first" aria-label="Yoga no Parque" />

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">
          <div>
            <p className="event-card-paragraph">
              <span className="destaque-span">Yoga no Parque</span>
              {' '}
              é um projeto focado em gerar
              conexão e expansão, afinal queremos um mundo mais livre e saudável.
            </p>
            <br />
            <p className="event-card-paragraph">
              Um projeto
              {' '}
              <span className="destaque-span">gratuito</span>
              {' '}
              que busca levar saúde,
              bem estar e leveza para quem se propõe
              embarcar nessa aventura, facilitadas em parques de BH.
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
      <p className="sub-card-text H4">Yoga no Parque</p>
    </EventFlipCard>
  );
}

export default FirstFlipCard;
