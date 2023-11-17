import React from 'react';
import { ImageContainerStyle } from './styles';
import belaBlack from '../../images/heroBlack.png';

export default function ImageContainer() {
  return (
    <ImageContainerStyle
      className="img_container"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1800"
    >
      <div className="outer_element">
        <img className="bela_img" src={belaBlack} alt="bela-img" />
      </div>
    </ImageContainerStyle>

  );
}
