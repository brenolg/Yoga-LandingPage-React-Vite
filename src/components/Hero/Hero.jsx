import PropTypes from 'prop-types';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';
import { HeroContainer } from './styles';

export default function Hero({ isTabletAndMobile, isMobile, isTablet }) {
  const heroBreakPoint = useMediaQuery({ query: '(max-width: 950px)' });
  return (
    <HeroContainer className="section-size" id="start">
      {
        heroBreakPoint
          ? (
            <>
              <ImageContainer />

              <TextContainer
                isTabletAndMobile={isTabletAndMobile}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </>
          )
          : (
            <>
              <TextContainer
                isTabletAndMobile={isTabletAndMobile}
                isMobile={isMobile}
                isTablet={isTablet}
              />

              <ImageContainer />
            </>
          )
      }
    </HeroContainer>
  );
}

Hero.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
});
