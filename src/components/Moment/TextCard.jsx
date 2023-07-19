import PropTypes from 'prop-types';
import React from 'react';
import { TextCardStyles } from './styles';

export default function TextCard({
  isMobile, isTabletAndMobile, title, text,
}) {
  return (

    <TextCardStyles>
      <h4 className={`${isTabletAndMobile ? 'H5' : 'H6'} sub-title`}>
        {title}
      </h4>
      <p className={isMobile ? 'text-sm' : 'text-md'}>
        {text}
      </p>
    </TextCardStyles>

  );
}

TextCard.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
});
