import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { ThirdFlipCardStyle } from './FlipCardStyles';

function ThirdFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <ThirdFlipCardStyle>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card third" aria-label="Ice Yoga" />

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">
          <div className="text-paragraph-container">
            <p className="event-card-paragraph">
              <span className="destaque-span">IceYOGA:</span>

              IceYOGA chegou para te mostrar a força,
              a resiliência e autoconsciência que já existe em você!
            </p>

            <p className="event-card-paragraph">
              Uma experiência única que utiliza o Yoga
              e a respiração para elevar sua consciência,
              seu autocontrole e domínio sobre o corpo e a mente.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5531996793158&text=Oii%20Bella,%20quero%20saber%20tudo%20sobre%20o%20IceYoga%20-%20medita%C3%A7%C3%A3o%20no%20gelo%20%F0%9F%A7%98%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%A7%8A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="event-card-button">quero participar</button>
          </a>
        </button>
      </ReactCardFlip>
      <p className="sub-card-text H4">Ice Yoga</p>
    </ThirdFlipCardStyle>
  );
}

export default ThirdFlipCard;
