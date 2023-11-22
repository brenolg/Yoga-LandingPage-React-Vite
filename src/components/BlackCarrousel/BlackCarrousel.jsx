import PropTypes from 'prop-types';
import React from 'react';
import CarrouselContainer from './styles';

export default function BlackCarrousel({ isMobile, isTabletAndMobile, text }) {
  return (
    <CarrouselContainer
      className="section-size"
      ismobile={isMobile}
      istabletandmobile={isTabletAndMobile}

    >
      <div className="carrouselInner">
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
      </div>

      <div className="carrouselInner">
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>
        <span className="text">{text }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#EFEFEF" />
        </svg>

      </div>

    </CarrouselContainer>
  );
}

BlackCarrousel.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
});
