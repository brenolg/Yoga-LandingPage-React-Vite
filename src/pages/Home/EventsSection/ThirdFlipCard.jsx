import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { ThirdFlipCardStyle } from './FlipCardStyles';
import Plus from '../../../images/Plus.svg';
import textImg from '../../../images/ConexãoYOGATxt.svg';

function ThirdFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <ThirdFlipCardStyle>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-front-card third" aria-label="Ice Yoga">
          <div className="plus-img-container">
            <img src={Plus} alt="Mais informações" />
          </div>
          <img src={textImg} className="text-img third" alt="label" />
        </button>

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">
          <div className="text-paragraph-container">
            <p className="event-card-paragraph">
              <span className="destaque-span">Conexão YOGA</span>

              são encontros que unem duas coisas que amamos: Yoga e o Sol.
            </p>

            <p className="event-card-paragraph">
              Práticas de Yoga ao nascer e ao por do sol que
              buscam aumentar sua conexão consigo e com a natureza
              abundante, te devolvendo a serenidade e a vontade de viver a vida.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="event-card-button">quero participar</button>
          </a>
        </button>
      </ReactCardFlip>
      <p className="sub-card-text H4">Conexão Yoga</p>
    </ThirdFlipCardStyle>
  );
}

export default ThirdFlipCard;
