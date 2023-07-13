import PropTypes from 'prop-types';
import React from 'react';
import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';
import { HeroContainer } from './styles';

export default function Hero({ isMobile, isTablet }) {
  return (
    <HeroContainer className="main-section" id="start" isMobile={isMobile}>
      {
        isMobile
          ? (
            <>
              <ImageContainer />

              <TextContainer isTablet={isTablet} />
            </>
          )
          : (
            <>
              <TextContainer isTablet={isTablet} />

              <ImageContainer />
            </>
          )
      }
    </HeroContainer>
  );
}

Hero.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
});
