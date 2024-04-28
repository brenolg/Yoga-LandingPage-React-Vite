import React from 'react';
import bela from '../../../images/hero-image.png';
import { ImageContainerStyle } from './styles';

export default function ImageContainer() {
  return (
    <ImageContainerStyle
      className="img_container"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1800"
    >
      <div className="outer_element">
        <img className="bela_img" src={bela} alt="bela-img" />
      </div>
    </ImageContainerStyle>

  );
}
