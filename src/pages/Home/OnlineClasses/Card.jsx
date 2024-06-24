import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { CardContainer } from './CardStyles';
import Plus from '../../../images/Plus.svg';

function Card({ text, className, subText }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const navigate = useNavigate();

  return (
    <CardContainer>
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1.3} flipSpeedFrontToBack={1.3}>
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className={`event-front-card ${className}`} aria-label={subText}>
          <div className="plus-img-container">
            <img src={Plus} alt={subText} />
          </div>
        </button>

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="event-back-card">

          <p className="event-card-paragraph">
            {text}
          </p>

          <button
            type="button"
            className="event-card-button"
            onClick={() => navigate('/iclub')}
          >
            quero participar
          </button>
        </button>
      </ReactCardFlip>
      <p className="sub-card-text ">{subText}</p>
    </CardContainer>
  );
}

export default Card;

Card.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};
