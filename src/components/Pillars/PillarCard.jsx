import PropTypes from 'prop-types';
import React from 'react';
import { PillarCardStyles } from './styles';

export default function PillarCard({
  isTabletAndMobile, img, text, title,
}) {
  return (

    <PillarCardStyles
      className="pillar"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >

      <img alt="yoga-img" className="pillar_img" src={img} />

      <h4 className="H4">{title}</h4>
      <p className={isTabletAndMobile ? 'text-sm' : 'text-md'}>
        {text}
      </p>
    </PillarCardStyles>

  );
}

PillarCard.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});
