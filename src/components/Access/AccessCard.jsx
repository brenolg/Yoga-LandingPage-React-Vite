import PropTypes from 'prop-types';
import React from 'react';
import { AccessCardStyles } from './styles';

export default function AccessCard({
  isMobile, img, text,
}) {
  return (

    <AccessCardStyles
      className="pillar"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img alt="tech-img" src={img} />

      <p className={isMobile ? 'text-sm' : 'text-md'}>
        {text}
      </p>
    </AccessCardStyles>
  );
}

AccessCard.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});
